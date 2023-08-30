const fs = require("fs");

export const addFilesIndex = (
  name: string,
  outputFolder: string,
  fileContent: string
) => {
  const fileName = "index.ts";
  const outputFile = `${outputFolder}/${fileName}`;
  let content = fileContent.replaceAll("?%ComponentName?%", name);
  content = content.replaceAll("?%Path?%", name);

  fs.appendFile(outputFile, content, function (err: Error) {
    if (err) {
      console.log(err);
    }
  });
};
