import { TreeItem } from "../../coreTypes";
import { COMPONENT_NAME, COMPONENT_TYPE, IMPORTS } from "../../templates";
import { getItemName } from "../../utils";
import { buildImports } from "../buildImports";
import { buildGroupElementProps, buildFormElementProps } from "../buildProps";

const fs = require("fs");

export const addFilesLayout = (
  name: string,
  outputFolder: string,
  fileContent: string,
  element: TreeItem,
  chidlren: TreeItem[]
) => {
  const fileName = name + ".tsx";
  const outputFile = `${outputFolder}/${fileName}`;
  const content = replaceContentLayout(fileContent, name, element, chidlren);

  fs.appendFile(outputFile, content, function (err: Error) {
    if (err) {
      console.log(err);
    }
  });
};

const replaceContentLayout = (
  fileContent: string,
  componentName: string,
  element: TreeItem,
  chldrenItems: TreeItem[]
): string => {
  const imports = buildImports(element.type, chldrenItems);

  let content = fileContent?.replaceAll(COMPONENT_NAME, componentName);
  content = content?.replaceAll(IMPORTS, imports);

  if (!chldrenItems.length) {
    content = content?.replaceAll(
      COMPONENT_TYPE,
      `(\n\t\t<${element.type} ${buildGroupElementProps(
        element,
        "\t\t"
      )}/>\n\t\t);`
    );
  } else {
    let componentCode = `(\n\t\t<${element.type} ${buildGroupElementProps(
      element,
      "\t\t"
    )}>\n`;
    chldrenItems.forEach((childItem) => {
      componentCode += `\t\t\t\t<${getItemName(childItem)} `;
      componentCode += buildFormElementProps(childItem, "\t\t\t\t");
      componentCode += "/>\n";
    });
    componentCode += `\t\t</${element.type}>\n\t);`;
    content = content?.replaceAll(COMPONENT_TYPE, `${componentCode}`);
  }

  return content;
};
