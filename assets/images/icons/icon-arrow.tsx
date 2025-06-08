import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconArrowProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconArrow = (props: IconArrowProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} {...props}>
    <path fill="none" stroke="#9E7F66" strokeWidth={2} d="m1 1 8 8 8-8" />
  </svg>
);
export default IconArrow;

