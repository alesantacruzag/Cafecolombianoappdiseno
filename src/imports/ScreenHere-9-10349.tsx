import svgPaths from "./svg-dz5cl6c21a";
import imgFrame4472999 from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";
import imgFrame4473000 from "figma:asset/0479a0625ae1cac4470061a496b52f3f343a0414.png";
import imgFrame4473001 from "figma:asset/245315345536c43caaa155f247b37d6cee9f161a.png";
import imgFrame4473002 from "figma:asset/e0fcb7655ec92cdc5a6473a3802042003dc5bc2e.png";
import imgFrame4473003 from "figma:asset/a58c40e03a996dfedd78d17574e663750e4fc3f9.png";
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

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p272bfa00} id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <Search />
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px]">Buscar en origen</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[40px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[14px] py-[10px] relative w-full">
          <Content />
        </div>
      </div>
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

function Frame1() {
  return (
    <div className="absolute bg-[#f72585] content-stretch flex flex-col items-center justify-center left-[17px] p-[4px] rounded-[40px] top-[-5.5px] w-[15px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[10px] text-center text-white">2</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[4px] relative shrink-0">
      <Bell />
      <Frame1 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[16px] pr-[12px] relative w-full">
          <Input />
          <Frame18 />
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

function Settings() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="settings-04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="settings-04">
          <path d={svgPaths.p186b9100} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-white relative rounded-[40px] shrink-0" data-name="_Button base">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <Settings />
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px]">Filtrar</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative rounded-[40px] shrink-0" data-name="Button">
      <ButtonBase />
    </div>
  );
}

function SwitchVertical() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="switch-vertical-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="switch-vertical-01">
          <path d={svgPaths.p1a7f6b00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="bg-white relative rounded-[40px] shrink-0" data-name="_Button base">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <SwitchVertical />
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px]">Ordenar</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[40px] shrink-0" data-name="Button">
      <ButtonBase1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function Badge() {
  return <div className="absolute content-stretch flex items-start left-[12px] top-[12px]" data-name="Badge" />;
}

function BadgeBase() {
  return (
    <div className="bg-[#c4c4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e2fd3] text-[12px] text-center">Nuevo</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute content-stretch flex items-start left-[16.5px] top-[13px]" data-name="Badge">
      <BadgeBase />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame4472999} />
      <Badge />
      <Badge1 />
    </div>
  );
}

function Frame3() {
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

function Frame4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame2 />
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BadgeBase1() {
  return (
    <div className="bg-[#cee90d] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#58660e] text-[12px] text-center">15% dcto</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute content-stretch flex items-start left-[16px] top-[16px]" data-name="Badge">
      <BadgeBase1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame4473000} />
      <Badge2 />
    </div>
  );
}

function Frame11() {
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

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start leading-[0] not-italic px-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[14px] text-black w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Buenavista</p>
        </div>
        <Frame11 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame7 />
        <Frame8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
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

function Badge3() {
  return (
    <div className="absolute content-stretch flex items-start left-[16.5px] top-[16px]" data-name="Badge">
      <BadgeBase2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[137px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[108.03%] left-[6.08%] max-w-none top-[-2.19%] w-[87.83%]" src={imgFrame4473001} />
      </div>
      <Badge3 />
    </div>
  );
}

function Frame15() {
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

function Frame13() {
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

function Frame17() {
  return (
    <div className="h-[137px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame4473002} />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">$31.000</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Guanes</p>
        </div>
        <Frame20 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame17 />
        <Frame19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame13 />
      <Frame16 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[137px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame4473003} />
    </div>
  );
}

function Frame24() {
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

function Frame26() {
  return (
    <div className="h-[137px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame4473002} />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">$31.000</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Guanes</p>
        </div>
        <Frame28 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame26 />
        <Frame27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame22 />
      <Frame25 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame12 />
      <Frame21 />
    </div>
  );
}

function SignUp() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Sign up">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[39px] pt-[24px] px-[16px] relative size-full">
          <Frame9 />
          <Frame10 />
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
          <path d={svgPaths.p1b170034} id="Icon" stroke="var(--stroke-0, #181D27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px pb-[4px] pt-[8px] relative" data-name="Tab - Bar - Item">
      <div aria-hidden="true" className="absolute border-[#f72585] border-solid border-t-3 inset-0 pointer-events-none" />
      <ShoppingBag />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181d27] text-[10px] text-center whitespace-nowrap">
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

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[385px]">
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
      <SignUp />
      <Frame29 />
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