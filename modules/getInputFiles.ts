const fs = require("fs");

export const getInputFiles = (dir: string) => {
  if (fs.existsSync(dir)) {
    const dirCont = fs.readdirSync(dir);
    const files = dirCont.filter((file: string) =>
      file.match(/.*\.(json?)/gi)
    ) as string[];
    return files.map((file) => dir + "/" + file);
  } else {
    throw `Папка с конфигурациями ${dir} не найдена. Пожалуйста создайте папку ${dir} и поместите туда конфигурационный файлы.`;
  }
};
