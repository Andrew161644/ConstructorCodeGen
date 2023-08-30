import {
  ComponentTypes,
  FormElementTypes,
  FormGroupsTypes,
} from "../../coreTypes";

export type DependencyKeys = ComponentTypes | "React";

export const baseImports: Record<DependencyKeys, string> = {
  Layout: "import { Layout } from '@consta/uikit/Layout'",
  Button: "import { Button } from '@consta/uikit/Button'",
  React: "import React from 'react'",
};
