import { TreeItem } from "../coreTypes";

export const isGroupElement = (item: TreeItem) => {
  if (item.type === "Layout") {
    return true;
  }
  return false;
};

export const getItemName = (item: TreeItem) => {
  return isGroupElement(item)
    ? `${item.type}_${item.id}`.replaceAll("-", "_")
    : item.type;
};
