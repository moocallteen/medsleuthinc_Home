import ohsuTobaccoScreening from "../page-objects/06_screening-tobacco";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.tobacco.standard page elements - Yes-Yes scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. validation error message check
    10. check the radio button visibility
    11. choose the necessary value
    12. navigate to the next page
    13. check the title of the current dialog
    */

    var tobaccoScreeningHeading = "Do you use tobacco (any type: chewing, vapor, e-cigarette, and/or cigarette) or marijuana?";
    var quitHeaderTitle = "Are you willing to quit smoking 4 weeks prior to surgery?";
    var pageToCheckTitle = "Do you use recreational or illicit drugs not including marijuana?";

    cy.visit("/screening.tobacco.standard")    //1. navigate to the specified page
      .contains(tobaccoScreeningHeading)    //2. check the title of the current dialog
      .should("be.visible");

    cy.get(ohsuTobaccoScreening.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuTobaccoScreening.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(ohsuTobaccoScreening.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuTobaccoScreening.noTobaccoRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .get(ohsuTobaccoScreening.yesTobaccoRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuTobaccoScreening.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuTobaccoScreening.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", quitHeaderTitle)
      .get(ohsuTobaccoScreening.nextBtn)    //9. validation error message check
      .and("contain", "Next")
      .click()
      .get(ohsuTobaccoScreening.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuTobaccoScreening.noTobaccoQuitRadioBtn)    //10. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .get(ohsuTobaccoScreening.yesTobaccoQuitRadioBtn)    //10. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .click()    //11. choose the necessary value
      .get(ohsuTobaccoScreening.nextBtn)
      .click()    //12. navigate to the next page
      .get(ohsuTobaccoScreening.headerBar)
      .should("have.text", pageToCheckTitle);    //13. check the title of the current dialog

  });

  it("Should check the screening.tobacco.standard page elements - No scenario", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the title of the current dialog
    */

    var pageToCheckTitle = "Do you use recreational or illicit drugs not including marijuana?";

    cy.visit("/screening.tobacco.standard")    //1. navigate to the specified page
      .get(ohsuTobaccoScreening.introStartSurBtn)    //2. click to start the survey
      .click()
      .get(ohsuTobaccoScreening.noTobaccoRadioBtn)    //3. choose the necessary value
      .click()
      .get(ohsuTobaccoScreening.nextBtn)    //4. navigate to the next page
      .click()
      .get(ohsuTobaccoScreening.headerBar)    //5. check the title of the current dialog
      .should("be.visible")
      .and("have.text", pageToCheckTitle);

  });

  /*it("Should check the screening.tobacco.standard page elements - Yes-No scenario", () => {

    
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. choose the necessary value
    6. navigate to the next page
    7. check the content visibility
    

    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Your diabetes places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.tobacco.standard")    //1. navigate to the specified page
      .get(ohsuTobaccoScreening.introStartSurBtn)    //2. click to start the survey
      .click()
      .get(ohsuTobaccoScreening.yesTobaccoRadioBtn)    //3. choose the necessary value
      .click()
      .get(ohsuTobaccoScreening.nextBtn)    //4. navigate to the next page
      .click()
      .get(ohsuTobaccoScreening.noTobaccoQuitRadioBtn)    //5. choose the necessary value
      .click()
      .get(ohsuTobaccoScreening.nextBtn)    //6. navigate to the next page
      .click();

    cy.contains(rejectionHeader)
      .should("be.visible");    //7. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //7. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //7. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //7. check the content visibility

  });*/

})