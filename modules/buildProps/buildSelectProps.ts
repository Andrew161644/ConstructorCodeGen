import { SelectProps, TreeItem } from "../../coreTypes";
import { isPropsTypeOf } from "../../utils";

export const buildSelectProps = (item: TreeItem, tabs: string) => {
  let propsString = "";
  if (isPropsTypeOf<SelectProps>(item.type, item.props, "SelectForm")) {
    const props = item.props;
    let propsString = "";
    let key: keyof SelectProps;
    for (key in props) {
      const value = props[key];
      if (
        key &&
        key != "baseProps" &&
        // Что то лишее в json
        // @ts-ignore
        key != "constaProps" &&
        // Что то лишее в json
        // @ts-ignore
        key != "content" &&
        key != "items" &&
        key != "value" &&
        value != undefined
      ) {
        propsString += `\n${tabs}\t${key}={${
          typeof value === "string" ? `'${value}'` : value
        }}`;
      }
    }
    propsString += `\n${tabs}\titems={${JSON.stringify(props.items)}}`;
    propsString += `\n${tabs}\tvalue={${JSON.stringify(props.value)}}`;
  }
  return propsString;
};
