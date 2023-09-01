const fs = require("fs");

export const createFolder = (folderName: string) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  } else {
    throw "Directory `generated` already exist. Please remove or rename `generated` and try again";
  }
};
