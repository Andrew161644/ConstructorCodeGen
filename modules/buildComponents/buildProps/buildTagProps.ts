import { TagProps, TreeItem } from "../../../coreTypes";
import { isPropsTypeOf } from "../../../utils";
import { buildDefaultProps } from "./buildDefaultProps";

export const buildTagProps = (item: TreeItem, tabs: string) => {
    if (isPropsTypeOf<TagProps>(item.type, item.props, "Tag")) {
      return buildDefaultProps(item.props, tabs);
    }
    return "";
  };
  