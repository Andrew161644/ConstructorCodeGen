import { SwitchProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildSwitchProps = (item: TreeItem, tabs: string) => {
  let propsString = "";
  if (isPropsTypeOf<SwitchProps>(item.type, item.props, "Switch")) {
    const props = item.props;
    propsString = buildDefaultProps(props, tabs);
    if (props.checked) {
      propsString += `\n${tabs}\tchecked={true}`;
    } else {
      propsString += `\n${tabs}\tchecked={false}`;
    }
  }
  return propsString;
};
