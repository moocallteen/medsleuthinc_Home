import screeningKidneystones from "../page objects/05_screening-kidneystones_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.kidneystones page elements - Yes scenario", () => {

    var pageToCheckTitle = "Do you smoke cigarettes or marijuana?";

    cy.visit("/screening.kidneystones")
      .contains("Have you had more than one kidney stone in the past 10 years?")
      .should("be.visible");

    cy.get(screeningKidneystones.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.get(screeningKidneystones.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningKidneystones.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningKidneystones.noRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningKidneystones.yesRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningKidneystones.nextBtn)
      .click()
      .get(screeningKidneystones.headerBar)
      .then(el => {
        assert.include(el.text(), pageToCheckTitle)
      });

  });

  it("Should check the screening.kidneystones page elements - No scenario", () => {

    var pageToCheckTitle = "Do you smoke cigarettes or marijuana?";

    cy.visit("/screening.kidneystones")
      .get(screeningKidneystones.introStartSurBtn)
      .click()
      .get(screeningKidneystones.noRadioBtn)
      .click()
      .get(screeningKidneystones.nextBtn)
      .click()
      .get(screeningKidneystones.headerBar)
      .then(el => {
        assert.include(el.text(), pageToCheckTitle)
      });

  });

})