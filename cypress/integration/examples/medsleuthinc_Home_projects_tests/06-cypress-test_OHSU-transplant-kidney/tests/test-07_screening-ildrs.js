import ohsuDrugAbuseScreening from "../page-objects/07_screening-ildrs";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.drugabuse page elements - Yes scenario", () => {

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

    var dialogHeading = "Do you use recreational or illicit drugs not including marijuana?";
    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Stop using illicit drugs for at least 6 months.";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.drugabuse")    //1. navigate to the specified page
      .contains(dialogHeading)    //2. check the title of the current dialog
      .get(ohsuDrugAbuseScreening.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDrugAbuseScreening.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(ohsuDrugAbuseScreening.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDrugAbuseScreening.noIlDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .get(ohsuDrugAbuseScreening.yesIlDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuDrugAbuseScreening.nextBtn)
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

  it("Should check the screening.drugabuse page elements - No scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of the current dialog
    */

    var dialogHeading = "Do you use recreational or illicit drugs not including marijuana?";
    var headerToCheck = "Before we proceed with the Online Screening, here is some important information.";

    cy.visit("/screening.drugabuse")    //1. navigate to the specified page
      .contains(dialogHeading)    //2. check the title of the current dialog
      .get(ohsuDrugAbuseScreening.introStartSurBtn)    //3. click to start the survey
      .click()
      .get(ohsuDrugAbuseScreening.noIlDrugsRadioBtn)    //4. choose the necessary value
      .click()
      .get(ohsuDrugAbuseScreening.nextBtn)    //5. navigate to the next page
      .click()
      .get(ohsuDrugAbuseScreening.headerBar)    //6. check the title of the current dialog
      .should("be.visible")
      .and("have.text", headerToCheck);

  });

})