import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface PatternDivideProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const PatternDivide = (props: PatternDivideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={71} height={7} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#9E7F66" d="M15 3h56v1H15z" />
      <circle cx={3.5} cy={3.5} r={3} stroke="#9E7F66" />
    </g>
  </svg>
);
export default PatternDivide;

