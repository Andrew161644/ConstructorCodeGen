import { BadgeProps, TreeItem } from "../../coreTypes";
import { isPropsTypeOf } from "../../utils";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildBadgeProps = (item: TreeItem, tabs: string) => {
  if (isPropsTypeOf<BadgeProps>(item.type, item.props, "Badge")) {
    return buildDefaultProps(item.props, tabs);
  }
  return "";
};
