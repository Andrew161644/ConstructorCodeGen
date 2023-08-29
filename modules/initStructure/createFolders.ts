import { ElementId, TreeItem } from "../../coreTypes";

const fs = require("fs");

export const createFilder = (folderName: string) => {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
};

const addFiles = (
  templateDir: string,
  templateFiles: string[],
  outputFolder: string,
  name: string,
  elementType: string
) => {
  templateFiles.forEach((inputFile) => {
    let fileContent = fs.readFileSync(`${templateDir}/${inputFile}`, "utf8");

    if (inputFile === "Component.txt") {
      const fileName = name + "Component.tsx";
      const outputFile = `${outputFolder}/${fileName}`;
      let content = fileContent?.replaceAll("?%ComponentName?%", name);
      content = content?.replaceAll("?%ComponentType?%", elementType);

      fs.appendFile(outputFile, content, function (err: Error) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
};

export const initStructure = (
  rootPath: string,
  treeMap: Map<ElementId, TreeItem[]>,
  rootNodes: TreeItem[],
  templateDir: string,
  templateFiles: string[]
) => {
  rootNodes.forEach((rootNode) => {
    const name = `${rootNode.type}_${rootNode.id}`.replaceAll("-", "_");
    const path = `${rootPath}/${name}`;
    createFilder(path);
    addFiles(templateDir, templateFiles, path, name, rootNode.type);
    const chidlren = treeMap.get(rootNode.id);
    if (chidlren && chidlren.length) {
      initStructure(path, treeMap, chidlren, templateDir, templateFiles);
    }
  });
};
