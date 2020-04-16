import instructionsPage from "../page-objects/10_instructions_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the instructions.04 page elements - Enter medications scenario ", () => {

    var enterMedicationsTitle = "Enter medications";
    var doNotTakeMedsTitle = "I do not take any medication";
    var pageContentText = "In order to complete this questionnaire, you will need to provide the names of all medications, vitamins, and herbal supplements that you currently take. Please include those medications that you take on a regular basis, and also those medications that you take occasionally ('as needed')";
    var medsListHeaderTxt = "Please enter your medications, one by one. You may enter either the brand or generic name.";

    cy.visit("instructions.04")
      .contains("This health questionnaire will take approximately 15 to 20 minutes to complete.")
      .get(instructionsPage.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.contains(pageContentText)
      .get(instructionsPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .get(instructionsPage.doNotTakeMedsRadioBtn)
      .should("be.visible")
      .and("have.text", doNotTakeMedsTitle)
      .get(instructionsPage.enterMedicationsRadioBtn)
      .should("be.visible")
      .and("have.text", enterMedicationsTitle)
      .click()
      .get(instructionsPage.nextBtn)
      .click()
      .get(instructionsPage.headerBar)
      .should("be.visible")
      .and("have.text", medsListHeaderTxt);

  });

  it("Should check the instructions.04 page elements - I do not take any medication scenario ", () => {

    var medConditionsListHeader = "Do you have or have you had any of the following medical conditions?";

    cy.visit("instructions.04")
      .contains("This health questionnaire will take approximately 15 to 20 minutes to complete.")
      .get(instructionsPage.introStartSurBtn)
      .click()
      .get(instructionsPage.doNotTakeMedsRadioBtn)
      .click()
      .get(instructionsPage.nextBtn)
      .click()
      .get(instructionsPage.headerBar)
      .should("be.visible")
      .and("have.text", medConditionsListHeader);

  });

})