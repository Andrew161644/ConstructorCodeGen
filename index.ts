import { Project } from "./coreTypes";
import {
  parseStringToProject,
  buildParentChildrenMap,
  createFolder,
  initStructure,
} from "./modules";

const outputPath = "./generated";
const templateDir = "./templates/";
const templatesComponent = "Component.txt";
const indexComponent = "index.txt";

const templates = [templatesComponent, indexComponent];

const fs = require("fs");
let fileContent = fs.readFileSync("./examples/component.json", "utf8");
const project: Project = parseStringToProject(fileContent);
const { treeMap, rootNodes } = buildParentChildrenMap(
  project.childrenElementList
);

createFolder(outputPath);
initStructure(outputPath, treeMap, rootNodes, templateDir, templates);
