import { Project } from "../coreTypes";

export const parseStringToProject = (json: string) => {
  const project = JSON.parse(json) as Project;
  return project;
};
