import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

function typescriptPreprocessor() {
  return require.resolve("typescript");
}

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  on("file:preprocessor", typescriptPreprocessor);
  on("file:preprocessor", createBundler());

  return config;
}

export default defineConfig({
  env: {
    dark: true,
  },
  e2e: {
    // baseUrl: "https://www.youtube.com",
    specPattern: "cypress/e2e/features/*.feature",
    defaultCommandTimeout: 10000,
    experimentalStudio: true,
    chromeWebSecurity: false,
    setupNodeEvents,
  },
});
