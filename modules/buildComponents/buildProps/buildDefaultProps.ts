import { AllProps } from "../../../coreTypes";

export const buildDefaultProps = (props: AllProps, tabs: string) => {
  let propsString = "";
  for (let key in props) {
    /// Надо подумать как тут типизировать
    // @ts-ignore
    const value = props[key];
    if (
      key &&
      key != "baseProps" &&
      value != undefined &&
      key != "constaProps"
    ) {
      propsString += `\n${tabs}\t${key}={${
        typeof value === "string" ? `'${value}'` : value
      }}`;
    }
  }

  return propsString;
};
