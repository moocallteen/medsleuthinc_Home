import referralPage from "../page objects/01_referral_page_01";

describe("transplan kidney donor referral.0 page test", () => {
    before(() => {
      Cypress.config(
        "baseUrl",
        "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
      );
      cy.viewport(1280, 800);
    });

    it("should check the referral.0 page elements", () => {
      var textNextBtn = "Next";
      var transplantCandidateText = "From the transplant candidate";
      var candidatesSomeoneText = "From someone I know on behalf of the transplant candidate (a family member or friend)";
      var socialMediaText = "From social media (such as Facebook)";
      var myOwnResearchText = "From my own research";
      var anotherPatientText = "From another donor, recipient or patient.";
      var otherText = "Other";  
        cy.visit("/referral.0")
          .get(referralPage.introStartSurBtn)
          .click()
          .get(referralPage.nextBtn)
          .then(el => {
            assert.include(el.text(), textNextBtn);
            

        cy.get(referralPage.transplantCandidateRadioBtn)
          .should("be.visible")
          .get(referralPage.transplantCandidateTextBlock)
          .should("have.text", transplantCandidateText)
          .get(referralPage.candidatesSomeoneRadioBtn)
          .should("be.visible")
          .get(referralPage.candidatesSomeoneTextBlock)
          .should("have.text", candidatesSomeoneText)
          .get(referralPage.socialMediaRadioBtn)
          .should("be.visible")
          .get(referralPage.socialMediaTextBlock)
          .should("have.text", socialMediaText)
          .get(referralPage.myOwnResearchRadioBtn)
          .should("be.visible")
          .get(referralPage.myOwnResearchTextBlock)
          .should("have.text", myOwnResearchText)
          .get(referralPage.anotherPatientRadioBtn)
          .should("be.visible")
          .get(referralPage.anotherPatientTextBlock)
          .should("have.text", anotherPatientText)
          .get(referralPage.otherRadioBtn)
          .should("be.visible")
          .get(referralPage.otherTextBlock)
          .should("have.text", otherText)
          .get(referralPage.nextBtn)
          .should("be.visible")
          .get(referralPage.nextBtn)
          .click()
          .get(referralPage.validationErrorMsg)
          // .first()
          .should("have.text", "Required")
          .get(referralPage.myOwnResearchRadioBtn)
          .check()
          .get(referralPage.nextBtn)
          .should("have.text", textNextBtn)
          .click();

          // .get(referralPage.headerBar)
          // .should("be.visible") 
          //  assert.include(el.text(), text);
        cy.contains("Demographics")
          .should("be.visible")
          });
        });
    });