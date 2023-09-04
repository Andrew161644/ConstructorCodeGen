import { TextElementProps } from "../../coreTypes";

export const buildTextProps = (props: TextElementProps, tabs: string) => {
  let propsString = "";
  let key: keyof TextElementProps;
  for (key in props) {
    const value = props[key];
    /// Надо подумать как тут типизировать
    if (
      key &&
      key != "baseProps" &&
      key != "content" &&
      value != undefined &&
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
