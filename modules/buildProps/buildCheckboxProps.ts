import { CheckboxProps } from "../../coreTypes";

export const buildCheckboxProps = (props: CheckboxProps, tabs: string) => {
  let propsString = "";
  let key: keyof CheckboxProps;
  for (key in props) {
    const value = props[key];
    if (
      key &&
      key != "baseProps" &&
      key != "checked" &&
      value != undefined &&
      value != "" &&
      Object.keys(value).length != 0
    ) {
      propsString += `\n${tabs}\t${key}={${
        typeof value === "string" ? `'${value}'` : value
      }}`;
    }
  }

  if (props.checked) {
    propsString += `\n${tabs}\tchecked={true}`;
  } else {
    propsString += `\n${tabs}\tchecked={false}`;
  }

  return propsString;
};
