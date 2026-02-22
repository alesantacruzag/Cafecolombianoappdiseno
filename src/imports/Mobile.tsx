import svgPaths from "./svg-oflzp48gj3";
import imgRectangle3 from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";
import imgAvatar from "figma:asset/957e5f6cbe8f14e66d7e8144d31d5641b0862955.png";

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
          <path d={svgPaths.p33b39900} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13110f70} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p33e2780} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p3b327680} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p21a62c00} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p29e5be00} fill="var(--fill-0, black)" id="Vector_7" />
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

function Frame3() {
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
      <Frame3 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <Group1 />
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

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Café Obraje</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#535862] text-[12px]">Tangua · Nariño</p>
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="share-07">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="share-07">
          <path d={svgPaths.p298f6900} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow() {
  return (
    <div className="backdrop-blur-[4px] bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[40px]" data-name="_Testiomonial carousel arrow">
      <Share />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame25 />
      <TestiomonialCarouselArrow />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[208px] items-start justify-center relative shrink-0 w-full">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[rgba(236,236,236,0.3)] inset-0 rounded-[8px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img alt="" className="absolute h-[87.74%] left-[23.5%] max-w-none top-[6.13%] w-[51.7%]" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame7 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-center">250 gr</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center">450 gr</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#252b37] text-[14px] text-center">2.500 gr</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Content2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Peso</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#252b37] text-[14px] text-center">Grano</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Content3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-center">Molido</p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Content4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Tag3 />
      <Tag4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Molienda</p>
      </div>
      <Frame5 />
    </div>
  );
}

function BadgeBase() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#717680] text-[12px] text-center">10% dcto con Mastercard</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">
        <p className="leading-[30px] whitespace-pre-wrap">$26.000</p>
      </div>
      <BadgeBase />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#717680] text-[0px] text-[14px] whitespace-pre-wrap">
        <span className="leading-[20px] text-[#414651]">Cantidad: 1</span>
        <span className="leading-[20px]">{` `}</span>
        <span className="leading-[20px] text-[#a4a7ae]">(4 disponibles)</span>
      </p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Icon" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content5 />
          <ChevronDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[14px]">Stock disponible</p>
      <Input />
    </div>
  );
}

function InputFieldBase() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Input field base">
      <InputWithLabel />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame8 />
      <Frame9 />
      <InputFieldBase />
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shopping-cart-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_23544)" id="shopping-cart-01">
          <path d={svgPaths.p13048c00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_6_23544">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#f72585] h-[44px] relative rounded-[32px] shrink-0 w-full" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative size-full">
          <ShoppingCart />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Agregar al carrito</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ButtonBase />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame17 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[200px] shrink-0 size-[48px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[200px]">
        <img alt="" className="absolute h-[104.27%] left-[-35.27%] max-w-none top-[-2.08%] w-[156.1%]" src={imgAvatar} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#535862] text-[12px]">Miembro · Hace 4 años</p>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] w-full whitespace-pre-wrap">Vendido por: Carlos Ruiz</p>
      <Frame22 />
    </div>
  );
}

function AvatarAndText() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar and text">
      <Avatar />
      <TextAndSupportingText />
    </div>
  );
}

