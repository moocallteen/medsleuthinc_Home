import screeningTobacco from "../page objects/06_screening-tobacco_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the screening.tobacco page elements - Yes scenario", () => {
        var quitHeaderTitle = "Would you be willing to quit smoking 6 weeks prior to surgery?"; 
        var pageToCheckTitle = "Do you use recreational or illicit drugs not including marijuana?";
        cy.visit("/screening.tobacco")
          .contains("Do you smoke cigarettes or marijuana?")
          .should("be.visible")
        cy.get(screeningTobacco.introStartSurBtn)
          .should("be.visible")
          .click()
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
          .click()
          .get(screeningTobacco.headerBar)
          .should("be.visible")
          .and("have.text", quitHeaderTitle)
        //   .then(el => {
            // assert.include(el.text(), pageToCheckTitle) 

    });

});