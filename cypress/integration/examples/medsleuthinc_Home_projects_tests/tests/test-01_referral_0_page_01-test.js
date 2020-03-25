import landingPage from "../library/01_referral_0_page_01";

describe("transplan kidney donor referral.0 page test", () => {
    before(() => {
      Cypress.config(
        "baseUrl",
        "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs/referral.0"
      );
      cy.viewport(1280, 800);
    });

    it("should check the referral.0 page elements", () => {
        var text = "How did you learn about the opportunity for living organ donation?";
        cy.visit("/referral.0")
          .get(landingPage.introNextBtn)
          .click()
          .get(landingPage.dialogProlog)
          .should("be.visible")
          .get(landingPage.headerBar)
          .should("be.visible")
          .then(el => {
            assert.include(el.text(), text);
          });
        });
    });