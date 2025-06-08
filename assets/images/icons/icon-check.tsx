import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconCheckProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconCheck = (props: IconCheckProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={11} {...props}>
    <path
      fill="none"
      stroke="#9E7F66"
      strokeWidth={2}
      d="m1 5.897 2.767 2.767L11.432 1"
    />
  </svg>
);
export default IconCheck;

