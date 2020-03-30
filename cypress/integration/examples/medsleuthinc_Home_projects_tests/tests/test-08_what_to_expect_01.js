import whatToExpectPage from "../page objects/08_what_to_expect_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the screening.what_to_expect.0 page elements - No Longer Interesting scenario", () => {
        var notInterestedText = "I am no longer interested in living donation";
        var continueText = "Continue with the evaluation";
        var textToCheck = "Thank you for your participation";
        var contentToCheck = "Thank you for considering living kidney donation. If you wish to contact us please send an e-mail to: Living.Donor@ucsfmedctr.org";
        
        cy.visit("/what_to_expect.0")
          .contains("Please review the important information below prior to proceeding to the online evaluation")
          .get(whatToExpectPage.introStartSurBtn)
          .should("be.visible")
          .click()
        cy.contains("Donor Evaluation")
          .should("be.visible")
          .get(whatToExpectPage.evaluationInfoText)
          .should("be.visible")
        cy.get(whatToExpectPage.continueToCheck)
          .scrollIntoView()
          .get(whatToExpectPage.nextBtn)
          .should("be.visible")
          .and("have.text", "Next")
          .click()
          .get(whatToExpectPage.validationErrorMsg)
          .should("be.visible")
          .and("have.text", "Required")
          .get(whatToExpectPage.continueToCheck)
          .should("be.visible")
          .and("have.text", continueText)
          .get(whatToExpectPage.notInterestedToCheck)
          .should("be.visible")
          .and("have.text", notInterestedText)
          .click()
          .get(whatToExpectPage.nextBtn)
          .click()
          .get(whatToExpectPage.headerBar)
          .should("be.visible")
          .and("have.text", textToCheck)
          .get(whatToExpectPage.verifiedPageCheck)
          .should("be.visible")
          .and("have.text", contentToCheck)

    });

    it("Should check the screening.what_to_expect.0 page elements - Continue With the Ealuation scenario", () => {
        var textToCheck = "Thank you for your participation";
        var contentToCheck = "Kidney donation surgery will take place at UCSF and will require hospitalization for 2-3 daysThank you for considering living kidney donation. If you wish to contact us please send an e-mail to: Living.Donor@ucsfmedctr.orgNext";
        
        cy.visit("/what_to_expect.0")
          .get(whatToExpectPage.introStartSurBtn)
          .click()
        cy.get(whatToExpectPage.continueToCheck)
          .scrollIntoView()
          .get(whatToExpectPage.continueToCheck)
          .click()
          .get(whatToExpectPage.nextBtn)
          .click()
          .get(whatToExpectPage.headerBar)
          .should("be.visible")
          .and("have.text", textToCheck)
          .get(whatToExpectPage.participationConfirmContent)
          .should("be.visible")
          .and("have.text", contentToCheck)

    });

})