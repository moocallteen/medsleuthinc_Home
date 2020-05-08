import doubledBtnMayoMn from "../page-objects/01_the_doubled_button";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/mayo-mn-transplant-kidney-followup/donor-followup-0/dialogs/"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the supplemental.ldf dialog's [the doubled button] issue's fix", () => {

    // link to the ticket [https://trello.com/c/f5tdOwOj]

    /*
    1. navigate to the "supplemental.ldf" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the button
    */

    var supplementalHeading = "Is there any additional information that you would like shared with your health care providers? (optional)";

    cy.visit("/supplemental.ldf")    //1. navigate to the "supplemental.ldf" dialog
      .contains(supplementalHeading)   //2. check the title of the dialog
      .get(doubledBtnMayoMn.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(doubledBtnMayoMn.submitBtn)   //4. check the visibility of the button
      .should("be.visible")
      .and("have.text", "Submit");

  });

})