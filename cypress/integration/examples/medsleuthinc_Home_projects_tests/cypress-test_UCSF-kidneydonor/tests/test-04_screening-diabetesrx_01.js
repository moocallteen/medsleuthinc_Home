import screeningDiabetesrx from "../page-objects/04_screening-diabetesrx_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.diabetesrx page elements - Yes scenario", () => {

    var headerBarText = "Thank you for your generous offer to be a kidney donor";
    var contentHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var contentReasonText = "Your diabetes places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var contentFooterText = "If you have any questions, you may email us at\nLiving.Donor@ucsfmedctr.org and a member of our transplant team will get back to you within 48 hours.";

    cy.visit("/screening.diabetesrx")
      .contains("Do you currently take pills or insulin for Diabetes?")
      .should("be.visible");

    cy.get(screeningDiabetesrx.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.get(screeningDiabetesrx.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningDiabetesrx.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningDiabetesrx.noRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningDiabetesrx.yesRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningDiabetesrx.nextBtn)
      .click();

    cy.get(screeningDiabetesrx.headerBar)
      .should("be.visible")
      .and("have.text", headerBarText)
      .get(screeningDiabetesrx.contentHeader)
      .should("be.visible")
      .and("have.text", contentHeaderText)
      .get(screeningDiabetesrx.contentReason)
      .should("be.visible")
      .and("have.text", contentReasonText)
      .get(screeningDiabetesrx.contentFooter)
      .should("be.visible")
      .and("have.text", contentFooterText);

  });

  it("Should check the screening.diabetesrx page elements - No scenario", () => {

    var validationText = "Have you had more than one kidney stone in the past 10 years?";

    cy.visit("/screening.diabetesrx")
      .get(screeningDiabetesrx.introStartSurBtn)
      .click()
      .get(screeningDiabetesrx.noRadioBtn)
      .click()
      .get(screeningDiabetesrx.nextBtn)
      .click()
      .get(screeningDiabetesrx.headerBar)
      .then(el => {
        assert.include(el.text(), validationText)
      });

  });

});