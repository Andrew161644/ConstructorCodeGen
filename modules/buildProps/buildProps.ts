import {
  BadgeProps,
  ButtonProps,
  CardElementProps,
  CardElementPropsStyles,
  CheckboxProps,
  LayoutElementProps,
  LayoutElementPropsStyles,
  RadioButtonProps,
  SwitchProps,
  TextElementProps,
  TreeItem,
} from "../../coreTypes";
import { isLayoutProps } from "../../utils";
import { isPropsTypeOf } from "../../utils/isPropsTypeOf";
import { buildBadgeProps } from "./buildBadgeProps";
import { buildButtonProps } from "./buildButtonProps";
import { buildCardProps } from "./buildCardProps";
import { buildCheckboxProps } from "./buildCheckboxProps";
import { buildLayoutProps } from "./buildLayoutProps";
import { buildRadioButtonProps } from "./buildRadioButtonProps";
import { buildSwitchProps } from "./buildSwitchProps";
import { buildTextProps } from "./buildTextProps";

///TODO: Можно упростить завести словарь функций
export const buildFormElementProps = (item: TreeItem, tabs: string) => {
  if (isPropsTypeOf<ButtonProps>(item.type, item.props, "Button")) {
    return buildButtonProps(item.props, tabs);
  } else if (isPropsTypeOf<CheckboxProps>(item.type, item.props, "Checkbox")) {
    return buildCheckboxProps(item.props, tabs);
  } else if (isPropsTypeOf<SwitchProps>(item.type, item.props, "Switch")) {
    return buildSwitchProps(item.props, tabs);
  } else if (
    isPropsTypeOf<RadioButtonProps>(item.type, item.props, "RadioButton")
  ) {
    return buildRadioButtonProps(item.props, tabs);
  } else if (isPropsTypeOf<BadgeProps>(item.type, item.props, "Badge")) {
    return buildBadgeProps(item.props, tabs);
  }
  if (isPropsTypeOf<TextElementProps>(item.type, item.props, "Text")) {
    return buildTextProps(item.props, tabs);
  }
  return "";
};

export const buildGroupElementProps = (item: TreeItem, tabs: string) => {
  if (
    isPropsTypeOf<LayoutElementPropsStyles>(item.type, item.props, "Layout")
  ) {
    return buildLayoutProps(item.props, tabs);
  } else if (
    isPropsTypeOf<CardElementPropsStyles>(item.type, item.props, "Card")
  ) {
    return buildCardProps(item.props, tabs);
  }
  return "";
};
