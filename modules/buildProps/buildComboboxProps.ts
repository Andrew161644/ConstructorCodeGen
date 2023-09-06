import { ComboboxProps } from "../../coreTypes";

export const buildComboboxProps = (props: ComboboxProps, tabs: string) => {
  let propsString = "";
  let key: keyof ComboboxProps;
  for (key in props) {
    const value = props[key];
    if (
      key &&
      key != "baseProps" &&
      // @ts-ignore
      key != "constaProps" &&
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
