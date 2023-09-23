import { ComponentModule } from "../coreTypes";
import {
  parseStringToComponentModule,
  buildParentChildrenMap,
  initStructure,
  getInputFiles,
} from "../modules";
import { templateList } from "../modules/types";
import { createFolder } from "../utils";

export const buildComponents = (inputPath: string, outputPath: string) => {
  const generateComponentsTree = (configPath: string, outputPath: string) => {
    const fs = require("fs");
    let fileContent = fs.readFileSync(configPath, "utf8");
    const project: ComponentModule = parseStringToComponentModule(fileContent);
    const { treeMap, rootNodes } = buildParentChildrenMap(
      project.childrenElementList
    );

    initStructure(outputPath, treeMap, rootNodes, templateList);
  };

  try {
    const componentFiles = getInputFiles(inputPath);

    createFolder(outputPath);

    componentFiles.forEach((component) => {
      generateComponentsTree(component, outputPath);
    });
  } catch (e) {
    console.log(e);
  }
};
