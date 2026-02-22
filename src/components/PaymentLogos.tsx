import svgPaths from "../imports/svg-y12z9rtgar";

export default function PaymentLogos() {
  return (
    <div className="flex items-center gap-2">
      {/* Mastercard */}
      <div className="relative w-[18px] h-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 18">
          <circle cx="11" cy="9" r="7" fill="#EB001B" />
          <circle cx="19" cy="9" r="7" fill="#F79E1B" />
          <path d="M15 4.5C16.5 5.8 17.5 7.8 17.5 9C17.5 10.2 16.5 12.2 15 13.5C13.5 12.2 12.5 10.2 12.5 9C12.5 7.8 13.5 5.8 15 4.5Z" fill="#FF5F00" />
        </svg>
      </div>
      
      {/* Visa */}
      <div className="bg-[#1434CB] rounded-sm px-1.5 py-0.5">
        <span className="font-bold text-white text-[9px]">VISA</span>
      </div>
      
      {/* Amex */}
      <div className="bg-[#016FD0] rounded-sm px-1.5 py-0.5">
        <span className="font-bold text-white text-[8px]">AMEX</span>
      </div>
      
      {/* Diners */}
      <div className="bg-[#0079BE] rounded-sm px-1.5 py-0.5 flex items-center gap-0.5">
        <div className="w-[6px] h-[6px] rounded-full bg-white" />
        <div className="w-[6px] h-[6px] rounded-full bg-white" />
      </div>
      
      {/* Nequi */}
      <div className="bg-[#DA0081] rounded-sm px-1.5 py-0.5">
        <span className="font-bold text-white text-[7px]">nequi</span>
      </div>
    </div>
  );
}
