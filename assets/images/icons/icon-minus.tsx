import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconMinusProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconMinus = (props: IconMinusProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={3} {...props}>
    <path fill="#9E7F66" d="M6.425 2.977V.601H.629v2.376z" />
  </svg>
);
export default IconMinus;

