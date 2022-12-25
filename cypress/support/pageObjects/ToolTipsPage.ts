class ToolTipsPage {
  static urlPath = "/tool-tips";
  static title = "Tool Tips";
  static toolTipBtn = () => cy.get("#toolTipButton");
  static toolTip = () => cy.get(`#buttonToolTip`);
}
export default ToolTipsPage;
