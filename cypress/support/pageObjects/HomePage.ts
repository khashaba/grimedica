class HomePage {
  static welcomeImage = () => cy.get(`[src="/images/Toolsqa.jpg"]`);
  static elementsTab = () => cy.get(".top-card").contains("Elements");
}
export default HomePage;
