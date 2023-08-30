import { ButtonProps } from "../../coreTypes";

export const buildButtonProps = (props: ButtonProps, tabs: string) => {
  let propsString = "";
  propsString += `\n${tabs}\tstyle={{ flexGrow: ${props.filled ? 1 : 0} }}`;
  for (const [key, value] of Object.entries(props)) {
    /// Надо подумать как тут типизировать
    if (
      key &&
      key != "action" &&
      key != "baseProps" &&
      value != undefined &&
      value != ""
    ) {
      propsString += `\n${tabs}\t${key}={${
        typeof value === "string" ? `'${value}'` : value
      }}`;
    }
  }

  for (const [key, value] of Object.entries(props.baseProps)) {
    if (key) {
      propsString += `\n${tabs}\t${key}={${
        typeof value === "string" ? `'${value}'` : value
      }}`;
    }
  }
  return propsString;
};
