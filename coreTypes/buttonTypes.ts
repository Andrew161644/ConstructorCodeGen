import { iconNames } from "./iconTypes";
import { BaseProps, IFormElement, IGroupElement } from "./types";
import { Props } from "@consta/uikit/Button";

///  | 'RightSidebar' | 'LeftSidebar'
export type ButtonAction = "none" | "ButtonModal";

interface Filled {
  filled: string;
}

export interface ButtonProps extends BaseProps, Props, Filled {
  action: ButtonAction;
  icon?: iconNames;
  iconR?: iconNames;
}

export const buttonActions: ButtonAction[] = ["none", "ButtonModal"];
export const buttonActionsActive = ["ButtonModal"];

export interface IFormElementButton extends IFormElement {
  props: ButtonProps;
}

export const defaultHeight = "400px";
export const defaultWidth = "400px";

export interface ButtonGroupProps extends BaseProps {
  height: string;
  width: string;
}

export interface IButtonActionElement extends IGroupElement {
  connectedButtonId: string;
}

export interface IButtonModalElement extends IButtonActionElement {
  id: string;
  props: ButtonGroupProps;
}
