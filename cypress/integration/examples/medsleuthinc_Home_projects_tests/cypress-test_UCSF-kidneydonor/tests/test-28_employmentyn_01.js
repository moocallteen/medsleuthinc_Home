import employmentYn from "../page-objects/28_employmentyn_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
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
    9. check the title of the section
    10. check the visibility of the radio buttons
    11. choose the necessary value
    12. check the title of the section
    13. input required information
    14. check the title of the section
    15. input required information
    16. navigate to the next page
    17. check the title of a header of the page
    */

    cy.visit("/employment.yn")    //1. navigate to the "employment.yn" dialog
      .contains("Are you currently working for income?")    //2. check the title of the dialog
      .get(employmentYn.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(employmentYn.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(employmentYn.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(employmentYn.yesEmploymentRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio buttons
      .click()    //6. choose the necessary value
      .get(employmentYn.noEmploymentRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the radio buttons

    cy.get(employmentYn.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(employmentYn.headerBar)
      .should("be.visible")
      .and("have.text", "Which of the following describes your current Employment Status?");    //8. check the title of a header of the page

    cy.contains("hich of the following describes your current Employment Status?");    //9. check the title of the section
    cy.get(employmentYn.fullTimeStatusRadioBtn)
      .should("be.visible")
      .and("have.text", "Full time employee")    //10. check the visibility of the radio buttons
      .click()    //11. choose the necessary value

      .get(employmentYn.partTimeStatusRadioBtn)
      .should("be.visible")
      .and("have.text", "Part time employee")    //10. check the visibility of the radio buttons

      .get(employmentYn.selfEmployedStatusRadioBtn)
      .should("be.visible")
      .and("have.text", "Self employed");    //9. check the visibility of the radio buttons


    cy.contains("What is your occupation?");    //12. check the title of the section
    cy.get(employmentYn.occupationInputField)
      .should("be.visible")
      .type("Donor's Occupation");    //13. input required information

    cy.contains("Who is your employer?");    //14. check the title of the section
    cy.get(employmentYn.employerInputField)
      .should("be.visible")
      .type("Donor's Employer");    //15. input required information

    cy.get(employmentYn.nextBtn)
      .click();    //16. navigate to the next page

    cy.get(employmentYn.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your living arrangment:");    //17. check the title of a header of the page

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

    cy.visit("/employment.yn")    //1. navigate to the "employment.yn" dialog
      .contains("Are you currently working for income?")    //2. check the title of the dialog
      .get(employmentYn.introStartSurBtn)
      .click();    //3. click to start survey

    cy.get(employmentYn.noEmploymentRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .click();    //4. choose the necessary value

    cy.get(employmentYn.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(employmentYn.headerBar)
      .should("be.visible")
      .and("have.text", "Which of the following describes your current Employment Status?");    //6. check the title of a header of the page

    cy.get(employmentYn.nextBtn)
      .click()
      .get(employmentYn.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //7. validation error message checking


    cy.contains("Please select ONE of the following:");    //8. check the title of the section
    cy.get(employmentYn.disabledRadioBtn)
      .should("be.visible")
      .and("have.text", "Disabled")    //9. check the visibility of the radio buttons

      .get(employmentYn.homemakerRadioBtn)
      .should("be.visible")
      .and("have.text", "Homemaker")    //9. check the visibility of the radio buttons
      .click()    //10. choose the necessary value

      .get(employmentYn.inabilityToFindRadioBtn)
      .should("be.visible")
      .and("have.text", "Inability to Find Work")    //9. check the visibility of the radio buttons

      .get(employmentYn.insuranceConflictRadioBtn)
      .should("be.visible")
      .and("have.text", "Insurance Conflict")    //9. check the visibility of the radio buttons

      .get(employmentYn.retiredRadioBtn)
      .should("be.visible")
      .and("have.text", "Retired")    //9. check the visibility of the radio buttons

      .get(employmentYn.studentRadioBtn)
      .should("be.visible")
      .and("have.text", "Student (Full or Part Time)");    //9. check the visibility of the radio buttons

    cy.get(employmentYn.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(employmentYn.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your living arrangment:");    //12. check the title of a header of the page

  });

})