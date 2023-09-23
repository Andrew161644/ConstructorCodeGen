import { Values } from "../utils";

export const Template = {
  Index: "index",
  Component: "Component",
} as const;

export type Templates = Values<typeof Template>;
export const templateList: Templates[] = ["Component", "index"];
