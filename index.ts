import { ComponentModule } from "./coreTypes";
import {
  parseStringToComponentModule,
  buildParentChildrenMap,
  createFolder,
  initStructure,
  getInputFiles,
} from "./modules";
import { Templates } from "./templates";
import { getOutputName } from "./utils";

const inputPath = "./input";
const outputPath = "./generated";

const componentFiles = getInputFiles(inputPath);

const generateDirs = (configPath: string, output: string) => {
  const templatesComponent: Templates = "Layout";
  const indexComponent: Templates = "index";
  const templates = [templatesComponent, indexComponent];

  const outputPath = getOutputName(output);

  const fs = require("fs");
  let fileContent = fs.readFileSync(configPath, "utf8");
  const project: ComponentModule = parseStringToComponentModule(fileContent);
  const { treeMap, rootNodes } = buildParentChildrenMap(
    project.childrenElementList
  );

  createFolder(outputPath);
  initStructure(outputPath, treeMap, rootNodes, templates);
};

componentFiles.forEach((component) => {
  generateDirs(component, outputPath);
});
