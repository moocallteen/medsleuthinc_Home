import ohsuReferralPage from "../page-objects/01_referral_page";

describe("OHSU transplant kidney donor referral.0 page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("should check the referral.0 page elements", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    */

    var transplantCandidateText = "From the transplant candidate";
    var candidatesSomeoneText = "From someone I know on behalf of the transplant candidate (a family member or friend)";
    var socialMediaText = "From social media (such as Facebook)";
    var myOwnResearchText = "From my own research";
    var anotherPatientText = "From another donor, recipient or patient.";
    var otherText = "Other";

    cy.visit("/referral.0")    //1. navigate to the specified page
      .contains("How did you learn about the opportunity for living organ donation?");    //2. check the title of the current dialog

    cy.get(ohsuReferralPage.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuReferralPage.nextBtn)    //4. validation error message check
      .should("be.visible")
      .get(ohsuReferralPage.nextBtn)
      .click()
      .get(ohsuReferralPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuReferralPage.transplantCandidateRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", transplantCandidateText);

    cy.get(ohsuReferralPage.candidatesSomeoneRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", candidatesSomeoneText);

    cy.get(ohsuReferralPage.socialMediaRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", socialMediaText);

    cy.get(ohsuReferralPage.myOwnResearchRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", myOwnResearchText)
      .click();    //6. choose the necessary value

    cy.get(ohsuReferralPage.anotherPatientRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", anotherPatientText);

    cy.get(ohsuReferralPage.otherRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", otherText);

    cy.get(ohsuReferralPage.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuReferralPage.dialogHeaderBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Demographics");

  });

})