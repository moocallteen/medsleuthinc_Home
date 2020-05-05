import maritalStatusScenarios from "../page-objects/31_maritalstatus0_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/shc-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the maritalstatus.0 dialog's [skiped block of questions] issue's fix - Female scenario", () => {

    // link to the ticket [https://trello.com/c/Pxi6oyg7]

    /*
    1. navigate to the landing page
    2. start the survey from very beginning
    3. fill the landing page's required fields
    4. choose the donor type
    5. "/referral.0"
    6. "/race.0"
    7. "/screening.htn.0"
    8. "/screening.diabetesrx"
    9. "/screening.kidneystones"
    10. "/screening.hepc"
    11. "/screening.cancer"
    12. "/screening.tobacco"
    13. "/what_to_expect.0"
    14. "/instructions.04"
    15. "/shc-condition-category"
    16. the dialog should contain "Women's Health" section
    17. "/med-allergies"
    18. "/material-allergies"
    19. "/doyousmoke.0"
    20. "/alcohol.0"
    21. "/illicitdrugs.0"
    22. "/activity.0"
    23. "/activity.1"
    24. "/heartfollowup.0"
    25. "/waitlist-inquiry.4.1"
    26. "/family-medical-history.0"
    27. "/family-medical-history.1"
    28. "/blood.0"
    29. "/highriskbehavior.1"
    30. check the heading of the optional form
    31. skip the optional form
    32. "/education.0"
    33. "/employment.yn"
    34. "/employment.1"
    35. "/living-arrangement.0"
    36. "/insurance.0"
    37. check the heading of the optional form
    38. skip the optional form
    39. "/maritalstatus.0"
    40. "/offspring.0"
    41. "/offspring.1"
    42. "/offspring.3"
    43. "/offspring.4"
    44. "/offspring.5"
    45. "/offspring.8"
    46. check the heading of the "/motivation.1" dialog
    47. check the content of the dialog, at least first section's heading
    */

    var additionalInfoHeader = "We may need to request additional information such as laboratory or other diagnostic test from your other health care providers. Please provide us with the following information (OPTIONAL)";
    var insurancePlanHeader = "With regard to your Medical Insurance plan: (Optional)";
    var motivationHeader = "With regard to your Kidney Donation:";
    var motivationReasonHeading = "Why are you interested in donation?";

    cy.visit("landing-page")    //1. navigate to the landing page
      .get(maritalStatusScenarios.startSyrveyBtn)
      .click();    //2. start the survey from very beginning

    cy.get(maritalStatusScenarios.firstNameInput)    //3. fill the landing page's required fields
      .type("Female")
      .get(maritalStatusScenarios.lastNameInput)    //3. fill the landing page's required fields
      .type("Donor")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.monthDoBInput)    //3. fill the landing page's required fields
      .type("02")
      .get(maritalStatusScenarios.DayDoBInput)    //3. fill the landing page's required fields
      .type("28")
      .get(maritalStatusScenarios.yearDobInput)    //3. fill the landing page's required fields
      .type("1984")
      .get(maritalStatusScenarios.femaleRadioBtn)    //4. choose the Femail gender (!important!)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.feetsHeightInput)    //3. fill the landing page's required fields
      .type("12")
      .get(maritalStatusScenarios.inchesHeightInput)    //3. fill the landing page's required fields
      .type("12")
      .get(maritalStatusScenarios.weightInput)    //3. fill the landing page's required fields
      .type("12")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.phoneNumberInput)    //3. fill the landing page's required fields
      .type("5555551236")
      .get(maritalStatusScenarios.phoneTypeSelector)    //3. fill the landing page's required fields
      .select("Mobile")
      .get(maritalStatusScenarios.emailInput)    //3. fill the landing page's required fields
      .type("k19@mailinator.com")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.altruistRadioBtn)    //4. choose the donor type
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.socialMediaRadioBtn)    //5. "/referral.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.whiteRaceCheckBox)    //6. "/race.0"
      .click()
      .get(maritalStatusScenarios.noHispanicEthRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.languageSelector)
      .select("English")
      .get(maritalStatusScenarios.noTranslatorRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noBloodPressureRadioBtn)    //7. "/screening.htn.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noDiabetesScreenRadioBtn)    //8. "/screening.diabetesrx"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noKidneyStonesRadioBtn)    //9. "/screening.kidneystones"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noHepatitisRadioBtn)    //10. "/screening.hepc"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noCancerScreenRadioBtn)    //11. "/screening.cancer"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noSmokingRadioBtn)    //12. "/screening.tobacco"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.continueEvaluationRadioBtn)    //13. "/what_to_expect.0"
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.dontTakeMedsRadioBtn)    //14. "/instructions.04"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noAirwaysRadioBtn)    //15. "/shc-condition-category"
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
      .get(maritalStatusScenarios.noWomensHealthRadioBtn)    //16. the dialog should contain "Women's Health" section
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noMedsAllergiesRadioBtn)    //17. "/med-allergies"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noMaterialsAllergiesCheckBox)    //18. "/material-allergies"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noSmokingAtAllRadioBtn)    //19. "/doyousmoke.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.alcoholNeverRadioBtn)    //20. "/alcohol.0"
      .click()
    cy.get(maritalStatusScenarios.noAlcoAbuseRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noIllicitDrugsRadioBtn)    //21. "/illicitdrugs.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.strenuousActivitiesRadioBtn)    //22. "/activity.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.moreThreeTimesRadioBtn)    //23. "/activity.1"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noPainRestRadioBtn)    //24. "/heartfollowup.0"
      .click()
      .get(maritalStatusScenarios.noPainActivityRadioBtn)
      .click()
      .get(maritalStatusScenarios.noStressTestRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.noCatherizationRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noSurgeryRadioBtn)    //25. "/waitlist-inquiry.4.1"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noKidneyDisease)    //26. "/family-medical-history.0"
      .click()
      .get(maritalStatusScenarios.noPolycystic)
      .click()
      .get(maritalStatusScenarios.noKidneyStones)
      .click()
      .scrollIntoView()
      .get(maritalStatusScenarios.noDiabetes)
      .click()
      .get(maritalStatusScenarios.noSickleCell)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noCancerFamilyIssue)    //27. "/family-medical-history.1"
      .click()
      .get(maritalStatusScenarios.noBloodPressureFamilyIssue)
      .click()
      .get(maritalStatusScenarios.noHeartDieseseFamilyIssue)
      .click()
      .scrollIntoView()
      .get(maritalStatusScenarios.noLupusFamilyIssue)
      .click()
      .get(maritalStatusScenarios.noBloodClotsFamilyIssue)
      .click()
      .scrollIntoView()
      .get(maritalStatusScenarios.noMentalIllFamilyIssue)
      .click()
      .get(maritalStatusScenarios.noDied50FamilyIssue)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.aBloodTypeRadioBtn)    //28. "/blood.0"
      .click()
      .get(maritalStatusScenarios.yesBloodTransfusionRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.notApplyCheckBox)    //29. "/highriskbehavior.1"
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.headerBar)    //30. check the heading of the optional form
      .should("have.text", additionalInfoHeader)
      .get(maritalStatusScenarios.nextBtn)    //31. skip the optional form
      .scrollIntoView()
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.masterEducationRadioBtn)    //32. "/education.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noCurrentlyWorkRadioBtn)    //33. "/employment.yn"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.homemakerRadioBtn)    //34. "/employment.1"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.myOwnRadioBtn)    //35. "/living-arrangement.0"
      .click()
    cy.get(maritalStatusScenarios.spouseRoommateRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.yesInsuranceRadioBtn)    //36. "/insurance.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.headerBar)    //37. check the heading of the optional form
      .should("have.text", insurancePlanHeader)
      .get(maritalStatusScenarios.nextBtn)    //38. skip the optional form
      .scrollIntoView()
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.maritalStatusSelector)    //39. "/maritalstatus.0"
      .select("Married")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.yesHaveChildrenRadioBtn)    //40. "/offspring.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.howManyChildrenSelector)    //41. "/offspring.1"
      .select("2")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.youngestChildAgeSelector)    //42. "/offspring.3"
      .select("2")
      .get(maritalStatusScenarios.oldestChildAgeSelector)
      .select("7")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.yesGivenBirthRadioBtn)    //43. "/offspring.4"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.howManyGivenBirthSelector)    //44. "/offspring.5"
      .select("2")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noPregnancyDiabetesRadioBtn)    //45. "/offspring.8"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.headerBar)    //46. check the heading of the "/motivation.1" dialog
      .should("have.text", motivationHeader);

    cy.contains(motivationReasonHeading);    //47. check the content of the dialog, at least first section's heading

  });

  it("Should check the maritalstatus.0 dialog's [skiped block of questions] issue's fix - Male scenario", () => {

    /*
    1. navigate to the landing page
    2. start the survey from very beginning
    3. fill the landing page's required fields
    4. choose the donor type
    5. "/referral.0"
    6. "/race.0"
    7. "/screening.htn.0"
    8. "/screening.diabetesrx"
    9. "/screening.kidneystones"
    10. "/screening.hepc"
    11. "/screening.cancer"
    12. "/screening.tobacco"
    13. "/what_to_expect.0"
    14. "/instructions.04"
    15. "/shc-condition-category"
    16. the dialog should contain "Men's Health" section
    17. "/med-allergies"
    18. "/material-allergies"
    19. "/doyousmoke.0"
    20. "/alcohol.0"
    21. "/illicitdrugs.0"
    22. "/activity.0"
    23. "/activity.1"
    24. "/heartfollowup.0"
    25. "/waitlist-inquiry.4.1"
    26. "/family-medical-history.0"
    27. "/family-medical-history.1"
    28. "/blood.0"
    29. "/highriskbehavior.1"
    30. check the heading of the optional form
    31. skip the optional form
    32. "/education.0"
    33. "/employment.yn"
    34. "/employment.1"
    35. "/living-arrangement.0"
    36. "/insurance.0"
    37. check the heading of the optional form
    38. skip the optional form
    39. "/maritalstatus.0"
    40. "/offspring.0"
    41. "/offspring.1"
    42. "/offspring.3"
    43. skipped blocks for males
    44. check the heading of the "/motivation.1" dialog
    45. check the content of the dialog, at least first section's heading
    */

    var additionalInfoHeader = "We may need to request additional information such as laboratory or other diagnostic test from your other health care providers. Please provide us with the following information (OPTIONAL)";
    var insurancePlanHeader = "With regard to your Medical Insurance plan: (Optional)";
    var motivationHeader = "With regard to your Kidney Donation:";
    var motivationReasonHeading = "Why are you interested in donation?";

    cy.visit("landing-page")    //1. navigate to the landing page
      .get(maritalStatusScenarios.startSyrveyBtn)
      .click();    //2. start the survey from very beginning

    cy.get(maritalStatusScenarios.firstNameInput)    //3. fill the landing page's required fields
      .type("Male")
      .get(maritalStatusScenarios.lastNameInput)    //3. fill the landing page's required fields
      .type("Donor")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.monthDoBInput)    //3. fill the landing page's required fields
      .type("02")
      .get(maritalStatusScenarios.DayDoBInput)    //3. fill the landing page's required fields
      .type("28")
      .get(maritalStatusScenarios.yearDobInput)    //3. fill the landing page's required fields
      .type("1984")
      .get(maritalStatusScenarios.maleRadioBtn)    //4. choose the Mail gender (!important!)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.feetsHeightInput)    //3. fill the landing page's required fields
      .type("12")
      .get(maritalStatusScenarios.inchesHeightInput)    //3. fill the landing page's required fields
      .type("12")
      .get(maritalStatusScenarios.weightInput)    //3. fill the landing page's required fields
      .type("12")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.phoneNumberInput)    //3. fill the landing page's required fields
      .type("5555551236")
      .get(maritalStatusScenarios.phoneTypeSelector)    //3. fill the landing page's required fields
      .select("Mobile")
      .get(maritalStatusScenarios.emailInput)    //3. fill the landing page's required fields
      .type("k19@mailinator.com")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.altruistRadioBtn)    //4. choose the donor type
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.socialMediaRadioBtn)    //5. "/referral.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.whiteRaceCheckBox)    //6. "/race.0"
      .click()
      .get(maritalStatusScenarios.noHispanicEthRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.languageSelector)
      .select("English")
      .get(maritalStatusScenarios.noTranslatorRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noBloodPressureRadioBtn)    //7. "/screening.htn.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noDiabetesScreenRadioBtn)    //8. "/screening.diabetesrx"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noKidneyStonesRadioBtn)    //9. "/screening.kidneystones"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noHepatitisRadioBtn)    //10. "/screening.hepc"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noCancerScreenRadioBtn)    //11. "/screening.cancer"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    cy.get(maritalStatusScenarios.noSmokingRadioBtn)    //12. "/screening.tobacco"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.continueEvaluationRadioBtn)    //13. "/what_to_expect.0"
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.dontTakeMedsRadioBtn)    //14. "/instructions.04"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noAirwaysRadioBtn)    //15. "/shc-condition-category"
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
      .get(maritalStatusScenarios.noMensHealthRadioBtn)    //16. the dialog should contain "Men's Health" section
      .click()
      .get(maritalStatusScenarios.noMentalWellRadioBtn)
      .click()
      .get(maritalStatusScenarios.noMusclesRadioBtn)
      .click()
      .get(maritalStatusScenarios.noNeuroDefRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noMedsAllergiesRadioBtn)    //17. "/med-allergies"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noMaterialsAllergiesCheckBox)    //18. "/material-allergies"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noSmokingAtAllRadioBtn)    //19. "/doyousmoke.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.alcoholNeverRadioBtn)    //20. "/alcohol.0"
      .click()
    cy.get(maritalStatusScenarios.noAlcoAbuseRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noIllicitDrugsRadioBtn)    //21. "/illicitdrugs.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.strenuousActivitiesRadioBtn)    //22. "/activity.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.moreThreeTimesRadioBtn)    //23. "/activity.1"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noPainRestRadioBtn)    //24. "/heartfollowup.0"
      .click()
      .get(maritalStatusScenarios.noPainActivityRadioBtn)
      .click()
      .get(maritalStatusScenarios.noStressTestRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.noCatherizationRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noSurgeryRadioBtn)    //25. "/waitlist-inquiry.4.1"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noKidneyDisease)    //26. "/family-medical-history.0"
      .click()
      .get(maritalStatusScenarios.noPolycystic)
      .click()
      .get(maritalStatusScenarios.noKidneyStones)
      .click()
      .scrollIntoView()
      .get(maritalStatusScenarios.noDiabetes)
      .click()
      .get(maritalStatusScenarios.noSickleCell)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noCancerFamilyIssue)    //27. "/family-medical-history.1"
      .click()
      .get(maritalStatusScenarios.noBloodPressureFamilyIssue)
      .click()
      .get(maritalStatusScenarios.noHeartDieseseFamilyIssue)
      .click()
      .scrollIntoView()
      .get(maritalStatusScenarios.noLupusFamilyIssue)
      .click()
      .get(maritalStatusScenarios.noBloodClotsFamilyIssue)
      .click()
      .scrollIntoView()
      .get(maritalStatusScenarios.noMentalIllFamilyIssue)
      .click()
      .get(maritalStatusScenarios.noDied50FamilyIssue)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.aBloodTypeRadioBtn)    //28. "/blood.0"
      .click()
      .get(maritalStatusScenarios.yesBloodTransfusionRadioBtn)
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.notApplyCheckBox)    //29. "/highriskbehavior.1"
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.headerBar)    //30. check the heading of the optional form
      .should("have.text", additionalInfoHeader)
      .get(maritalStatusScenarios.nextBtn)    //31. skip the optional form
      .scrollIntoView()
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.masterEducationRadioBtn)    //32. "/education.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.noCurrentlyWorkRadioBtn)    //33. "/employment.yn"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.homemakerRadioBtn)    //34. "/employment.1"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.myOwnRadioBtn)    //35. "/living-arrangement.0"
      .click()
    cy.get(maritalStatusScenarios.spouseRoommateRadioBtn)
      .scrollIntoView()
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.yesInsuranceRadioBtn)    //36. "/insurance.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.headerBar)    //37. check the heading of the optional form
      .should("have.text", insurancePlanHeader)
      .get(maritalStatusScenarios.nextBtn)    //38. skip the optional form
      .scrollIntoView()
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.maritalStatusSelector)    //39. "/maritalstatus.0"
      .select("Married")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.yesHaveChildrenRadioBtn)    //40. "/offspring.0"
      .click()
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.howManyChildrenSelector)    //41. "/offspring.1"
      .select("2")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);


    cy.get(maritalStatusScenarios.youngestChildAgeSelector)    //42. "/offspring.3"
      .select("2")
      .get(maritalStatusScenarios.oldestChildAgeSelector)
      .select("7")
      .get(maritalStatusScenarios.nextBtn)
      .click()
      .wait(300);

    //43. skipped blocks for males
    // cy.get(maritalStatusScenarios.yesGivenBirthRadioBtn)
    //   .click()
    //   .get(maritalStatusScenarios.nextBtn)
    //   .click()
    //   .wait(300);


    // cy.get(maritalStatusScenarios.howManyGivenBirthSelector)
    //   .select("2")
    //   .get(maritalStatusScenarios.nextBtn)
    //   .click()
    //   .wait(300);


    // cy.get(maritalStatusScenarios.noPregnancyDiabetesRadioBtn)
    //   .click()
    //   .get(maritalStatusScenarios.nextBtn)
    //   .click()
    //   .wait(300);


    cy.get(maritalStatusScenarios.headerBar)    //44. check the heading of the "/motivation.1" dialog
      .should("have.text", motivationHeader);

    cy.contains(motivationReasonHeading);    //45. check the content of the dialog, at least first section's heading

  });

})