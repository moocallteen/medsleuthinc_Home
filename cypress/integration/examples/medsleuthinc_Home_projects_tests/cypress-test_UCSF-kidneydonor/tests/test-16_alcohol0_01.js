import alcoholPage from "../page-objects/16_alcohol0_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the alcohol.0 page elements - Positive answer scenario ", () => {

    var neverTitle = "Never";
    var yearOnceTitle = "Once or twice per year";
    var monthOnceTitle = "Once or twice per month";
    var weekOnceTitle = "Once or twice per week";
    var everyDayTwoTitle = "Everyday (1-2 drinks)";
    var everyDayMoreTitle = "Everyday (>2 drinks)";

    cy.visit("/alcohol.0")
      .contains("Approximately, how often do you drink beer, wine, or liquor?")
      .get(alcoholPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.contains("Do you have a history of Alcohol Abuse?");

    cy.get(alcoholPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(alcoholPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(alcoholPage.neverRadioBtn)
      .should("be.visible")
      .and("have.text", neverTitle)
      .get(alcoholPage.yearOnceRadioBtn)
      .should("be.visible")
      .and("have.text", yearOnceTitle)
      .get(alcoholPage.monthOnceRadioBtn)
      .should("be.visible")
      .and("have.text", monthOnceTitle)
      .get(alcoholPage.weekOnceRadioBtn)
      .should("be.visible")
      .and("have.text", weekOnceTitle)
      .get(alcoholPage.everyDayTwoRadioBtn)
      .should("be.visible")
      .and("have.text", everyDayTwoTitle)
      .get(alcoholPage.everyDayMoreRadioBtn)
      .should("be.visible")
      .and("have.text", everyDayMoreTitle)
      .click();

    cy.get(alcoholPage.nextBtn)
      .click()
      .get(alcoholPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(alcoholPage.yesAbuseRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")
      .click()
      .get(alcoholPage.noAbuseRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .get(alcoholPage.nextBtn)
      .click();

    cy.get(alcoholPage.headerBar)
      .should("be.visible")
      .and("have.text", "Do you use recreational or illicit drugs?");

  });

  it("Should check the alcohol.0 page elements - Negative answer scenario ", () => {

    var neverTitle = "Never";
    var yearOnceTitle = "Once or twice per year";
    var monthOnceTitle = "Once or twice per month";
    var weekOnceTitle = "Once or twice per week";
    var everyDayTwoTitle = "Everyday (1-2 drinks)";
    var everyDayMoreTitle = "Everyday (>2 drinks)";

    cy.visit("/alcohol.0")
      .contains("Approximately, how often do you drink beer, wine, or liquor?")
      .get(alcoholPage.introStartSurBtn)
      .click();

    cy.contains("Do you have a history of Alcohol Abuse?");

    cy.get(alcoholPage.nextBtn)
      .click()
      .get(alcoholPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(alcoholPage.neverRadioBtn)
      .should("be.visible")
      .and("have.text", neverTitle)
      .click()
      .get(alcoholPage.yearOnceRadioBtn)
      .should("be.visible")
      .and("have.text", yearOnceTitle)
      .get(alcoholPage.monthOnceRadioBtn)
      .should("be.visible")
      .and("have.text", monthOnceTitle)
      .get(alcoholPage.weekOnceRadioBtn)
      .should("be.visible")
      .and("have.text", weekOnceTitle)
      .get(alcoholPage.everyDayTwoRadioBtn)
      .should("be.visible")
      .and("have.text", everyDayTwoTitle)
      .get(alcoholPage.everyDayMoreRadioBtn)
      .should("be.visible")
      .and("have.text", everyDayMoreTitle);

    cy.get(alcoholPage.nextBtn)
      .click()
      .get(alcoholPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(alcoholPage.yesAbuseRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")
      .get(alcoholPage.noAbuseRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .click()
      .get(alcoholPage.nextBtn)
      .click();

    cy.get(alcoholPage.headerBar)
      .should("be.visible")
      .and("have.text", "Do you use recreational or illicit drugs?");

  });

})

