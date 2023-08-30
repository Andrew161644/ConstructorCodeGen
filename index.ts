import { ComponentModule } from "./coreTypes";
import {
  parseStringToComponentModule,
  buildParentChildrenMap,
  createFolder,
  initStructure,
} from "./modules";
import { Templates } from "./templates";

const config = "./input/component1.json";
const outputPath = "./generated";

const templatesComponent: Templates = "Layout";
const indexComponent: Templates = "index";

const templates = [templatesComponent, indexComponent];

const fs = require("fs");
let fileContent = fs.readFileSync(config, "utf8");
const project: ComponentModule = parseStringToComponentModule(fileContent);
const { treeMap, rootNodes } = buildParentChildrenMap(
  project.childrenElementList
);

createFolder(outputPath);
initStructure(outputPath, treeMap, rootNodes, templates);
