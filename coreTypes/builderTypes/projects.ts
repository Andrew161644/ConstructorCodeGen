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
} from "../constructorTypes";

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
// export type ComponentTypes = FormElementTypes | FormGroupsTypes;
export type ComponentTypes =
  | "Button"
  | "Checkbox"
  | "Layout"
  | "Badge"
  | "RadioButton"
  | "Switch"
  | "Text"
  | "Card"
  | "Informer"
  | "ComboBox"
  | "SelectForm"
  | "TextField";

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
  | TextFieldProps;
