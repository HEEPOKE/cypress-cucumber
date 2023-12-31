const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const cucumberB = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: '3ijib6',
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    // supportFile: "cypress/support/e2e.ts.",
    supportFile: false,
    // defaultCommandTimeout: 10000,
    experimentalStudio: true,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      baseUrl: "https://www.youtube.com",
    },
    async setupNodeEvents(on, config) {
      await cucumberB.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
