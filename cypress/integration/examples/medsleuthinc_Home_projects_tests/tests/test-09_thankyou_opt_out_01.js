import thankYouOptOut from "../page objects/09_thankyou_opt_out_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the thankyou_opt_out.0 page elements", () => {

        var thankYouContentToCheck = "Thank you for considering living kidney donation. If you wish to contact us please send an e-mail to: Living.Donor@ucsfmedctr.orgNext";
        var headerText = "This health questionnaire will take approximately 15 to 20 minutes to complete.";
        var contentToCheck = "In order to complete this questionnaire, you will need to provide the names of all medications, vitamins, and herbal supplements that you currently take. Please include those medications that you take on a regular basis, and also those medications that you take occasionally ('as needed')";

        cy.visit("/thankyou_opt_out.0")
          .contains("Thank you for your participation")
          .get(thankYouOptOut.introStartSurBtn)
          .should("be.visible")
          .click()
          .get(thankYouOptOut.thankYouContent)
          .should("be.visible")
          .and("have.text", thankYouContentToCheck)
          .get(thankYouOptOut.nextBtn)
          .should("be.visible")
          .and("have.text", "Next")
          .click()
        cy.get(thankYouOptOut.headerBar)
          .should("be.visible")
          .and("have.text", headerText)
          .get(thankYouOptOut.contentContainer)
          .should("be.visible")
          .and("have.text", contentToCheck)


    });
    
}) 
