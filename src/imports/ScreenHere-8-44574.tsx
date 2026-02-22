import svgPaths from "./svg-4x0x7af3uv";
import imgRectangle6 from "figma:asset/c1c92d626b1a30a85e24c7653894a4c01041286b.png";
import imgFrame4472999 from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";
import imgFrame4473000 from "figma:asset/0479a0625ae1cac4470061a496b52f3f343a0414.png";
import imgFrame4473001 from "figma:asset/245315345536c43caaa155f247b37d6cee9f161a.png";
import imgFrame4473002 from "figma:asset/e0fcb7655ec92cdc5a6473a3802042003dc5bc2e.png";
import imgFrame2871 from "figma:asset/4849884d7a1d305584a1bc53d73e0e9f702dad30.png";
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

function Frame25() {
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
      <Frame25 />
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
    <div className="bg-[#cee90d] relative rounded-[32px] shrink-0" data-name="_Button Base">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Participar</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cee90d] border-solid inset-0 pointer-events-none rounded-[32px]" />
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
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-[155px] top-[calc(50%+8px)] w-[172px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-right w-full whitespace-pre-wrap">
        {`Gana un `}
        <br aria-hidden="true" />
        tour cafetero
      </p>
      <Button />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[10px] text-black text-right w-full whitespace-pre-wrap">Aplican TyC.</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[80.11%_74.9%_9.88%_5.95%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.5898 18.6167">
        <g id="Group 1">
          <path d={svgPaths.p2fb8e700} fill="var(--fill-0, #441869)" id="Vector" />
          <path d={svgPaths.p240d8d80} fill="var(--fill-0, #441869)" id="Vector_2" />
          <path d={svgPaths.p2c546700} fill="var(--fill-0, #441869)" id="Vector_3" />
          <path d={svgPaths.p1b4c500} fill="var(--fill-0, #441869)" id="Vector_4" />
          <path d={svgPaths.p198f6670} fill="var(--fill-0, #441869)" id="Vector_5" />
          <path d={svgPaths.p1e2ace00} fill="var(--fill-0, #441869)" id="Vector_6" />
          <path d={svgPaths.p1e55ffd0} fill="var(--fill-0, #441869)" id="Vector_7" />
          <path d={svgPaths.p117ec340} fill="var(--fill-0, #441869)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[#c4c4ff] h-[186px] overflow-clip relative rounded-[12px] shrink-0 w-[353px]" data-name="Banner">
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

function Frame28() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-[15px] top-[16px]">
      <Group3 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
          <img alt="" className="absolute h-[74.13%] left-[-42.3%] max-w-none top-0 w-[184.59%]" src={imgRectangle6} />
        </div>
      </div>
      <Frame6 />
      <Frame28 />
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="bg-[#cee90d] relative rounded-[32px] shrink-0" data-name="_Button Base">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Participar</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cee90d] border-solid inset-0 pointer-events-none rounded-[32px]" />
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
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-[155px] top-[calc(50%+8px)] w-[172px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-right w-full whitespace-pre-wrap">
        {`Gana un `}
        <br aria-hidden="true" />
        tour cafetero
      </p>
      <Button2 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[10px] text-black text-right w-full whitespace-pre-wrap">Aplican TyC.</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[80.11%_74.9%_9.88%_5.95%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.5898 18.6166">
        <g id="Group 1">
          <path d={svgPaths.p2fb8e700} fill="var(--fill-0, #441869)" id="Vector" />
          <path d={svgPaths.p240d8d80} fill="var(--fill-0, #441869)" id="Vector_2" />
          <path d={svgPaths.p2c546700} fill="var(--fill-0, #441869)" id="Vector_3" />
          <path d={svgPaths.p1b4c500} fill="var(--fill-0, #441869)" id="Vector_4" />
          <path d={svgPaths.p198f6670} fill="var(--fill-0, #441869)" id="Vector_5" />
          <path d={svgPaths.p1e2ace00} fill="var(--fill-0, #441869)" id="Vector_6" />
          <path d={svgPaths.p1e55ffd0} fill="var(--fill-0, #441869)" id="Vector_7" />
          <path d={svgPaths.p117ec340} fill="var(--fill-0, #441869)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Banner2() {
  return (
    <div className="bg-[#ededff] h-[186px] overflow-clip relative rounded-[12px] shrink-0 w-[353px]" data-name="Banner">
      <Frame7 />
      <Group5 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
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

function BadgeBase() {
  return (
    <div className="bg-[#c4c4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e2fd3] text-[12px] text-center">Nuevo</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute content-stretch flex items-start left-[16px] top-[16px]" data-name="Badge">
      <BadgeBase />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame4472999} />
      <Badge />
    </div>
  );
}

function Frame10() {
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

function Frame11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame9 />
        <Frame10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BadgeBase1() {
  return (
    <div className="bg-[#cee90d] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5f6b05] text-[12px] text-center">15% dcto</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute content-stretch flex items-start left-[16.5px] top-[15.68px]" data-name="Badge">
      <BadgeBase1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame4473000} />
      <Badge1 />
    </div>
  );
}

function Frame16() {
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

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start leading-[0] not-italic px-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[14px] text-black w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Buenavista</p>
        </div>
        <Frame16 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame14 />
        <Frame15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function BadgeBase2() {
  return (
    <div className="bg-[#f97066] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white">Quedan 2</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute content-stretch flex items-start left-[16.5px] top-[16px]" data-name="Badge">
      <BadgeBase2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[108.03%] left-[6.08%] max-w-none top-[-2.19%] w-[87.83%]" src={imgFrame4473001} />
      </div>
      <Badge2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start leading-[0] not-italic px-[16px] py-[12px] relative text-[14px] text-black w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Delirante</p>
        </div>
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 w-full">
          <p className="leading-[20px] whitespace-pre-wrap">$26.000</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame19 />
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[137px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame4473002} />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">$31.000</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Guanes</p>
        </div>
        <Frame26 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame23 />
        <Frame24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame18 />
      <Frame22 />
    </div>
  );
}

function ButtonBase3() {
  return (
    <div className="bg-[#f72585] content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[32px] shrink-0" data-name="_Button Base">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Reservar</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Button">
      <ButtonBase3 />
    </div>
  );
}

function BadgeBase3() {
  return (
    <div className="absolute bg-[#c4c4ff] content-stretch flex items-center justify-center left-[16px] px-[8px] py-[2px] rounded-[16px] top-[20px]" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e2fd3] text-[12px] text-center">Tour destacado</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[182px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[152.56%] left-[-1.13%] max-w-none top-[-9.96%] w-[117.99%]" src={imgFrame2871} />
        </div>
        <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(195.517deg, rgba(0, 0, 0, 0) 52.082%, rgba(0, 0, 0, 0.91) 74.026%)" }} />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-end px-[16px] py-[24px] relative size-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content] whitespace-pre-wrap">Del grano a la taza</p>
          <Button3 />
          <BadgeBase3 />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[25.91px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9099 16">
        <g id="Group">
          <path d={svgPaths.p24979a00} fill="var(--fill-0, #FF5F00)" id="Vector" />
          <path d={svgPaths.p1b6be380} fill="var(--fill-0, #EB001B)" id="Vector_2" />
          <path d={svgPaths.p9166740} fill="var(--fill-0, #F79E1B)" id="Vector_3" />
          <path d={svgPaths.p345cdf00} fill="var(--fill-0, #F79E1B)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[44.199px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.1994 16">
        <g id="Group 49228">
          <path d={svgPaths.p2ebc9680} fill="var(--fill-0, white)" id="path3082" />
          <path d={svgPaths.p253ade00} fill="var(--fill-0, white)" id="path3080" />
          <path d={svgPaths.p13e49500} fill="var(--fill-0, #016FD0)" id="path3046" />
          <path d={svgPaths.p1610c400} fill="var(--fill-0, #016FD0)" id="path3048" />
          <path d={svgPaths.p366f6100} fill="var(--fill-0, #016FD0)" id="path3050" />
          <path d={svgPaths.p599f780} fill="var(--fill-0, #016FD0)" id="path3052" />
          <path d={svgPaths.p190fa400} fill="var(--fill-0, #016FD0)" id="path3054" />
          <path d={svgPaths.p2655f180} fill="var(--fill-0, #016FD0)" id="path3056" />
          <path d={svgPaths.p2caaa700} fill="var(--fill-0, #016FD0)" id="path3058" />
          <path d={svgPaths.p20737f00} fill="var(--fill-0, #016FD0)" id="path3060" />
          <path d={svgPaths.p22b6df80} fill="var(--fill-0, #016FD0)" id="path3062" />
          <path d={svgPaths.p3f189a00} fill="var(--fill-0, #016FD0)" id="path3064" />
          <path d={svgPaths.p32950b80} fill="var(--fill-0, #016FD0)" id="path3066" />
          <path d={svgPaths.p150d4c00} fill="var(--fill-0, #016FD0)" id="path3068" />
          <path d={svgPaths.p20076600} fill="var(--fill-0, #016FD0)" id="path3072" />
          <path d={svgPaths.p3ab16700} fill="var(--fill-0, #016FD0)" id="path3074" />
          <path d={svgPaths.p1acb7800} fill="var(--fill-0, #016FD0)" id="path3076" />
        </g>
      </svg>
    </div>
  );
}

function X0023LayerX() {
  return (
    <div className="h-[16px] relative shrink-0 w-[61.538px]" data-name="__x0023_Layer_x0020_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.5381 16">
        <g id="__x0023_Layer_x0020_1">
          <path d={svgPaths.p243bd600} fill="var(--fill-0, #0079BE)" id="Vector" />
          <path d={svgPaths.p272bc400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2e3c2900} fill="var(--fill-0, #211E1F)" id="Vector_3" />
          <path d={svgPaths.p3115bb70} fill="var(--fill-0, #211E1F)" id="Vector_4" />
          <path d={svgPaths.p146ad600} fill="var(--fill-0, #211E1F)" id="Vector_5" />
          <path d={svgPaths.p3b02f0f0} fill="var(--fill-0, #211E1F)" id="Vector_6" />
          <path d={svgPaths.p16a4af00} fill="var(--fill-0, #211E1F)" id="Vector_7" />
          <path d={svgPaths.p1e5a5400} fill="var(--fill-0, #211E1F)" id="Vector_8" />
          <path d={svgPaths.p34cfcc80} fill="var(--fill-0, #211E1F)" id="Vector_9" />
          <path d={svgPaths.p1102f600} fill="var(--fill-0, #211E1F)" id="Vector_10" />
          <path d={svgPaths.p12581900} fill="var(--fill-0, #211E1F)" id="Vector_11" />
          <path d={svgPaths.p3ff38500} fill="var(--fill-0, #211E1F)" id="Vector_12" />
          <path d={svgPaths.p25c4da80} fill="var(--fill-0, #211E1F)" id="Vector_13" />
          <path d={svgPaths.pff42770} fill="var(--fill-0, #211E1F)" id="Vector_14" />
          <path d={svgPaths.p1f69c580} fill="var(--fill-0, #211E1F)" id="Vector_15" />
          <path d={svgPaths.p335cd700} fill="var(--fill-0, #211E1F)" id="Vector_16" />
          <path d={svgPaths.p19ab500} fill="var(--fill-0, #211E1F)" id="Vector_17" />
          <path d={svgPaths.p22b5d000} fill="var(--fill-0, #211E1F)" id="Vector_18" />
          <path d={svgPaths.p13fe0100} fill="var(--fill-0, #211E1F)" id="Vector_19" />
          <path d={svgPaths.p39c34f00} fill="var(--fill-0, #211E1F)" id="Vector_20" />
          <path d={svgPaths.p242f2380} fill="var(--fill-0, #211E1F)" id="Vector_21" />
          <path d={svgPaths.p18e84d00} fill="var(--fill-0, #211E1F)" id="Vector_22" />
          <path d={svgPaths.p240dae80} fill="var(--fill-0, #211E1F)" id="Vector_23" />
          <path d={svgPaths.p24492b00} fill="var(--fill-0, #211E1F)" id="Vector_24" />
          <path d={svgPaths.pe6d0c80} fill="var(--fill-0, #211E1F)" id="Vector_25" />
          <path d={svgPaths.p1a8bae80} fill="var(--fill-0, #211E1F)" id="Vector_26" />
          <path d={svgPaths.p14a57a00} fill="var(--fill-0, #211E1F)" id="Vector_27" />
          <path d={svgPaths.p2bb00c00} fill="var(--fill-0, #211E1F)" id="Vector_28" />
          <path d={svgPaths.pd485bc0} fill="var(--fill-0, #211E1F)" id="Vector_29" />
          <path d={svgPaths.p35a2e700} fill="var(--fill-0, #211E1F)" id="Vector_30" />
          <path d={svgPaths.p1e53d500} fill="var(--fill-0, #211E1F)" id="Vector_31" />
          <path d={svgPaths.p106afc00} fill="var(--fill-0, #211E1F)" id="Vector_32" />
          <path d={svgPaths.p1bc52f00} fill="var(--fill-0, #211E1F)" id="Vector_33" />
          <path d={svgPaths.p1a0d00} fill="var(--fill-0, #211E1F)" id="Vector_34" />
          <path d={svgPaths.p18374a80} fill="var(--fill-0, #211E1F)" id="Vector_35" />
          <path d={svgPaths.p176df5c0} fill="var(--fill-0, #211E1F)" id="Vector_36" />
          <path d={svgPaths.pf1e6900} fill="var(--fill-0, #211E1F)" id="Vector_37" />
          <path d={svgPaths.p3e5b7780} fill="var(--fill-0, #211E1F)" id="Vector_38" />
          <path d={svgPaths.p309d4d00} fill="var(--fill-0, #211E1F)" id="Vector_39" />
          <path d={svgPaths.p243bd600} fill="var(--fill-0, #0079BE)" id="Vector_40" />
          <path d={svgPaths.p272bc400} fill="var(--fill-0, white)" id="Vector_41" />
          <path d={svgPaths.p2e3c2900} fill="var(--fill-0, #211E1F)" id="Vector_42" />
          <path d={svgPaths.p3115bb70} fill="var(--fill-0, #211E1F)" id="Vector_43" />
          <path d={svgPaths.p146ad600} fill="var(--fill-0, #211E1F)" id="Vector_44" />
          <path d={svgPaths.p3b02f0f0} fill="var(--fill-0, #211E1F)" id="Vector_45" />
          <path d={svgPaths.p16a4af00} fill="var(--fill-0, #211E1F)" id="Vector_46" />
          <path d={svgPaths.p1e5a5400} fill="var(--fill-0, #211E1F)" id="Vector_47" />
          <path d={svgPaths.p34cfcc80} fill="var(--fill-0, #211E1F)" id="Vector_48" />
          <path d={svgPaths.p1102f600} fill="var(--fill-0, #211E1F)" id="Vector_49" />
          <path d={svgPaths.p12581900} fill="var(--fill-0, #211E1F)" id="Vector_50" />
          <path d={svgPaths.p3ff38500} fill="var(--fill-0, #211E1F)" id="Vector_51" />
          <path d={svgPaths.p25c4da80} fill="var(--fill-0, #211E1F)" id="Vector_52" />
          <path d={svgPaths.pff42770} fill="var(--fill-0, #211E1F)" id="Vector_53" />
          <path d={svgPaths.p1f69c580} fill="var(--fill-0, #211E1F)" id="Vector_54" />
          <path d={svgPaths.p335cd700} fill="var(--fill-0, #211E1F)" id="Vector_55" />
          <path d={svgPaths.p19ab500} fill="var(--fill-0, #211E1F)" id="Vector_56" />
          <path d={svgPaths.p22b5d000} fill="var(--fill-0, #211E1F)" id="Vector_57" />
          <path d={svgPaths.p13fe0100} fill="var(--fill-0, #211E1F)" id="Vector_58" />
          <path d={svgPaths.p39c34f00} fill="var(--fill-0, #211E1F)" id="Vector_59" />
          <path d={svgPaths.p242f2380} fill="var(--fill-0, #211E1F)" id="Vector_60" />
          <path d={svgPaths.p18e84d00} fill="var(--fill-0, #211E1F)" id="Vector_61" />
          <path d={svgPaths.p240dae80} fill="var(--fill-0, #211E1F)" id="Vector_62" />
          <path d={svgPaths.p24492b00} fill="var(--fill-0, #211E1F)" id="Vector_63" />
          <path d={svgPaths.pe6d0c80} fill="var(--fill-0, #211E1F)" id="Vector_64" />
          <path d={svgPaths.p1a8bae80} fill="var(--fill-0, #211E1F)" id="Vector_65" />
          <path d={svgPaths.p14a57a00} fill="var(--fill-0, #211E1F)" id="Vector_66" />
          <path d={svgPaths.p2bb00c00} fill="var(--fill-0, #211E1F)" id="Vector_67" />
          <path d={svgPaths.pd485bc0} fill="var(--fill-0, #211E1F)" id="Vector_68" />
          <path d={svgPaths.p35a2e700} fill="var(--fill-0, #211E1F)" id="Vector_69" />
          <path d={svgPaths.p1e53d500} fill="var(--fill-0, #211E1F)" id="Vector_70" />
          <path d={svgPaths.p106afc00} fill="var(--fill-0, #211E1F)" id="Vector_71" />
          <path d={svgPaths.p1bc52f00} fill="var(--fill-0, #211E1F)" id="Vector_72" />
          <path d={svgPaths.p1a0d00} fill="var(--fill-0, #211E1F)" id="Vector_73" />
          <path d={svgPaths.p18374a80} fill="var(--fill-0, #211E1F)" id="Vector_74" />
          <path d={svgPaths.p176df5c0} fill="var(--fill-0, #211E1F)" id="Vector_75" />
          <path d={svgPaths.pf1e6900} fill="var(--fill-0, #211E1F)" id="Vector_76" />
          <path d={svgPaths.p3e5b7780} fill="var(--fill-0, #211E1F)" id="Vector_77" />
          <path d={svgPaths.p309d4d00} fill="var(--fill-0, #211E1F)" id="Vector_78" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[52px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 16">
        <g id="Group">
          <path d={svgPaths.p17d77800} fill="var(--fill-0, #DA0081)" id="Vector" />
          <path d={svgPaths.p1bc85cf0} fill="var(--fill-0, #200020)" id="Vector_2" />
          <path d={svgPaths.p30805480} fill="var(--fill-0, #200020)" id="Vector_3" />
          <path d={svgPaths.p11d93800} fill="var(--fill-0, #200020)" id="Vector_4" />
          <path d={svgPaths.p1b2de800} fill="var(--fill-0, #200020)" id="Vector_5" />
          <path d={svgPaths.p3d14ef00} fill="var(--fill-0, #200020)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Pay() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Pay">
      <Group6 />
      <div className="h-[16px] relative shrink-0 w-[50px]" data-name="path3789">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 16">
          <path d={svgPaths.p1f4f9d80} fill="var(--fill-0, #1434CB)" id="path3789" />
        </svg>
      </div>
      <Group8 />
      <X0023LayerX />
      <Group7 />
    </div>
  );
}

function SignUp() {
  return (
    <div className="bg-white h-[1129px] relative shrink-0 w-full" data-name="Sign up">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[38px] pt-[24px] px-[16px] relative size-full">
          <Frame20 />
          <PaginationDotGroup />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content] whitespace-pre-wrap">Explora nuestras categorías</p>
          <HorizontalTabs />
          <Frame13 />
          <Frame17 />
          <Frame8 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 1">
                <line id="Line 1" stroke="var(--stroke-0, #E9EAEB)" x2="353" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Pay />
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

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TabBar />
      <Bar />
    </div>
  );
}

function Mobile() {
  return (
    <div className="absolute bg-[#5e2fd3] content-stretch flex flex-col items-center justify-center left-0 overflow-clip top-0 w-[385px]" data-name="Mobile">
      <StatusBarIPhone />
      <DropdownHeaderNavigation />
      <Frame3 />
      <SignUp />
      <Frame27 />
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