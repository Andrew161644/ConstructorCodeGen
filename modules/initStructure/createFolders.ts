const fs = require("fs");

export const createFolder = (folderName: string) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
};
