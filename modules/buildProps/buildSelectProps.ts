import { SelectProps } from "../../coreTypes";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildSelectProps = (props: SelectProps, tabs: string) => {
  let propsString = "";
  let key: keyof SelectProps;
  for (key in props) {
    const value = props[key];
    if (
      key &&
      key != "baseProps" &&
      // Что то лишее в json
      // @ts-ignore
      key != "constaProps" &&
      // Что то лишее в json
      // @ts-ignore
      key != "content" &&
      key != "items" &&
      key != "value" &&
      value != undefined
    ) {
      propsString += `\n${tabs}\t${key}={${
        typeof value === "string" ? `'${value}'` : value
      }}`;
    }
  }
  propsString += `\n${tabs}\titems={${JSON.stringify(props.items)}}`;
  propsString += `\n${tabs}\tvalue={${JSON.stringify(props.value)}}`;
  return propsString;
};
