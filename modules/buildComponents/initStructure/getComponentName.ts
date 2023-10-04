import { ComponentTypes, TreeItem } from "../../../coreTypes";
import { isGroupElement } from "../../../utils";

export const componentNames: Record<ComponentTypes, string> = {
  Layout: "Layout",
  Button: "Button",
  Checkbox: "Checkbox",
  Badge: "Badge",
  RadioButton: "Radio",
  Switch: "Switch",
  Card: "Card",
  Text: "Text",
  Informer: "Informer",
  ComboBox: "Combobox",
  SelectForm: "Select",
  TextField: "TextField",
  Tabs: "Tabs",
  DatePicker: "DatePicker",
  Tag: 'Tag'
};

export const getComponentName = (componentType: ComponentTypes) => {
  return componentNames[componentType];
};

export const getItemName = (item: TreeItem) => {
  return isGroupElement(item)
    ? `${item.type}_${item.id}`.replaceAll("-", "_")
    : getComponentName(item.type);
};
