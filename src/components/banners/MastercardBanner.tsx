import svgPaths from "../../imports/svg-gdizikdh5d";
import imgRectangle6 from "figma:asset/c1c92d626b1a30a85e24c7653894a4c01041286b.png";

function ButtonBase() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[32px] shrink-0" data-name="_Button Base">
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
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-end justify-center right-[20px] top-[calc(50%+5px)] w-[140px]">
      <p className="font-poppins font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-right text-white w-full whitespace-pre-wrap">{` Hasta 10% dcto. pagando con tu Mastercard`}</p>
      <Button />
      <p className="font-poppins font-normal leading-[18px] min-w-full not-italic relative shrink-0 text-[10px] text-right text-white w-[min-content] whitespace-pre-wrap">Aplican TyC.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[11.208px] relative shrink-0 w-[38.934px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.9337 11.2079">
        <g id="Group 1">
          <path d={svgPaths.p28d78400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2102f800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2a4e91f0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p16d44100} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p7e3de00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1cfc2400} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p12e2e580} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3bf663c0} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[-0.01%_0_-0.03%_-0.01%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0015 13.006">
        <g id="Group">
          <path d={svgPaths.p3cac6e80} fill="var(--fill-0, #FF5F00)" id="Vector" />
          <path d={svgPaths.p5d0b00} fill="var(--fill-0, #EB001B)" id="Vector_2" />
          <path d={svgPaths.p3bb95300} fill="var(--fill-0, #F79E1B)" id="Vector_3" />
          <path d={svgPaths.pb9c4000} fill="var(--fill-0, #F79E1B)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[-0.01%_0_-0.03%_-0.01%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function SymbolSvg() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-[21px]" data-name="Symbol.svg">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-[15px] top-[16px]">
      <Group1 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]">
            <div className="absolute inset-[-0.7px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 0.7">
                <line id="Line 25" stroke="white" strokeWidth="0.7" x2="13" y1="0.35" y2="0.35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <SymbolSvg />
    </div>
  );
}

export function MastercardBanner() {
  return (
    <div className="bg-[#f72585] overflow-clip relative rounded-[12px] shadow-[0px_-1px_15.7px_0px_rgba(0,0,0,0.13)] w-full h-[180px]" data-name="Banner">
      <div className="absolute h-[291px] left-[-15px] top-[-16px] w-[175px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[74.13%] left-[-42.3%] max-w-none top-0 w-[184.59%]" src={imgRectangle6} />
        </div>
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
}
