import { ComponentTypes, TreeItem } from "../../coreTypes";
import { isGroupElement } from "../../utils";
import { getItemName } from "../initStructure";
import { baseImports } from "./baseImportsPaths";

export const buildImports = (
  itemType: ComponentTypes,
  chldrenItems: TreeItem[]
) => {
  const dependencyGroupItems = chldrenItems
    .filter(isGroupElement)
    .map(getItemName);

  const dependencyConstaItems = chldrenItems
    .filter((item) => !isGroupElement(item))
    .map((item) => item.type);

  const improted: Set<string> = new Set();

  let imports: string = "import React from 'react'\n";
  imports += baseImports[itemType] + "\n";

  dependencyConstaItems.forEach((dep) => {
    if (!improted.has(dep)) {
      imports += `${baseImports[dep]}\n`;
      improted.add(dep);
    }
  });

  dependencyGroupItems.forEach((dep) => {
    if (!improted.has(dep)) {
      imports += `import { ${dep} } from './${dep}'\n`;
      improted.add(dep);
    }
  });

  return imports;
};
