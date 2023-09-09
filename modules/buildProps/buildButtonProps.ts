import { ButtonProps, TreeItem } from "../../coreTypes";
import { isPropsTypeOf } from "../../utils";

export const buildButtonProps = (item: TreeItem, tabs: string) => {
  const props = item.props;
  let propsString = "";
  if (isPropsTypeOf<ButtonProps>(item.type, props, "Button")) {
    propsString += `\n${tabs}\tstyle={{ flexGrow: ${props.filled ? 1 : 0} }}`;
    let key: keyof ButtonProps;
    for (key in props) {
      const value = props[key];
      if (
        key &&
        key != "baseProps" &&
        key != "action" &&
        value != undefined &&
        key != "filled" &&
        value != "" &&
        Object.keys(value).length != 0
      ) {
        propsString += `\n${tabs}\t${key}={${
          typeof value === "string" ? `'${value}'` : value
        }}`;
      }
    }
  }

  return propsString;
};
