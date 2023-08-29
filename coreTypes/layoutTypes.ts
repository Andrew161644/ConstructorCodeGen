import {
  LayoutPropDirection,
  LayoutPropHorizontalAlign,
  LayoutPropVerticalAlign,
} from "@consta/uikit/Layout";
import { BaseProps } from "./types";

export const ConstaColors = [
  "color-bg-default",
  "color-bg-secondary",
  "color-bg-brand",
  "color-bg-link",
  "color-bg-border",
  "color-bg-stripe",
  "color-bg-ghost",
  "color-bg-tone",
  "color-bg-soft",
  "color-bg-system",
  "color-bg-normal",
  "color-bg-success",
  "color-bg-caution",
  "color-bg-warning",
  "color-bg-alert",
  "color-bg-critical",
  "color-typo-primary",
  "color-typo-secondary",
  "color-typo-ghost",
  "color-typo-brand",
  "color-typo-system",
  "color-typo-normal",
  "color-typo-success",
  "color-typo-caution",
  "color-typo-warning",
  "color-typo-alert",
  "color-typo-critical",
  "color-typo-link",
  "color-typo-link-minor",
  "color-typo-link-hover",
  "color-scroll-bg",
  "color-scroll-thumb",
  "color-scroll-thumb-hover",
  "color-control-bg-default",
  "color-control-typo-default",
  "color-control-typo-placeholder",
  "color-control-bg-border-default",
  "color-control-bg-border-default-hover",
  "color-control-bg-border-focus",
  "color-control-bg-focus",
  "color-control-bg-active",
  "color-control-bg-primary",
  "color-control-bg-primary-hover",
  "color-control-typo-primary",
  "color-control-typo-primary-hover",
  "color-control-bg-secondary",
  "color-control-bg-border-secondary",
  "color-control-bg-border-secondary-hover",
  "color-control-typo-secondary",
  "color-control-typo-secondary-hover",
  "color-control-bg-ghost",
  "color-control-bg-ghost-hover",
  "color-control-typo-ghost",
  "color-control-typo-ghost-hover",
  "color-control-bg-clear",
  "color-control-bg-clear-hover",
  "color-control-typo-clear",
  "color-control-typo-clear-hover",
  "color-control-bg-disable",
  "color-control-bg-border-disable",
  "color-control-typo-disable",
  "color-shadow-group-1",
  "color-shadow-group-2",
  "color-shadow-layer-1",
  "color-shadow-layer-2",
  "color-shadow-modal-1",
  "color-shadow-modal-2",
] as const;

export type ConstaColor = (typeof ConstaColors)[number];

// Нет возможности использовать тип импортированный из консты, как это сделано с типом ButtonElementProps, так как нет возможности создать State, содержащий поле типа HTMLElement
// В будущем решим эту проблему, пока что описал вручную
export interface LayoutElementProps {
  flex?: number | "none";
  fixed?: boolean;
  verticalAlign?: LayoutPropVerticalAlign;
  horizontalAlign?: LayoutPropHorizontalAlign;
  direction?: LayoutPropDirection;
}

export type BorderStyle =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";
export type BorderWidth =
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "thin"
  | "medium"
  | "thick";
export type BorderColor = "red" | "black" | "blue" | "yellow";
export type BorderSide =
  | "borderLeft"
  | "borderRight"
  | "borderTop"
  | "borderBottom";

export type JustifyContentProps =
  | "start"
  | "center"
  | "end"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type AlignItems =
  | "normal"
  | "start"
  | "center"
  | "end"
  | "flex-start"
  | "flex-end";
export interface LayoutElementStyles {
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  justifyContent?: JustifyContentProps;
  backgroundColor?: ConstaColor;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  borderColor?: BorderColor;
  alignItems?: AlignItems;
  borderSide?: BorderSide;
}

export interface LayoutElementPropsStyles extends BaseProps {
  constaProps: LayoutElementProps;
  styles?: LayoutElementStyles;
}
