import { ComponentTypes, TreeItem } from "../../coreTypes";
import { isGroupElement } from "../../utils";

export const componentNames: Record<ComponentTypes, string> = {
  Layout: "Layout",
  Button: "Button",
  Checkbox: "Checkbox",
  Badge: "Badge",
  RadioButton: "Radio",
  Switch: "Switch",
  Text: "Text",
};

export const getComponentName = (componentType: ComponentTypes) => {
  return componentNames[componentType];
};

export const getItemName = (item: TreeItem) => {
  return isGroupElement(item)
    ? `${item.type}_${item.id}`.replaceAll("-", "_")
    : getComponentName(item.type);
};
