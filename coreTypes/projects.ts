import { ButtonProps } from "./buttonTypes";
import { LayoutElementPropsStyles } from "./layoutTypes";
import { CheckboxProps } from "./checkboxTypes";
import { BadgeProps } from "./badgeTypes";
import { RadioButtonProps } from "./radioButtonTypes";
import { SwitchProps } from "./SwitchTypes";
import { TextProps } from "@consta/uikit/Text";
import { CardElementPropsStyles } from "./cardTypes";
import { InformerElementProps } from "./informerTypes";
import { ComboboxProps } from "./comboBoxTypes";

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
  | "ComboBox";

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
  | ComboboxProps;
