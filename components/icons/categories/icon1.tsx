import React, { ComponentProps } from "react";

interface IconProps extends ComponentProps<"svg"> {
  color?: string;
  color2?: string;
  size?: number;
}

export const Icon1: React.FC<IconProps> = ({
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
      <rect
        x="0.78032"
        y="0.213914"
        width="60.3238"
        height="60.3238"
        rx="28.9936"
        fill={color}
      />
      <path
        d="M31.5 55.5L20.5 35.5C26.5 39.1 34.3333 37 37.5 35.5C42.3 27.9 39.5 21.3333 37.5 19C44.8333 22.5 59.4 29.5 59 29.5C57 47.1 39.8333 54.1667 31.5 55.5Z"
        fill="url(#paint0_linear_17828_25507)"
        fill-opacity="0.1"
      />
      <path
        d="M40.5667 25.7032V40.8913H20.8633V25.7032"
        stroke={color2}
        stroke-width="2.33662"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.7577 19.8623H18.6758V25.7039H42.7577V19.8623Z"
        stroke={color2}
        stroke-width="2.33662"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.5234 30.3779H32.902"
        stroke={color2}
        stroke-width="2.33662"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="0.78032"
        y="0.213914"
        width="60.3238"
        height="60.3238"
        rx="28.9936"
        stroke="#979797"
        stroke-width="0.427828"
      />
      <defs>
        <linearGradient
          id="paint0_linear_17828_25507"
          x1="39.754"
          y1="19"
          x2="39.754"
          y2="55.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color} />
          <stop offset="1" stop-color={color} stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
