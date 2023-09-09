import { TEMPLATES_PATH } from "../../paths";
import { Template, Templates } from "./types";

const fs = require("fs");

const readLayoutTemplate = () => {
  let fileContent = fs.readFileSync(
    `${TEMPLATES_PATH}/${Template.Layout}`,
    "utf8"
  );
  return fileContent;
};

const readIndexTemplate = () => {
  let fileContent = fs.readFileSync(
    `${TEMPLATES_PATH}/${Template.Index}`,
    "utf8"
  );
  return fileContent;
};

export const readTemplate = (tamplate: Templates) => {
  switch (tamplate) {
    case Template.Index:
      return readIndexTemplate();
    case Template.Layout:
      return readLayoutTemplate();
  }
};
