import { ComponentTypes, TreeItem } from "../../coreTypes";
import { getItemName, isGroupElement } from "../../utils/isGroupElement";
import { buildImports } from "../buildImports";
const fs = require("fs");

export const addFilesLayout = (
  name: string,
  outputFolder: string,
  fileContent: string,
  elementType: ComponentTypes,
  chidlren: TreeItem[]
) => {
  const fileName = name + ".tsx";
  const outputFile = `${outputFolder}/${fileName}`;
  const content = replaceContentLayout(
    fileContent,
    name,
    elementType,
    chidlren
  );

  fs.appendFile(outputFile, content, function (err: Error) {
    if (err) {
      console.log(err);
    }
  });
};

const replaceContentLayout = (
  fileContent: string,
  componentName: string,
  elementType: ComponentTypes,
  chldrenItems: TreeItem[]
): string => {
  const imports = buildImports(elementType, chldrenItems);

  let content = fileContent?.replaceAll("?%ComponentName?%", componentName);
  content = content?.replaceAll("?%Imports%?", imports);

  if (!chldrenItems.length) {
    content = content?.replaceAll("?%ComponentType?%", `<${elementType}/>`);
  } else {
    let componentCode = `(\n\t\t<${elementType}>\n`;
    chldrenItems.forEach((childItem) => {
      componentCode += `\t\t\t<${getItemName(childItem)}/>\n`;
    });
    componentCode += `\t\t</${elementType}>\n\t);`;
    content = content?.replaceAll("?%ComponentType?%", `${componentCode}`);
  }

  return content;
};
