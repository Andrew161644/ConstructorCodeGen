import { ComponentModule } from "./coreTypes";
import {
  parseStringToComponentModule,
  buildParentChildrenMap,
  createFolder,
  initStructure,
  getInputFiles,
} from "./modules";
import { templateList } from "./modules/readTemplates";
import { INPUT_PATH, OUTPUT_PATH } from "./paths";

const inputPath = INPUT_PATH;
const outputPath = OUTPUT_PATH;

const generateDirs = (configPath: string) => {
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
    generateDirs(component);
  });
} catch (e) {
  console.log(e);
}
