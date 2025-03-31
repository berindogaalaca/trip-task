import * as React from "react";
const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 350" {...props}>
    <path
      fill="none"
      stroke="#444"
      strokeWidth={12}
      d="M85 206c0-86 155-156 465-156s465 70 465 156-155 156-465 156S85 292 85 206"
    />
    <text
      x={400}
      y={250}
      fill="#4B9CD9"
      fontFamily="Arial, sans-serif"
      fontSize={210}
      fontWeight="bold"
    >
      {"ORCA"}
    </text>
    <text
      x={580}
      y={350}
      fill="#F18829"
      fontFamily="Arial, sans-serif"
      fontSize={100}
      fontWeight="bold"
    >
      {"Softwares"}
    </text>
    <g transform="matrix(.8 0 0 .8 140 180)">
      <path
        fill="#444"
        d="M110 100c-20-30-50-20-60 0s-20 50 10 70 80 10 100-20c10-15 20-35 5-55s-35-10-55 5"
      />
      <path
        fill="#444"
        d="M40 110c-10-20 0-40 20-50s40 0 35 10-25 5-35 15-15 15-20 25"
      />
      <path
        fill="none"
        stroke="#4B9CD9"
        strokeLinecap="round"
        strokeWidth={10}
        d="M60 60C50 40 70 20 90 40m10-10c10-20 30-5 20 15"
      />
      <circle cx={75} cy={115} r={8} fill="#fff" />
      <circle cx={75} cy={115} r={4} fill="#444" />
      <path fill="#fff" d="M90 150c10-10 15-25 5-30s-25 5-30 15 15 25 25 15" />
    </g>
    <circle cx={740} cy={180} r={50} fill="#F18829" />
  </svg>
);
export default LogoIcon;
