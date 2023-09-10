import { CheckboxProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";

export const buildCheckboxProps = (item: TreeItem, tabs: string) => {
  let propsString = "";

  if (isPropsTypeOf<CheckboxProps>(item.type, item.props, "Checkbox")) {
    const props = item.props;
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
  }

  return propsString;
};
