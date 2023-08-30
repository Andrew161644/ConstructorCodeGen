import { ComponentTypes, AllProps, ButtonProps } from "../coreTypes";

export function isButtonProps(
  type: ComponentTypes,
  props: AllProps
): props is ButtonProps {
  return type === "Button";
}
