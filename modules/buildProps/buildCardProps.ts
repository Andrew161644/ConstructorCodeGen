import { Props } from "@consta/uikit/Card";
import { CardElementPropsStyles, CardElementStyles } from "../../coreTypes";

export const buildCardProps = (props: CardElementPropsStyles, tabs: string) => {
  let propsString = "";
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
  return propsString;
};
