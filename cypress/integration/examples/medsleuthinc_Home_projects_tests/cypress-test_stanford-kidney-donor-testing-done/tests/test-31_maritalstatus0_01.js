import maritalStatusScenarios from "../page-objects/31_maritalstatus0_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/shc-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the maritalstatus.0 dialog's [skiped block of questions] issue's fix", () => {

    // link to the ticket [https://trello.com/c/Pxi6oyg7]

    cy.visit("landing-page")
      .get(maritalStatusScenarios.startSyrveyBtn)
      .click();

    cy.get(maritalStatusScenarios.firstNameInput)
      .type("First Name")
      .get(maritalStatusScenarios.lastNameInput)
      .type("Last Name")
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.monthDoBInput)
      .type("02");

    cy.get(maritalStatusScenarios.DayDoBInput)
      .type("28");

    cy.get(maritalStatusScenarios.yearDobInput)
      .type("1984");

    cy.get(maritalStatusScenarios.femaleRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.feetsHeightInput)
      .type("12");

    cy.get(maritalStatusScenarios.inchesHeightInput)
      .type("12");

    cy.get(maritalStatusScenarios.weightInput)
      .type("12")
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.phoneNumberInput)
      .type("5555551236");

    cy.get(maritalStatusScenarios.phoneTypeSelector)
      .select("Mobile");

    cy.get(maritalStatusScenarios.emailInput)
      .type("k19@mailinator.com")
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.altruistRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.socialMediaRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.whiteRaceCheckBox)
      .click();

    cy.get(maritalStatusScenarios.noHispanicEthRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(maritalStatusScenarios.languageSelector)
      .select("English");

    cy.get(maritalStatusScenarios.noTranslatorRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.noBloodPressureRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();

    cy.get(maritalStatusScenarios.noDiabetesScreenRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();

    cy.get(maritalStatusScenarios.noKidneyStonesRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();

    cy.get(maritalStatusScenarios.noHepatitisRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();

    cy.get(maritalStatusScenarios.noCancerScreenRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();

    cy.get(maritalStatusScenarios.noSmokingRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.continueEvaluationRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.dontTakeMedsRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();


    cy.get(maritalStatusScenarios.noAirwaysRadioBtn)
      .click()
      .get(maritalStatusScenarios.noBloodDisRadioBtn)
      .click()
      .get(maritalStatusScenarios.noCancerRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.noDiabetesRadioBtn)
      .click()
      .get(maritalStatusScenarios.noDigestiveTractRadioBtn)
      .click()
      .get(maritalStatusScenarios.noHeartRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.noImmuneMedRadioBtn)
      .click()
      .get(maritalStatusScenarios.noInfectionRadioBtn)
      .click()
      .get(maritalStatusScenarios.noKidneysRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.noMentalWellRadioBtn)
      .click()
      .get(maritalStatusScenarios.noMusclesRadioBtn)
      .click()
      .get(maritalStatusScenarios.noNeuroDefRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.noWomansHealthRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click();













  });

})