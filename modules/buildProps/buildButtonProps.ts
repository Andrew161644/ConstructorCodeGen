import { ButtonProps } from "../../coreTypes";

export const buildButtonProps = (props: ButtonProps, tabs: string) => {
  let propsString = "";
  propsString += `\n${tabs}\tstyle={{ flexGrow: ${props.filled ? 1 : 0} }}`;
  let key: keyof ButtonProps;
  for (key in props) {
    const value = props[key];
    /// Надо подумать как тут типизировать
    if (
      key &&
      key != "baseProps" &&
      value != undefined &&
      key != "filled" &&
      value != "" &&
      Object.keys(value).length != 0
    ) {
      propsString += `\n${tabs}\t${key}={${
        typeof value === "string" ? `'${value}'` : value
      }}`;
    }
  }

  return propsString;
};
