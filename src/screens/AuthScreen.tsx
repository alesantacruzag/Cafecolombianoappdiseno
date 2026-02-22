import { useState } from 'react';
import { useApp } from '../context/AppContext';
import svgPaths from "../imports/svg-xo3j3lr872";

interface AuthScreenProps {
  onAuthSuccess: (role: 'buyer' | 'admin') => void;
}

export default function AuthScreen({ onAuthSuccess }: AuthScreenProps) {
  const [role, setRole] = useState<'buyer' | 'admin'>('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { signIn } = useApp();

  const handleAuth = async () => {
    if (!email || !password) {
      setErrorMsg('Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    console.log('Iniciando handleAuth...', { email, role });

    try {
      console.log('Llamando a signIn...');
      await signIn(email, password);
      console.log('signIn completado con éxito. Llamando a onAuthSuccess con rol:', role);
      // El rol seleccionado en la UI determina el flujo de navegación
      onAuthSuccess(role);
      console.log('onAuthSuccess llamado.');
    } catch (err: any) {
      console.error('Error en handleAuth:', err);
      setErrorMsg(err.message || 'Error en la autenticación');
    } finally {
      console.log('Finalizando handleAuth (setLoading(false))');
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col items-center justify-center font-['Inter',-apple-system,sans-serif] overflow-hidden">
      {/* Contenedor estrecho (clase w-[320px]) para fidelidad absoluta al diseño móvil */}
      <div className="w-[320px] flex flex-col items-center -mt-8">

        {/* Logo - Centrado con margen exacto */}
        <div className="mb-14">
          <svg width="128" height="36" viewBox="0 0 101.657 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d={svgPaths.p2fc3ad00} fill="#181D27" />
              <path d={svgPaths.p77c37f0} fill="#181D27" />
              <path d={svgPaths.pdaaa4c0} fill="#181D27" />
              <path d={svgPaths.p33e2780} fill="#181D27" />
              <path d={svgPaths.pd33dc80} fill="#181D27" />
              <path d={svgPaths.p699bd00} fill="#181D27" />
              <path d={svgPaths.p9072200} fill="#181D27" />
              <path d={svgPaths.p9fb85d6} fill="#181D27" />
            </g>
          </svg>
        </div>

        {/* Role Toggle - Estilo pill */}
        <div className="bg-[#f2f4f7] p-1.5 rounded-full flex w-full max-w-[280px] mb-12 border border-[#eaecf0]">
          <button
            onClick={() => setRole('buyer')}
            className={`flex-1 h-10 flex items-center justify-center rounded-full text-[14px] font-semibold transition-all duration-200 ${role === 'buyer'
              ? 'bg-white text-[#344054] shadow-sm ring-1 ring-black/[0.03]'
              : 'text-[#667085]'
              }`}
          >
            Visitante
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`flex-1 h-10 flex items-center justify-center rounded-full text-[14px] font-semibold transition-all duration-200 ${role === 'admin'
              ? 'bg-white text-[#344054] shadow-sm ring-1 ring-black/[0.03]'
              : 'text-[#667085]'
              }`}
          >
            Caficultor
          </button>
        </div>

        {/* Formulario */}
        <div className="w-full space-y-5">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-[14px] font-medium text-[#344054] leading-5 ml-1">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 border border-[#D0D5DD] rounded-xl text-[16px] outline-none placeholder:text-[#98A2B3] focus:border-[#f72585] transition-all bg-white shadow-sm"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-[14px] font-medium text-[#344054] leading-5 ml-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 border border-[#D0D5DD] rounded-xl text-[16px] outline-none placeholder:text-[#98A2B3] focus:border-[#f72585] transition-all bg-white shadow-sm"
            />
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="text-red-500 text-[13px] text-center pt-1 italic">
              {errorMsg}
            </div>
          )}

          {/* Botón */}
          <div className="pt-4">
            <button
              onClick={handleAuth}
              disabled={loading}
              className="w-full h-12 bg-[#f72585] text-white rounded-full font-semibold text-[16px] transition-all active:scale-[0.98] disabled:opacity-50 shadow-md flex items-center justify-center"
            >
              {loading ? 'Cargando...' : 'Iniciar sesión'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
