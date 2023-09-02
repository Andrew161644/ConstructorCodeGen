import { SwitchProps } from "../../coreTypes";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildSwitchProps = (props: SwitchProps, tabs: string) => {
  return buildDefaultProps(props, tabs);
};
