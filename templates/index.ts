import { template } from "@babel/core";

const fs = require("fs");

const readLayoutTemplate = () => {
  let fileContent = fs.readFileSync(
    `./templates/Components/Layout.txt`,
    "utf8"
  );
  return fileContent;
};

const readIndexTemplate = () => {
  let fileContent = fs.readFileSync(`./templates/Components/index.txt`, "utf8");
  return fileContent;
};

export type Templates = "index" | "Layout";

export const readTemplate = (tamplate: Templates) => {
  switch (tamplate) {
    case "index":
      return readIndexTemplate();
    case "Layout":
      return readLayoutTemplate();
  }
};
