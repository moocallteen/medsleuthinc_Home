import noHardRejectionB3Done from "../page-objects/01_screeninghepc";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.demo.prod-blue.pipeline.mdsth.co/demo-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.hepc dialog's [No Hard Rejection] issue's fix", () => {

    // link to the ticket [https://trello.com/c/S9iPN1Eq]

    /*
    1. navigate to the "screening.hepc" dialog
    2. check the title of the dialog
    3. click to start survey
    4. activate "Yes" radio button
    5. navigate to the next page
    6. check the title of the page
    7. check the content availability on page
    */

    var hepCRejectHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var hepCRejectContentText = "Your history of Hepatitis C places you at increased risk of kidney disease and dangerous complications if you donate your kidney";
    var hepCRejectFooterText = "If you have any questions, you may email us at help@medsleuth.com and a member of our transplant team will get back to you within 2 to 3 business days.";

    cy.visit("/screening.hepc")    //1. navigate to the "screening.hepc" dialog
      .contains("Do you have Hepatitis C?")   //2. check the title of the dialog
      .get(noHardRejectionB3Done.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(noHardRejectionB3Done.yesHepatitisCRadioBtn)
      .click()    //4. activate "Yes" radio button
      .get(noHardRejectionB3Done.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(noHardRejectionB3Done.headerBar)
      .should("be.visible")
      .and("have.text", "Thank you for your generous offer to be a kidney donor");   //6. check the title of the page

    cy.get(noHardRejectionB3Done.hepCRejectHeader)
      .should("be.visible")
      .and("have.text", hepCRejectHeaderText)    //7. check the content availability on page
      .get(noHardRejectionB3Done.hepCRejectContent)
      .should("be.visible")
      .and("have.text", hepCRejectContentText)    //7. check the content availability on page
      .get(noHardRejectionB3Done.hepCRejectFooter)
      .should("be.visible")
      .and("have.text", hepCRejectFooterText);    //7. check the content availability on page

  });

})
