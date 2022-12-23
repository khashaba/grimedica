class AutomationPracticePage {
  static urlPath = "/automation-practice-form";
  static title = "Practice Form";
  static firstNameField = () => cy.get("#firstName");
  static lastNameField = () => cy.get("#lastName");
  static userEmailField = () => cy.get("#userEmail");
  static gender = (userGender) =>
    cy.get(`#genterWrapper [value="${userGender}"]`);
  static userNumberField = () => cy.get("#userNumber");
  static dateOfBirthField = () => cy.get("#dateOfBirthInput");
  static dobYearField = () => cy.get(".react-datepicker__year-select");
  static dobMonthField = () => cy.get(".react-datepicker__month-select");
  static dobDayField = (day) =>
    cy.get(".react-datepicker__month").contains(day);
  static dobValue = () => cy.get("#dateOfBirthInput").invoke("val");

  static subjectField = () => cy.get("#subjectsContainer");
  static hobbiesField = (hobby) => cy.get("#hobbiesWrapper").contains(hobby);
  static uploadPicField = () => cy.get("#uploadPicture");
  static addressField = () => cy.get("#currentAddress");
  static stateField = () => cy.get("#state");
  static cityField = () => cy.get("#city");
  static userForm = () => cy.get("#userForm");
  static submitThanksMessage = () =>
    cy
      .get("#example-modal-sizes-title-lg")
      .contains("Thanks for submitting the form");
  static closeModal = () => cy.get("#closeLargeModal");
}
export default AutomationPracticePage;
