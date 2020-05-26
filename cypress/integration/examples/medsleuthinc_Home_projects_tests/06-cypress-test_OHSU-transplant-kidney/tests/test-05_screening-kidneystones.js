import ohsuKidneyStonesScreening from "../page-objects/05_screening-kidneystones";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.kidneystones.everhadthem page elements - Yes scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the content visibility
    */

    var kidneyStonesScreeningHeading = "Have you had any kidney stones in the past 10 years?";
    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Your history of kidney stones places you at increased risk of kidney disease and dangerous complications if you donate your kidney";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.kidneystones.everhadthem")    //1. navigate to the specified page
      .contains(kidneyStonesScreeningHeading)    //2. check the title of the current dialog
      .should("be.visible");

    cy.get(ohsuKidneyStonesScreening.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuKidneyStonesScreening.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuKidneyStonesScreening.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuKidneyStonesScreening.noRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .get(ohsuKidneyStonesScreening.yesRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuKidneyStonesScreening.nextBtn)
      .click();    //7. navigate to the next page

    cy.contains(rejectionHeader)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //8. check the content visibility


  });

  it("Should check the screening.kidneystones.everhadthem page elements - No scenario", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the title of the current dialog
    */

    var pageToCheckTitle = "Do you use tobacco (any type: chewing, vapor, e-cigarette, and/or cigarette) or marijuana?";

    cy.visit("/screening.kidneystones.everhadthem")    //1. navigate to the specified page
      .get(ohsuKidneyStonesScreening.introStartSurBtn)    //2. click to start the survey
      .click()
      .get(ohsuKidneyStonesScreening.noRadioBtn)    //3. choose the necessary value
      .click()
      .get(ohsuKidneyStonesScreening.nextBtn)    //4. navigate to the next page
      .click()
      .get(ohsuKidneyStonesScreening.headerBar)    //5. check the title of the current dialog
      .then(el => {
        assert.include(el.text(), pageToCheckTitle)
      });

  });

})