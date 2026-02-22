import imgImage2 from "figma:asset/afeda9ec95250b88d880fb8e55bbee8b768f471b.png";

function ButtonBase() {
  return (
    <div className="bg-[#f72585] content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[32px] shrink-0" data-name="_Button Base">
      <p className="font-poppins font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Comprar</p>
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
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-end justify-center right-[20px] top-[calc(50%+7px)] w-[172px]">
      <p className="font-poppins font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right w-full whitespace-pre-wrap">
        Por compras superiores <span className="font-semibold">a $200.000</span>
      </p>
      <Button />
      <p className="font-poppins font-normal leading-[18px] not-italic relative shrink-0 text-[10px] text-black text-right w-full whitespace-pre-wrap">Aplican TyC.</p>
    </div>
  );
}

function BadgeBase() {
  return (
    <div className="bg-[#cee90d] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-poppins font-medium leading-[18px] not-italic relative shrink-0 text-[#5f6b05] text-[12px] text-center">Envío Gratis</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute content-stretch flex items-start left-[16.5px] top-[16.43px]" data-name="Badge">
      <BadgeBase />
    </div>
  );
}

export function FreeShippingBanner() {
  return (
    <div className="bg-[#c4c4ff] overflow-clip relative rounded-[12px] w-full h-[180px]" data-name="Banner">
      <div className="absolute left-[-9px] size-[222px] top-[5px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Frame />
      <Badge />
    </div>
  );
}
