import screeningIlDrugs from "../page-objects/07_screening-ildrs_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.ildrs page elements - Yes scenario", () => {

    var headerToCheck = "Please review the important information below prior to proceeding to the online evaluation";
    var notInterestedText = "I am no longer interested in living donation";
    var continueText = "Continue with the evaluation";

    cy.visit("/screening.ildrs")
      .contains("Do you use recreational or illicit drugs not including marijuana?")
      .get(screeningIlDrugs.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.get(screeningIlDrugs.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningIlDrugs.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningIlDrugs.noIlDrugsRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningIlDrugs.yesIlDrugsRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningIlDrugs.nextBtn)
      .click()
      .get(screeningIlDrugs.headerBar)
      .should("be.visible")
      .and("have.text", headerToCheck);

    cy.get(screeningIlDrugs.nextBtn)
      .scrollIntoView()
      .get(screeningIlDrugs.notInterestedToCheck)
      .should("be.visible")
      .and("have.text", notInterestedText)
      .get(screeningIlDrugs.continueToCheck)
      .should("be.visible")
      .and("have.text", continueText);

  });

  it("Should check the screening.ildrs page elements - No scenario", () => {

    var headerToCheck = "Please review the important information below prior to proceeding to the online evaluation";
    var notInterestedText = "I am no longer interested in living donation";
    var continueText = "Continue with the evaluation";

    cy.visit("/screening.ildrs")
      .contains("Do you use recreational or illicit drugs not including marijuana?")
      .get(screeningIlDrugs.introStartSurBtn)
      .click()
      .get(screeningIlDrugs.noIlDrugsRadioBtn)
      .click()
      .get(screeningIlDrugs.nextBtn)
      .click()
      .get(screeningIlDrugs.headerBar)
      .should("be.visible")
      .and("have.text", headerToCheck);

    cy.get(screeningIlDrugs.continueToCheck)
      .scrollIntoView();

    cy.get(screeningIlDrugs.notInterestedToCheck)
      .should("be.visible")
      .and("have.text", notInterestedText)
      .get(screeningIlDrugs.continueToCheck)
      .should("be.visible")
      .and("have.text", continueText);

  });

});