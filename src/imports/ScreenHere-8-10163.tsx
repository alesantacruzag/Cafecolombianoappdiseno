import svgPaths from "./svg-3ou7ah7ea3";
import imgFrame4472999 from "figma:asset/fef2f891a9e4b391c95ab8dad92136c34eef7418.png";
import imgFrame4473000 from "figma:asset/d48b21ac516dce38a283e5df2b79af017ee7c3e2.png";
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

function Group() {
  return (
    <div className="h-[28px] relative shrink-0 w-[101.657px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.657 28">
        <g id="Group 1">
          <path d={svgPaths.p11d2b800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2767e400} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pfde15c0} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p33e2780} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p66ffa80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p36d26b00} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.pff56ab0} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p328d80} fill="var(--fill-0, black)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Bell() {
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

function Frame13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[4px] relative shrink-0">
      <Bell />
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame13 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <Group />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container />
    </div>
  );
}

function DropdownHeaderNavigation() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <Header />
    </div>
  );
}

function MarkerPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="marker-pin-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="marker-pin-01">
          <g id="Icon">
            <path d={svgPaths.p17781bc0} stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            <path d={svgPaths.p308b3530} stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <MarkerPin />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Armenia, Quindio</p>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="calendar">
          <path d={svgPaths.p276b9900} id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Calendar />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Mié, 24 dic - Vie, 26 dic</p>
      </div>
    </div>
  );
}

function User1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="user-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="user-02">
          <g id="Icon">
            <path d={svgPaths.p11425100} stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            <path d={svgPaths.p1a067e80} stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <User1 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">2</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function DestinationDate() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Destination + Date">
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function V6IconPro() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="v6-icon (pro)">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[16px] text-center text-white">
        <p className="leading-[normal] whitespace-pre-wrap">search</p>
      </div>
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="bg-[#f72585] content-stretch flex items-center justify-center p-[12px] relative rounded-[48px] shrink-0" data-name="Button Icon">
      <V6IconPro />
    </div>
  );
}

function SearchAvailability() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Search Availability">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <DestinationDate />
          <ButtonIcon />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Todos</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f72585] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <Content />
    </div>
  );
}

function Route() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="route">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_29328)" id="route">
          <path d={svgPaths.p1d88680} id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_8_29328">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#252b37] text-[14px] text-center">Tours</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Route />
      <Content1 />
    </div>
  );
}

function Restaurant() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Restaurant">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_30925)" id="Restaurant">
          <path d={svgPaths.p1aca2b00} id="Vector 1" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_8_30925">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#252b37] text-[14px] text-center">Gastronomía</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Restaurant />
      <Content2 />
    </div>
  );
}

function Building() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="building-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="building-02">
          <path d={svgPaths.p3671e600} id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#252b37] text-[14px] text-center">Hospedaje</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Building />
      <Content3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function Badge() {
  return <div className="absolute content-stretch flex items-start left-[16.5px] top-[16px]" data-name="Badge" />;
}

function BadgeBase() {
  return (
    <div className="bg-[#c4c4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e2fd3] text-[12px] text-center">El más vendido</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute content-stretch flex items-start left-[16.5px] top-[16px]" data-name="Badge">
      <BadgeBase />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame4472999} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-36.9298deg, rgba(0, 0, 0, 0) 46.318%, rgba(0, 0, 0, 0.29) 76.075%)" }} />
      </div>
      <div className="absolute h-[816px] left-[-783px] top-[-339px] w-[1920px]" data-name="image 8" />
      <Badge />
      <Badge1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#535862]">
        <p className="leading-[18px]">Finca La Esperanza. Armenia, Quindío</p>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#181d27]">
        <p className="leading-[18px]">Ver en mapa</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Tour “Del Grano a la Taza”</p>
      </div>
      <Frame21 />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8_24537)" id="clock">
          <path d={svgPaths.p2ef62900} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_8_24537">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Clock />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Duración:</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">2 horas</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
        <Frame20 />
        <Frame23 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-black w-full">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">$65.000</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[18px] whitespace-pre-wrap">Por persona</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[16px] py-[12px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[353px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame3 />
        <Frame4 />
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function BadgeBase1() {
  return (
    <div className="bg-[#cee90d] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f8209] text-[12px] text-center">Último cupo</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute content-stretch flex items-start left-[16.5px] top-[16px]" data-name="Badge">
      <BadgeBase1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame4473000} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-36.9298deg, rgba(0, 0, 0, 0) 46.318%, rgba(0, 0, 0, 0.29) 76.075%)" }} />
      </div>
      <div className="absolute h-[816px] left-[-783px] top-[-339px] w-[1920px]" data-name="image 8" />
      <Badge2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px] w-full whitespace-nowrap">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#535862]">
        <p className="leading-[18px]">Finca La Esperanza. Armenia, Quindío</p>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#181d27]">
        <p className="leading-[18px]">Ver en mapa</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Tour “Del Grano a la Taza”</p>
      </div>
      <Frame26 />
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8_26134)" id="clock">
          <path d={svgPaths.p2ef62900} id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_8_26134">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Clock1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Duración:</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">2 horas</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
        <Frame25 />
        <Frame27 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-black w-full">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">$65.000</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[18px] whitespace-pre-wrap">Por persona</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[16px] py-[12px] relative w-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[353px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame8 />
        <Frame9 />
        <Frame10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame7 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function SignUp() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Sign up">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-[39px] pt-[24px] px-[16px] relative size-full">
          <Frame18 />
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535862] text-[0px] w-full">
            <p className="text-[12px] whitespace-pre-wrap">
              <span className="font-['Poppins:SemiBold',sans-serif] leading-[18px] not-italic">{`20 `}</span>
              <span className="leading-[18px]">resultados encontrados</span>
            </p>
          </div>
          <Frame19 />
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
          <path d={svgPaths.p2f5e2f0} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px pb-[4px] pt-[8px] relative" data-name="Tab - Bar - Item">
      <HomeSmile />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#717680] text-[10px] text-center whitespace-nowrap">
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
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[8px] items-center justify-center relative rounded-[40px] shrink-0 size-[48px]" data-name="Tab - Bar - Item">
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

function Route1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="route">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="route">
          <path d={svgPaths.p33eb1c00} id="Icon" stroke="var(--stroke-0, #252B37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px pb-[4px] pt-[8px] relative" data-name="Tab - Bar - Item">
      <div aria-hidden="true" className="absolute border-[#f72585] border-solid border-t-3 inset-0 pointer-events-none" />
      <Route1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252b37] text-[10px] text-center whitespace-nowrap">
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
    <div className="bg-white h-[54px] relative shrink-0 w-full" data-name="Tab - Bar">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-solid border-t inset-0 pointer-events-none" />
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[385px]">
      <TabBar />
      <Bar />
    </div>
  );
}

function Mobile() {
  return (
    <div className="absolute content-stretch flex flex-col h-[819px] items-center justify-center left-0 overflow-clip top-0 w-[385px]" data-name="Mobile">
      <StatusBarIPhone />
      <DropdownHeaderNavigation />
      <SearchAvailability />
      <SignUp />
      <Frame12 />
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