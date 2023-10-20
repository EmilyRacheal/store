import React, { ComponentProps } from "react";

interface IconProps extends ComponentProps<"svg"> {
  color?: string;
  color2?: string;
  size?: number;
}

export const Icon5: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_17828_25536)">
        <rect
          x="0.761719"
          width="60.7516"
          height="60.7516"
          rx="29.2075"
          fill={color2}
        />
        <path
          d="M57.5 45L39.5 27.5L40 34L32 41.5L22.5 33L32 60.5L46 57C54.8 51.8 57.3333 46.8333 57.5 45Z"
          fill="url(#paint0_linear_17828_25536)"
          fill-opacity="0.1"
        />
        <path
          d="M31.79 40L22 30.21V32.21C22 32.74 22.21 33.25 22.59 33.62L30.38 41.41C31.16 42.19 32.43 42.19 33.21 41.41L39.42 35.2C40.2 34.42 40.2 33.15 39.42 32.37L31.79 40Z"
          fill={color}
        />
        <path
          d="M26.25 24.5C26.9404 24.5 27.5 23.9404 27.5 23.25C27.5 22.5596 26.9404 22 26.25 22C25.5596 22 25 22.5596 25 23.25C25 23.9404 25.5596 24.5 26.25 24.5Z"
          fill={color}
        />
        <path
          d="M30.38 36.41C30.77 36.8 31.28 37 31.79 37C32.3 37 32.81 36.8 33.2 36.41L39.41 30.2C40.19 29.42 40.19 28.15 39.41 27.37L31.62 19.58C31.25 19.21 30.74 19 30.21 19H24C22.9 19 22 19.9 22 21V27.21C22 27.74 22.21 28.25 22.59 28.62L30.38 36.41ZM24 21H30.21L38 28.79L31.79 35L24 27.21V21Z"
          fill={color}
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
          id="paint0_linear_17828_25536"
          x1="40"
          y1="27.5"
          x2="40"
          y2="57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color} />
          <stop offset="1" stop-color={color} stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_17828_25536">
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
