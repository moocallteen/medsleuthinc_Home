import btnShiftedTopUCHldf from "../page-objects/02_title_of_button_is_shifted";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/uch-transplant-kidney-followup/donor-followup-0/dialogs/"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the supplemental.ldf dialog's [the title of the button is shifted to the top] issue's fix", () => {

    // link to the ticket [https://trello.com/c/u4TJtpkl]

    /*
    1. navigate to the "supplemental.ldf" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the paddings of the button's title
    */

    var supplementalHeading = "Is there any additional information that you would like shared with your health care providers? (optional)";

    cy.visit("/supplemental.ldf")    //1. navigate to the "supplemental.ldf" dialog
      .contains(supplementalHeading)   //2. check the title of the dialog
      .get(btnShiftedTopUCHldf.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(btnShiftedTopUCHldf.submitBtn)   //4. check the paddings of the button's title
      .should("have.css", "padding", "0px");

  });

})
