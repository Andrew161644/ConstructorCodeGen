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
    propsString += `\n${tabs}\tclassname={${props.className}}`;
  }
  if (props.styles) {
    const style = {
      ...props?.styles,
      ...(props?.styles?.borderSide && ActiveSide(props.styles)),
      backgroundColor: `var(--${props?.styles?.backgroundColor})`,
      overflow: "hidden",
      transition: "none",
    };
  }
  return propsString;
};
