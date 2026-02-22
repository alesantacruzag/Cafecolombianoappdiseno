import svgPaths from "./svg-c934h7mawo";
import imgRectangle6 from "figma:asset/1547676c9884a3b2cf23133018fb7a660aa316b0.png";
import imgRectangle7 from "figma:asset/c1c92d626b1a30a85e24c7653894a4c01041286b.png";
import imgImage2 from "figma:asset/afeda9ec95250b88d880fb8e55bbee8b768f471b.png";
import imgFrame4472999 from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";
import imgFrame4473000 from "figma:asset/0479a0625ae1cac4470061a496b52f3f343a0414.png";
import imgWallpaperDelete from "figma:asset/7c970efcdc042dacebf7f9e00ff20d6cd5ee56cf.png";

function Time() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[40px] pr-[6px] relative w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center">9:41</p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-end px-[40px] relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[50px] items-start pt-[16px] relative shrink-0 w-full" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[101.657px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.657 28">
        <g id="Group 1">
          <path d={svgPaths.p11d2b800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2767e400} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pfde15c0} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p110d2000} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p20ede200} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p36d26b00} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.pff56ab0} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p3a1dd300} fill="var(--fill-0, black)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function SearchSm() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search-sm">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search-sm">
          <path d={svgPaths.p34a2d300} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function Bell1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bell-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bell-02">
          <path d={svgPaths.p25f07b00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f72585] content-stretch flex flex-col items-center justify-center left-[17px] p-[4px] rounded-[40px] top-[-5.5px] w-[15px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[10px] text-center text-white">2</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[4px] relative shrink-0">
      <Bell1 />
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-h-px min-w-px relative">
      <SearchSm />
      <Frame17 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] relative w-full">
          <Group1 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col h-[66px] items-center justify-center left-[0.5px] right-[-0.5px] top-0" data-name="Header">
      <Container />
    </div>
  );
}

function DropdownHeaderNavigation() {
  return (
    <div className="bg-white h-[66px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <Header />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bell-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bell-02">
          <path d={svgPaths.p3fa47080} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Poppins:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[14px] text-white w-full whitespace-pre-wrap">
        <span className="font-['Poppins:SemiBold',sans-serif] leading-[20px]">Hasta 20% dcto.</span>
        <span className="leading-[20px]">{` en todos los accesorios`}</span>
      </p>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="x">
          <path d={svgPaths.p1a842000} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-black relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative w-full">
          <Bell />
          <Frame4 />
          <X />
        </div>
      </div>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[32px] shrink-0" data-name="_Button Base">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Comprar</p>
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

function Frame5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-end justify-center left-[172px] top-[calc(50%+5px)]">
      <p className="font-['Poppins:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[16px] text-right text-white w-[140px] whitespace-pre-wrap">
        <span className="leading-[24px]">{`Ahora puedes pagar con tu tarjeta `}</span>
        <span className="font-['Poppins:SemiBold',sans-serif] leading-[24px]">Nequi</span>
      </p>
      <Button />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[10px] text-right text-white w-[min-content] whitespace-pre-wrap">Aplican TyC.</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[81.18%_75.79%_8.81%_5.06%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.7177 18.6168">
        <g id="Group 1">
          <path d={svgPaths.pe06ce00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3fd72100} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2c6a0b00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2192e100} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2d5980f2} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3ea3cb80} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p8684d00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p180cd800} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[#8d7eff] h-[186px] overflow-clip relative rounded-[12px] shadow-[0px_-1px_15.7px_0px_rgba(0,0,0,0.13)] shrink-0 w-[338px]" data-name="Banner">
      <div className="absolute h-[291px] left-[-1px] top-[-16px] w-[175px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[67.01%] left-[-1.14%] max-w-none top-[5.15%] w-[111.43%]" src={imgRectangle6} />
          </div>
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(190.637deg, rgba(0, 0, 0, 0) 37.361%, rgba(0, 0, 0, 0.43) 68.847%)" }} />
        </div>
      </div>
      <Frame5 />
      <Group2 />
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[32px] shrink-0" data-name="_Button Base">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Comprar</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Button">
      <ButtonBase1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-end justify-center left-[183px] top-[calc(50%+5px)] w-[129px]">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-right text-white w-[140px] whitespace-pre-wrap">{` Hasta 10% dcto. pagando con tu Mastercard`}</p>
      <Button1 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[10px] text-right text-white w-[min-content] whitespace-pre-wrap">Aplican TyC.</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[11.208px] relative shrink-0 w-[38.934px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.9337 11.2079">
        <g id="Group 1">
          <path d={svgPaths.p21f57580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p353a9c00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p98d5880} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p340b080} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3389f800} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1b623100} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3004180} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.pd626100} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
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
      <Group4 />
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

