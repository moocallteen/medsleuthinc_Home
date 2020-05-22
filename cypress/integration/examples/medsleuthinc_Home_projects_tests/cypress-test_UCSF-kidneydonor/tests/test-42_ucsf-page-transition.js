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

    /*
    1. navigate to the "landing-page" dialog
    2. click to start the survey
    3. "landing-page" gialog
    4. "referral.0" gialog
    5. "race.0" gialog
    6. "screening.htn.0" gialog
    7. "screening.diabetesrx" gialog
    8. "screening.kidneystones" gialog
    9. "screening.tobacco" gialog
    10. "screening.ildrs" gialog
    11. "what_to_expect.0" gialog
    12. "thankyou_opt_out.0" gialog
    13. "instructions.04" gialog
    14. "shc-condition-category" gialog
    15. "med-allergies" gialog
    16. "material-allergies" gialog
    17. "doyousmoke.0" gialog
    18. "alcohol.0" gialog
    19. "illicitdrugs.0" gialog
    20. "activity.0" gialog
    21. "waitlist-inquiry.4.1" gialog
    22. "other-med-conditions.1" gialog
    23. "med-service.0" gialog
    24. "family-medical-history.0" gialog
    25. "family-medical-history.1" gialog
    26. "blood.0" gialog
    27. "highriskbehavior.1" gialog
    28. "request-for-additional-info.1" gialog
    29. "education.0" gialog
    30. "employment.yn" gialog
    31. "living-arrangement.0" gialog
    32. "insurance.0" gialog
    33. "maritalstatus.0" gialog
    34. "offspring.0" gialog
    35. "motivation.1" gialog
    36. "emergencycontact.0" gialog
    37. "emergencycontact.1" gialog
    38. "contact.0" gialog
    39. "contact-schedule.01" gialog
    40. "videoscreen.yn" gialog
    41. "supplemental.01" gialog
    42. "thankyou.0" gialog
    */

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
    var issuesDescriptionHeading = "Please describe all other medical issues:";
    var ourTreatmentHeading = "Have you ever received treatment or care from one of our affiliated clinics?";
    var familyMedHistoryHeading = "With regard to your Family's Medical History:";
    var familyMembersHeading = "Which members of your family have Kidney Disease?";
    var familyMembersBloodPrHeading = "Which members of your family have High Blood Pressure?";
    var bloodTypeHeading = "What is your blood type:";
    var hrBehaviorHeading = "Within the previous 12 months, do any of the following situations apply to you?";
    var addInfoRequestHeadind = "We may need to request additional information such as laboratory or other diagnostic test from your other health care providers. Please provide us with the following information (OPTIONAL)";
    var educationHeading = "Please select which of the options below most closely matches your highest level of education.";
    var employmentHeading = "Are you currently working for income?";
    var employmentStatusHeading = "Which of the following describes your current Employment Status?";
    var livingArrangmentHeading = "With regard to your living arrangment:";
    var insuranceCoverHeading = "Are you currently covered under a Medical Insurance plan?";
    var regardsInsuranceHeading = "With regard to your Medical Insurance plan: (Optional)";
    var maritalStatusHeading = "What is your current marital status?";
    var childrenHeading = "Do you have children that you currently care for?";
    var howManyChildrenHeading = "How many children do you care for currently?";
    var agesChildrenHeading = "How old are your children?";
    var motivationHeading = "With regard to your Kidney Donation:";
    var emergencyContactHeading = "Please provide Emergency Contact Information";
    var secondaryEmContactHeading = "Secondary Emergency Contact (Optional)";
    var emailVerifyHeading = "Please enter your contact phone number and verify your email address: ";
    var contactScheduleHeading = "Please select the best days and times to contact you if necessary: (Optional)";
    var haveYouWatchedHeading = "Have you watched the UCSF video about Living Kidney Donation, 'The Gift of Life'?";
    var additionalInfoHeader = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";
    var submitHeading = "Questionnaire Submitted";

    cy.visit("/landing-page")    //1. navigate to the "landing-page" dialog
      .get(pageTransitions.dialogText)
      .then(el => {
        assert.include(el.text(), text);
      });
    cy.get(pageTransitions.introStartSurBtn)    //2. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.wait(200)
      .get(pageTransitions.yourFirstNameField)    //3. "landing-page" gialog
      .type("qweqweqwe")
      .get(pageTransitions.yourLastNameField)
      .type("qweqweqwe")
      .get(pageTransitions.nextBtn)
      .click();

    cy.wait(200)
      .get(pageTransitions.dayField)
      .type("21")
      .get(pageTransitions.monthField)
      .type("09")
      .get(pageTransitions.yearField)
      .type("1967")
      .get(pageTransitions.maleRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.wait(200)
      .get(pageTransitions.yourHeightFeetFiled)
      .type("5")
      .get(pageTransitions.yourHeightInchesFiled)
      .type("10")
      .get(pageTransitions.yourWeightFiled)
      .type("150")
      .get(pageTransitions.nextBtn)
      .click();

    cy.wait(200)
      .get(pageTransitions.primaryPhoneFiled)
      .type('555-55-55')
      .get(pageTransitions.yourPhoneNumberTypeSelect)
      .select('Mobile')
      .get(pageTransitions.yourEmailAddressFiled)
      .type('test@test.com')
      .get(pageTransitions.nextBtn)
      .click();

    cy.wait(200)
      .get(pageTransitions.iKnowRecipientRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.wait(200)
      .get(pageTransitions.recipientFirstNameInput)
      .type("Named")
      .get(pageTransitions.recipientLastNameInput)
      .type("Recipient")
      .get(pageTransitions.monthField)
      .type('02')
      .get(pageTransitions.dayField)
      .type('28')
      .get(pageTransitions.yearField)
      .type('1984')
      .get(pageTransitions.nextBtn)
      .click();

    cy.wait(200)
      .get(pageTransitions.immediateRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.fullSiblingRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //4. "referral.0" gialog
      .should("be.visible")
      .and("have.text", referralHeader);

    cy.get(pageTransitions.transplantCandidateRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //5. "race.0" gialog
      .should("be.visible")
      .and("have.text", "Demographics");

    cy.get(pageTransitions.arabianCheckBox)
      .click()
      .get(pageTransitions.hispanicNoRadioBtn)
      .click()
      .get(pageTransitions.languageSelector)
      .select("Vietnamese")
      .get(pageTransitions.yesTranslatorRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //6. "screening.htn.0" gialog
      .should("be.visible")
      .and("have.text", bloodScreenTitle);

    cy.get(pageTransitions.noBloodRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //7. "screening.diabetesrx" gialog
      .should("be.visible")
      .and("have.text", diabetesScreenTitle);

    cy.get(pageTransitions.noDiabetesRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //8. "screening.kidneystones" gialog
      .should("be.visible")
      .and("have.text", kidneyStonesScreenTitle);

    cy.get(pageTransitions.noKidneyStonesRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //9. "screening.tobacco" gialog
      .should("be.visible")
      .and("have.text", smokingScreenTitle);

    cy.get(pageTransitions.noTobaccoRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //10. "screening.ildrs" gialog
      .should("be.visible")
      .and("have.text", ilDrugsScreenTitle);

    cy.get(pageTransitions.noIlDrugsRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //11. "what_to_expect.0" gialog
      .should("be.visible")
      .and("have.text", evaluationHeading);

    cy.get(pageTransitions.continueToCheck)
      .scrollIntoView()
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //12. "thankyou_opt_out.0" gialog
      .should("be.visible")
      .and("have.text", thankYouHeading)
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //13. "instructions.04" gialog
      .should("be.visible")
      .and("have.text", instructionsHeading);

    cy.get(pageTransitions.enterMedicationsRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

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
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", makeChangesHeading)
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //14. "shc-condition-category" gialog
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
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", conditionsApplyHeading);

    cy.get(pageTransitions.asthmaCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

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
      .wait(300);

    cy.get(pageTransitions.headerBar)    //15. "med-allergies" gialog
      .should("be.visible")
      .and("have.text", medsAllergiesHeading);

    cy.get(pageTransitions.yesMedAllergies)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

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
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", medsConfirmHeading)
      .get(pageTransitions.nextBtn)
      .click();

    cy.get(pageTransitions.anxietyReactionCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //16. "material-allergies" gialog
      .should("be.visible")
      .and("have.text", materialsAllergicHeading);

    cy.get(pageTransitions.betadineMaterialAllergyCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", allergyNatureHeading);

    cy.get(pageTransitions.breathIssuesReactionCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //17. "doyousmoke.0" gialog
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?")

    cy.get(pageTransitions.yesDoYouSmokeRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsTobaccoHeading);

    cy.get(pageTransitions.yearsSmokingSelector)
      .select("5")
      .get(pageTransitions.packsSmokingSelector)
      .select("1/4 pack")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //18. "alcohol.0" gialog
      .should("be.visible")
      .and("have.text", alcoholHeading);

    cy.get(pageTransitions.neverRadioBtn)
      .click()
      .get(pageTransitions.yesAbuseRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //19. "illicitdrugs.0" gialog
      .should("be.visible")
      .and("have.text", ilDrugsHeading);

    cy.get(pageTransitions.yesDrugsRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", drugsListHeading);

    cy.get(pageTransitions.marijuanaDrugsCheckBox)
      .click()
      .get(pageTransitions.cocaineDrugsCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //20. "activity.0" gialog
      .should("be.visible")
      .and("have.text", activityHeading);

    cy.get(pageTransitions.strenuousActivityRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", frequencyExerciseHeading);

    cy.get(pageTransitions.moreThreeFrequencyRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300)

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsHeartHeading);

    cy.get(pageTransitions.noPainRestRadioBtn)
      .click()
      .get(pageTransitions.noPainActivityRadioBtn)
      .click()
      .get(pageTransitions.yesStressTestRadioBtn)
      .click()
      .get(pageTransitions.yesCatheterizationRadioBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsHeartHeading);

    cy.get(pageTransitions.stressTestsQtySelect)
      .select("2")
      .get(pageTransitions.stressTestsDateInput)
      .type("02281984")
      .get(pageTransitions.yesNormalTest)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsHeartHeading);

    cy.get(pageTransitions.catheterizationQtySelect)
      .select("1")
      .get(pageTransitions.catheterizationDateInput)
      .type("02281984")
      .get(pageTransitions.angioplastyStentCathRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //21. "waitlist-inquiry.4.1" gialog
      .should("be.visible")
      .and("have.text", haveSurgeryHeading);

    cy.get(pageTransitions.yesSurgeryRadioBtn)
      .click()
    cy.get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", selectRegionsHeading);

    cy.get(pageTransitions.chestFrontRegion)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", selectPartsHeading);

    cy.get(pageTransitions.breastChestCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", proceduresListHeading);

    cy.get(pageTransitions.augumentationBrestSurgery)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //22. "other-med-conditions.1" gialog
      .should("be.visible")
      .and("have.text", otherIssuesListHeading);

    cy.get(pageTransitions.yesOtherMedCondRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", issuesDescriptionHeading);

    cy.get(pageTransitions.inputOtherMedCond)
      .type("Other Medical Condition")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //23. "med-service.0" gialog
      .should("be.visible")
      .and("have.text", ourTreatmentHeading);

    cy.get(pageTransitions.yesOtherMedCondRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //24. "family-medical-history.0" gialog
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);

    cy.get(pageTransitions.yesKidneyDisease)
      .click()
      .get(pageTransitions.noPolycystic)
      .click()
      .get(pageTransitions.noKidneyStones)
      .click()
      .get(pageTransitions.noDiabetes)
      .click()
      .get(pageTransitions.noSickleCell)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", familyMembersHeading);

    cy.get(pageTransitions.grandparentFamilyMemberCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //25. "family-medical-history.1" gialog
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);

    cy.get(pageTransitions.noCancerFamilyIssue)
      .click()
      .get(pageTransitions.yesBloodPressureFamilyIssue)
      .click()
      .get(pageTransitions.noHeartDieseseFamilyIssue)
      .click()
      .get(pageTransitions.noLupusFamilyIssue)
      .click()
      .get(pageTransitions.noBloodClotsFamilyIssue)
      .click()
      .get(pageTransitions.noMentalIllFamilyIssue)
      .click()
      .get(pageTransitions.noDied50FamilyIssue)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", familyMembersBloodPrHeading);

    cy.get(pageTransitions.fatherFamilyMemberCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //26. "blood.0" gialog
      .should("be.visible")
      .and("have.text", bloodTypeHeading);

    cy.get(pageTransitions.abBloodTypeRadioBtn)
      .click()
      .get(pageTransitions.yesTransfusionCheckBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //27. "highriskbehavior.1" gialog
      .should("be.visible")
      .and("have.text", hrBehaviorHeading);

    cy.get(pageTransitions.escortServiceOneBehaviorCheckBox)
      .click()
      .get(pageTransitions.nextBtn)
      .scrollIntoView()
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //28. "request-for-additional-info.1" gialog
      .should("be.visible")
      .and("have.text", addInfoRequestHeadind);

    cy.get(pageTransitions.nameAddInfoInputField)
      .type("Donor Name")
      .get(pageTransitions.phoneAddInfoInputField)
      .type("5555555555")
      .get(pageTransitions.cityAddInfoInputField)
      .type("Racoon City")
      .get(pageTransitions.stateSelectAddInfo)
      .select("WA")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //29. "education.0" gialog
      .should("be.visible")
      .and("have.text", educationHeading);

    cy.get(pageTransitions.masterEducationChechBox)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //30. "employment.yn" gialog
      .should("be.visible")
      .and("have.text", employmentHeading);

    cy.get(pageTransitions.yesEmploymentRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", employmentStatusHeading);

    cy.get(pageTransitions.fullTimeStatusRadioBtn)
      .click()
      .get(pageTransitions.occupationInputField)
      .type("Donor's Occupation")
      .get(pageTransitions.employerInputField)
      .type("Donor's Employer")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //31. "living-arrangement.0" gialog
      .should("be.visible")
      .and("have.text", livingArrangmentHeading);

    cy.get(pageTransitions.rentRadioBtn)
      .click()
      .get(pageTransitions.aloneRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //32. "insurance.0" gialog
      .should("be.visible")
      .and("have.text", insuranceCoverHeading);

    cy.get(pageTransitions.yesInsurancePlan)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", regardsInsuranceHeading);

    cy.get(pageTransitions.providerInsuranceInput)
      .type("Medical Insurance Provider Name")
      .get(pageTransitions.groupInsuranceInput)
      .type("321654987")
      .get(pageTransitions.memberIDInsuranceInput)
      .type("Member #1")
      .get(pageTransitions.phoneNumberInsuranceInput)
      .type("555555132")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //33. "maritalstatus.0" gialog
      .should("be.visible")
      .and("have.text", maritalStatusHeading);

    cy.get(pageTransitions.maritalStatusSelector)
      .select("Married")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //34. "offspring.0" gialog
      .should("be.visible")
      .and("have.text", childrenHeading);

    cy.get(pageTransitions.yesHasChildrenRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", howManyChildrenHeading);

    cy.get(pageTransitions.howManyChildrenSelector)
      .select("2")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)
      .should("be.visible")
      .and("have.text", agesChildrenHeading);

    cy.get(pageTransitions.youngestChildYearsSelector)
      .select("5")
      .get(pageTransitions.oldestestChildYearsSelector)
      .select("8")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //35. "motivation.1" gialog
      .should("be.visible")
      .and("have.text", motivationHeading);

    cy.get(pageTransitions.whyInterestedTextArea)
      .type("Highly Motivated Donor")
      .get(pageTransitions.motivatedRadioBtn)
      .click()
      .get(pageTransitions.yesDiscloseRadioBtn)
      .click()
      .get(pageTransitions.yesPreviouslyApplied)
      .click()
      .get(pageTransitions.nextBtn)
      .scrollIntoView()
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //36. "emergencycontact.0" gialog
      .should("be.visible")
      .and("have.text", emergencyContactHeading);

    cy.get(pageTransitions.firstNameInputField)
      .type("Donor's First Name")
      .get(pageTransitions.lastNameInputField)
      .type("Donor's Last Name")
      .get(pageTransitions.phoneNumberInputField)
      .type("555554321")
      .get(pageTransitions.phoneTypeSelector)
      .select("Home")
      .get(pageTransitions.relationshipSelector)
      .select("Friend or Other")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //37. "emergencycontact.1" gialog
      .should("be.visible")
      .and("have.text", secondaryEmContactHeading);

    cy.get(pageTransitions.firstNameInputSecondary)
      .type("Average First Name")
      .get(pageTransitions.lastNameInputSecondary)
      .type("Average Last Name")
      .get(pageTransitions.phoneNumberInputSecondary)
      .type("555554321")
      .get(pageTransitions.phoneTypeSelectorSecondary)
      .select("Work - Private")
      .get(pageTransitions.relationshipSelectorSecondary)
      .select("Grandparent")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //38. "contact.0" gialog
      .should("be.visible")
      .and("have.text", emailVerifyHeading);

    cy.get(pageTransitions.phoneNumberInputVerify)
      .type("555-554-321")
      .get(pageTransitions.phoneTypeSelectorVerify)
      .select("Mobile")
      .get(pageTransitions.alternatePhoneNumberInput)
      .type("555-567-098")
      .get(pageTransitions.alternatePhoneTypeSelector)
      .select("Work - Private")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.addressInput)
      .type("742 Evergreen Terrace")
      .get(pageTransitions.cityInput)
      .type("Springfield")
      .get(pageTransitions.stateSelectorVerify)
      .select("IL")
      .get(pageTransitions.zipCodeInput)
      .type("62704")
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //39. "contact-schedule.01" gialog
      .should("be.visible")
      .and("have.text", contactScheduleHeading);

    cy.get(pageTransitions.fridayCheckBox)
      .click()
      .get(pageTransitions.morningCheckBox)
      .click()
      .get(pageTransitions.afternoonCheckBox)
      .click()
      .get(pageTransitions.phonePreferredContactMethod)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //40. "videoscreen.yn" gialog
      .should("be.visible")
      .and("have.text", haveYouWatchedHeading);

    cy.get(pageTransitions.yesRadioBtn)
      .click()
      .get(pageTransitions.nextBtn)
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //41. "supplemental.01" gialog
      .should("be.visible")
      .and("have.text", additionalInfoHeader);

    cy.get(pageTransitions.textArea)
      .type("Additional Information")
      .get(pageTransitions.submitBtn)
      .should("be.visible")
      .and("have.text", "Submit")
      .click()
      .wait(300);

    cy.get(pageTransitions.headerBar)    //42. "thankyou.0" gialog
      .should("be.visible")
      .and("have.text", submitHeading);

  });

})