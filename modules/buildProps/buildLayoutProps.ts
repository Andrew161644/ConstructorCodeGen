import { LayoutElementPropsStyles, LayoutElementStyles } from "../../coreTypes";

export const buildLayoutProps = (
  props: LayoutElementPropsStyles,
  tabs: string
) => {
  let propsString = "";
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
  for (const [key, value] of Object.entries(constaProps)) {
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
  return propsString;
};
