import { RadioButtonProps } from "../../coreTypes";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildRadioButtonProps = (
  props: RadioButtonProps,
  tabs: string
) => {
  return buildDefaultProps(props, tabs);
};