function BadgeBase1() {
  return (
    <div className="bg-[#c4c4ff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e2fd3] text-[12px] text-center">Destacado</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge">
      <BadgeBase1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Badge />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <AvatarAndText />
      <Frame23 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]">
        <p className="leading-[18px] whitespace-pre-wrap">{`El café gourmet del Quindío, Colombia, es una auténtica joya que captura la esencia de la excelencia cafetera colombiana. `}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[18px] relative shrink-0 w-[29.148px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.1484 18">
        <g id="Group">
          <path d={svgPaths.p172ca280} fill="var(--fill-0, #FF5F00)" id="Vector" />
          <path d={svgPaths.p1a06080} fill="var(--fill-0, #EB001B)" id="Vector_2" />
          <path d={svgPaths.p2ac22e00} fill="var(--fill-0, #F79E1B)" id="Vector_3" />
          <path d={svgPaths.p28374900} fill="var(--fill-0, #F79E1B)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[49.725px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.7253 18">
        <g id="Group 49228">
          <path d={svgPaths.pee38f80} fill="var(--fill-0, white)" id="path3082" />
          <path d={svgPaths.p1f679380} fill="var(--fill-0, white)" id="path3080" />
          <path d={svgPaths.p22987a00} fill="var(--fill-0, #016FD0)" id="path3046" />
          <path d={svgPaths.p3442f500} fill="var(--fill-0, #016FD0)" id="path3048" />
          <path d={svgPaths.p134b7cf0} fill="var(--fill-0, #016FD0)" id="path3050" />
          <path d={svgPaths.p16166000} fill="var(--fill-0, #016FD0)" id="path3052" />
          <path d={svgPaths.pdfd9e80} fill="var(--fill-0, #016FD0)" id="path3054" />
          <path d={svgPaths.p36a3c980} fill="var(--fill-0, #016FD0)" id="path3056" />
          <path d={svgPaths.p3a312000} fill="var(--fill-0, #016FD0)" id="path3058" />
          <path d={svgPaths.p13167b00} fill="var(--fill-0, #016FD0)" id="path3060" />
          <path d={svgPaths.p17971680} fill="var(--fill-0, #016FD0)" id="path3062" />
          <path d={svgPaths.p3287e9c0} fill="var(--fill-0, #016FD0)" id="path3064" />
          <path d={svgPaths.p3db66500} fill="var(--fill-0, #016FD0)" id="path3066" />
          <path d={svgPaths.pc19600} fill="var(--fill-0, #016FD0)" id="path3068" />
          <path d={svgPaths.p22884ac0} fill="var(--fill-0, #016FD0)" id="path3072" />
          <path d={svgPaths.p2d6dc600} fill="var(--fill-0, #016FD0)" id="path3074" />
          <path d={svgPaths.p7f2d500} fill="var(--fill-0, #016FD0)" id="path3076" />
        </g>
      </svg>
    </div>
  );
}

