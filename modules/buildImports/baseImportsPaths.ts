import { ComponentTypes } from "../../coreTypes";

export type DependencyKeys = ComponentTypes | "React";

export const baseImports: Record<DependencyKeys, string> = {
  Layout: "import { Layout } from '@consta/uikit/Layout'",
  Button: "import { Button } from '@consta/uikit/Button'",
  Checkbox: "import { Checkbox } from '@consta/uikit/Checkbox'",
  Badge: "import { Badge } from '@consta/uikit/Badge'",
  RadioButton: "import { Radio } from '@consta/uikit/Radio'",
  Switch: "import { Switch } from '@consta/uikit/Switch'",
  Text: "import { Text } from '@consta/uikit/Text'",
  Card: "import { Card } from '@consta/uikit/Card'",
  React: "import React from 'react'",
  Informer: "import { Informer } from '@consta/uikit/Informer'",
  ComboBox: "import { Combobox } from '@consta/uikit/Combobox'",
};
