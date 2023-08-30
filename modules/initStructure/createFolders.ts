import { ElementId, TreeItem } from "../../coreTypes";
import { isGroupElement } from "../../utils";

const fs = require("fs");

const addFiles = (
  templateDir: string,
  templateFiles: string[],
  outputFolder: string,
  name: string,
  elementType: string,
  chidlren: TreeItem[]
) => {
  templateFiles.forEach((inputFile) => {
    let fileContent = fs.readFileSync(`${templateDir}/${inputFile}`, "utf8");

    if (inputFile === "Component.txt") {
      const fileName = name + ".tsx";
      const outputFile = `${outputFolder}/${fileName}`;
      const content = replaceContent(fileContent, name, elementType, chidlren);

      fs.appendFile(outputFile, content, function (err: Error) {
        if (err) {
          console.log(err);
        }
      });
    } else if (inputFile === "index.txt") {
      const fileName = "index.ts";
      const outputFile = `${outputFolder}/${fileName}`;
      let content = fileContent.replaceAll("?%ComponentName?%", name);
      content = content.replaceAll("?%Path?%", name);

      fs.appendFile(outputFile, content, function (err: Error) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
};

const replaceContent = (
  fileContent: string,
  componentName: string,
  elementType: string,
  chldrenItems: TreeItem[]
): string => {
  let content = fileContent?.replaceAll("?%ComponentName?%", componentName);
  if (!chldrenItems.length) {
    content = content?.replaceAll("?%ComponentType?%", `<${elementType}/>`);
  } else {
    let componentCode = `(\n\t\t<${elementType}>\n`;
    chldrenItems.forEach((childItem) => {
      if (isGroupElement(childItem)) {
        componentCode += `\t\t\t<${childItem.type}_${childItem.id}/>\n`;
      } else {
        componentCode += `\t\t\t<${childItem.type}/>\n`;
      }
    });
    componentCode += `\t\t</${elementType}>\n\t);`;
    content = content?.replaceAll("?%ComponentType?%", `${componentCode}`);
  }

  return content;
};

const addProps = (chldrenItems: TreeItem[]) => {};

export const createFolder = (folderName: string) => {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
};

export const initStructure = (
  rootPath: string,
  treeMap: Map<ElementId, TreeItem[]>,
  chldrenItems: TreeItem[],
  templateDir: string,
  templateFiles: string[]
) => {
  chldrenItems.filter(isGroupElement).forEach((item) => {
    const name = `${item.type}_${item.id}`.replaceAll("-", "_");
    const path = `${rootPath}/${name}`;
    createFolder(path);
    const chidlren = treeMap.get(item.id) || [];
    addFiles(templateDir, templateFiles, path, name, item.type, chidlren);
    if (chidlren.length) {
      initStructure(path, treeMap, chidlren, templateDir, templateFiles);
    }
  });
};
