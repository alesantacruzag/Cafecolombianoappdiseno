import React from 'react';
import svgPaths from '../imports/svg-xo3j3lr872';

export function LogoOrigen({ className = "h-7", color = "#181D27" }: { className?: string, color?: string }) {
  return (
    <div className={`${className} flex items-center`}>
      <svg className="block h-full w-auto" preserveAspectRatio="xMidYMid meet" viewBox="0 0 101.657 28">
        <g>
          <path d={svgPaths.p2fc3ad00} fill={color} />
          <path d={svgPaths.p77c37f0} fill={color} />
          <path d={svgPaths.pdaaa4c0} fill={color} />
          <path d={svgPaths.p33e2780} fill={color} />
          <path d={svgPaths.pd33dc80} fill={color} />
          <path d={svgPaths.p699bd00} fill={color} />
          <path d={svgPaths.p9072200} fill={color} />
          <path d={svgPaths.p9fb85d6} fill={color} />
        </g>
      </svg>
    </div>
  );
}
