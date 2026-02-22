import imgEllipse29 from "figma:asset/2ff990835b46e6c743c74ebbcbe4a9bc7287f839.png";
import imgRectangle7 from "figma:asset/8ac8d82d1ec71aa2293e45c861a6ac05cb6442e9.png";

function ButtonBase() {
  return (
    <div className="bg-[#f72585] content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[32px] shrink-0" data-name="_Button Base">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Conocer más</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Button">
      <ButtonBase />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-end justify-center left-[142px] top-[calc(50%+3.5px)] w-[172px]">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right w-full whitespace-pre-wrap">
        {`Visita la finca `}
        <br aria-hidden="true" />
        de Don Carlos y conoce su historia
      </p>
      <Button />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[10px] text-black text-right w-full whitespace-pre-wrap">Aplican TyC.</p>
    </div>
  );
}

export default function Banner() {
  return (
    <div className="backdrop-blur-[20.95px] bg-[#f5f5f5] overflow-clip relative rounded-[12px] size-full" data-name="Banner">
      <div className="absolute left-[-36px] size-[197px] top-[33.14px]">
        <img alt="" className="block max-w-none size-full" height="197" src={imgEllipse29} width="197" />
      </div>
      <div className="absolute h-[185px] left-[18px] top-[0.14px] w-[138px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.19%] left-[-72.46%] max-w-none top-[-4.59%] w-[219.57%]" src={imgRectangle7} />
        </div>
      </div>
      <Frame />
    </div>
  );
}