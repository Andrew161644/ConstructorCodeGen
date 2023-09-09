import {
  LayoutElementProps,
  LayoutElementPropsStyles,
  LayoutElementStyles,
  TreeItem,
} from "../../coreTypes";
import { isPropsTypeOf } from "../../utils";

export const buildLayoutProps = (item: TreeItem, tabs: string) => {
  let propsString = "";
  if (
    isPropsTypeOf<LayoutElementPropsStyles>(item.type, item.props, "Layout")
  ) {
    const props = item.props;
    const ActiveSide = ({
      borderColor,
      borderSide,
      borderStyle,
      borderWidth,
    }: LayoutElementStyles) => {
      const sideCss = {
        [`${borderSide}Width`]: borderWidth,
        [`${borderSide}Style`]: borderStyle,
        [`${borderSide}Color`]: borderColor,
        borderWidth: "",
        borderStyle: "",
        borderColor: "",
      };
      return sideCss;
    };
    const constaProps = props.constaProps;
    let key: keyof LayoutElementProps;
    for (key in constaProps) {
      const value = constaProps[key];
      propsString += `\n${tabs}\t${key}={${
        typeof value === "string" ? `'${value}'` : value
      }}`;
    }
    if (props.className) {
      propsString += `\n${tabs}\tclassName={"${props.className}"}`;
    }
    const styles = props.styles;
    if (styles) {
      const style = {
        ...styles,
        ...(styles.borderSide && ActiveSide(styles)),
        backgroundColor: styles?.backgroundColor
          ? `var(--${styles?.backgroundColor})`
          : undefined,
        overflow: "hidden",
        transition: "none",
      };
      propsString += `\n${tabs}\tstyle={${JSON.stringify(style)}}`;
    }
  }

  return propsString;
};
