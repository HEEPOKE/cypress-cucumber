import "@cypress/code-coverage/support";
import cucumber from "cypress-cucumber-preprocessor";

module.exports = (on: any, config: any) => {
  on("file:preprocessor", cucumber());
  on("task", require("@cypress/code-coverage/task"));

  return config;
};
