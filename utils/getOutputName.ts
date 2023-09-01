const fs = require("fs");

export const getOutputName: (path: string) => string = (path) => {
  if (!fs.existsSync(path)) {
    return path;
  } else {
    return getOutputName(path + 1);
  }
};
