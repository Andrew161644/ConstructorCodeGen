import { ComponentTypes } from "../../../coreTypes";

export type DependencyKeys = ComponentTypes | "React";

const baseImports: Record<DependencyKeys, string> = {
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
  SelectForm: "import { Select } from '@consta/uikit/Select'",
  TextField: "import { TextField } from '@consta/uikit/TextField'",
  Tabs: "import { Tabs } from '@consta/uikit/Tabs'",
  DatePicker: "import { DatePicker } from '@consta/uikit/DatePicker'",
  Tag: "import { Tag } from '@consta/uikit/Tag'"
};

export const getImport = (key: DependencyKeys) => {
  if (!baseImports[key]) {
    throw `No import for dependency ${key}`
  }
  return baseImports[key]
}
