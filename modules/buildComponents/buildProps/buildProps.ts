import { TreeItem } from "../../../coreTypes";
import { isGroupElement } from "../../../utils";

import { buildPropsDict } from "./buildPropsDict";

export const buildFormElementProps = (item: TreeItem, tabs: string) => {
  if (isGroupElement(item)) {
    return "";
  }
  return buildPropsDict[item.type](item, tabs);
};

export const buildElementProps = (item: TreeItem, tabs: string) => {
  return buildPropsDict[item.type](item, tabs);
};
