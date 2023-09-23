import { TreeItem } from "../../../coreTypes";
import {
  IMPORTS,
  COMPONENT_TYPE,
  COMPONENT_NAME,
} from "../../../templateConstants";
import { TAB2, TAB4 } from "../../indention";
import { buildChildComponent } from "../buildChildComponent";
import { buildImports } from "../buildImports";
import { buildElementProps } from "../buildProps";
import { getComponentName } from "./getComponentName";

const fs = require("fs");

export const addFilesComponent = (
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
      `(\n${TAB2}<${getComponentName(element.type)} ${buildElementProps(
        element,
        `${TAB2}`
      )}/>\n${TAB2});`
    );
  } else {
    let componentCode = `(\n${TAB2}<${getComponentName(
      element.type
    )} ${buildElementProps(element, `${TAB2}`)}>\n`;
    chldrenItems.forEach((childItem) => {
      componentCode += `${TAB4}${buildChildComponent(childItem, `${TAB4}`)}\n`;
    });
    componentCode += `${TAB2}</${getComponentName(element.type)}>\n\t);`;
    content = content?.replaceAll(COMPONENT_TYPE, `${componentCode}`);
  }

  return content;
};
