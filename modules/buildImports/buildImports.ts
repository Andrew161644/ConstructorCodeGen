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

  const visited: Map<string, boolean> = new Map();

  let imports: string = "import React from 'react'\n";
  imports += baseImports[itemType] + "\n";

  dependencyConstaItems.forEach((dep) => {
    if (!visited.has(dep)) {
      imports += `${baseImports[dep]}\n`;
      visited.set(dep, true);
    }
  });

  dependencyGroupItems.forEach((dep) => {
    if (!visited.has(dep)) {
      imports += `import { ${dep} } from './${dep}'\n`;
      visited.set(dep, true);
    }
  });

  return imports;
};
