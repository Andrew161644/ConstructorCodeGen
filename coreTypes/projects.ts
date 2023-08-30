import { ButtonProps } from "./buttonTypes";
import { FormElementTypes, FormGroupsTypes } from "./types";
import { LayoutElementPropsStyles } from "./layoutTypes";

export type ComponentModule = {
  name: string;
  description: string;
  childrenElementList: TreeItem[];
};

export type ElementId = string;

export type TreeItem = {
  id: ElementId;
  type: ComponentTypes;
  props: ButtonProps | LayoutElementPropsStyles;
  parentId?: ElementId | undefined;
};

export type ComponentTypes = FormElementTypes | FormGroupsTypes;
export type AllProps = ButtonProps | LayoutElementPropsStyles;
