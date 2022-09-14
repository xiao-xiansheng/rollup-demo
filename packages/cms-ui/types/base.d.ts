import { CSSProperties } from "react";

export interface HbComponent {
  className?: string;
  style?: CSSProperties;
}

export interface HbIconBaseProps extends HbComponent {
  value: string;

  color?: string;

  prefixClass?: string;

  size?: number | string;
}

export default HbComponent;
