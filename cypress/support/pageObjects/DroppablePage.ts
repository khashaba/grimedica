class DroppablePage {
  static urlPath = "/droppable";
  static title = "Droppable";
  static dropHereSelector = "#simpleDropContainer > #droppable";
  static dragMeBox = () => cy.get("#draggable").contains("Drag me");
  static dropHereBox = () => cy.get(DroppablePage.dropHereSelector);
}
export default DroppablePage;
