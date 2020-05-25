import ohsuMaritalStatus from "../page-objects/27_maritalstatus0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
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
    6. check the visibility of the placeholder
    7. check the visibility of the selector's content
    8. choose the necessary value
    9. navigate to the next page
    10. check the title of a header of the page
    */

    var maritalStatusHeading = "What is your current marital status?";
    var maritalStatusValues = [
      "Single",
      "Married",
      "Domestic Partnership",
      "Divorced",
      "Widowed"
    ];
    var offspringHeading = "Do you have children that you currently care for?";

    cy.visit("/maritalstatus.0")    //1. navigate to the "maritalstatus.0" dialog
      .contains(maritalStatusHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMaritalStatus.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMaritalStatus.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMaritalStatus.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuMaritalStatus.maritalStatusSelector)    //5. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //6. check the visibility of the placeholder
    for (var i = 0; i < maritalStatusValues.length; i++) {
      cy.get(ohsuMaritalStatus.maritalStatusSelector)
        .select(maritalStatusValues[i])
        .should("be.visible")
    };    //7. check the visibility of the selector's content
    cy.get(ohsuMaritalStatus.maritalStatusSelector)
      .select("Married");    //8. choose the necessary value

    cy.get(ohsuMaritalStatus.nextBtn)
      .click();    //9. navigate to the next page

    cy.get(ohsuMaritalStatus.headerBar)
      .should("be.visible")
      .and("have.text", offspringHeading);    //10. check the title of a header of the page

  });

})