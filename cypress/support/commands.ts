/// <reference types="cypress" />
import "@4tw/cypress-drag-drop";

/**
 * Navigates to sub section from the left menu
 * @param {string} header - the header of the left menu
 * @param {string} section - the subsection to be clicked from the left menu
 * @param {string} urlPath - the url of the desired page to assert that the navigation succeeded
 */
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
