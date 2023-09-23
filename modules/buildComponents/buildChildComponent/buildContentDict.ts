import { ComponentTypes, TreeItem } from "../../../coreTypes";
import { buildTextElementContent } from "./buildTextElementContent";

export const contentBuilderDict: Map<
  ComponentTypes,
  (treeItem: TreeItem) => string
> = new Map();

contentBuilderDict.set("Text", buildTextElementContent);
