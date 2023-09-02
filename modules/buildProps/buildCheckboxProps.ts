import { CheckboxProps } from "../../coreTypes";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildCheckboxProps = (props: CheckboxProps, tabs: string) => {
  return buildDefaultProps(props, tabs);
};
