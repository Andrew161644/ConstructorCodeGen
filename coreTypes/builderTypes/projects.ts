import { TextProps } from "@consta/uikit/Text";
import {
  ButtonProps,
  LayoutElementPropsStyles,
  CheckboxProps,
  BadgeProps,
  RadioButtonProps,
  SwitchProps,
  CardElementPropsStyles,
  InformerElementProps,
  ComboboxProps,
  SelectProps,
  TextFieldProps,
  TabsElementProps,
  DatePickerProps,
  TagProps,
  TextElementProps,
} from "../constructorTypes";
import { Values } from "../../utils";

export type ComponentModule = {
  name: string;
  description: string;
  childrenElementList: TreeItem[];
};

export type ElementId = string;

export type TreeItem = {
  id: ElementId;
  type: ComponentTypes;
  props: AllProps;
  parentId?: ElementId | undefined;
};

// Чтобы имплементировать все
export const ComponentType = {
  Button: "Button",
  Checkbox: "Checkbox",
  Layout: "Layout",
  Badge: "Badge",
  RadioButton: "RadioButton",
  Switch: "Switch",
  Text: "Text",
  Card: "Card",
  Informer: "Informer",
  ComboBox: "ComboBox",
  SelectForm: "SelectForm",
  TextField: "TextField",
  Tabs: "Tabs",
  DatePicker: "DatePicker",
  Tag: 'Tag'
} as const;

export type ComponentTypes = Values<typeof ComponentType>;

export type AllProps =
  | ButtonProps
  | LayoutElementPropsStyles
  | CheckboxProps
  | BadgeProps
  | RadioButtonProps
  | SwitchProps
  | TextProps
  | CardElementPropsStyles
  | InformerElementProps
  | ComboboxProps
  | SelectProps
  | TextElementProps
  | TextFieldProps
  | TabsElementProps
  | DatePickerProps
  | TagProps;