function Frame18() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-[15px] top-[16px]">
      <Group3 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]">
            <div className="absolute inset-[-0.7px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 0.7">
                <line id="Line 25" stroke="var(--stroke-0, white)" strokeWidth="0.7" x2="13" y1="0.35" y2="0.35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <SymbolSvg />
    </div>
  );
}

function Banner1() {
  return (
    <div className="bg-[#f72585] h-[186px] overflow-clip relative rounded-[12px] shadow-[0px_-1px_15.7px_0px_rgba(0,0,0,0.13)] shrink-0 w-[338px]" data-name="Banner">
      <div className="absolute h-[291px] left-[-15px] top-[-16px] w-[175px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[74.13%] left-[-42.3%] max-w-none top-0 w-[184.59%]" src={imgRectangle7} />
        </div>
      </div>
      <Frame6 />
      <Frame18 />
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="bg-[#f72585] content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[32px] shrink-0" data-name="_Button Base">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Comprar</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Button">
      <ButtonBase2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-end justify-center left-[142px] top-[calc(50%+7px)] w-[172px]">
      <p className="font-['Poppins:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[16px] text-black text-right w-full whitespace-pre-wrap">
        <span className="leading-[24px]">{`Por compras superiores `}</span>
        <span className="font-['Poppins:SemiBold',sans-serif] leading-[24px]">a $200.000</span>
      </p>
      <Button2 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[10px] text-black text-right w-full whitespace-pre-wrap">Aplican TyC.</p>
    </div>
  );
}

function BadgeBase() {
  return (
    <div className="bg-[#cee90d] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5f6b05] text-[12px] text-center">Envío Gratis</p>
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

function Banner2() {
  return (
    <div className="bg-[#c4c4ff] h-[186px] overflow-clip relative rounded-[12px] shrink-0 w-[338px]" data-name="Banner">
      <div className="absolute left-[-9px] size-[222px] top-[5px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Frame7 />
      <Badge />
      <div className="absolute left-[965px] size-[224px] top-[186px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Carrousel() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Carrousel">
      <Banner />
      <Banner1 />
      <Banner2 />
    </div>
  );
}

function PaginationDotIndicator() {
  return <div className="bg-[#717680] mix-blend-multiply rounded-[4px] shrink-0 size-[8px]" data-name="_Pagination dot indicator" />;
}

function PaginationDotIndicator1() {
  return <div className="bg-[#e9eaeb] mix-blend-multiply rounded-[4px] shrink-0 size-[8px]" data-name="_Pagination dot indicator" />;
}

function PaginationDotIndicator2() {
  return <div className="bg-[#e9eaeb] mix-blend-multiply rounded-[4px] shrink-0 size-[8px]" data-name="_Pagination dot indicator" />;
}

function PaginationDotGroup() {
  return (
    <div className="backdrop-blur-[4px] bg-[#f5f5f5] content-stretch flex gap-[12px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-name="Pagination dot group">
      <PaginationDotIndicator />
      <PaginationDotIndicator1 />
      <PaginationDotIndicator2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8px] px-[4px] relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">Oferta</p>
    </div>
  );
}

function TabButtonBase() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="_Tab button base">
      <Content />
      <div className="bg-[#f72585] h-[3px] shrink-0 w-full" data-name="Bottom border" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8px] px-[4px] relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px]">Frutales</p>
    </div>
  );
}

function TabButtonBase1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="_Tab button base">
      <Content1 />
      <div className="h-[2px] shrink-0 w-full" data-name="Bottom border" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8px] px-[4px] relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px]">Dulces</p>
    </div>
  );
}

function TabButtonBase2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="_Tab button base">
      <Content2 />
      <div className="h-[2px] shrink-0 w-full" data-name="Bottom border" />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8px] px-[4px] relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px]">Cítricos</p>
    </div>
  );
}

function TabButtonBase3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="_Tab button base">
      <Content3 />
      <div className="h-[2px] shrink-0 w-full" data-name="Bottom border" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[-0.5px] top-0 w-[354px]" data-name="Tabs">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <TabButtonBase />
      <TabButtonBase1 />
      <TabButtonBase2 />
      <TabButtonBase3 />
    </div>
  );
}

function HorizontalTabs() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Horizontal tabs">
      <Tabs />
    </div>
  );
}

