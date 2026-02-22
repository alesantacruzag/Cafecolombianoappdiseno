import svgPaths from "../imports/svg-xo3j3lr872";

function Time() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[40px] pr-[6px] relative w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center">9:41</p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g>
          <rect height="12" opacity="0.35" rx="3.8" stroke="black" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="black" opacity="0.4" />
          <rect fill="black" height="9" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-end px-[40px] relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="black" fillRule="evenodd" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="black" fillRule="evenodd" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

export default function StatusBar() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[50px] items-start pt-[16px] relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <Time />
        <DynamicIslandSpacer />
        <Levels />
      </div>
    </div>
  );
}
