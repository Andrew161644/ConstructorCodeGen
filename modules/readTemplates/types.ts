import { Values } from "../../utils";

export const Template = {
  Index: "index",
  Layout: "Layout",
} as const;

export type Templates = Values<typeof Template>;
export const templateList: Templates[] = ["Layout", "index"];
