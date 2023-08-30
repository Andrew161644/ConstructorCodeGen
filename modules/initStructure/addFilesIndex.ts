import { COMPONENT_NAME, PATH } from "../../templates";

const fs = require("fs");

export const addFilesIndex = (
  name: string,
  outputFolder: string,
  fileContent: string
) => {
  const fileName = "index.ts";
  const outputFile = `${outputFolder}/${fileName}`;
  let content = fileContent.replaceAll(COMPONENT_NAME, name);
  content = content.replaceAll(PATH, name);

  fs.appendFile(outputFile, content, function (err: Error) {
    if (err) {
      console.log(err);
    }
  });
};
