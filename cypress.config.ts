const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const cucumberB = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: '3ijib6',
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    // defaultCommandTimeout: 10000,
    experimentalStudio: false,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    darkMediaQuery: true,
    theme: 'dark',
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
