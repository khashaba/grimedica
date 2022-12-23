class ElementsPage {
  static urlPath = "/elements";
  static welcomeMessage = () =>
    cy.contains("Please select an item from left to start practice.");
}
export default ElementsPage;
