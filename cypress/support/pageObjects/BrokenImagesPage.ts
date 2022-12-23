class BrokenImagesPage {
  static urlPath = "/broken";
  static title = "Broken Links - Images";
  static brokenImg = () => cy.get('img[src="/images/Toolsqa_1.jpg"]');
}
export default BrokenImagesPage;
