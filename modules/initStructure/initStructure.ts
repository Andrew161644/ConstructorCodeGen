import { ComponentTypes, ElementId, TreeItem } from "../../coreTypes/projects";
import { Templates, readTemplate } from "../../templates";
import { isGroupElement } from "../../utils";
import { getItemName } from "../../utils/isGroupElement";
import { addFilesIndex } from "./addFilesIndex";
import { addFilesLayout } from "./addFilesLayout";
import { createFolder } from "./createFolders";

export const addFiles = (
  templateFiles: Templates[],
  outputFolder: string,
  name: string,
  elementType: ComponentTypes,
  chidlren: TreeItem[]
) => {
  templateFiles.forEach((inputFile) => {
    let fileContent = readTemplate(inputFile);

    switch (inputFile) {
      case "index":
        addFilesIndex(name, outputFolder, fileContent);
        break;
      case "Layout":
        addFilesLayout(name, outputFolder, fileContent, elementType, chidlren);
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
    addFiles(templateFiles, path, name, item.type, chidlren);
    if (chidlren.length) {
      initStructure(path, treeMap, chidlren, templateFiles);
    }
  });
};
