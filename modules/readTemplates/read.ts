import { TEMPLATES_PATH } from "../../paths";
import { Template, Templates } from "./types";

const fs = require("fs");

const readLayoutTemplate = () => {
  let fileContent = fs.readFileSync(
    `${TEMPLATES_PATH}/${Template.Layout}.txt`,
    "utf8"
  );
  return fileContent;
};

const readIndexTemplate = () => {
  let fileContent = fs.readFileSync(
    `${TEMPLATES_PATH}/${Template.Index}.txt`,
    "utf8"
  );
  return fileContent;
};

export const readTemplate = (tamplate: Templates) => {
  switch (tamplate) {
    case "index":
      return readIndexTemplate();
    case "Layout":
      return readLayoutTemplate();
  }
};
