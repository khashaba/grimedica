class WebtablesPage {
  static urlPath = "/webtables";
  static addNewRecordBtn = () => cy.get("#addNewRecordButton");
  static firstNameField = () => cy.get("#firstName");
  static lastNameField = () => cy.get("#lastName");
  static userEmailField = () => cy.get("#userEmail");
  static ageField = () => cy.get("#age");
  static salaryField = () => cy.get("#salary");
  static departmentField = () => cy.get("#department");
  static webtablesForm = () => cy.get("#userForm");
  static mainTable = () => cy.get(".ReactTable");
  static editRecord = (recordNumber: number) =>
    cy.get(`#edit-record-${recordNumber}`);
  static tableRow = (rowNumber: number) =>
    cy.get(".ReactTable [role='rowgroup']").eq(rowNumber);
}
export default WebtablesPage;
