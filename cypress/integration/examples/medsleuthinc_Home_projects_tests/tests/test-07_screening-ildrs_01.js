import screeningIlDrugs from "../page objects/07_screening-ildrs_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the screening.tobacco page elements - Yes scenario", () => {
        cy.visit("/screening.ildrs")
          .contains("Do you use recreational or illicit drugs not including marijuana?")
          .get(screeningIlDrugs.introStartSurBtn)
          .should("be.visible")
          .click()
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

    });

});