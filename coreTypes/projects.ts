import { ButtonProps } from "./buttonTypes";
import { FormElementTypes, FormGroupsTypes } from "./types";
import { LayoutElementPropsStyles } from "./layoutTypes";

export type Project = {
  name: string;
  description: string;
  childrenElementList: TreeItem[];
};

export type ElementId = string;

export type TreeItem = {
  id: ElementId;
  type: FormElementTypes | FormGroupsTypes;
  props: ButtonProps | LayoutElementPropsStyles;
  parentId?: ElementId | undefined;
};
