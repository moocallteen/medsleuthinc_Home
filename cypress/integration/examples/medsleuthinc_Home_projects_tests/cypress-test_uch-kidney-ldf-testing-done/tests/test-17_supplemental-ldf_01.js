import doubleBtnSupplemental from "../page-objects/17_supplemental-ldf_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/uch-transplant-kidney-followup/donor-followup-0/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the supplemental.ldf dialog's [the doubled button] issue's fix", () => {

    // link to the ticket [https://trello.com/c/S8JaBv9Q]

    /*
    1. navigate to the "supplemental.ldf" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the text area's title
    5. check the visibility of the text area
    6. input the required information
    7. check the visibility of the button
    8. click to submit the questionnaire
    9. check the heading of the "thankyou.ldf" page
    */

    var suplementalHeading = "Is there any additional information that you would like shared with your health care providers? (optional)";
    var textAreaTitle = "Please write your additional comments here:";

    cy.visit("/supplemental.ldf")    //1. navigate to the "supplemental.ldf" dialog
      .contains(suplementalHeading)   //2. check the title of the dialog
      .get(doubleBtnSupplemental.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains(textAreaTitle);    //4. check the visibility of the text area's title

    cy.get(doubleBtnSupplemental.textArea)    //5. check the visibility of the text area
      .should("be.visible")
      .type(suplementalHeading);    //6. input the required information

    cy.get(doubleBtnSupplemental.nextBtn)    //7. check the visibility of the button
      .should("be.visible")
      .and("have.text", "Submit")
      .click();    //8. click to submit the questionnaire

    cy.get(doubleBtnSupplemental.headerBar)    //9. check the heading of the "thankyou.ldf" page
      .should("be.visible")
      .and("have.text", "Questionnaire Submitted");

  });

})