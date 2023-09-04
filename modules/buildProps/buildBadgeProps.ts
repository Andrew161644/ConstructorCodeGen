import { BadgeProps } from "../../coreTypes";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildBadgeProps = (props: BadgeProps, tabs: string) => {
  return buildDefaultProps(props, tabs);
};
