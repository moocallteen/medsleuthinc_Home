import ohsuWhatToExpect from "../page-objects/08_what_to_expect";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.what_to_expect.0.ohsu page elements", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the content visibility
    5. check the reference visibility
    6. validation error message check
    7. check the checkbox visibility
    8. activate the checkbox
    9. check the input field visibility
    10. navigate to the next page
    11. check the title of the current dialog
    */

    var whatToExpectHeading = "Before we proceed with the Online Screening, here is some important information.";
    var evaluationSomeContent = "All donors are required to come to OHSU for at least one full day of testing and appointments with the living donor team.";
    var consentTermsRefTitle = "Living Donor Consent Terms";
    var consentText = "I consent to initiate the living kidney donation evaluation process and allow the transplant center to review my health questionnaire and any additional health history available in the shared medical record. The review of my medical record is confidential and will be viewed only by individuals directly involved in determining if I am eligible for living donation.";
    var inputHeading = "Please enter your full legal name:Required";
    var instructionsHeading = "This health questionnaire will take approximately 15 to 20 minutes to complete.";

    cy.visit("/what_to_expect.0.ohsu")    //1. navigate to the specified page
      .contains(whatToExpectHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuWhatToExpect.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.contains("Donor Evaluation")    //4. check the content visibility
      .should("be.visible")
      .get(ohsuWhatToExpect.evaluationInfoText)
      .should("be.visible")
      .and("contain", evaluationSomeContent);

    cy.get(ohsuWhatToExpect.consentTermsReference)    //5. check the reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", consentTermsRefTitle);

    cy.get(ohsuWhatToExpect.nextBtn)    //6. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuWhatToExpect.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuWhatToExpect.choiceConsentCheckBox)    //7. check the checkbox visibility
      .should("be.visible")
      .and("have.text", consentText)
      .click();    //8. activate the checkbox

    cy.get(ohsuWhatToExpect.fullLegalNameInput)    //9. check the input field visibility
      .should("be.visible")
      .and("have.text", inputHeading)
      .type("Donor's FullLegal Name");

    cy.get(ohsuWhatToExpect.nextBtn)    //10. navigate to the next page
      .click()
      .get(ohsuWhatToExpect.headerBar)    //11. check the title of the current dialog
      .should("be.visible")
      .and("have.text", instructionsHeading);

  });

})