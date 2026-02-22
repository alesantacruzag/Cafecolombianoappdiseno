import svgPaths from "./svg-n1dice9fl3";

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

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative size-full">
      <TabBar />
      <Bar />
    </div>
  );
}