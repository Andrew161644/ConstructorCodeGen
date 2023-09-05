import { TreeItem } from "../coreTypes";

export const isGroupElement = (item: TreeItem) => {
  if (item.type === "Layout" || item.type === "Card") {
    return true;
  }
  return false;
};
