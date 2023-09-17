import {
  LayoutElementProps,
  LayoutElementPropsStyles,
  LayoutElementStyles,
  TreeItem,
} from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";

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

export const buildLayoutProps = (item: TreeItem, tabs: string) => {
  let propsString = "";
  if (
    isPropsTypeOf<LayoutElementPropsStyles>(item.type, item.props, "Layout")
  ) {
    const props = item.props;
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
      const objectStyle: any = {
        backgroundColor: styles?.backgroundColor
          ? `var(--${styles?.backgroundColor})`
          : undefined,
        overflow: "hidden",
        transition: "none",
      };
      let key: keyof LayoutElementStyles;
      for (key in styles) {
        if (
          key != "backgroundColor" &&
          key != "borderSide" &&
          key != "borderWidth" &&
          key != "borderStyle" &&
          key != "borderColor"
        ) {
          objectStyle[key] = styles[key];
        }
      }

      if (styles.borderSide) {
        const borderStyles = ActiveSide(styles);
        for (let key in borderStyles) {
          if (
            key != "borderSide" &&
            key != "borderWidth" &&
            key != "borderStyle" &&
            key != "borderColor"
          ) {
            objectStyle[key] = borderStyles[key];
          }
        }
      }

      propsString += `\n${tabs}\tstyle={${JSON.stringify(objectStyle)}}`;
    }
  }

  return propsString;
};
