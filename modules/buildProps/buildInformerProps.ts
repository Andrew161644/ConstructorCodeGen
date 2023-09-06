import { buildDefaultProps } from "./buildDefaultProps";
import { InformerElementProps } from "../../coreTypes";

export const buildInformerProps = (
  props: InformerElementProps,
  tabs: string
) => {
  return buildDefaultProps(props, tabs);
};
