import ohsuEducation from "../page-objects/23_education0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the education.0 page elements", () => {

    /*
    1. navigate to the "education.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the radio buttons
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    */

    var educationHeading = "Please select which of the options below most closely matches your highest level of education.";
    var notAttendedHSEduTitle = "I have not attended high school";
    var notGradHSEduTitle = "I have not graduated high school";
    var hsGraduateEduTitle = "I am a high school graduate";
    var someCollegeEduTitle = "I attended some college, but don't have a degree";
    var associateEduTitle = "I have an Associate's degree";
    var bachelorEduTitle = "I have a Bachelor's degree";
    var masterEduTitle = "I have a Master's or other professional degree";
    var employmentHeading = "Are you currently working for income?";

    cy.visit("/education.0")    //1. navigate to the "education.0" dialog
      .contains(educationHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEducation.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuEducation.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuEducation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuEducation.notAttendedHSEduRadioBtn)
      .should("be.visible")
      .and("have.text", notAttendedHSEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.notGradHSEduRadioBtn)
      .should("be.visible")
      .and("have.text", notGradHSEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.hsGraduateEduRadioBtn)
      .should("be.visible")
      .and("have.text", hsGraduateEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.someCollegeEduRadioBtn)
      .should("be.visible")
      .and("have.text", someCollegeEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.associateEduRadioBtn)
      .should("be.visible")
      .and("have.text", associateEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.bachelorEduRadioBtn)
      .should("be.visible")
      .and("have.text", bachelorEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.masterEduRadioBtn)
      .should("be.visible")
      .and("have.text", masterEduTitle)    //5. check the visibility of the radio buttons
      .click();    //6. choose the necessary value

    cy.get(ohsuEducation.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuEducation.headerBar)
      .should("be.visible")
      .and("have.text", employmentHeading);    //8. check the title of a header of the page

  });

})
