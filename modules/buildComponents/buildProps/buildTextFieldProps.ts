import { TextFieldProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";

export const buildTextFieldProps = (item: TreeItem, tabs: string) => {
  if (isPropsTypeOf<TextFieldProps>(item.type, item.props, "TextField")) {
    let propsString = "";
    const props = item.props;
    let key: keyof TextFieldProps;
    for (key in props) {
      const value = props[key];
      if (
        key &&
        key != "baseProps" &&
        value != undefined &&
        //@ts-ignore
        key != "constaProps"
      ) {
        propsString += `\n${tabs}\t${key}={${
          typeof value === "string" ? `'${value}'` : value
        }}`;
      }
    }

    return propsString;
  }
  return "";
};
