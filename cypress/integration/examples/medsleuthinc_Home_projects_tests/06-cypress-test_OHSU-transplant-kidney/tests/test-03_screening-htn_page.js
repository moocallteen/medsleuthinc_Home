import ohsuBloodScreening from "../page-objects/03_screening-htn_page";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.htn.0 page elements - Yes scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the content visibility
    10. check the placeholder visibility
    11. check the selector's content
    12. navigate to the next page
    13. check the content visibility
    */

    var bloodScreeningHeading = "Do you take any medications to control your Blood Pressure?";
    var medicationQtyTxt = "How many medications do you take to control your blood pressure?";
    var selectorText = "Select One";
    var selectorValues = [
      "1",
      "2",
      ">2"
    ];
    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Your high blood pressure places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.htn.0")    //1. navigate to the specified page
      .contains(bloodScreeningHeading)    //2. check the title of the current dialog
      .should("be.visible");

    cy.get(ohsuBloodScreening.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .click();

    cy.get(ohsuBloodScreening.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(ohsuBloodScreening.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuBloodScreening.noRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .get(ohsuBloodScreening.yesRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuBloodScreening.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuBloodScreening.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("contain", medicationQtyTxt)
      .get(ohsuBloodScreening.medicationQtyBar)    //9. check the content visibility
      .should("be.visible")
      .and("contain", selectorText)    //10. check the placeholder visibility
    for (var i = 0; i < selectorValues.length; i++) {
      cy.get(ohsuBloodScreening.medicationQtySelector)
        .select(selectorValues[i])
        .should("be.visible")
    };    //11. check the selector's content

    cy.get(ohsuBloodScreening.nextBtn)
      .click();    //12. navigate to the next page

    cy.contains(rejectionHeader)
      .should("be.visible");    //13. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //13. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //13. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //13. check the content visibility

  });

  it("Should check the screening.htn.0 page elements - No scenario", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the title of the current dialog
    */

    cy.visit("/screening.htn.0")    //1. navigate to the specified page
      .get(ohsuBloodScreening.introStartSurBtn)    //2. click to start the survey
      .click();

    cy.get(ohsuBloodScreening.noRadioBtn)    //3. choose the necessary value
      .click();

    cy.get(ohsuBloodScreening.nextBtn)    //4. navigate to the next page
      .click();

    cy.contains("Do you have Diabetes?")    //5. check the title of the current dialog
      .should("be.visible");

  });

})

