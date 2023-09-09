import { TextElementProps, TreeItem } from "../../coreTypes";
import { isPropsTypeOf } from "../../utils";

export const buildTextProps = (item: TreeItem, tabs: string) => {
  let propsString = "";
  if (isPropsTypeOf<TextElementProps>(item.type, item.props, "Text")) {
    const props = item.props;
    let key: keyof TextElementProps;
    for (key in props) {
      const value = props[key];
      /// Надо подумать как тут типизировать
      if (
        key &&
        key != "baseProps" &&
        key != "content" &&
        value != undefined &&
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
