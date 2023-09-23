import { TreeItem } from "../../../coreTypes";
import { buildFormElementProps } from "../buildProps";
import { getItemName } from "../initStructure";
import { contentBuilderDict } from "./buildContentDict";

export const buildChildComponent = (childItem: TreeItem, propTabs: string) => {
  let content = "";
  const buildContentFunc = contentBuilderDict.get(childItem.type);
  if (buildContentFunc) {
    content = buildContentFunc(childItem);
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
