import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    defaultCommandTimeout: 10000,
    experimentalStudio: true,
    chromeWebSecurity: false,
    supportFile: false,
    env: {
      baseUrl: "https://www.youtube.com",
    },
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler());
      return config;
    },
  },
});
