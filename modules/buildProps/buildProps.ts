import { TreeItem } from "../../coreTypes";
import { isButtonProps, isLayoutProps } from "../../utils";
import { buildButtonProps } from "./buildButtonProps";
import { buildLayoutProps } from "./buildLayoutProps";

export const buildFormElementProps = (item: TreeItem, tabs: string) => {
  if (isButtonProps(item.type, item.props)) {
    return buildButtonProps(item.props, tabs);
  }
  return "";
};

export const buildGroupElementProps = (item: TreeItem, tabs: string) => {
  if (isLayoutProps(item.type, item.props)) {
    return buildLayoutProps(item.props, tabs);
  }
  return "";
};
