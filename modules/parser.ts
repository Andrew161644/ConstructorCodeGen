import { ComponentModule } from "../coreTypes";

export const parseStringToComponentModule = (json: string) => {
  /// TODO: Убрать as.
  const project = JSON.parse(json) as ComponentModule;
  return project;
};
