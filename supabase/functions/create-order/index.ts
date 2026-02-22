import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    const { items, total } = await req.json()
    const { data: { user } } = await supabaseClient.auth.getUser()

    if (!user) throw new Error('No autorizado')

    // 1. Validar Stock/Cupos antes de empezar
    for (const item of items) {
      if (item.tipo === 'cafe') {
        const { data: cafe } = await supabaseClient
          .from('cafes')
          .select('stock, nombre')
          .eq('id', item.item_id)
          .single()
        
        if (!cafe || cafe.stock < item.cantidad) {
          throw new Error(`Stock insuficiente para: ${cafe?.nombre || 'Producto'}`)
        }
      } else {
        const { data: exp } = await supabaseClient
          .from('experiencias')
          .select('cupos, titulo')
          .eq('id', item.item_id)
          .single()

        if (!exp || exp.cupos < item.cantidad) {
          throw new Error(`Cupos insuficientes para: ${exp?.titulo || 'Experiencia'}`)
        }
      }
    }

    // 2. Crear Pedido (Transaccional mediante RPC si es complejo, aquí lo hacemos secuencial por simplicidad)
    const { data: pedido, error: errorPedido } = await supabaseClient
      .from('pedidos')
      .insert({
        user_id: user.id,
        total,
        status: 'pendiente'
      })
      .select()
      .single()

    if (errorPedido) throw errorPedido

    // 3. Insertar Items y Actualizar Stock
    for (const item of items) {
      // Registrar item
      await supabaseClient
        .from('items_pedido')
        .insert({
          pedido_id: pedido.id,
          tipo: item.tipo,
          item_id: item.item_id,
          cantidad: item.cantidad
        })

      // Actualizar inventario
      if (item.tipo === 'cafe') {
        await supabaseClient.rpc('decrement_cafe_stock', { row_id: item.item_id, amount: item.cantidad })
      } else {
        await supabaseClient.rpc('decrement_experience_cupos', { row_id: item.item_id, amount: item.cantidad })
      }
    }

    return new Response(JSON.stringify({ success: true, pedidoId: pedido.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
