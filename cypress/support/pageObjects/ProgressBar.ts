class ProgressBar {
  static urlPath = "/progress-bar";
  static title = "Progress Bar";
  static startBtn = () => cy.get("#startStopButton");
  static progressBar = () =>
    cy.get("#progressBar").find(`[role="progressbar"]`, { timeout: 20000 });
}
export default ProgressBar;
