import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface PatternLinesProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const PatternLines = (props: PatternLinesProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={160} height={76} {...props}>
    <path
      fill="#9E7F66"
      fillRule="evenodd"
      d="M0 70h160v6H0zm0-14h160v6H0zm0-14h160v6H0zm0-14h160v6H0zm0-14h160v6H0zM0 0h160v6H0z"
    />
  </svg>
);
export default PatternLines;

