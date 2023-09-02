import { ComponentTypes } from "../../coreTypes";

export type DependencyKeys = ComponentTypes | "React";

export const baseImports: Record<DependencyKeys, string> = {
  Layout: "import { Layout } from '@consta/uikit/Layout'",
  Button: "import { Button } from '@consta/uikit/Button'",
  Checkbox: "import { Checkbox } from '@consta/uikit/Checkbox'",
  Badge: "import { Badge } from '@consta/uikit/Badge'",
  RadioButton: "import { Radio } from '@consta/uikit/Radio'",
  Switch: "import { Switch } from '@consta/uikit/Switch'",
  // Text: "import { Text } from '@consta/uikit/Text'",
  React: "import React from 'react'",
};
