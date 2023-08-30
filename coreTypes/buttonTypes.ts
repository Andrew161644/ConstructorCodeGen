import { Props } from "@consta/uikit/Button";
import { BaseProps, IFormElement, IGroupElement, Filled } from "./types";

export type ButtonAction = "none" | "ButtonModal";

export interface ButtonProps extends BaseProps, Props, Filled {}

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
