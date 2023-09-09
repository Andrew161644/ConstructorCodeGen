import { buildDefaultProps } from "./buildDefaultProps";
import { InformerElementProps, TreeItem } from "../../coreTypes";
import { isPropsTypeOf } from "../../utils";

export const buildInformerProps = (item: TreeItem, tabs: string) => {
  if (isPropsTypeOf<InformerElementProps>(item.type, item.props, "Informer")) {
    return buildDefaultProps(item.props, tabs);
  }
  return "";
};
