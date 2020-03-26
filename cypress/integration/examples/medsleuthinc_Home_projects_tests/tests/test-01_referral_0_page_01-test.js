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
        // var text = "From someone I know on behalf of the transplant candidate (a family member or friend)";
          var textNextBtn = "Next";
        cy.visit("/referral.0")
          .get(landingPage.introStartSurBtn)
          .click()
          
          .get(landingPage.transplantCandidateRadioBtn)
          .should("be.visible")
          .get(landingPage.candidatesSomeoneRadioBtn)
          .should("be.visible")
          .get(landingPage.socialMediaRadioBtn)
          .should("be.visible")
          .get(landingPage.myOwnResearchRadioBtn)
          .should("be.visible")
          .get(landingPage.anotherPatientRadioBtn)
          .should("be.visible") 
          .get(landingPage.otherRadioBtn)
          .should("be.visible")
          .get(landingPage.nextBtn)
          .should("be.visible")
          .get(landingPage.nextBtn)
          .click()
          .get(landingPage.validationErrorMsg)
          .first()
          .should('have.text', 'Required')
          .get(landingPage.myOwnResearchRadioBtn)
          .check()
          .get(landingPage.nextBtn)

          // .get(landingPage.headerBar)
          // .should("be.visible")
           .then(el => {
            assert.include(el.text(), textNextBtn);
            //  assert.include(el.text(), text);
          });
        });
    });