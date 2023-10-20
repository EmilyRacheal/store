import React from "react";

interface Prop {
  size?: string;
}

export const AddIcon: React.FC<Prop> = ({ size }) => {
  return (
    <div>
      <svg
        width={size || "40"}
        height={size || "40"}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_17284_17419)">
          <path
            d="M20.0783 4.06445C11.2052 4.06445 4.00391 11.2658 4.00391 20.1389C4.00391 29.0119 11.2052 36.2133 20.0783 36.2133C28.9514 36.2133 36.1527 29.0119 36.1527 20.1389C36.1527 11.2658 28.9514 4.06445 20.0783 4.06445ZM28.1155 21.7463H21.6858V28.1761H18.4709V21.7463H12.0411V18.5314H18.4709V12.1017H21.6858V18.5314H28.1155V21.7463Z"
            fill="#155F5B"
          />
        </g>
        <defs>
          <clipPath id="clip0_17284_17419">
            <rect
              width="38.5786"
              height="38.5786"
              fill="white"
              transform="translate(0.792969 0.849609)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
