import {
  ComponentTypes,
  AllProps,
  LayoutElementPropsStyles,
} from "../coreTypes";

export function isLayoutProps(
  type: ComponentTypes,
  props: AllProps
): props is LayoutElementPropsStyles {
  return type === "Layout";
}
