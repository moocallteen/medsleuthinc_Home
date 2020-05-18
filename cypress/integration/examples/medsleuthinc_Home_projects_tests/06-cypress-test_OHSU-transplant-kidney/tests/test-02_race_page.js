import ohsuLandingPage from "../page-objects/00_landing_page";
import ohsuDemographics from "../page-objects/02_race_page";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("should check the Demographics page elements", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the section description text
    6. check the checkbox visibility
    7. choose the necessary value
    8. validation error message check
    9. check the section description text
    10. check the radio button visibility
    11. choose the necessary value
    12. validation error message check
    13. check the section description text
    14. check the selector visibility
    15. check the placeholder visibility
    16. check the selector's content
    17. choose the necessary value
    18. validation error message check
    19. check the section description text
    20. check the innput field
    21. check the section description text
    22. check the radio button visibility
    23. choose the necessary value
    24. navigate to the next page
    25. check the title of the current dialog
    */

    var headingText = "Please enter your Race:";
    var americanIndianAlaskaText = "American Indian or Alaska Native";
    var arabianText = "Arabian";
    var blackAfricanAmericanText = "Black or African American";
    var whiteCaucasianText = "White/Caucasian";
    var asianText = "Asian";
    var middleEasternNorthAfricanText = "Middle Eastern or North African";
    var nativeHawaiianPacificText = "Native Hawaiian or Other Pacific Islander";
    var otherText = "Other";
    var hispanicOriginHeading = "RequiredAre you of Hispanic origin?YesNo";
    var preferedLanguageHeading = "What is your preferred language?";
    var languages = [
      "English",
      "Spanish",
      "Vietnamese",
      "Mandarin",
      "Arabic",
      "Creole",
      "Portuguese",
      "Other"
    ];
    var otherLanguageHeading = "If Other:";
    var doYouNeedTranslatorHeading = "RequiredDo you need a translator?YesNo";
    var bloodScreenTitle = "Do you take any medications to control your Blood Pressure?";

    cy.visit("/race.0")    //1. navigate to the specified page
      .contains("Demographics");    //2. check the title of the current dialog

    cy.get(ohsuLandingPage.startSurveyBtn)    //3. click to start the survey
      .click();

    cy.get(ohsuLandingPage.nextBtn)    //4. validation error message check
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDemographics.headingText)    //5. check the section description text
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", headingText);

    cy.get(ohsuDemographics.aindCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", americanIndianAlaskaText);

    cy.get(ohsuDemographics.arabianCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", arabianText);

    cy.get(ohsuDemographics.afroCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", blackAfricanAmericanText);

    cy.get(ohsuDemographics.whiteCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", whiteCaucasianText)
      .click();    //7. choose the necessary value

    cy.get(ohsuDemographics.asianCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", asianText);

    cy.get(ohsuDemographics.middleeasternCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", middleEasternNorthAfricanText);

    cy.get(ohsuDemographics.isalnderCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", nativeHawaiianPacificText);

    cy.get(ohsuDemographics.otherCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", otherText);

    cy.get(ohsuLandingPage.nextBtn)    //8. validation error message check
      .scrollIntoView()
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDemographics.hispanicQuestionBar)    //9. check the section description text
      .should("be.visible")
      .and("have.text", hispanicOriginHeading);

    cy.get(ohsuDemographics.hispanicYesRadioBtn)    //10. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .get(ohsuDemographics.hispanicNoRadioBtn)    //10. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click();    //11. choose the necessary value

    cy.get(ohsuLandingPage.nextBtn)    //12. validation error message check
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDemographics.preferedLanguageBar)    //13. check the section description text
      .then(el => {
        assert.include(el.text(), preferedLanguageHeading);
      });

    cy.get(ohsuDemographics.languageSelector)    //14. check the selector visibility
      .should("be.visible")
      .and("contain", "Select One")    //15. check the placeholder visibility
    for (var i = 0; i < languages.length; i++) {
      cy.get(ohsuDemographics.languageSelector)
        .select(languages[i])
        .should("be.visible");
    };    //16. check the selector's content
    cy.get(ohsuDemographics.languageSelector)
      .select("Vietnamese");    //17. choose the necessary value

    cy.get(ohsuLandingPage.nextBtn)    //18. validation error message check
      .scrollIntoView()
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDemographics.otherLanguageBar)    //19. check the section description text
      .should("be.visible")
      .and("have.text", otherLanguageHeading)
      .get(ohsuDemographics.otherLanguageField)    //20. check the innput field
      .should("be.visible");

    cy.get(ohsuDemographics.doYouNeedTransltorBar)    //21. check the section description text
      .should("be.visible")
      .and("have.text", doYouNeedTranslatorHeading)
      .get(ohsuDemographics.yesTranslatorRadioBtn)    //22. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .get(ohsuDemographics.noTranslatorRadioBtn)    //22. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click();    //23. choose the necessary value

    cy.get(ohsuLandingPage.nextBtn)    //24. navigate to the next page
      .click();

    cy.get(ohsuDemographics.headerBar)    //25. check the title of the current dialog
      .should("be.visible")
      .and("have.text", bloodScreenTitle);

  });

})