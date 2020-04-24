import supplemental01 from "../page-objects/39_supplemental01_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
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

    var dialogHeaderTitle = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";

    cy.visit("/supplemental.01")    //1. navigate to the "supplemental.01" dialog
      .contains(dialogHeaderTitle)    //2. check the title of the dialog
      .get(supplemental01.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please write here...");    //4. check the title of the section

    cy.get(supplemental01.textArea)    //5. check the visibility of the item 
      .should("be.visible")
      .type("Additional Information");    //6. type in the required information

    cy.get(supplemental01.submitBtn)    //7. check the visibility of the button
      .should("be.visible")
      .and("have.text", "Submit")
      .click();    //8. submit the questionnaire

    cy.get(supplemental01.headerBar)
      .should("be.visible")
      .and("have.text", "Questionnaire Submitted");    //9. check the title of a header of the page

  });

})