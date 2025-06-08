import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconPlusProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconPlus = (props: IconPlusProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={11} {...props}>
    <path
      fill="#9E7F66"
      d="M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z"
    />
  </svg>
);
export default IconPlus;

