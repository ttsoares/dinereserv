import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface PatternCurveBottomRightProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const PatternCurveBottomRight = (props: PatternCurveBottomRightProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={993} height={320} {...props}>
    <path
      fill="#5C6779"
      fillRule="evenodd"
      d="M893 320H0V0h993v220c0 55.228-44.772 100-100 100"
      opacity={0.077}
    />
  </svg>
);
export default PatternCurveBottomRight;

