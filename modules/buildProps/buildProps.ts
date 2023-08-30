import { TreeItem } from "../../coreTypes";
import { LayoutElementStyles } from "../../coreTypes/layoutTypes";
import { isButtonProps, isLayoutProps } from "../../utils";
import { buildButtonProps } from "./buildButtonProps";
import { buildLayoutProps } from "./buildLayoutProps";

export const buildProps = (item: TreeItem, tabs: string) => {
  if (isLayoutProps(item.type, item.props)) {
    return buildLayoutProps(item.props, tabs);
  }
  if (isButtonProps(item.type, item.props)) {
    return buildButtonProps(item.props, tabs);
  }
  return "";
};
