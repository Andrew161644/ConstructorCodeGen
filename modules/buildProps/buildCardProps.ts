import { Props } from "@consta/uikit/Card";
import { CardElementPropsStyles, TreeItem } from "../../coreTypes";
import { isPropsTypeOf } from "../../utils";

export const buildCardProps = (item: TreeItem, tabs: string) => {
  let propsString = "";
  if (isPropsTypeOf<CardElementPropsStyles>(item.type, item.props, "Card")) {
    const props = item.props;
    const constaProps = props.constaProps;
    let key: keyof Props;
    for (key in constaProps) {
      const value = constaProps[key];
      propsString += `\n${tabs}\t${key}={${
        typeof value === "string" ? `'${value}'` : value
      }}`;
    }
    if (props.className) {
      propsString += `\n${tabs}\tclassName={"${props.className}"}`;
    }

    if (props.styles) {
      const cardStyles = props.styles;
      const style = { ...cardStyles, display: "flex" };
      propsString += `\n${tabs}\tstyle={${JSON.stringify(style)}}`;
    }
  }
  return propsString;
};
