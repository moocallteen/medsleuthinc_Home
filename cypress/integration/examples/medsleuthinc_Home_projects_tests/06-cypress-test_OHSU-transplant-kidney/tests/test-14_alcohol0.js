import ohsuAlcohol from "../page-objects/14_alcohol0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the alcohol.0 page elements - Positive answer scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the section description text
    5. validation error message check
    6. check the radio button visibility
    7. choose the necessary value
    8. validation error message check
    9. check the radio button visibility
    10. choose the necessary value
    11. navigate to the next page
    12. check the title of the current dialog
    */

    var alcoholHeading = "Approximately, how often do you drink beer, wine, or liquor?";
    var alcoholAbuseHeading = "Do you have a history of Alcohol Abuse?";
    var neverTitle = "Never";
    var yearOnceTitle = "Once or twice per year";
    var monthOnceTitle = "Once or twice per month";
    var weekOnceTitle = "Once or twice per week";
    var everyDayTwoTitle = "Everyday (1-2 drinks)";
    var everyDayMoreTitle = "Everyday (>2 drinks)";
    var drugsHeading = "Do you use recreational or illicit drugs?";

    cy.visit("/alcohol.0")    //1. navigate to the specified page
      .contains(alcoholHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuAlcohol.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.contains(alcoholAbuseHeading);    //4. check the section description text

    cy.get(ohsuAlcohol.nextBtn)    //5. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuAlcohol.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuAlcohol.neverRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", neverTitle);

    cy.get(ohsuAlcohol.yearOnceRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", yearOnceTitle);

    cy.get(ohsuAlcohol.monthOnceRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", monthOnceTitle);

    cy.get(ohsuAlcohol.weekOnceRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", weekOnceTitle);

    cy.get(ohsuAlcohol.everyDayTwoRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", everyDayTwoTitle);

    cy.get(ohsuAlcohol.everyDayMoreRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", everyDayMoreTitle)
      .click();    //7. choose the necessary value

    cy.get(ohsuAlcohol.nextBtn)    //8. validation error message check
      .click()
      .get(ohsuAlcohol.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuAlcohol.yesAbuseRadioBtn)    //9. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //10. choose the necessary value
      .get(ohsuAlcohol.noAbuseRadioBtn)    //9. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .get(ohsuAlcohol.nextBtn)    //11. navigate to the next page
      .click();

    cy.get(ohsuAlcohol.headerBar)    //12. check the title of the current dialog
      .should("be.visible")
      .and("have.text", drugsHeading);

  });

  it("Should check the alcohol.0 page elements - Negative answer scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the section description text
    5. validation error message check
    6. check the radio button visibility
    7. choose the necessary value
    8. validation error message check
    9. check the radio button visibility
    10. choose the necessary value
    11. navigate to the next page
    12. check the title of the current dialog
    */

    var alcoholHeading = "Approximately, how often do you drink beer, wine, or liquor?";
    var alcoholAbuseHeading = "Do you have a history of Alcohol Abuse?";
    var neverTitle = "Never";
    var yearOnceTitle = "Once or twice per year";
    var monthOnceTitle = "Once or twice per month";
    var weekOnceTitle = "Once or twice per week";
    var everyDayTwoTitle = "Everyday (1-2 drinks)";
    var everyDayMoreTitle = "Everyday (>2 drinks)";
    var drugsHeading = "Do you use recreational or illicit drugs?";

    cy.visit("/alcohol.0")    //1. navigate to the specified page
      .contains(alcoholHeading)    //2. check the title of the current dialog
      .get(ohsuAlcohol.introStartSurBtn)    //3. click to start the survey
      .click();

    cy.contains(alcoholAbuseHeading);    //4. check the section description text

    cy.get(ohsuAlcohol.nextBtn)    //5. validation error message check
      .click()
      .get(ohsuAlcohol.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuAlcohol.neverRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", neverTitle)
      .click();    //7. choose the necessary value

    cy.get(ohsuAlcohol.yearOnceRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", yearOnceTitle);

    cy.get(ohsuAlcohol.monthOnceRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", monthOnceTitle);

    cy.get(ohsuAlcohol.weekOnceRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", weekOnceTitle);

    cy.get(ohsuAlcohol.everyDayTwoRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", everyDayTwoTitle);

    cy.get(ohsuAlcohol.everyDayMoreRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", everyDayMoreTitle);

    cy.get(ohsuAlcohol.nextBtn)    //8. validation error message check
      .click()
      .get(ohsuAlcohol.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuAlcohol.yesAbuseRadioBtn)    //9. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .get(ohsuAlcohol.noAbuseRadioBtn)    //9. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click()    //10. choose the necessary value
      .get(ohsuAlcohol.nextBtn)    //11. navigate to the next page
      .click();

    cy.get(ohsuAlcohol.headerBar)    //12. check the title of the current dialog
      .should("be.visible")
      .and("have.text", drugsHeading);

  });

})