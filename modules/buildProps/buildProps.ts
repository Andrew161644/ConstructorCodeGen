import { TreeItem } from "../../coreTypes";

import { buildPropsDict } from "./buildPropsDict";

export const buildFormElementProps = (item: TreeItem, tabs: string) => {
  return buildPropsDict[item.type](item, tabs);
};

export const buildGroupElementProps = (item: TreeItem, tabs: string) => {
  return buildPropsDict[item.type](item, tabs);
};
