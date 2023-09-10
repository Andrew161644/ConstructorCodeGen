import { TextElementProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";
import { buildChildContentText } from "../buildChildContent";
import { buildFormElementProps } from "../buildProps";
import { getItemName } from "../initStructure";

export const buildChildComponent = (childItem: TreeItem, propTabs: string) => {
  let content = "";
  if (
    isPropsTypeOf<TextElementProps>(childItem.type, childItem.props, "Text")
  ) {
    content = buildChildContentText(childItem.props);
  }
  return content == ""
    ? `<${getItemName(childItem)} ${buildFormElementProps(
        childItem,
        propTabs
      )}/>`
    : `<${getItemName(childItem)} ${buildFormElementProps(
        childItem,
        propTabs
      )}>${content}</${getItemName(childItem)}>`;
};
