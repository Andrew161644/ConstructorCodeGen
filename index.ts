import { Project } from "./coreTypes";
import {
  parseStringToProject,
  buildParentChildrenMap,
  createFilder,
  initStructure,
} from "./modules";

const outputPath = "./build";
const templateDir = "./templates/";
const templatesComponent = "Component.txt";

const templates = [templatesComponent];

const fs = require("fs");
let fileContent = fs.readFileSync("./examples/component.json", "utf8");
const project: Project = parseStringToProject(fileContent);
const { treeMap, rootNodes } = buildParentChildrenMap(
  project.childrenElementList
);

createFilder(outputPath);
initStructure(outputPath, treeMap, rootNodes, templateDir, templates);
