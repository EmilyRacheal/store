import React, { ComponentProps } from "react";


interface IconProps extends ComponentProps<"svg"> {
  color?: string;
  color2?: string;
  size?: number;
}

export const Icon4: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_17828_25527)">
        <rect
          x="0.761719"
          width="60.7516"
          height="60.7516"
          rx="29.2075"
          fill={color2}
        />
        <path
          d="M42.1311 26.9378H37.1012L32.1349 18.6606C31.8165 18.0239 30.9888 17.8329 30.4158 18.1512C30.2247 18.2786 30.0337 18.4696 29.9064 18.6606L24.9401 26.9378H19.9738C18.8914 26.9378 18 27.8292 18 28.9116C18 29.1026 18 29.2299 18.0637 29.4209L20.8652 39.8629C21.0562 40.6269 21.8202 41.2 22.5843 41.2H39.457C40.2847 41.2 40.9851 40.6269 41.2397 39.8629L44.0412 29.4846C44.2959 28.4022 43.7229 27.3198 42.6405 27.0651C42.4495 27.0014 42.3221 26.9378 42.1311 26.9378Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M31.0523 21.8441L34.1085 26.9378H27.9961L31.0523 21.8441Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M31.0523 37.1251C32.7402 37.1251 34.1085 35.7568 34.1085 34.0689C34.1085 32.381 32.7402 31.0127 31.0523 31.0127C29.3644 31.0127 27.9961 32.381 27.9961 34.0689C27.9961 35.7568 29.3644 37.1251 31.0523 37.1251Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M55.5 48.5L44 27.5L41 41L20.5 40.5C23.3333 51 26.4 60.1 26 60.5C45.2 61.3 53.6667 52.8333 55.5 48.5Z"
          fill="url(#paint0_linear_17828_25527)"
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
          id="paint0_linear_17828_25527"
          x1="38"
          y1="27.5"
          x2="38"
          y2="60.5529"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color} />
          <stop offset="1" stop-color={color} stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_17828_25527">
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
