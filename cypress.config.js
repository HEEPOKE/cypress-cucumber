const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    defaultCommandTimeout: 10000,
    experimentalStudio: false,
    chromeWebSecurity: false,
    supportFile: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      baseUrl: "https://www.youtube.com",
    },
  },
});
