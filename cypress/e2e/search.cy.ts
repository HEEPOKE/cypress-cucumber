import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open the YouTube website", () => {
  cy.visit("https://www.youtube.com/");
});

When("I search for {string}", (searchQuery: string) => {
  cy.get('input[name="search_query"]').type(searchQuery);
  cy.get('button[id="search-icon-legacy"]').click();
});

Then("I should see search results", () => {
  cy.get("ytd-item-section-renderer").should("be.visible");
});
