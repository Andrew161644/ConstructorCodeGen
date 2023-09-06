import { TreeItem } from "../../coreTypes";
import {
  IMPORTS,
  COMPONENT_TYPE,
  COMPONENT_NAME,
} from "../../templateConstants";
import { buildChildComponent } from "../buildChildComponent";
import { buildImports } from "../buildImports";
import { buildGroupElementProps } from "../buildProps";
import { getComponentName } from "./getComponentName";

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

  fs.writeFile(outputFile, content, function (err: Error) {
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
      `(\n\t\t<${getComponentName(element.type)} ${buildGroupElementProps(
        element,
        "\t\t"
      )}/>\n\t\t);`
    );
  } else {
    let componentCode = `(\n\t\t<${getComponentName(
      element.type
    )} ${buildGroupElementProps(element, "\t\t")}>\n`;
    chldrenItems.forEach((childItem) => {
      componentCode += `\t\t\t\t${buildChildComponent(
        childItem,
        "\t\t\t\t"
      )}\n`;
    });
    componentCode += `\t\t</${getComponentName(element.type)}>\n\t);`;
    content = content?.replaceAll(COMPONENT_TYPE, `${componentCode}`);
  }

  return content;
};
