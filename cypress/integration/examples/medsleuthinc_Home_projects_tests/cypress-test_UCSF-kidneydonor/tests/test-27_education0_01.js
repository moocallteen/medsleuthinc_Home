import education0 from "../page-objects/27_education0_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
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

    var notAttendedHSEduTitle = "I have not attended high school";
    var notGradHSEduTitle = "I have not graduated high school";
    var hsGraduateEduTitle = "I am a high school graduate";
    var someCollegeEduTitle = "I attended some college, but don't have a degree";
    var associateEduTitle = "I have an Associate's degree";
    var bachelorEduTitle = "I have a Bachelor's degree";
    var masterEduTitle = "I have a Master's or other professional degree";

    cy.visit("/education.0")    //1. navigate to the "education.0" dialog
      .contains("Please select which of the options below most closely matches your highest level of education.")    //2. check the title of the dialog
      .get(education0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(education0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(education0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking


    cy.get(education0.notAttendedHSEducationChechBox)
      .should("be.visible")
      .and("have.text", notAttendedHSEduTitle)    //5. check the visibility of the radio buttons

      .get(education0.notGradHSEducationChechBox)
      .should("be.visible")
      .and("have.text", notGradHSEduTitle)    //5. check the visibility of the radio buttons

      .get(education0.hsGraduateEducationChechBox)
      .should("be.visible")
      .and("have.text", hsGraduateEduTitle)    //5. check the visibility of the radio buttons

      .get(education0.someCollegeEducationChechBox)
      .should("be.visible")
      .and("have.text", someCollegeEduTitle)    //5. check the visibility of the radio buttons

      .get(education0.associateEducationChechBox)
      .should("be.visible")
      .and("have.text", associateEduTitle)    //5. check the visibility of the radio buttons

      .get(education0.bachelorEducationChechBox)
      .should("be.visible")
      .and("have.text", bachelorEduTitle)    //5. check the visibility of the radio buttons

      .get(education0.masterEducationChechBox)
      .should("be.visible")
      .and("have.text", masterEduTitle)    //5. check the visibility of the radio buttons
      .click();    //6. choose the necessary value

    cy.get(education0.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(education0.headerBar)
      .should("be.visible")
      .and("have.text", "Are you currently working for income?");    //8. check the title of a header of the page

  });

})
