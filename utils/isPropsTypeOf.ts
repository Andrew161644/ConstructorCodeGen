import { AllProps, ComponentTypes } from "../coreTypes";

export function isPropsTypeOf<T extends AllProps>(
  type: ComponentTypes,
  props: AllProps,
  check: ComponentTypes
): props is T {
  return type === check;
}
