-- ORIGEN: MIGRACIÓN INICIAL (SUPABASE)

-- 1. EXTENSIONES Y ENUMS
create extension if not exists "uuid-ossp";

do $$ 
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type public.user_role as enum ('admin', 'cliente');
  end if;
  if not exists (select 1 from pg_type where typname = 'order_status') then
    create type public.order_status as enum ('pendiente', 'confirmado', 'completado');
  end if;
  if not exists (select 1 from pg_type where typname = 'item_type') then
    create type public.item_type as enum ('cafe', 'experiencia');
  end if;
end $$;

-- 2. TABLAS

-- Profiles
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  role public.user_role default 'cliente'::public.user_role,
  updated_at timestamp with time zone default now()
);

-- Cafés
create table if not exists public.cafes (
  id uuid default uuid_generate_v4() primary key,
  nombre text not null,
  origen text,
  precio numeric not null check (precio >= 0),
  stock int default 0 check (stock >= 0),
  is_active boolean default true,
  image_url text,
  created_at timestamp with time zone default now()
);

-- Experiencias
create table if not exists public.experiencias (
  id uuid default uuid_generate_v4() primary key,
  titulo text not null,
  ubicacion text,
  precio numeric not null check (precio >= 0),
  cupos int default 0 check (cupos >= 0),
  is_active boolean default true,
  image_url text,
  created_at timestamp with time zone default now()
);

-- Pedidos
create table if not exists public.pedidos (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  total numeric not null check (total >= 0),
  status public.order_status default 'pendiente'::public.order_status,
  created_at timestamp with time zone default now()
);

-- Detalle de Pedidos (Items)
create table if not exists public.items_pedido (
  id uuid default uuid_generate_v4() primary key,
  pedido_id uuid references public.pedidos(id) on delete cascade not null,
  tipo public.item_type not null,
  item_id uuid not null,
  cantidad int not null check (cantidad > 0)
);

-- 3. SEGURIDAD (RLS)

alter table public.profiles enable row level security;
alter table public.cafes enable row level security;
alter table public.experiencias enable row level security;
alter table public.pedidos enable row level security;
alter table public.items_pedido enable row level security;

-- Políticas para Profiles
create policy "Usuarios pueden ver su propio perfil" on public.profiles
  for select using (auth.uid() = id);

create policy "Admins pueden ver todos los perfiles" on public.profiles
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Políticas para Cafés / Experiencias
create policy "Cualquiera puede ver items activos" on public.cafes
  for select using (is_active = true);

create policy "Admins pueden gestionar cafés" on public.cafes
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "Cualquiera puede ver experiencias activas" on public.experiencias
  for select using (is_active = true);

create policy "Admins pueden gestionar experiencias" on public.experiencias
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Políticas para Pedidos
create policy "Clientes pueden ver sus propios pedidos" on public.pedidos
  for select using (auth.uid() = user_id);

create policy "Clientes pueden crear pedidos" on public.pedidos
  for insert with check (auth.uid() = user_id);

create policy "Admins pueden gestionar todos los pedidos" on public.pedidos
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- 4. AUTOMATIZACIÓN (TRIGGERS)

-- Función para manejar nuevo usuario
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, new.raw_user_meta_data->>'full_name', 'cliente');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger al registrarse en auth.users
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 6. FUNCIONES RPC
create or replace function public.decrement_cafe_stock(row_id uuid, amount int)
returns void as $$
begin
  update public.cafes
  set stock = stock - amount
  where id = row_id;
end;
$$ language plpgsql security definer;

create or replace function public.decrement_experience_cupos(row_id uuid, amount int)
returns void as $$
begin
  update public.experiencias
  set cupos = cupos - amount
  where id = row_id;
end;
$$ language plpgsql security definer;
