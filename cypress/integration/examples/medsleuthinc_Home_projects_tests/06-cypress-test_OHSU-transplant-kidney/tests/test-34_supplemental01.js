import ohsuSupplemental from "../page-objects/34_supplemental01";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the supplemental.01 page elements", () => {

    /*
    1. navigate to the "supplemental.01" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the item
    6. type in the required information
    7. check the visibility of the button
    8. submit the questionnaire
    9. check the title of a header of the page
    */

    var submitHeading = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";

    cy.visit("/supplemental.01")    //1. navigate to the "supplemental.01" dialog
      .contains(submitHeading)    //2. check the title of the dialog
      .get(ohsuSupplemental.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please write here...");    //4. check the title of the section

    cy.get(ohsuSupplemental.textArea)    //5. check the visibility of the item 
      .should("be.visible")
      .type("Additional Information");    //6. type in the required information

    cy.get(ohsuSupplemental.submitBtn)    //7. check the visibility of the button
      .should("be.visible")
      .and("have.text", "Submit")
      .click();    //8. submit the questionnaire

    cy.get(ohsuSupplemental.headerBar)
      .should("be.visible")
      .and("have.text", "Questionnaire Submitted");    //9. check the title of a header of the page

  });

})