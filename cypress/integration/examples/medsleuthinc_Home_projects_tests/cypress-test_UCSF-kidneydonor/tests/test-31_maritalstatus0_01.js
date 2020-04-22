import maritalStatus0 from "../page-objects/31_maritalstatus0_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the maritalstatus.0 page elements - Married scenario", () => {

    /*
    1. navigate to the "maritalstatus.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the selector
    6. check the visibility of the selector's conten
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    */

    var maritalStatusValues = [
      "Single",
      "Married",
      "Domestic Partnership",
      "Divorced",
      "Widowed"
    ];

    cy.visit("/maritalstatus.0")    //1. navigate to the "maritalstatus.0" dialog
      .contains("What is your current marital status?")    //2. check the title of the dialog
      .get(maritalStatus0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(maritalStatus0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(maritalStatus0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(maritalStatus0.maritalStatusSelector)
      .should("be.visible")
      .and("contain", "Select One")    //5. check the visibility of the selector
    for (var i = 0; i < maritalStatusValues.length; i++) {
      cy.get(maritalStatus0.maritalStatusSelector)
        .select(maritalStatusValues[i])
        .should("be.visible")
    };    //6. check the visibility of the selector's content
    cy.get(maritalStatus0.maritalStatusSelector)
      .select("Married");    //7. choose the necessary value

    cy.get(maritalStatus0.nextBtn)
      .click();    //8. navigate to the next page

    cy.get(maritalStatus0.headerBar)
      .should("be.visible")
      .and("have.text", "Do you have children that you currently care for?");    //9. check the title of a header of the page

  });

})
