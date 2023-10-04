import { TreeItem } from "../../../coreTypes";
import { isGroupElement } from "../../../utils";

import { buildPropsDict } from "./buildPropsDict";

export const buildFormElementProps = (item: TreeItem, tabs: string) => {
  if (isGroupElement(item)) {
    return "";
  }
  return buildElementProps(item, tabs);
};

export const buildElementProps = (item: TreeItem, tabs: string) => {
  const buildFunc = buildPropsDict[item.type];
  if (buildFunc) {
    return buildFunc(item, tabs)
  } else {
    throw `No build func for type = ${item.type}`
  }
};
