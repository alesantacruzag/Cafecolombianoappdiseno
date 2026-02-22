import svgPaths from "../imports/svg-501zlh8ehi";
import imgWallpaper from "figma:asset/7c970efcdc042dacebf7f9e00ff20d6cd5ee56cf.png";

export default function SplashScreen() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      <div className="absolute bg-[#dae2d3] h-[805px] left-0 rounded-[50px] top-0 w-[370px]" />
      <div className="absolute h-full left-0 top-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWallpaper} />
      </div>
      
      <div className="absolute content-stretch flex flex-col h-full items-center justify-center left-0 overflow-clip top-0 w-full">
        <div className="bg-[#f72585] flex-1 min-h-px min-w-px relative w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center pb-[160px] pt-[80px] px-[16px] relative size-full">
              <div className="h-[64px] relative shrink-0 w-[51.255px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.2549 64">
                  <g>
                    <path d={svgPaths.p10836b00} fill="white" />
                    <path d={svgPaths.p2e716500} fill="white" />
                    <path d={svgPaths.pe123200} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}