import { RadioButtonProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildRadioButtonProps = (item: TreeItem, tabs: string) => {
  if (isPropsTypeOf<RadioButtonProps>(item.type, item.props, "RadioButton")) {
    return buildDefaultProps(item.props, tabs);
  }
  return "";
};
