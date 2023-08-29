import { ElementId, TreeItem } from "../../coreTypes";

export const buildParentChildrenMap = (items: TreeItem[]) => {
  const treeMap = new Map<ElementId, TreeItem[]>();
  const allElementsMap = new Map<ElementId, TreeItem>();
  const rootNodes: TreeItem[] = [];

  items.forEach((item) => {
    if (item.parentId) {
      treeMap.set(item.parentId, [...(treeMap.get(item.parentId) || []), item]);
    } else {
      rootNodes.push(item);
    }
    allElementsMap.set(item.id, item);
  });

  return {
    treeMap: treeMap,
    allElementsMap: allElementsMap,
    rootNodes: rootNodes,
  };
};
