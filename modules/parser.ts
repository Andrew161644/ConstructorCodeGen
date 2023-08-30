import { Project } from "../coreTypes";

export const parseStringToProject = (json: string) => {
  /// TODO: Убрать as.
  const project = JSON.parse(json) as Project;
  return project;
};
