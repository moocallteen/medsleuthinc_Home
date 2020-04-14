import screeningTobacco from "../page objects/06_screening-tobacco_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.tobacco page elements - Yes-Yes scenario", () => {

    var quitHeaderTitle = "Would you be willing to quit smoking 6 weeks prior to surgery?";
    var pageToCheckTitle = "Do you use recreational or illicit drugs not including marijuana?";

    cy.visit("/screening.tobacco")
      .contains("Do you smoke cigarettes or marijuana?")
      .should("be.visible");

    cy.get(screeningTobacco.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.get(screeningTobacco.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningTobacco.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningTobacco.noTobaccoRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningTobacco.yesTobaccoRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningTobacco.nextBtn)
      .click();

    cy.get(screeningTobacco.headerBar)
      .should("be.visible")
      .and("have.text", quitHeaderTitle)
      .get(screeningTobacco.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningTobacco.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningTobacco.noTobaccoQuitRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningTobacco.yesTobaccoQuitRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningTobacco.nextBtn)
      .click()
      .get(screeningTobacco.headerBar)
      .should("have.text", pageToCheckTitle);

  });

  it("Should check the screening.tobacco page elements - No scenario", () => {

    var pageToCheckTitle = "Do you use recreational or illicit drugs not including marijuana?";

    cy.visit("/screening.tobacco")
      .get(screeningTobacco.introStartSurBtn)
      .click()
      .get(screeningTobacco.noTobaccoRadioBtn)
      .click()
      .get(screeningTobacco.nextBtn)
      .click()
      .get(screeningTobacco.headerBar)
      .should("have.text", pageToCheckTitle);

  });

  it("Should check the screening.tobacco page elements - Yes-No scenario", () => {

    var pageToCheckTitle = "Thank you for your generous offer to be a kidney donor";
    var contentHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var contentReasonText = "You must be willing to quit using marijuana or tobacco products for at least 6 weeks prior to surgery";
    var contentFooterText = "If you have any questions, you may email us at\nLiving.Donor@ucsfmedctr.org and a member of our transplant team will get back to you within 48 hours.";

    cy.visit("/screening.tobacco")
      .get(screeningTobacco.introStartSurBtn)
      .click()
      .get(screeningTobacco.yesTobaccoRadioBtn)
      .click()
      .get(screeningTobacco.nextBtn)
      .click()
      .get(screeningTobacco.noTobaccoQuitRadioBtn)
      .click()
      .get(screeningTobacco.nextBtn)
      .click()
      .get(screeningTobacco.headerBar)
      .should("have.text", pageToCheckTitle)
      .get(screeningTobacco.contentHeader)
      .should("have.text", contentHeaderText)
      .get(screeningTobacco.contentReason)
      .should("have.text", contentReasonText)
      .get(screeningTobacco.contentFooter)
      .should("have.text", contentFooterText);

  });

});