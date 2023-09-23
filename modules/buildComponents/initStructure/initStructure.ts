import { ElementId, TreeItem } from "../../../coreTypes";
import { isGroupElement } from "../../../utils";
import { addFilesIndex } from "./addFilesIndex";
import { addFilesComponent } from "./addFilesComponent";
import { createFolder } from "../../../utils";
import { getItemName } from "./getComponentName";
import { TEMPLATES_PATH } from "../../../paths";
import { Template, Templates } from "../../types";
const fs = require("fs");

export const initStructure = (
  rootPath: string,
  treeMap: Map<ElementId, TreeItem[]>,
  chldrenItems: TreeItem[],
  templateFiles: Templates[]
) => {
  chldrenItems.filter(isGroupElement).forEach((item) => {
    const name = getItemName(item);
    const path = `${rootPath}/${name}`;
    createFolder(path);
    const chidlren = treeMap.get(item.id) || [];
    addFiles(templateFiles, path, name, item, chidlren);
    if (chidlren.length) {
      initStructure(path, treeMap, chidlren, templateFiles);
    }
  });
};

const addFiles = (
  templateFiles: Templates[],
  outputFolder: string,
  name: string,
  element: TreeItem,
  chidlren: TreeItem[]
) => {
  templateFiles.forEach((template) => {
    let fileContent = readTemplate(template);

    switch (template) {
      case Template.Index:
        addFilesIndex(name, outputFolder, fileContent);
        break;
      case Template.Component:
        addFilesComponent(name, outputFolder, fileContent, element, chidlren);
        break;
    }
  });
};

const readTemplate = (tamplate: Templates) => {
  let fileContent = fs.readFileSync(
    `${TEMPLATES_PATH}/${tamplate}.txt`,
    "utf8"
  );
  return fileContent;
};
