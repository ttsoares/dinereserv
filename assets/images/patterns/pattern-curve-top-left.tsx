import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface PatternCurveTopLeftProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const PatternCurveTopLeft = (props: PatternCurveTopLeftProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={895} height={320} {...props}>
    <path
      fill="#5C6779"
      fillRule="evenodd"
      d="M100 0h795v320H0V100C0 44.772 44.772 0 100 0"
      opacity={0.077}
    />
  </svg>
);
export default PatternCurveTopLeft;

