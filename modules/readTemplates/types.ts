import { Values } from "../../utils";

export const Template = {
  Index: "index.txt",
  Layout: "Layout.txt",
} as const;

export type Templates = Values<typeof Template>;
export const templateList: Templates[] = ["Layout.txt", "index.txt"];
