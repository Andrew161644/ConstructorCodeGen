import { ButtonProps, CheckboxProps, TreeItem } from "../../coreTypes";
import { isLayoutProps } from "../../utils";
import { isPropsTypeOf } from "../../utils/isPropsTypeOf";
import { buildButtonProps } from "./buildButtonProps";
import { buildDefaultProps } from "./buildDefaultProps";
import { buildLayoutProps } from "./buildLayoutProps";

export const buildFormElementProps = (item: TreeItem, tabs: string) => {
  if (isPropsTypeOf<ButtonProps>(item.type, item.props, "Button")) {
    return buildButtonProps(item.props, tabs);
  } else if (item.type != "Layout") {
    return buildDefaultProps(item.props, tabs);
  }
  return "";
};

export const buildGroupElementProps = (item: TreeItem, tabs: string) => {
  if (isLayoutProps(item.type, item.props)) {
    return buildLayoutProps(item.props, tabs);
  }
  return "";
};
