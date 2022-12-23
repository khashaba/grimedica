/// <reference types="cypress" />

Cypress.Commands.add(
  "navigateTo",
  (header: string, section: string, urlPath: string) => {
    cy.get(".left-pannel .group-header").contains(header).click();
    cy.get(".left-pannel").contains(section).click();
    cy.url().should("include", urlPath);
  }
);

declare global {
  namespace Cypress {
    interface Chainable {
      navigateTo(
        header: string,
        section: string,
        title: string
      ): Chainable<void>;
    }
  }
}
