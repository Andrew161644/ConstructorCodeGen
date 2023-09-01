const fs = require("fs");

export const getInputFiles = (dir: string) => {
  const dirCont = fs.readdirSync(dir);
  const files = dirCont.filter((file: string) =>
    file.match(/.*\.(json?)/gi)
  ) as string[];
  return files.map((file) => dir + "/" + file);
};
