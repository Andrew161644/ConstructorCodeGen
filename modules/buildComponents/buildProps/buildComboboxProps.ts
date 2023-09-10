import { ComboboxProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";

export const buildComboboxProps = (item: TreeItem, tabs: string) => {
  let propsString = "";
  if (isPropsTypeOf<ComboboxProps>(item.type, item.props, "ComboBox")) {
    const props = item.props;
    let key: keyof ComboboxProps;
    for (key in props) {
      const value = props[key];
      if (
        key &&
        key != "baseProps" &&
        // @ts-ignore
        key != "constaProps" &&
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
