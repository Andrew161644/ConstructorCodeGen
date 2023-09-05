import { TreeItem } from "../../coreTypes";
import { firstLetterToUppercase } from "../../utils";
import { ComponentState } from "./types";

export const buildStates = (item: TreeItem, tabs: string) => {
  return "";
};

export const buildStatesString = (
  id: string,
  type: string,
  field: string,
  defaultValue: string
) => {
  const upperField = firstLetterToUppercase(field);
  const componentState: ComponentState = {
    stateString: `[${field}_${id}, set${upperField}_${id}] = useState<${type}>(${defaultValue})`,
    setStateCallBack: `const onSet${upperField} = (val: ${type}) => { set${upperField}_${id}(val) }`,
  };
  return componentState;
};
