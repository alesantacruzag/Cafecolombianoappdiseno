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
  const { setUser } = useApp();

  const handleLogin = () => {
    // Mock login
    setUser({
      id: '1',
      name: role === 'buyer' ? 'María García' : 'Juan Pérez',
      email: email || 'usuario@origen.co',
      role
    });
    onAuthSuccess(role);
  };

  const handleGoogleLogin = () => {
    // Mock Google login
    setUser({
      id: '1',
      name: role === 'buyer' ? 'María García' : 'Juan Pérez',
      email: 'usuario@gmail.com',
      role
    });
    onAuthSuccess(role);
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 overflow-y-auto">
        {/* Logo */}
        <div className="h-[28px] w-[101.657px] mb-10">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.657 28">
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

        {/* Role Selector */}
        <div className="bg-[#f2f4f7] flex gap-2 items-center justify-center p-1 rounded-[40px] mb-8 w-full max-w-sm">
          <div className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[40px]" />
          <button
            onClick={() => setRole('buyer')}
            className={`flex-1 px-3 py-2 rounded-[32px] font-['Poppins:SemiBold',sans-serif] text-[14px] leading-[20px] transition-all ${
              role === 'buyer' 
                ? 'bg-white text-[#344054] shadow-sm' 
                : 'text-[#475467]'
            }`}
          >
            Visitante
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`flex-1 px-3 py-2 rounded-[32px] font-['Poppins:SemiBold',sans-serif] text-[14px] leading-[20px] transition-all ${
              role === 'admin' 
                ? 'bg-white text-[#344054] shadow-sm' 
                : 'text-[#475467]'
            }`}
          >
            Caficultor
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5 w-full max-w-sm mb-6">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="font-['Poppins:Medium',sans-serif] text-[14px] leading-[20px] text-[#414651]">
              Correo electrónico
            </label>
            <div className="bg-white relative rounded-lg border border-[#d5d7da] shadow-sm">
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 font-['Poppins:Regular',sans-serif] text-[16px] leading-[24px] text-black placeholder:text-[#717680] outline-none rounded-lg"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="font-['Poppins:Medium',sans-serif] text-[14px] leading-[20px] text-[#414651]">
              Contraseña
            </label>
            <div className="bg-white relative rounded-lg border border-[#d5d7da] shadow-sm">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-black placeholder:text-[#717680] outline-none rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="bg-[#f72585] border border-[#f72585] rounded-[32px] px-5 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] leading-[24px] text-white hover:bg-[#e01575] transition-colors"
          >
            Iniciar sesión
          </button>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="bg-white border border-[#d5d7da] rounded-[40px] px-4 py-2.5 flex items-center justify-center gap-3 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <g clipPath="url(#clip0)">
                <path d={svgPaths.p7776880} fill="#4285F4" />
                <path d={svgPaths.p2d84f580} fill="#34A853" />
                <path d={svgPaths.p380d1d80} fill="#FBBC04" />
                <path d={svgPaths.p1ebd4080} fill="#EA4335" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect fill="white" height="24" width="24" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[16px] leading-[24px] text-[#414651]">
              Iniciar con Google
            </span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] leading-[20px] text-[#717680]">
            ¿No tienes cuenta?{' '}
            <button className="font-['Poppins:SemiBold',sans-serif] text-[#f72585]">
              Regístrate
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}