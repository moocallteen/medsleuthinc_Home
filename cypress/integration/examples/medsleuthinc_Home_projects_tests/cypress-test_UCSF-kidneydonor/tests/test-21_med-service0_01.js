import medService from "../page-objects/21_med-service0_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the med-service.0 page elements - Yes scenario ", () => {

    /*
    1. navigate to the "med-servise.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    */

    cy.visit("/med-service.0")   //1. navigate to the "med-servise.0" dialog
      .contains("Have you ever received treatment or care from one of our affiliated clinics?") //2. check the title of the dialog
      .get(medService.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.get(medService.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medService.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //4. validation error message checking

    cy.get(medService.yesOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")   //5. check the visibility of the checkboxes
      .click()   //6. choose the necessary value      
      .get(medService.noOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "No");   //5. check the visibility of the checkboxes

    cy.get(medService.nextBtn)
      .click();  //7. navigate to the next page

    cy.get(medService.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Family's Medical History:"); //8. check the title of a header of the page

  });

  it("Should check the med-service.0 page elements - No scenario ", () => {

    /*
    1. navigate to the "med-servise.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    */

    cy.visit("/med-service.0")   //1. navigate to the "med-servise.0" dialog
      .contains("Have you ever received treatment or care from one of our affiliated clinics?") //2. check the title of the dialog
      .get(medService.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.get(medService.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medService.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //4. validation error message checking

    cy.get(medService.yesOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")   //5. check the visibility of the checkboxes
      .get(medService.noOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "No")   //5. check the visibility of the checkboxes
      .click();   //6. choose the necessary value      

    cy.get(medService.nextBtn)
      .click();  //7. navigate to the next page

    cy.get(medService.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Family's Medical History:"); //8. check the title of a header of the page

  });

})
