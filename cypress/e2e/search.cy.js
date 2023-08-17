const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const Config = require("../config/config");

Given("I open the YouTube website", () => {
  cy.visit(Config.URL);
});

When("I search for {string}", (searchQuery) => {
  cy.get('input[name="search_query"]').type(searchQuery);
  cy.get('button[id="search-icon-legacy"]').click();
});

Then("I should see search results", () => {
  cy.get("ytd-item-section-renderer").should("be.visible");
});
