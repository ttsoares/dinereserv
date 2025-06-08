import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface PatternCurveTopRightProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const PatternCurveTopRight = (props: PatternCurveTopRightProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={895} height={320} {...props}>
    <path
      fill="#5C6779"
      fillRule="evenodd"
      d="M795 0H0v320h895V100C895 44.772 850.228 0 795 0"
      opacity={0.077}
    />
  </svg>
);
export default PatternCurveTopRight;

