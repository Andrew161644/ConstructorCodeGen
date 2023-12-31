import { ComponentTypes, TreeItem } from "../../../coreTypes";
import { buildBadgeProps } from "./buildBadgeProps";
import { buildButtonProps } from "./buildButtonProps";
import { buildCardProps } from "./buildCardProps";
import { buildCheckboxProps } from "./buildCheckboxProps";
import { buildComboboxProps } from "./buildComboboxProps";
import { buildDatePickerProps } from "./buildDatePickerProps";
import { buildInformerProps } from "./buildInformerProps";
import { buildLayoutProps } from "./buildLayoutProps";
import { buildRadioButtonProps } from "./buildRadioButtonProps";
import { buildSelectProps } from "./buildSelectProps";
import { buildSwitchProps } from "./buildSwitchProps";
import { buildTabsProps } from "./buildTabsProps";
import { buildTagProps } from "./buildTagProps";
import { buildTextFieldProps } from "./buildTextFieldProps";
import { buildTextProps } from "./buildTextProps";

export const buildPropsDict: Record<
  ComponentTypes,
  (item: TreeItem, tabs: string) => string
> = {
  Badge: buildBadgeProps,
  Button: buildButtonProps,
  Card: buildCardProps,
  Checkbox: buildCheckboxProps,
  ComboBox: buildComboboxProps,
  Informer: buildInformerProps,
  Layout: buildLayoutProps,
  RadioButton: buildRadioButtonProps,
  SelectForm: buildSelectProps,
  Switch: buildSwitchProps,
  Text: buildTextProps,
  TextField: buildTextFieldProps,
  Tabs: buildTabsProps,
  DatePicker: buildDatePickerProps,
  Tag: buildTagProps
};