function BadgeBase1() {
  return (
    <div className="bg-[#c4c4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e2fd3] text-[12px] text-center">Nuevo</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute content-stretch flex items-start left-[16px] top-[16px]" data-name="Badge">
      <BadgeBase1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame4472999} />
      <Badge1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start leading-[0] not-italic px-[16px] py-[12px] relative text-[14px] text-black w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Café Quindio</p>
        </div>
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 w-full">
          <p className="leading-[20px] whitespace-pre-wrap">$26.000</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame8 />
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BadgeBase2() {
  return (
    <div className="bg-[#cee90d] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5f6b05] text-[12px] text-center">15% dcto</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute content-stretch flex items-start left-[16.5px] top-[15.68px]" data-name="Badge">
      <BadgeBase2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame4473000} />
      <Badge2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['Poppins:Regular',sans-serif] gap-[8px] items-start relative shrink-0 w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black">
        <p className="leading-[20px]">$40.800</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#a4a7ae] text-[0px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through text-[14px]">$48.000</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start leading-[0] not-italic px-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[14px] text-black w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Buenavista</p>
        </div>
        <Frame15 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame13 />
        <Frame14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function SignUp() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Sign up">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[38px] pt-[24px] px-[16px] relative size-full">
          <Carrousel />
          <PaginationDotGroup />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content] whitespace-pre-wrap">Explora nuestras categorías</p>
          <HorizontalTabs />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function HomeSmile() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home-smile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home-smile">
          <path d={svgPaths.p2f5e2f0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px pb-[4px] pt-[8px] relative" data-name="Tab - Bar - Item">
      <div aria-hidden="true" className="absolute border-[#f72585] border-solid border-t-3 inset-0 pointer-events-none" />
      <HomeSmile />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-center whitespace-nowrap">
        <p className="leading-[14px]">Inicio</p>
      </div>
    </div>
  );
}

function ShoppingBag() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shopping-bag-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-bag-01">
          <path d={svgPaths.p1b170034} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px pb-[4px] pt-[8px] relative" data-name="Tab - Bar - Item">
      <ShoppingBag />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#717680] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Tienda</p>
      </div>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shopping-cart-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-cart-01">
          <path d={svgPaths.p10cfbcf0} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[8px] items-center justify-center relative rounded-[40px] shrink-0 size-[48px]" data-name="Tab - Bar - Item">
      <ShoppingCart />
    </div>
  );
}

function TabBarItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px pb-[4px] pt-[8px] relative" data-name="Tab - Bar - Item">
      <TabBarItem3 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#717680] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Carrito</p>
      </div>
    </div>
  );
}

function Route() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="route">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="route">
          <path d={svgPaths.p33eb1c00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px pb-[4px] pt-[8px] relative" data-name="Tab - Bar - Item">
      <Route />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#717680] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Planes</p>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="user-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user-02">
          <g id="Icon">
            <path d={svgPaths.p3b374700} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2a935fd0} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TabBarItem5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px pb-[4px] pt-[8px] relative" data-name="Tab - Bar - Item">
      <User />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#717680] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Mi cuenta</p>
      </div>
    </div>
  );
}

function TabBar() {
  return (
    <div className="bg-white h-[57px] relative shrink-0 w-full" data-name="Tab - Bar">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[16px] items-end px-[16px] relative size-full">
          <TabBarItem />
          <TabBarItem1 />
          <TabBarItem2 />
          <TabBarItem4 />
          <TabBarItem5 />
        </div>
      </div>
    </div>
  );
}

function Bar1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-end overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Bar">
      <div className="backdrop-blur-[40px] bg-black h-[5px] rounded-[100px] shrink-0 w-[154px]" data-name="Home Bar - Change Opacity" />
    </div>
  );
}

function Bar() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0 w-[385px]" data-name="Bar">
      <Bar1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TabBar />
      <Bar />
    </div>
  );
}

function Mobile() {
  return (
    <div className="absolute bg-[#5e2fd3] content-stretch flex flex-col h-[819px] items-center justify-center left-0 overflow-clip top-0 w-[385px]" data-name="Mobile">
      <StatusBarIPhone />
      <DropdownHeaderNavigation />
      <Frame3 />
      <SignUp />
      <Frame16 />
    </div>
  );
}

export default function ScreenHere() {
  return (
    <div className="overflow-clip relative rounded-[8px] size-full" data-name="screen-here">
      <div className="absolute bg-[#dae2d3] h-[805px] left-0 rounded-[50px] top-0 w-[370px]" data-name="screen" />
      <div className="absolute h-[819px] left-0 top-0 w-[385px]" data-name="Wallpaper (DELETE)">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWallpaperDelete} />
      </div>
      <Mobile />
    </div>
  );
}