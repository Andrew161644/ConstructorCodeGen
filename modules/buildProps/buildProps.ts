import {
  BadgeProps,
  ButtonProps,
  CardElementPropsStyles,
  CheckboxProps,
  ComboboxProps,
  InformerElementProps,
  LayoutElementPropsStyles,
  RadioButtonProps,
  SwitchProps,
  TextElementProps,
  TreeItem,
} from "../../coreTypes";
import { isPropsTypeOf } from "../../utils/isPropsTypeOf";
import { buildBadgeProps } from "./buildBadgeProps";
import { buildButtonProps } from "./buildButtonProps";
import { buildCardProps } from "./buildCardProps";
import { buildCheckboxProps } from "./buildCheckboxProps";
import { buildComboboxProps } from "./buildComboboxProps";
import { buildInformerProps } from "./buildInformerProps";
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
  } else if (isPropsTypeOf<TextElementProps>(item.type, item.props, "Text")) {
    return buildTextProps(item.props, tabs);
  } else if (
    isPropsTypeOf<InformerElementProps>(item.type, item.props, "Informer")
  ) {
    return buildInformerProps(item.props, tabs);
  } else if (isPropsTypeOf<ComboboxProps>(item.type, item.props, "ComboBox")) {
    return buildComboboxProps(item.props, tabs);
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
