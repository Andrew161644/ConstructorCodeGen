import { TextElementProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";

export const buildTextElementContent = (item: TreeItem) => {
  if (isPropsTypeOf<TextElementProps>(item.type, item.props, "Text")) {
    return item.props.content;
  }
  return "";
};
