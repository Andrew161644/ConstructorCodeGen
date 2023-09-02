import { ComponentTypes, ElementId, TreeItem } from "../../coreTypes/projects";
import { Templates, readTemplate } from "../../templates";
import { isGroupElement } from "../../utils";
import { getItemName } from "../../utils/isGroupElement";
import { addFilesIndex } from "./addFilesIndex";
import { addFilesLayout } from "./addFilesLayout";
import { createFolder } from "./createFolders";

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
      case "index":
        addFilesIndex(name, outputFolder, fileContent);
        break;
      case "Layout":
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
