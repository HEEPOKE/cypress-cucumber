/// <reference types="cypress" />

const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("I open the YouTube website", () => {
  cy.visit(Cypress.env("baseUrl"));
});

When("I search for {string}", (searchQuery) => {
  cy.get('input[name="search_query"]').type(searchQuery);
  cy.get('button[id="search-icon-legacy"]').click();
});

Then("I should see search results", () => {
  cy.get("ytd-item-section-renderer").should("be.visible");
});
