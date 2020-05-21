import pageTransitions from "../page-objects/42_ucsf-page-transition";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("should check the page transitions fix", () => {

    // link to the ticket [https://trello.com/c/ASYjWVmH]

    var text = "Welcome to the BREEZE TRANSPLANT online health";
    var referralHeader = "How did you learn about the opportunity for living organ donation?";
    var bloodScreenTitle = "Do you take any medications to control your Blood Pressure?";
    var diabetesScreenTitle = "Do you currently take pills or insulin for Diabetes?";
    var kidneyStonesScreenTitle = "Have you had more than one kidney stone in the past 10 years?";
    var smokingScreenTitle = "Do you smoke cigarettes or marijuana?";
    var ilDrugsScreenTitle = "Do you use recreational or illicit drugs not including marijuana?";
    var evaluationHeading = "Please review the important information below prior to proceeding to the online evaluation";
    var thankYouHeading = "Thank you for your participation";
    var instructionsHeading = "This health questionnaire will take approximately 15 to 20 minutes to complete.";
    var enterMedsHeaderTitle = "Please enter your medications, one by one. You may enter either the brand or generic name.";
    var makeChangesHeading = "If below is a complete list of medications, vitamins and supplements taken on a regular/occasional basis, click NEXT:";
    var medConditionsHeading = "Do you have or have you had any of the following medical conditions?";
    var conditionsApplyHeading = "Specifically, which of the following conditions apply?";
    var regardsConditionHeading = "With regard to your Asthma?";
    var medsAllergiesHeading = "Do you have any ALLERGIES to medications?";
    var medsAllergiesListHeading = "Please enter the medications which you take:";
    var medsConfirmHeading = "Confirm your medications";
    var materialsAllergicHeading = "Are you allergic to any of the following?";
    var allergyNatureHeading = "What is the nature of your allergy to Betadine?";
    var regardsTobaccoHeading = "With regard to your current tobacco use:";
    var alcoholHeading = "Approximately, how often do you drink beer, wine, or liquor?";
    var ilDrugsHeading = "Do you use recreational or illicit drugs?";
    var drugsListHeading = "Please indicate the recreational or illicit drug(s) you currently use:";
    var activityHeading = "Which of the following most closely represents your level of physical activity?";
    var regardsHeartHeading = "With regard to your Heart:";
    var frequencyExerciseHeading = "Approximately how often do you exercise per week?";
    var haveSurgeryHeading = "Have you had Surgery in the past?";
    var selectRegionsHeading = "Please select all regions of the body where you have had Surgery:";
    var selectPartsHeading = "Please check all parts of your Chest listed below where you have had surgery:";
    var proceduresListHeading = "Please select all surgical procedures performed on your Breast";
    var otherIssuesListHeading = "Do you have any other medical issues that you have not already identified?";


    cy.visit("/landing-page")
      .get(pageTransitions.dialogText)
      .then(el => {
        assert.include(el.text(), text);
      });
    cy.get(pageTransitions.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(pageTransitions.yourFirstNameField)
      .type("qweqweqwe")
      .get(pageTransitions.yourLastNameField)
      .type("qweqweqwe")
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.dayField)
      .type("21")
      .get(pageTransitions.monthField)
      .type("09")
      .get(pageTransitions.yearField)
      .type("1967")
      .get(pageTransitions.maleRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.yourHeightFeetFiled)
      .type("5")
      .get(pageTransitions.yourHeightInchesFiled)
      .type("10")
      .get(pageTransitions.yourWeightFiled)
      .type("150")
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.primaryPhoneFiled)
      .type('555-55-55')
      .get(pageTransitions.yourPhoneNumberTypeSelect)
      .select('Mobile')
      .get(pageTransitions.yourEmailAddressFiled)
      .type('test@test.com')
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.iKnowRecipientRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.recipientFirstNameInput)    //. check the "First Name" innput field
      .type("Named")    //. type in the required information
      .get(pageTransitions.recipientLastNameInput)    //. check the "Last Name" innput field
      .type("Recipient")    //. type in the required information
      .get(pageTransitions.monthField)    //. check the "Month" innput field
      .type('02')    //. type in the required information
      .get(pageTransitions.dayField)    //. check the "Day" innput field
      .type('28')    //. type in the required information
      .get(pageTransitions.yearField)    //. check the "Year" innput field
      .type('1984')    //. type in the required information
      .get(pageTransitions.nextBtn)    //. navigate to the next page
      .click();

    cy.get(pageTransitions.immediateRadioBtn)    //. check the radio button visibility
      .click()    //. choose the necessary value
      .get(pageTransitions.nextBtn)    //. navigate to the next page
      .click();

    cy.get(pageTransitions.fullSiblingRadioBtn)    //. check the radio button visibility
      .click()    //. choose the necessary value
      .get(pageTransitions.nextBtn)    //. navigate to the next page
      .click();

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", referralHeader);

    cy.get(pageTransitions.transplantCandidateRadioBtn)    //. check the radio button visibility
      .click()    //. choose the necessary value
      .get(pageTransitions.nextBtn)    //. navigate to the next page
      .click();

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Demographics");

    cy.get(pageTransitions.arabianCheckBox)    //. check the checkbox visibility
      .click()    //. choose the necessary value
      .get(pageTransitions.hispanicNoRadioBtn)    //. check the radio button visibility
      .click()    //. choose the necessary value
      .get(pageTransitions.languageSelector)
      .select("Vietnamese")    //. choose the necessary value
      .get(pageTransitions.yesTranslatorRadioBtn)    //. check the radio button visibility
      .click()    //. choose the necessary value
      .get(pageTransitions.nextBtn)    //. navigate to the next page
      .click();

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", bloodScreenTitle);

    cy.get(pageTransitions.noBloodRadioBtn)    //. choose the necessary value
      .click()
      .get(pageTransitions.nextBtn)
      .click();    //. navigate to the next page

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", diabetesScreenTitle);

    cy.get(pageTransitions.noDiabetesRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", kidneyStonesScreenTitle);

    cy.get(pageTransitions.noKidneyStonesRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", smokingScreenTitle);

    cy.get(pageTransitions.noTobaccoRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", ilDrugsScreenTitle);

    cy.get(pageTransitions.noIlDrugsRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", evaluationHeading);

    cy.get(pageTransitions.continueToCheck)
      .scrollIntoView()
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", thankYouHeading)
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)    //. check the title of the current dialog
      .should("be.visible")
      .and("have.text", instructionsHeading);

    cy.get(pageTransitions.enterMedicationsRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", enterMedsHeaderTitle);

    cy.get(pageTransitions.medsInputField)
      .type("Vitamin C")
      .get(pageTransitions.suggestedItem)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", makeChangesHeading)
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", medConditionsHeading);

    cy.get(pageTransitions.yesAirwaysCondRadioBtn)
      .click()
      .get(pageTransitions.noBloodDisCondRadioBtn)
      .scrollIntoView()
      .click()
      .get(pageTransitions.noCancerCondRadioBtn)
      .click()
      .get(pageTransitions.noDiabetesCondRadioBtn)
      .scrollIntoView()
      .click()
      .get(pageTransitions.noDigestiveTractCondRadioBtn)
      .click()
      .get(pageTransitions.noHeartCondRadioBtn)
      .click()
      .get(pageTransitions.noImmuneMedCondRadioBtn)
      .scrollIntoView()
      .click()
      .get(pageTransitions.noInfectionCondRadioBtn)
      .click()
      .get(pageTransitions.noKidneysCondRadioBtn)
      .click()
      .get(pageTransitions.noMensHealthCondRadioBtn)
      .scrollIntoView()
      .click()
      .get(pageTransitions.noMentalWellCondRadioBtn)
      .click()
      .get(pageTransitions.noMusclesCondRadioBtn)
      .click()
      .get(pageTransitions.noNeuroDefCondRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", conditionsApplyHeading);

    cy.get(pageTransitions.asthmaCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsConditionHeading);

    cy.get(pageTransitions.noSteroidsQuery)
      .click()
      .get(pageTransitions.noHospitalizedQuery)
      .click()
      .get(pageTransitions.noIntubatedQuery)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", medsAllergiesHeading);

    cy.get(pageTransitions.yesMedAllergies)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", medsAllergiesListHeading);

    cy.get(pageTransitions.medsInputField)
      .type("Vitamin C")
      .get(pageTransitions.firstSuggestedItem)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", medsConfirmHeading)
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.anxietyReactionCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", materialsAllergicHeading);

    cy.get(pageTransitions.betadineMaterialAllergyCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", allergyNatureHeading);

    cy.get(pageTransitions.breathIssuesReactionCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?")

    cy.get(pageTransitions.yesDoYouSmokeRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsTobaccoHeading);

    cy.get(pageTransitions.yearsSmokingSelector)
      .select("5")
      .get(pageTransitions.packsSmokingSelector)
      .select("1/4 pack")
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", alcoholHeading);

    cy.get(pageTransitions.neverRadioBtn)
      .click()
      .get(pageTransitions.yesAbuseRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", ilDrugsHeading);

    cy.get(pageTransitions.yesDrugsRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", drugsListHeading);

    cy.get(pageTransitions.marijuanaDrugsCheckBox)
      .click()
      .get(pageTransitions.cocaineDrugsCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", activityHeading);

    cy.get(pageTransitions.strenuousActivityRadioBtn)
      .click()    //. choose the necessary value
      .get(pageTransitions.nextBtn)
      .click();    //. navigate to the next page

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", frequencyExerciseHeading);    //. check the title of a header of the page

    cy.get(pageTransitions.moreThreeFrequencyRadioBtn)
      .click()    //. choose the necessary value
      .get(pageTransitions.nextBtn)
      .click()    //. navigate to the next page

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsHeartHeading);    //. check the title of a header of the page

    cy.get(pageTransitions.noPainRestRadioBtn)
      .click()    //. choose the necessary value
      .get(pageTransitions.noPainActivityRadioBtn)
      .click()    //. choose the necessary value
      .get(pageTransitions.yesStressTestRadioBtn)
      .click()    //. choose the necessary value
      .get(pageTransitions.yesCatheterizationRadioBtn)
      .click();    //. choose the necessary value

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsHeartHeading);    //. check the title of a header of the page

    cy.get(pageTransitions.stressTestsQtySelect)
      .select("2")    //. choose the necessary value
      .get(pageTransitions.stressTestsDateInput)
      .type("02281984")    //. input the necessary date
      .get(pageTransitions.yesNormalTest)
      .click()    //. choose the necessary value
      .get(pageTransitions.nextBtn)
      .click();    //. navigate to the next page

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsHeartHeading);    //. check the title of a header of the page

    cy.get(pageTransitions.catheterizationQtySelect)
      .select("1")    //. choose the necessary value
      .get(pageTransitions.catheterizationDateInput)
      .type("02281984")    //. input the necessary date
      .get(pageTransitions.angioplastyStentCathRadioBtn)
      .click()    //. choose the necessary value
      .get(pageTransitions.nextBtn)
      .click();    //. navigate to the next page

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", haveSurgeryHeading);    //. check the title of a header of the page

    cy.get(pageTransitions.yesSurgeryRadioBtn)
      .click()    //. choose the necessary value
    cy.get(pageTransitions.nextBtn)
      .click();    //. navigate to the next page 

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", selectRegionsHeading);    //. check the title of a header of the page

    cy.get(pageTransitions.chestFrontRegion)
      .click()    //. choose the body region
      .get(pageTransitions.nextBtn)
      .click();    //. navigate to the next page

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", selectPartsHeading);    //. check the title of a header of the page

    cy.get(pageTransitions.breastChestCheckBox)
      .click()    //. choose the operated body part
      .get(pageTransitions.nextBtn)
      .click();    //. navigate to the next page

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", proceduresListHeading);    //. check the title of a header of the page

    cy.get(pageTransitions.augumentationBrestSurgery)
      .click()    //. choose the surgery type
      .get(pageTransitions.nextBtn)
      .click();    //. navigate to the next page

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", otherIssuesListHeading);    //. check the title of a header of the page

  });

})