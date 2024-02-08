import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface skillsItemsType {
  skills: string[];
  educations: string[];
  experiences: string[];
}
