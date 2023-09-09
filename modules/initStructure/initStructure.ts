import { ElementId, TreeItem } from "../../coreTypes";
import { isGroupElement } from "../../utils";
import { Template, Templates, readTemplate } from "../readTemplates";
import { addFilesIndex } from "./addFilesIndex";
import { addFilesLayout } from "./addFilesLayout";
import { createFolder } from "./createFolders";
import { getItemName } from "./getComponentName";

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
      case Template.Layout:
        addFilesLayout(name, outputFolder, fileContent, element, chidlren);
        break;
    }
  });
};

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
