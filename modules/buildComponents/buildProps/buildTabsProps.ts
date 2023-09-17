import { TabsElementProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildTabsProps = (item: TreeItem, tabs: string) => {
  if (isPropsTypeOf<TabsElementProps>(item.type, item.props, "Tabs")) {
    const props = item.props;
    let propsString = "";
    let key: keyof TabsElementProps;
    for (key in props) {
      const value = props[key];
      if (
        key &&
        key != "baseProps" &&
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
    return propsString;
  }
  return "";
};
