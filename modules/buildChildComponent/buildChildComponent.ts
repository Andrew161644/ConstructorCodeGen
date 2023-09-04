import { TreeItem } from "../../coreTypes";
import { buildFormElementProps } from "../buildProps";
import { getItemName } from "../initStructure";

export const buildChildComponent = (childItem: TreeItem, propTabs: string) => {
  return `<${getItemName(childItem)} ${buildFormElementProps(
    childItem,
    propTabs
  )}/>`;
};
