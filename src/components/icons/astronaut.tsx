import * as React from "react";
const AstronautIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={150}
    fill="none"
    viewBox="0 0 200 200"
    {...props}
  >
    <circle cx={100} cy={85} r={55} fill="#f1f5f9" stroke="#94a3b8" />
    <circle cx={100} cy={85} r={45} fill="#e2e8f0" />
    <path fill="#475569" d="M75 85a25 25 0 0 1 50 0" />
    <path fill="#f1f5f9" stroke="#94a3b8" d="m70 140 10-40h40l10 40" />
    <rect
      width={30}
      height={40}
      x={85}
      y={110}
      fill="#cbd5e1"
      stroke="#94a3b8"
      rx={5}
    />
    <path
      stroke="#94a3b8"
      d="m70 140-10 20M130 140l10 20M85 140l-5 30M115 140l5 30"
    />
    <circle cx={85} cy={75} r={8} fill="#fff" />
  </svg>
);
export default AstronautIcon;