function X0023LayerX() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69.23px]" data-name="__x0023_Layer_x0020_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.2303 18">
        <g id="__x0023_Layer_x0020_1">
          <path d={svgPaths.p124f5f00} fill="var(--fill-0, #0079BE)" id="Vector" />
          <path d={svgPaths.p33b71f0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1279bec0} fill="var(--fill-0, #211E1F)" id="Vector_3" />
          <path d={svgPaths.p2f824b00} fill="var(--fill-0, #211E1F)" id="Vector_4" />
          <path d={svgPaths.p33ea0100} fill="var(--fill-0, #211E1F)" id="Vector_5" />
          <path d={svgPaths.pe80c500} fill="var(--fill-0, #211E1F)" id="Vector_6" />
          <path d={svgPaths.p18e17d00} fill="var(--fill-0, #211E1F)" id="Vector_7" />
          <path d={svgPaths.pc65ff80} fill="var(--fill-0, #211E1F)" id="Vector_8" />
          <path d={svgPaths.p31bc2800} fill="var(--fill-0, #211E1F)" id="Vector_9" />
          <path d={svgPaths.p7a08280} fill="var(--fill-0, #211E1F)" id="Vector_10" />
          <path d={svgPaths.p2411f8c0} fill="var(--fill-0, #211E1F)" id="Vector_11" />
          <path d={svgPaths.p254c6700} fill="var(--fill-0, #211E1F)" id="Vector_12" />
          <path d={svgPaths.p149af940} fill="var(--fill-0, #211E1F)" id="Vector_13" />
          <path d={svgPaths.p17ca8a80} fill="var(--fill-0, #211E1F)" id="Vector_14" />
          <path d={svgPaths.p2b6e6140} fill="var(--fill-0, #211E1F)" id="Vector_15" />
          <path d={svgPaths.p2635600} fill="var(--fill-0, #211E1F)" id="Vector_16" />
          <path d={svgPaths.pf54bd00} fill="var(--fill-0, #211E1F)" id="Vector_17" />
          <path d={svgPaths.p3ada3c80} fill="var(--fill-0, #211E1F)" id="Vector_18" />
          <path d={svgPaths.p22d18c80} fill="var(--fill-0, #211E1F)" id="Vector_19" />
          <path d={svgPaths.p95cb00} fill="var(--fill-0, #211E1F)" id="Vector_20" />
          <path d={svgPaths.pcecc00} fill="var(--fill-0, #211E1F)" id="Vector_21" />
          <path d={svgPaths.p816c600} fill="var(--fill-0, #211E1F)" id="Vector_22" />
          <path d={svgPaths.p2715e980} fill="var(--fill-0, #211E1F)" id="Vector_23" />
          <path d={svgPaths.p335cf890} fill="var(--fill-0, #211E1F)" id="Vector_24" />
          <path d={svgPaths.p16a19a00} fill="var(--fill-0, #211E1F)" id="Vector_25" />
          <path d={svgPaths.p34c0a00} fill="var(--fill-0, #211E1F)" id="Vector_26" />
          <path d={svgPaths.p1d1a0000} fill="var(--fill-0, #211E1F)" id="Vector_27" />
          <path d={svgPaths.p10ad4400} fill="var(--fill-0, #211E1F)" id="Vector_28" />
          <path d={svgPaths.p1e9240} fill="var(--fill-0, #211E1F)" id="Vector_29" />
          <path d={svgPaths.p35242500} fill="var(--fill-0, #211E1F)" id="Vector_30" />
          <path d={svgPaths.p23b34ea0} fill="var(--fill-0, #211E1F)" id="Vector_31" />
          <path d={svgPaths.p2a511c00} fill="var(--fill-0, #211E1F)" id="Vector_32" />
          <path d={svgPaths.pff02c00} fill="var(--fill-0, #211E1F)" id="Vector_33" />
          <path d={svgPaths.p1f96ce20} fill="var(--fill-0, #211E1F)" id="Vector_34" />
          <path d={svgPaths.p25918200} fill="var(--fill-0, #211E1F)" id="Vector_35" />
          <path d={svgPaths.p3a5f9f80} fill="var(--fill-0, #211E1F)" id="Vector_36" />
          <path d={svgPaths.p15f35780} fill="var(--fill-0, #211E1F)" id="Vector_37" />
          <path d={svgPaths.p137d8f00} fill="var(--fill-0, #211E1F)" id="Vector_38" />
          <path d={svgPaths.p7c5b7c0} fill="var(--fill-0, #211E1F)" id="Vector_39" />
          <path d={svgPaths.p124f5f00} fill="var(--fill-0, #0079BE)" id="Vector_40" />
          <path d={svgPaths.p33b71f0} fill="var(--fill-0, white)" id="Vector_41" />
          <path d={svgPaths.p1279bec0} fill="var(--fill-0, #211E1F)" id="Vector_42" />
          <path d={svgPaths.p2f824b00} fill="var(--fill-0, #211E1F)" id="Vector_43" />
          <path d={svgPaths.p33ea0100} fill="var(--fill-0, #211E1F)" id="Vector_44" />
          <path d={svgPaths.pe80c500} fill="var(--fill-0, #211E1F)" id="Vector_45" />
          <path d={svgPaths.p18e17d00} fill="var(--fill-0, #211E1F)" id="Vector_46" />
          <path d={svgPaths.pc65ff80} fill="var(--fill-0, #211E1F)" id="Vector_47" />
          <path d={svgPaths.p31bc2800} fill="var(--fill-0, #211E1F)" id="Vector_48" />
          <path d={svgPaths.p7a08280} fill="var(--fill-0, #211E1F)" id="Vector_49" />
          <path d={svgPaths.p2411f8c0} fill="var(--fill-0, #211E1F)" id="Vector_50" />
          <path d={svgPaths.p254c6700} fill="var(--fill-0, #211E1F)" id="Vector_51" />
          <path d={svgPaths.p149af940} fill="var(--fill-0, #211E1F)" id="Vector_52" />
          <path d={svgPaths.p17ca8a80} fill="var(--fill-0, #211E1F)" id="Vector_53" />
          <path d={svgPaths.p2b6e6140} fill="var(--fill-0, #211E1F)" id="Vector_54" />
          <path d={svgPaths.p2635600} fill="var(--fill-0, #211E1F)" id="Vector_55" />
          <path d={svgPaths.pf54bd00} fill="var(--fill-0, #211E1F)" id="Vector_56" />
          <path d={svgPaths.p3ada3c80} fill="var(--fill-0, #211E1F)" id="Vector_57" />
          <path d={svgPaths.p22d18c80} fill="var(--fill-0, #211E1F)" id="Vector_58" />
          <path d={svgPaths.p95cb00} fill="var(--fill-0, #211E1F)" id="Vector_59" />
          <path d={svgPaths.pcecc00} fill="var(--fill-0, #211E1F)" id="Vector_60" />
          <path d={svgPaths.p816c600} fill="var(--fill-0, #211E1F)" id="Vector_61" />
          <path d={svgPaths.p2715e980} fill="var(--fill-0, #211E1F)" id="Vector_62" />
          <path d={svgPaths.p335cf890} fill="var(--fill-0, #211E1F)" id="Vector_63" />
          <path d={svgPaths.p16a19a00} fill="var(--fill-0, #211E1F)" id="Vector_64" />
          <path d={svgPaths.p34c0a00} fill="var(--fill-0, #211E1F)" id="Vector_65" />
          <path d={svgPaths.p1d1a0000} fill="var(--fill-0, #211E1F)" id="Vector_66" />
          <path d={svgPaths.p10ad4400} fill="var(--fill-0, #211E1F)" id="Vector_67" />
          <path d={svgPaths.p1e9240} fill="var(--fill-0, #211E1F)" id="Vector_68" />
          <path d={svgPaths.p35242500} fill="var(--fill-0, #211E1F)" id="Vector_69" />
          <path d={svgPaths.p23b34ea0} fill="var(--fill-0, #211E1F)" id="Vector_70" />
          <path d={svgPaths.p2a511c00} fill="var(--fill-0, #211E1F)" id="Vector_71" />
          <path d={svgPaths.pff02c00} fill="var(--fill-0, #211E1F)" id="Vector_72" />
          <path d={svgPaths.p1f96ce20} fill="var(--fill-0, #211E1F)" id="Vector_73" />
          <path d={svgPaths.p25918200} fill="var(--fill-0, #211E1F)" id="Vector_74" />
          <path d={svgPaths.p3a5f9f80} fill="var(--fill-0, #211E1F)" id="Vector_75" />
          <path d={svgPaths.p15f35780} fill="var(--fill-0, #211E1F)" id="Vector_76" />
          <path d={svgPaths.p137d8f00} fill="var(--fill-0, #211E1F)" id="Vector_77" />
          <path d={svgPaths.p7c5b7c0} fill="var(--fill-0, #211E1F)" id="Vector_78" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[58.501px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.5007 18">
        <g id="Group">
          <path d={svgPaths.p992dd00} fill="var(--fill-0, #DA0081)" id="Vector" />
          <path d={svgPaths.p22ecae40} fill="var(--fill-0, #200020)" id="Vector_2" />
          <path d={svgPaths.p1862a480} fill="var(--fill-0, #200020)" id="Vector_3" />
          <path d={svgPaths.p11cd780} fill="var(--fill-0, #200020)" id="Vector_4" />
          <path d={svgPaths.p1ab05380} fill="var(--fill-0, #200020)" id="Vector_5" />
          <path d={svgPaths.p1d87bd00} fill="var(--fill-0, #200020)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Pay() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Pay">
      <Group />
      <div className="h-[18px] relative shrink-0 w-[56px]" data-name="path3789">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 18">
          <path d={svgPaths.p1b733600} fill="var(--fill-0, #1434CB)" id="path3789" />
        </svg>
      </div>
      <Group3 />
      <X0023LayerX />
      <Group2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#181d27] text-[16px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Medios de pago</p>
      </div>
      <Pay />
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StarIcon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StarIcon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StarIcon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StarIcon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stars">
      <StarIcon />
      <StarIcon1 />
      <StarIcon2 />
      <StarIcon3 />
      <StarIcon4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Stars />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#717680] text-[12px] w-[min-content] whitespace-pre-wrap">35 calificaciones</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[36px] text-ellipsis tracking-[-0.72px] whitespace-nowrap">
        <p className="leading-[44px] overflow-hidden">4.5</p>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#181d27] text-[16px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Opiniones</p>
      </div>
      <Frame15 />
    </div>
  );
}

