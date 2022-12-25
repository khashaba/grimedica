import HomePage from "../../../support/PageObjects/HomePage";
import ElementsPage from "../../../support/PageObjects/ElementsPage";
import WebtablesPage from "../../../support/PageObjects/WebtablesPage";
import { User } from "../../../support/types/User";
import { RecordEntry } from "../../../support/types/RecordEntry";
import { verifyFormData, fillFormData, fillNewRecord } from "./bookingHelpers";
import BrokenImagesPage from "../../../support/pageObjects/BrokenImagesPage";
import AutomationPracticePage from "../../../support/pageObjects/AutomationPracticePage";
import ProgressBar from "../../../support/pageObjects/ProgressBar";
import ToolTipsPage from "../../../support/pageObjects/ToolTipsPage";
import DroppablePage from "../../../support/pageObjects/DroppablePage";

describe("Tools QA test scenario", () => {
  before(() => {
    // visits the base url
    cy.visit("");
    HomePage.welcomeImage().should("be.visible");
  });

  it("Verify user can enter new data into the table", () => {
    const recordEntry: RecordEntry = {
      firstName: "Alden",
      lastName: "Cantrell",
      age: "30",
      email: "test@test.com",
      salary: "12345",
      department: "QA",
    };

    HomePage.elementsTab().click();
    cy.url().should("include", ElementsPage.urlPath);
    ElementsPage.welcomeMessage().should("be.visible");
    WebtablesPage.addNewRecordBtn().should("not.exist");
    cy.navigateTo("Elements", "Web Tables", WebtablesPage.urlPath);
    WebtablesPage.addNewRecordBtn().click();
    fillNewRecord(recordEntry);
    WebtablesPage.webtablesForm().submit();
    WebtablesPage.firstNameField().should("not.exist");
    WebtablesPage.mainTable().contains(recordEntry.firstName);
    WebtablesPage.mainTable().contains(recordEntry.email);
  });

  it("Verify user can edit the row in a table", () => {
    const firstname = "Gerimedica";
    const lastName = "BV";
    WebtablesPage.editRecord(2).click();
    WebtablesPage.firstNameField().clear().type(firstname);
    WebtablesPage.lastNameField().clear().type(lastName);
    WebtablesPage.webtablesForm().submit();

    WebtablesPage.firstNameField().should("not.exist");
    WebtablesPage.tableRow(1).contains(firstname);
    WebtablesPage.tableRow(1).contains(lastName);
  });

  it("Verify broken image", () => {
    cy.navigateTo("Elements", BrokenImagesPage.title, BrokenImagesPage.urlPath);
    // make sure that the image width is 0 -broken-
    BrokenImagesPage.brokenImg().should(($img) =>
      expect($img[0].naturalWidth).to.eq(0)
    );
  });

  it("Verify user can submit the form.", () => {
    const user: User = {
      firstName: "Gerimedica",
      lastName: "BV",
      email: "test@test.com",
      gender: "Male",
      mobile: "0123456789",
      dateOfBirthDay: "15",
      dateOfBirthMonth: "January",
      dateOfBirthYear: "1990",
      subjects: "Computer Science",
      hobbies: "Reading",
      pic: "dummy.png",
      address: "Netherlands",
      state: "NCR",
      city: "Delhi",
    };
    cy.navigateTo(
      "Forms",
      AutomationPracticePage.title,
      AutomationPracticePage.urlPath
    );
    fillFormData(user);
    AutomationPracticePage.userForm().submit();
    AutomationPracticePage.submitThanksMessage().should("be.visible");
    verifyFormData(user);
    AutomationPracticePage.closeModal().click();
    AutomationPracticePage.closeModal().should("not.exist");
  });

  it("Verify the progress bar start and completion", () => {
    cy.navigateTo("Widgets", ProgressBar.title, ProgressBar.urlPath);
    ProgressBar.startBtn().click();
    ProgressBar.progressBar().should("have.attr", "aria-valuenow", "100");
  });

  it("Verify the progress bar start and completion", () => {
    cy.navigateTo("Widgets", ToolTipsPage.title, ToolTipsPage.urlPath);
    ToolTipsPage.toolTip().should("not.exist");
    ToolTipsPage.toolTipBtn().trigger("mouseover");
    ToolTipsPage.toolTip()
      .contains("You hovered over the Button")
      .should("be.visible");
  });

  it("Verify user can drag and drop", () => {
    cy.navigateTo("Interactions", DroppablePage.title, DroppablePage.urlPath);
    const dataTransfer = new DataTransfer();
    DroppablePage.dragMeBox()
      .drag(DroppablePage.dropHereSelector, {
        force: true,
      })
      .then((success) => {
        assert.isTrue(success);
        DroppablePage.dropHereBox().contains("Dropped");
      });
  });
});
