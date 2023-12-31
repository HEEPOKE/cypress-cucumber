/// <reference types="cypress" />

import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("I open the YouTube website", () => {
  cy.visit(Cypress.env("baseUrl"));
});

When("I search for {string}", (searchQuery: string) => {
  cy.get('input[name="search_query"]').type(searchQuery);
  cy.get('button[id="search-icon-legacy"]').click();
});

Then("I should see search results", () => {
  cy.get("ytd-item-section-renderer").should("be.visible");
});

Then("I play the video {string}", (videoTitle: string) => {
  cy.contains(videoTitle).click();
  cy.get("video").should("be.visible");
});