function User() {
  return (
    <div className="absolute inset-[20.83%]" data-name="user-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="user-01">
          <path d={svgPaths.p2346e070} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-[200px] shrink-0 size-[48px]" data-name="Avatar">
      <User />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#181d27] text-[16px] w-full">Daniela Vélez</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#535862] text-[12px] w-full">Medellín, Colombia</p>
    </div>
  );
}

function AvatarAndText1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar and text">
      <Avatar1 />
      <TextAndSupportingText1 />
    </div>
  );
}

function StarIcon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StarIcon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StarIcon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StarIcon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StarIcon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_22025)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_6_22025)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_6_22025">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stars1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stars">
      <StarIcon5 />
      <StarIcon6 />
      <StarIcon7 />
      <StarIcon8 />
      <StarIcon9 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <AvatarAndText1 />
      <Stars1 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#181d27] text-[14px] w-[min-content] whitespace-pre-wrap">Un café increíble. La frescura y la calidad del grano hacen toda la diferencia. Definitivamente volveré a comprar.</p>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-left">
          <path d={svgPaths.p11678e00} id="Icon" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow1() {
  return (
    <div className="backdrop-blur-[4px] bg-white content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[40px]" data-name="_Testiomonial carousel arrow">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <ArrowLeft />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right">
          <path d={svgPaths.p3b6ad300} id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow2() {
  return (
    <div className="backdrop-blur-[4px] bg-white content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[40px]" data-name="_Testiomonial carousel arrow">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <ArrowRight />
    </div>
  );
}

function Arrows() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Arrows">
      <TestiomonialCarouselArrow1 />
      <TestiomonialCarouselArrow2 />
    </div>
  );
}

function AttributionAndArrows() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Attribution and arrows">
      <Frame19 />
      <Arrows />
    </div>
  );
}

function QuoteAndAttribution() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Quote and attribution">
      <AttributionAndArrows />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[353px]">
      <Frame20 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[14px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Opiniones destacadas</p>
      </div>
      <QuoteAndAttribution />
    </div>
  );
}

function SignUp() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Sign up">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[39px] pt-[24px] px-[16px] relative w-full">
        <Frame18 />
        <div className="h-0 relative shrink-0 w-[353px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 1">
              <line id="Line 1" stroke="var(--stroke-0, #E9EAEB)" x2="353" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame24 />
        <div className="h-0 relative shrink-0 w-[353px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 1">
              <line id="Line 1" stroke="var(--stroke-0, #E9EAEB)" x2="353" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame16 />
        <div className="h-0 relative shrink-0 w-[353px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 1">
              <line id="Line 1" stroke="var(--stroke-0, #E9EAEB)" x2="353" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame13 />
      </div>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#5e2fd3] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Mobile">
      <StatusBarIPhone />
      <DropdownHeaderNavigation />
      <SignUp />
    </div>
  );
}