import React, { ComponentProps } from "react";

interface IconProps extends ComponentProps<"svg"> {
  color?: string;
  color2?: string;
  size?: number;
}

export const Icon6: React.FC<IconProps> = ({
  color,
  color2,
  size,
  ...props
}) => {
  return (
    <svg
      width="62"
      height="61"
      viewBox="0 0 62 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_17828_25544)">
        <rect
          x="0.761719"
          width="60.7516"
          height="60.7516"
          rx="29.2075"
          fill={color2}
        />
        <path
          d="M20.2494 30.6631C20.5083 28.3172 21.5413 26.1245 23.1853 24.4311L24.9956 26.2409L25.8339 25.4032L24.0561 23.6261C25.8092 22.174 27.9825 21.3238 30.2555 21.2008V24.1468H31.4403V21.2008C33.7133 21.3238 35.8866 22.174 37.6397 23.6261L35.9336 25.3316L36.7719 26.1692L38.5105 24.4305C40.1546 26.124 41.1877 28.317 41.4465 30.6631H38.9542V31.8479H41.511C41.5134 34.3188 40.6532 36.713 39.0787 38.6172L37.0527 36.5912L36.2144 37.4289L38.2748 39.4886L38.2671 39.4957L39.0911 40.347C40.2328 39.2445 41.1405 37.923 41.7599 36.4617C42.3792 35.0004 42.6976 33.4291 42.6958 31.842C42.6958 25.3019 37.3909 20 30.8479 20C24.3049 20 19 25.3013 19 31.842C18.9964 34.9636 20.2297 37.9596 22.43 40.174L23.2712 39.3405L23.2599 39.3287L25.0407 37.5485L24.203 36.7109L22.4738 38.4395C20.9891 36.5634 20.1824 34.2404 20.1848 31.8479H22.5858V30.6631H20.2494Z"
          fill={color}
        />
        <path
          d="M31.8132 38.0675C31.6006 38.1632 31.3605 38.1779 31.1378 38.1089L23.4805 34.8905C22.3473 34.5398 22.6293 33.3739 23.8004 33.5576L32.0845 34.0321C32.3143 34.0682 32.5234 34.1873 32.6721 34.3668L33.691 35.7719C33.8474 36.3821 33.7805 36.6706 33.3469 37.2541L31.8132 38.0675Z"
          fill={color}
        />
        <path
          d="M33.5 60.5L22.5 40.5C28.5 44.1 36.3333 42 39.5 40.5C44.3 32.9 41.5 26.3333 39.5 24C46.8333 27.5 61.4 34.5 61 34.5C59 52.1 41.8333 59.1667 33.5 60.5Z"
          fill="url(#paint0_linear_17828_25544)"
          fill-opacity="0.1"
        />
      </g>
      <rect
        x="0.975633"
        y="0.213914"
        width="60.3238"
        height="60.3238"
        rx="28.9936"
        stroke="#C4C4C4"
        stroke-width="0.427828"
      />
      <defs>
        <linearGradient
          id="paint0_linear_17828_25544"
          x1="41.754"
          y1="24"
          x2="41.754"
          y2="60.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color} />
          <stop offset="1" stop-color={color} stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_17828_25544">
          <rect
            x="0.761719"
            width="60.7516"
            height="60.7516"
            rx="29.2075"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};