import otherMedConditions from "../page-objects/20_other-med-conditions1_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the other-med-conditions.1 page elements - Yes scenario ", () => {

    /*
    1. navigate to the "other-med-conditions.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    9. validation error message checking
    10. type the description of all other medical issues
    11. navigate to the next page
    12. check the title of a header of the page
    */

    cy.visit("/other-med-conditions.1")    //1. navigate to the "other-med-conditions.1" dialog
      .contains("Do you have any other medical issues that you have not already identified?")    //2. check the title of the dialog
      .get(otherMedConditions.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(otherMedConditions.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(otherMedConditions.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //4. validation error message checking

    cy.get(otherMedConditions.yesOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the checkboxes
      .click()    //6. choose the necessary value
      .get(otherMedConditions.noOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the checkboxes

    cy.get(otherMedConditions.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(otherMedConditions.headerBar)
      .should("be.visible")
      .and("have.text", "Please describe all other medical issues:");    //8. check the title of a header of the page

    cy.get(otherMedConditions.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(otherMedConditions.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //9. validation error message checking

    cy.get(otherMedConditions.inputOtherMedCond)
      .should("be.visible")
      .type("Other Medical Condition");    //10. type the description of all other medical issues

    cy.get(otherMedConditions.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(otherMedConditions.headerBar)
      .should("be.visible")
      .and("have.text", "Have you ever received treatment or care from one of our affiliated clinics?");    //12. check the title of a header of the page

  });

  it("Should check the other-med-conditions.1 page elements - No scenario ", () => {

    /*
    1. navigate to the "other-med-conditions.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the checkboxes
    5. choose the necessary value
    6. navigate to the next page
    7. check the title of a header of the page
    */

    cy.visit("/other-med-conditions.1")    //1. navigate to the "other-med-conditions.1" dialog
      .contains("Do you have any other medical issues that you have not already identified?")    //2. check the title of the dialog
      .get(otherMedConditions.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(otherMedConditions.yesOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //4. check the visibility of the checkboxes
      .get(otherMedConditions.noOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "No")    //4. check the visibility of the checkboxes
      .click();    //5. choose the necessary value

    cy.get(otherMedConditions.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(otherMedConditions.headerBar)
      .should("be.visible")
      .and("have.text", "Have you ever received treatment or care from one of our affiliated clinics?");    //7. check the title of a header of the page

  });

})
