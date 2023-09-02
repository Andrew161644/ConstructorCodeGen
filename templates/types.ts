import { Values } from "../utils";

export const IMPORTS = "?%IMPORTS%?";
export const COMPONENT_NAME = "?%COMPONENT_NAME?%";
export const COMPONENT_TYPE = "?%COMPONENT_TYPE?%";
export const PATH = "?%PATH?%";

export const Template = {
  Index: "index",
  Layout: "Layout",
} as const;

export type Templates = Values<typeof Template>;
export const templateList: Templates[] = ["Layout", "index"];
