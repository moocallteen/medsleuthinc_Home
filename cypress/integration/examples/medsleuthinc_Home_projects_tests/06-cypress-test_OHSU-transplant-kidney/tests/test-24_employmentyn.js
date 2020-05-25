import ohsuEmploymentYn from "../page-objects/24_employmentyn";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the employment.yn page elements - Yes scenario", () => {

    /*
    1. navigate to the "employment.yn" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the radio buttons
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    9. validation error message checking
    10. check the title of the section
    11. check the visibility of the radio buttons
    12. choose the necessary value
    13. check the title of the section
    14. input required information
    15. check the title of the section
    16. input required information
    17. navigate to the next page
    18. check the title of a header of the page
    */

    var employmentHeading = "Are you currently working for income?";
    var employmentStatusTitile = "Which of the following describes your current Employment Status?";
    var livingArrangementHeading = "With regard to your living arrangment:";

    cy.visit("/employment.yn")    //1. navigate to the "employment.yn" dialog
      .contains(employmentHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmploymentYn.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuEmploymentYn.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuEmploymentYn.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuEmploymentYn.yesEmploymentRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio buttons
      .click()    //6. choose the necessary value
      .get(ohsuEmploymentYn.noEmploymentRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the radio buttons

    cy.get(ohsuEmploymentYn.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuEmploymentYn.headerBar)
      .should("be.visible")
      .and("have.text", employmentStatusTitile);    //8. check the title of a header of the page

    cy.get(ohsuEmploymentYn.nextBtn)    //9. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuEmploymentYn.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Please select ONE of the following:");    //10. check the title of the section
    cy.get(ohsuEmploymentYn.fullTimeStatusRadioBtn)
      .should("be.visible")
      .and("have.text", "Full time employee")    //11. check the visibility of the radio buttons
      .click()    //12. choose the necessary value

      .get(ohsuEmploymentYn.partTimeStatusRadioBtn)
      .should("be.visible")
      .and("have.text", "Part time employee")    //11. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.selfEmployedStatusRadioBtn)
      .should("be.visible")
      .and("have.text", "Self employed");    //11. check the visibility of the radio buttons

    cy.contains("What is your occupation?");    //13. check the title of the section
    cy.get(ohsuEmploymentYn.occupationInputField)
      .should("be.visible")
      .type("Donor's Occupation");    //14. input required information

    cy.contains("Who is your employer?");    //15. check the title of the section
    cy.get(ohsuEmploymentYn.employerInputField)
      .should("be.visible")
      .type("Donor's Employer");    //16. input required information

    cy.get(ohsuEmploymentYn.nextBtn)
      .click();    //17. navigate to the next page

    cy.get(ohsuEmploymentYn.headerBar)
      .should("be.visible")
      .and("have.text", livingArrangementHeading);    //18. check the title of a header of the page

  });

  it("Should check the employment.yn page elements - No scenario", () => {

    /*
    1. navigate to the "employment.yn" dialog
    2. check the title of the dialog
    3. click to start survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of a header of the page
    7. validation error message checking
    8. check the title of the section
    9. check the visibility of the radio buttons
    10. choose the necessary value
    11. navigate to the next page
    12. check the title of a header of the page
    */

    var employmentHeading = "Are you currently working for income?";
    var employmentStatusTitile = "Which of the following describes your current Employment Status?";
    var livingArrangementHeading = "With regard to your living arrangment:";

    cy.visit("/employment.yn")    //1. navigate to the "employment.yn" dialog
      .contains(employmentHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmploymentYn.introStartSurBtn)
      .click();    //3. click to start survey

    cy.get(ohsuEmploymentYn.noEmploymentRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .click();    //4. choose the necessary value

    cy.get(ohsuEmploymentYn.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(ohsuEmploymentYn.headerBar)
      .should("be.visible")
      .and("have.text", employmentStatusTitile);    //6. check the title of a header of the page

    cy.get(ohsuEmploymentYn.nextBtn)    //7. validation error message checking
      .click()
      .get(ohsuEmploymentYn.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Please select ONE of the following:");    //8. check the title of the section
    cy.get(ohsuEmploymentYn.disabledRadioBtn)
      .should("be.visible")
      .and("have.text", "Disabled")    //9. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.homemakerRadioBtn)
      .should("be.visible")
      .and("have.text", "Homemaker")    //9. check the visibility of the radio buttons
      .click()    //10. choose the necessary value

      .get(ohsuEmploymentYn.inabilityToFindRadioBtn)
      .should("be.visible")
      .and("have.text", "Inability to Find Work")    //9. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.insuranceConflictRadioBtn)
      .should("be.visible")
      .and("have.text", "Insurance Conflict")    //9. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.retiredRadioBtn)
      .should("be.visible")
      .and("have.text", "Retired")    //9. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.studentRadioBtn)
      .should("be.visible")
      .and("have.text", "Student (Full or Part Time)");    //9. check the visibility of the radio buttons

    cy.get(ohsuEmploymentYn.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(ohsuEmploymentYn.headerBar)
      .should("be.visible")
      .and("have.text", livingArrangementHeading);    //12. check the title of a header of the page

  });

})