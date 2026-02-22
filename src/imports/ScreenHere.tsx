import svgPaths from "./svg-xo3j3lr872";
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
          <path d={svgPaths.p2fc3ad00} fill="var(--fill-0, #181D27)" id="Vector" />
          <path d={svgPaths.p77c37f0} fill="var(--fill-0, #181D27)" id="Vector_2" />
          <path d={svgPaths.pdaaa4c0} fill="var(--fill-0, #181D27)" id="Vector_3" />
          <path d={svgPaths.p33e2780} fill="var(--fill-0, #181D27)" id="Vector_4" />
          <path d={svgPaths.pd33dc80} fill="var(--fill-0, #181D27)" id="Vector_5" />
          <path d={svgPaths.p699bd00} fill="var(--fill-0, #181D27)" id="Vector_6" />
          <path d={svgPaths.p9072200} fill="var(--fill-0, #181D27)" id="Vector_7" />
          <path d={svgPaths.p9fb85d6} fill="var(--fill-0, #181D27)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Header">
      <Group />
    </div>
  );
}

function TabButtonBase() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] shrink-0" data-name="_Tab button base">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px]">Visitante</p>
    </div>
  );
}

function TabButtonBase1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="_Tab button base">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px]">Caficultor</p>
    </div>
  );
}

function HorizontalTabs() {
  return (
    <div className="bg-[#f2f4f7] content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[40px] shrink-0" data-name="Horizontal tabs">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <TabButtonBase />
      <TabButtonBase1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#717680] text-[16px] whitespace-pre-wrap">Ingresa tu correo electrónico</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px]">Correo electrónico</p>
      <Input />
    </div>
  );
}

function InputFieldBase() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="_Input field base">
      <InputWithLabel />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input field">
      <InputFieldBase />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#717680] text-[16px] whitespace-pre-wrap">••••••••</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px]">Contraseña</p>
      <Input1 />
    </div>
  );
}

function InputFieldBase1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="_Input field base">
      <InputWithLabel1 />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input field">
      <InputFieldBase1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form">
      <InputField />
      <InputField1 />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#f72585] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Iniciar sesión</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f72585] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Button">
      <ButtonBase />
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_44962)" id="Social icon">
          <path d={svgPaths.p7776880} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p2d84f580} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p380d1d80} fill="var(--fill-0, #FBBC04)" id="Vector_3" />
          <path d={svgPaths.p1ebd4080} fill="var(--fill-0, #EA4335)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_44962">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialButton() {
  return (
    <div className="bg-white relative rounded-[40px] shrink-0 w-full" data-name="Social button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <SocialIcon />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px]">Iniciar con Google</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function SocialButtonGroups() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative rounded-[40px] shrink-0 w-full" data-name="Social button groups">
      <SocialButton />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Actions">
      <Button />
      <SocialButtonGroups />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <Form />
      <Actions />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <Header />
      <HorizontalTabs />
      <Content1 />
    </div>
  );
}

function SignUp() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Sign up">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[38px] px-[16px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="absolute bg-[#5e2fd3] content-stretch flex flex-col h-[819px] items-center justify-center left-0 overflow-clip top-0 w-[385px]" data-name="Mobile">
      <StatusBarIPhone />
      <SignUp />
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
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 top-[795px] w-[385px]" data-name="Bar">
      <Bar1 />
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
      <Bar />
    </div>
  );
}