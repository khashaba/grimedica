import { User } from "../../../support/types/User";
import { RecordEntry } from "../../../support/types/RecordEntry";
import WebtablesPage from "../../../support/PageObjects/WebtablesPage";
import AutomationPracticePage from "../../../support/pageObjects/AutomationPracticePage";

/**
 * fill the users data for a new record
 * @param {RecordEntry} recordEntry - the record to be filled
 */
export function fillNewRecord(recordEntry: RecordEntry) {
  WebtablesPage.firstNameField().type(recordEntry.firstName);
  WebtablesPage.lastNameField().type(recordEntry.lastName);
  WebtablesPage.userEmailField().type(recordEntry.email);
  WebtablesPage.ageField().type(recordEntry.age);
  WebtablesPage.salaryField().type(recordEntry.salary);
  WebtablesPage.departmentField().type(recordEntry.department);
}

/**
 * fill the user's data in the form
 * @param {User} user - the user to fill the form
 */
export function fillFormData(user: User) {
  AutomationPracticePage.firstNameField().type(user.firstName);
  AutomationPracticePage.lastNameField().type(user.lastName);
  AutomationPracticePage.userEmailField().type(user.email);
  AutomationPracticePage.gender(user.gender).click({ force: true });
  AutomationPracticePage.userNumberField().type(user.mobile);
  AutomationPracticePage.dateOfBirthField().click();
  AutomationPracticePage.dobYearField().select(user.dateOfBirthYear);
  AutomationPracticePage.dobMonthField().select(user.dateOfBirthMonth);
  AutomationPracticePage.dobDayField(user.dateOfBirthDay).click();
  AutomationPracticePage.dobValue().should(
    "eq",
    `${user.dateOfBirthDay} ${user.dateOfBirthMonth.substring(0, 3)} ${
      user.dateOfBirthYear
    }`
  );
  AutomationPracticePage.subjectField().type(`${user.subjects}{enter}`);
  AutomationPracticePage.hobbiesField(user.hobbies).click();
  cy.fixture(`/images/${user.pic}`).as("picFixture");
  AutomationPracticePage.uploadPicField().selectFile("@picFixture");
  AutomationPracticePage.addressField().type(user.address);
  AutomationPracticePage.stateField().type(`${user.state}{enter}`);
  AutomationPracticePage.cityField().type(`${user.city}{enter}`);
}

/**
 * Verify the form data is the same as given
 * @param {User} user - the user to use to verify the form data upon
 */
export function verifyFormData(user: User) {
  cy.contains(user.firstName);
  cy.contains(user.lastName);
  cy.contains(user.email);
  cy.contains(user.gender);
  cy.contains(user.mobile);
  cy.contains(
    `${user.dateOfBirthDay} ${user.dateOfBirthMonth},${user.dateOfBirthYear}`
  );
  cy.contains(user.subjects);
  cy.contains(user.hobbies);
  cy.contains(user.pic);
  cy.contains(user.address);
  cy.contains(`${user.state} ${user.city}`);
}
