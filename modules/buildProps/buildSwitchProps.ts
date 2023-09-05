import { SwitchProps } from "../../coreTypes";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildSwitchProps = (props: SwitchProps, tabs: string) => {
  let propsString = buildDefaultProps(props, tabs);
  if (props.checked) {
    propsString += `\n${tabs}\tchecked={true}`;
  } else {
    propsString += `\n${tabs}\tchecked={false}`;
  }
  return propsString;
};
