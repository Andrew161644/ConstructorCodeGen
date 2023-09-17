import { DatePickerProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildDatePickerProps = (item: TreeItem, tabs: string) => {
  if (isPropsTypeOf<DatePickerProps>(item.type, item.props, "DatePicker")) {
    return buildDefaultProps(item.props, tabs);
  }
  return "";
};
