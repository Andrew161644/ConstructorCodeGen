import { TreeItem } from "../coreTypes";

export const isGroupElement = (item: TreeItem) => {
  if (item.type === "Layout") {
    return true;
  }
  return false;
};
