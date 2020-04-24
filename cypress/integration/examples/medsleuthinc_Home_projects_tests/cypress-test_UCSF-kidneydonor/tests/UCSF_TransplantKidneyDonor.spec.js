import landingPage from "../page-objects/00_landing_page_01";
import referralPage from "../page-objects/01_referral_page_01";
import demographicsPage from "../page-objects/02_race_page_01";
import screeningHtn0 from "../page-objects/03_screening-htn_page_01";
import screeningDiabetesrx from "../page-objects/04_screening-diabetesrx_01";
import screeningKidneystones from "../page-objects/05_screening-kidneystones_01";
import screeningTobacco from "../page-objects/06_screening-tobacco_01";
import screeningIlDrugs from "../page-objects/07_screening-ildrs_01";
import whatToExpectPage from "../page-objects/08_what_to_expect_01";
import thankYouOptOut from "../page-objects/09_thankyou_opt_out_01";
import instructionsPage from "../page-objects/10_instructions_01";
import medicationList from "../page-objects/11_medications-list-rx-ada_01";
import medConditionsSurvey from "../page-objects/12_shc-condition-category_01";
import medAllergies from "../page-objects/13_med-allergies_01";
import materialAllergies from "../page-objects/14_material-allergies_01";
import doYouSmokeCigarettes from "../page-objects/15_doyousmoke0_01";
import alcoholPage from "../page-objects/16_alcohol0_01";
import illicitDrugsPage from "../page-objects/17_illicitdrugs0_01";
import activityPage from "../page-objects/18_activity0_01";
import waitlistInquiry from "../page-objects/19_waitlist-inquiry41_01";
import otherMedConditions from "../page-objects/20_other-med-conditions1_01";
import medService from "../page-objects/21_med-service0_01";
import familyMedHistory0 from "../page-objects/22_family-medical-history0_01";
import familyMedHistory1 from "../page-objects/23_family-medical-history1_01";
import typeBlood0 from "../page-objects/24_blood0_01";
import highriskbehavior1 from "../page-objects/25_highriskbehavior1_01";
import requestForAdditionalInfo1 from "../page-objects/26_request-for-additional-info1_01";
import education0 from "../page-objects/27_education0_01";
import employmentYn from "../page-objects/28_employmentyn_01";
import livingArrangement0 from "../page-objects/29_living-arrangement0_01";
import insurance0 from "../page-objects/30_insurance0_01";
import maritalStatus0 from "../page-objects/31_maritalstatus0_01";
import offspring0 from "../page-objects/32_offspring0";
import motivation1 from "../page-objects/33_motivation1_01";
import emergencycontact0 from "../page-objects/34_emergencycontact0_01";
import emergencycontact1 from "../page-objects/35_emergencycontact1_01";
import contact0 from "../page-objects/36_contact0_01";
import contactSchedule01 from "../page-objects/37_contact-schedule01_01";
import videoscreenYesNo from "../page-objects/38_videoscreenyn_01";
import supplemental01 from "../page-objects/39_supplemental01_01";
import thankYou0 from "../page-objects/40_thankyou0_01";



describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("should check the Landing page elements", () => {

    var text = "Welcome to the BREEZE TRANSPLANT online health";
    var firstName = "First name";
    var middleName = "Middle name";
    var lastName = "Last name";

    cy.visit("/landing-page")
      .get(landingPage.logo)
      .should("be.visible")
      .get(landingPage.headerBar)
      .should("be.visible")
      .get(landingPage.increaseTextSizeBtn)
      .should("be.visible")
      .get(landingPage.decreaseTextSizeBtn)
      .should("be.visible")
      .get(landingPage.dialogText)
      .then(el => {
        assert.include(el.text(), text);
      });

    cy.get(landingPage.termsLink)
      .should("be.visible")
      .get(landingPage.startSurveyBtn)
      .click();

    cy.get(landingPage.yourFirstNameField)
      .should("be.visible")
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should("have.text", "Required")
      .get(landingPage.yourFirstNameField)
      .type(firstName)
      .get(landingPage.middleNameField)
      .type(middleName)
      .get(landingPage.yourLastNameField)
      .type(lastName)
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.dayField)
      .type('01')
      .get(landingPage.monthField)
      .type('01')
      .get(landingPage.yearField)
      .type('1991')
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should("have.text", "Required")
      .get(landingPage.maleRadioBtn)
      .click()
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.yourHeightFeetFiled)
      .should('be.visible')
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should('have.text', 'Not a whole number')
      .get(landingPage.yourHeightFeetFiled)
      .type('190')
      .get(landingPage.yourHeightInchesFiled)
      .type('190')
      .get(landingPage.yourWeightFiled)
      .type('80')
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.primaryPhoneFiled)
      .should('be.visible')
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should('have.text', 'Required')
      .get(landingPage.primaryPhoneFiled)
      .type('555-55-55')
      .get(landingPage.yourPhoneNumberTypeSelect)
      .select('Mobile')
      .get(landingPage.yourEmailAddressFiled)
      .type('test@test.com')
      .get(landingPage.nextBtn)
      .click();

    cy.contains("Donor Type")
      .should("be.visible")
      .get(landingPage.iKnowRecipientRadioBtn)
      .should("be.visible")
      .get(landingPage.iDontKnowRecipientRadioBtn)
      .should("be.visible")
      .get(landingPage.nextBtn)
      .should("be.visible");

  });

  it("should check the referral.0 page elements", () => {

    var transplantCandidateText = "From the transplant candidate";
    var candidatesSomeoneText = "From someone I know on behalf of the transplant candidate (a family member or friend)";
    var socialMediaText = "From social media (such as Facebook)";
    var myOwnResearchText = "From my own research";
    var anotherPatientText = "From another donor, recipient or patient.";
    var otherText = "Other";

    cy.visit("/referral.0")
      .contains("How did you learn about the opportunity for living organ donation?");

    cy.get(referralPage.introStartSurBtn)
      .click();

    cy.get(referralPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")


    cy.get(referralPage.transplantCandidateRadioBtn)
      .should("be.visible")
      .get(referralPage.transplantCandidateTextBlock)
      .should("have.text", transplantCandidateText)
      .get(referralPage.candidatesSomeoneRadioBtn)
      .should("be.visible")
      .get(referralPage.candidatesSomeoneTextBlock)
      .should("have.text", candidatesSomeoneText)
      .get(referralPage.socialMediaRadioBtn)
      .should("be.visible")
      .get(referralPage.socialMediaTextBlock)
      .should("have.text", socialMediaText)
      .get(referralPage.myOwnResearchRadioBtn)
      .should("be.visible")
      .get(referralPage.myOwnResearchTextBlock)
      .should("have.text", myOwnResearchText)
      .get(referralPage.anotherPatientRadioBtn)
      .should("be.visible")
      .get(referralPage.anotherPatientTextBlock)
      .should("have.text", anotherPatientText)
      .get(referralPage.otherRadioBtn)
      .should("be.visible")
      .get(referralPage.otherTextBlock)
      .should("have.text", otherText)
      .get(referralPage.nextBtn)
      .should("be.visible")
      .get(referralPage.nextBtn)
      .click()
      .get(referralPage.validationErrorMsg)
      .should("have.text", "Required")
      .get(referralPage.myOwnResearchRadioBtn)
      .check()
      .get(referralPage.nextBtn)
      .should("have.text", "Next")
      .click();

    cy.contains("Demographics")
      .should("be.visible");

  });

  it("should check the Demographics page elements", () => {

    var headingText = "Please enter your Race:";
    var americanIndianAlaskaText = "American Indian or Alaska Native";
    var arabianText = "Arabian";
    var blackAfricanAmericanText = "Black or African American";
    var whiteCaucasianText = "White/Caucasian";
    var asianText = "Asian";
    var middleEasternNorthAfricanText = "Middle Eastern or North African";
    var nativeHawaiianPacificText = "Native Hawaiian or Other Pacific Islander";
    var otherText = "Other";
    var hispanicOriginHeading = "Are you of Hispanic origin?YesNo";
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
    var doYouNeedTranslatorHeading = "Do you need a translator?YesNo";

    cy.visit("/race.0")
      .get(landingPage.startSurveyBtn)
      .click()
      .get(demographicsPage.headingText)
      .should("have.text", headingText)
      .get(demographicsPage.aindCheckBox)
      .should("have.text", americanIndianAlaskaText)
      .get(demographicsPage.arabianCheckBox)
      .should("have.text", arabianText)
      .get(demographicsPage.afroCheckBox)
      .should("have.text", blackAfricanAmericanText)
      .get(demographicsPage.whiteCheckBox)
      .should("have.text", whiteCaucasianText)
      .get(demographicsPage.asianCheckBox)
      .should("have.text", asianText)
      .get(demographicsPage.middleeasternCheckBox)
      .should("have.text", middleEasternNorthAfricanText)
      .get(demographicsPage.isalnderCheckBox)
      .should("have.text", nativeHawaiianPacificText)
      .get(demographicsPage.otherCheckBox)
      .should("have.text", otherText)
      .get(demographicsPage.hispanicQuestionBar)
      .should("have.text", hispanicOriginHeading)
      .get(demographicsPage.preferedLanguageBar)
      .then(el => {
        assert.include(el.text(), preferedLanguageHeading);
      });
    for (var i = 0; i < languages.length; i++) {
      cy.get(demographicsPage.languageSelector)
        .select(languages[i])
        .should("be.visible");
    };

    cy.get(demographicsPage.otherLanguageBar)
      .should("have.text", otherLanguageHeading)
      .get(demographicsPage.otherLanguageField)
      .should("be.visible")
      .get(demographicsPage.doYouNeedTransltorBar)
      .should("have.text", doYouNeedTranslatorHeading)
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should("have.text", "Required");

  });

  it("Should check the screening.htn.0 page elements - Yes scenario", () => {

    var medicationQtyTxt = "How many medications do you take to control your blood pressure?";
    var selectorText = "Select One";
    var selectorValues = [
      "1",
      "2",
      ">2"
    ];

    cy.visit("/screening.htn.0")
      .contains("Do you take any medications to control your Blood Pressure?")
      .should("be.visible");

    cy.get(screeningHtn0.introStartSurBtn)
      .should("be.visible")
      .click()
      .get(screeningHtn0.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningHtn0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningHtn0.noRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningHtn0.yesRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningHtn0.nextBtn)
      .click();

    cy.get(screeningHtn0.headerBar)
      .should("be.visible")
      .and("contain", medicationQtyTxt)
      .get(screeningHtn0.medicationQtyBar)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < selectorValues.length; i++) {
      cy.get(screeningHtn0.medicationQtySelector)
        .select(selectorValues[i])
        .should("be.visible")
    };

    cy.get(screeningHtn0.nextBtn)
      .click();

    cy.contains("Thank you for your generous offer to be a kidney donor")
      .should("be.visible");

    cy.contains("Unfortunately, you are not eligible to be a donor at this time")
      .should("be.visible");

    cy.contains("Your high blood pressure places you at increased risk of kidney disease and dangerous complications if you donate your kidney.")
      .should("be.visible");

    cy.get(screeningHtn0.footerText)
      .should("be.visible");

  });

  it("Should check the screening.htn.0 page elements - No scenario", () => {

    cy.visit("/screening.htn.0")
      .get(screeningHtn0.introStartSurBtn)
      .click();

    cy.get(screeningHtn0.noRadioBtn)
      .click();

    cy.get(screeningHtn0.nextBtn)
      .click();

    cy.contains("Do you currently take pills or insulin for Diabetes?")
      .should("be.visible");

  });

  it("Should check the screening.diabetesrx page elements - Yes scenario", () => {

    var headerBarText = "Thank you for your generous offer to be a kidney donor";
    var contentHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var contentReasonText = "Your diabetes places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var contentFooterText = "If you have any questions, you may email us at\nLiving.Donor@ucsfmedctr.org and a member of our transplant team will get back to you within 48 hours.";

    cy.visit("/screening.diabetesrx")
      .contains("Do you currently take pills or insulin for Diabetes?")
      .should("be.visible");

    cy.get(screeningDiabetesrx.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.get(screeningDiabetesrx.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningDiabetesrx.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningDiabetesrx.noRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningDiabetesrx.yesRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningDiabetesrx.nextBtn)
      .click();

    cy.get(screeningDiabetesrx.headerBar)
      .should("be.visible")
      .and("have.text", headerBarText)
      .get(screeningDiabetesrx.contentHeader)
      .should("be.visible")
      .and("have.text", contentHeaderText)
      .get(screeningDiabetesrx.contentReason)
      .should("be.visible")
      .and("have.text", contentReasonText)
      .get(screeningDiabetesrx.contentFooter)
      .should("be.visible")
      .and("have.text", contentFooterText);

  });

  it("Should check the screening.diabetesrx page elements - No scenario", () => {

    var validationText = "Have you had more than one kidney stone in the past 10 years?";

    cy.visit("/screening.diabetesrx")
      .get(screeningDiabetesrx.introStartSurBtn)
      .click()
      .get(screeningDiabetesrx.noRadioBtn)
      .click()
      .get(screeningDiabetesrx.nextBtn)
      .click()
      .get(screeningDiabetesrx.headerBar)
      .then(el => {
        assert.include(el.text(), validationText)
      });

  });

  it("Should check the screening.kidneystones page elements - Yes scenario", () => {

    var pageToCheckTitle = "Do you smoke cigarettes or marijuana?";

    cy.visit("/screening.kidneystones")
      .contains("Have you had more than one kidney stone in the past 10 years?")
      .should("be.visible");

    cy.get(screeningKidneystones.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.get(screeningKidneystones.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningKidneystones.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningKidneystones.noRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningKidneystones.yesRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningKidneystones.nextBtn)
      .click()
      .get(screeningKidneystones.headerBar)
      .then(el => {
        assert.include(el.text(), pageToCheckTitle)
      });

  });

  it("Should check the screening.kidneystones page elements - No scenario", () => {

    var pageToCheckTitle = "Do you smoke cigarettes or marijuana?";

    cy.visit("/screening.kidneystones")
      .get(screeningKidneystones.introStartSurBtn)
      .click()
      .get(screeningKidneystones.noRadioBtn)
      .click()
      .get(screeningKidneystones.nextBtn)
      .click()
      .get(screeningKidneystones.headerBar)
      .then(el => {
        assert.include(el.text(), pageToCheckTitle)
      });

  });

  it("Should check the screening.tobacco page elements - Yes-Yes scenario", () => {

    var quitHeaderTitle = "Would you be willing to quit smoking 6 weeks prior to surgery?";
    var pageToCheckTitle = "Do you use recreational or illicit drugs not including marijuana?";

    cy.visit("/screening.tobacco")
      .contains("Do you smoke cigarettes or marijuana?")
      .should("be.visible");

    cy.get(screeningTobacco.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.get(screeningTobacco.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningTobacco.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningTobacco.noTobaccoRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningTobacco.yesTobaccoRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningTobacco.nextBtn)
      .click();

    cy.get(screeningTobacco.headerBar)
      .should("be.visible")
      .and("have.text", quitHeaderTitle)
      .get(screeningTobacco.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningTobacco.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningTobacco.noTobaccoQuitRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningTobacco.yesTobaccoQuitRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningTobacco.nextBtn)
      .click()
      .get(screeningTobacco.headerBar)
      .should("have.text", pageToCheckTitle);

  });

  it("Should check the screening.tobacco page elements - No scenario", () => {

    var pageToCheckTitle = "Do you use recreational or illicit drugs not including marijuana?";

    cy.visit("/screening.tobacco")
      .get(screeningTobacco.introStartSurBtn)
      .click()
      .get(screeningTobacco.noTobaccoRadioBtn)
      .click()
      .get(screeningTobacco.nextBtn)
      .click()
      .get(screeningTobacco.headerBar)
      .should("have.text", pageToCheckTitle);

  });

  it("Should check the screening.tobacco page elements - Yes-No scenario", () => {

    var pageToCheckTitle = "Thank you for your generous offer to be a kidney donor";
    var contentHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var contentReasonText = "You must be willing to quit using marijuana or tobacco products for at least 6 weeks prior to surgery";
    var contentFooterText = "If you have any questions, you may email us at\nLiving.Donor@ucsfmedctr.org and a member of our transplant team will get back to you within 48 hours.";

    cy.visit("/screening.tobacco")
      .get(screeningTobacco.introStartSurBtn)
      .click()
      .get(screeningTobacco.yesTobaccoRadioBtn)
      .click()
      .get(screeningTobacco.nextBtn)
      .click()
      .get(screeningTobacco.noTobaccoQuitRadioBtn)
      .click()
      .get(screeningTobacco.nextBtn)
      .click()
      .get(screeningTobacco.headerBar)
      .should("have.text", pageToCheckTitle)
      .get(screeningTobacco.contentHeader)
      .should("have.text", contentHeaderText)
      .get(screeningTobacco.contentReason)
      .should("have.text", contentReasonText)
      .get(screeningTobacco.contentFooter)
      .should("have.text", contentFooterText);

  });

  it("Should check the screening.ildrs page elements - Yes scenario", () => {

    var headerToCheck = "Please review the important information below prior to proceeding to the online evaluation";
    var notInterestedText = "I am no longer interested in living donation";
    var continueText = "Continue with the evaluation";

    cy.visit("/screening.ildrs")
      .contains("Do you use recreational or illicit drugs not including marijuana?")
      .get(screeningIlDrugs.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.get(screeningIlDrugs.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(screeningIlDrugs.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required")
      .get(screeningIlDrugs.noIlDrugsRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .get(screeningIlDrugs.yesIlDrugsRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .click()
      .get(screeningIlDrugs.nextBtn)
      .click()
      .get(screeningIlDrugs.headerBar)
      .should("be.visible")
      .and("have.text", headerToCheck);

    cy.get(screeningIlDrugs.nextBtn)
      .scrollIntoView()
      .get(screeningIlDrugs.notInterestedToCheck)
      .should("be.visible")
      .and("have.text", notInterestedText)
      .get(screeningIlDrugs.continueToCheck)
      .should("be.visible")
      .and("have.text", continueText);

  });

  it("Should check the screening.ildrs page elements - No scenario", () => {

    var headerToCheck = "Please review the important information below prior to proceeding to the online evaluation";
    var notInterestedText = "I am no longer interested in living donation";
    var continueText = "Continue with the evaluation";

    cy.visit("/screening.ildrs")
      .contains("Do you use recreational or illicit drugs not including marijuana?")
      .get(screeningIlDrugs.introStartSurBtn)
      .click()
      .get(screeningIlDrugs.noIlDrugsRadioBtn)
      .click()
      .get(screeningIlDrugs.nextBtn)
      .click()
      .get(screeningIlDrugs.headerBar)
      .should("be.visible")
      .and("have.text", headerToCheck);

    cy.get(screeningIlDrugs.continueToCheck)
      .scrollIntoView();

    cy.get(screeningIlDrugs.notInterestedToCheck)
      .should("be.visible")
      .and("have.text", notInterestedText)
      .get(screeningIlDrugs.continueToCheck)
      .should("be.visible")
      .and("have.text", continueText);

  });

  it("Should check the screening.what_to_expect.0 page elements - No Longer Interesting scenario", () => {
    var notInterestedText = "I am no longer interested in living donation";
    var continueText = "Continue with the evaluation";
    var textToCheck = "Thank you for your participation";
    var contentToCheck = "Thank you for considering living kidney donation. If you wish to contact us please send an e-mail to: Living.Donor@ucsfmedctr.org";

    cy.visit("/what_to_expect.0")
      .contains("Please review the important information below prior to proceeding to the online evaluation")
      .get(whatToExpectPage.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.contains("Donor Evaluation")
      .should("be.visible")
      .get(whatToExpectPage.evaluationInfoText)
      .should("be.visible");

    cy.get(whatToExpectPage.continueToCheck)
      .scrollIntoView()
      .get(whatToExpectPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(whatToExpectPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required")
      .get(whatToExpectPage.continueToCheck)
      .should("be.visible")
      .and("have.text", continueText)
      .get(whatToExpectPage.notInterestedToCheck)
      .should("be.visible")
      .and("have.text", notInterestedText)
      .click()
      .get(whatToExpectPage.nextBtn)
      .click()
      .get(whatToExpectPage.headerBar)
      .should("be.visible")
      .and("have.text", textToCheck)
      .get(whatToExpectPage.verifiedPageCheck)
      .should("be.visible")
      .and("have.text", contentToCheck);

  });

  it("Should check the screening.what_to_expect.0 page elements - Continue With the Ealuation scenario", () => {

    var textToCheck = "Thank you for your participation";
    var contentToCheck = "Kidney donation surgery will take place at UCSF and will require hospitalization for 2-3 daysThank you for considering living kidney donation. If you wish to contact us please send an e-mail to: Living.Donor@ucsfmedctr.orgNext";

    cy.visit("/what_to_expect.0")
      .get(whatToExpectPage.introStartSurBtn)
      .click();

    cy.get(whatToExpectPage.continueToCheck)
      .scrollIntoView()
      .get(whatToExpectPage.continueToCheck)
      .click()
      .get(whatToExpectPage.nextBtn)
      .click()
      .get(whatToExpectPage.headerBar)
      .should("be.visible")
      .and("have.text", textToCheck)
      .get(whatToExpectPage.participationConfirmContent)
      .should("be.visible")
      .and("have.text", contentToCheck);

  });

  it("Should check the thankyou_opt_out.0 page elements", () => {

    var thankYouContentToCheck = "Thank you for considering living kidney donation. If you wish to contact us please send an e-mail to: Living.Donor@ucsfmedctr.orgNext";
    var headerText = "This health questionnaire will take approximately 15 to 20 minutes to complete.";
    var contentToCheck = "In order to complete this questionnaire, you will need to provide the names of all medications, vitamins, and herbal supplements that you currently take. Please include those medications that you take on a regular basis, and also those medications that you take occasionally ('as needed')";

    cy.visit("/thankyou_opt_out.0")
      .contains("Thank you for your participation")
      .get(thankYouOptOut.introStartSurBtn)
      .should("be.visible")
      .click()
      .get(thankYouOptOut.thankYouContent)
      .should("be.visible")
      .and("have.text", thankYouContentToCheck)
      .get(thankYouOptOut.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.get(thankYouOptOut.headerBar)
      .should("be.visible")
      .and("have.text", headerText)
      .get(thankYouOptOut.contentContainer)
      .should("be.visible")
      .and("have.text", contentToCheck);

  });

  it("Should check the instructions.04 page elements - Enter medications scenario ", () => {

    var enterMedicationsTitle = "Enter medications";
    var doNotTakeMedsTitle = "I do not take any medication";
    var pageContentText = "In order to complete this questionnaire, you will need to provide the names of all medications, vitamins, and herbal supplements that you currently take. Please include those medications that you take on a regular basis, and also those medications that you take occasionally ('as needed')";
    var medsListHeaderTxt = "Please enter your medications, one by one. You may enter either the brand or generic name.";

    cy.visit("instructions.04")
      .contains("This health questionnaire will take approximately 15 to 20 minutes to complete.")
      .get(instructionsPage.introStartSurBtn)
      .should("be.visible")
      .click();

    cy.contains(pageContentText)
      .get(instructionsPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .get(instructionsPage.doNotTakeMedsRadioBtn)
      .should("be.visible")
      .and("have.text", doNotTakeMedsTitle)
      .get(instructionsPage.enterMedicationsRadioBtn)
      .should("be.visible")
      .and("have.text", enterMedicationsTitle)
      .click()
      .get(instructionsPage.nextBtn)
      .click()
      .get(instructionsPage.headerBar)
      .should("be.visible")
      .and("have.text", medsListHeaderTxt);

  });

  it("Should check the instructions.04 page elements - I do not take any medication scenario ", () => {

    var medConditionsListHeader = "Do you have or have you had any of the following medical conditions?";

    cy.visit("instructions.04")
      .contains("This health questionnaire will take approximately 15 to 20 minutes to complete.")
      .get(instructionsPage.introStartSurBtn)
      .click()
      .get(instructionsPage.doNotTakeMedsRadioBtn)
      .click()
      .get(instructionsPage.nextBtn)
      .click()
      .get(instructionsPage.headerBar)
      .should("be.visible")
      .and("have.text", medConditionsListHeader);

  });

  it("Should check the medications-list-rx-ada-1 page elements - Enter Medication scenario ", () => {

    var enterMedsHeaderTitle = "Please enter your medications, one by one. You may enter either the brand or generic name.";
    var dosageHeading = "Dosage (Optional)";
    var doses = [
      "2 mg",
      "1 mg",
      "0.25 mg",
      "0.5 mg",
      "Other"
    ];
    var frequencyHeading = "Frequency (Optional)";
    var frequences = [
      "Once a Day",
      "In the Morning",
      "Once a Day (at night only)",
      "At Noon",
      "In the Afternoon",
      "In the Evening",
      "At Bedtime",
      "Twice a Day",
      "Three Times a Day",
      "Four Times a Day",
      "As Needed",
      "Every Other Day",
      "Weekly",
      "Monthly",
      "I don't know",
      "Other"
    ];
    var listConfirmHeaderTxt = "If below is a complete list of medications, vitamins and supplements taken on a regular/occasional basis, click NEXT:";
    var reasonHeaderTitle = "Please select the reason(s) for taking Xanax?";
    var otherInputFieldHeading = "If Other, please explain here:";
    var medConditionsListHeader = "Do you have or have you had any of the following medical conditions?";

    cy.visit("/instructions.04")
      .get(medicationList.introStartSurBtn)
      .click()
      .get(medicationList.enterMedicationsRadioBtn)
      .click()
      .get(medicationList.nextBtn)
      .click()
      .get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", enterMedsHeaderTitle);

    cy.contains("Search for medications")
      .get(medicationList.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medicationList.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Please enter some medications")
      .get(medicationList.placeHolder)
      .should("be.visible")
      .get(medicationList.medsInputField)
      .should("be.visible")
      .type("Vitamin C")
      .wait(100)
      .get(medicationList.medsListWrapper)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .get(medicationList.suggestedItem)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .click()
      .get(medicationList.medsDropdownCloseBtn)
      .should("be.visible")
      .click()
      .get(medicationList.medsInputField)
      .type("Xanax")
      .wait(100);

    cy.get(medicationList.medsListWrapper)
      .should("be.visible")
      .and("contain", "Xanax")
      .get(medicationList.suggestedItem)
      .should("be.visible")
      .and("contain", "Xanax")
      .click()
      .get(medicationList.medsDropdownExpandBtn)
      .should("be.visible")
      .click()
      .get(medicationList.medsInfoBar)
      .should("contain", dosageHeading)
      .and("contain", frequencyHeading)
      .get(medicationList.dosageSelector)
    for (var i = 0; i < doses.length; i++) {
      cy.get(medicationList.dosageSelector)
        .select(doses[i])
        .should("be.visible");
    };

    cy.get(medicationList.dosageSelector)
      .select("0.5 mg");

    for (var i = 0; i < frequences.length; i++) {
      cy.get(medicationList.frequencySelector)
        .select(frequences[i])
        .should("be.visible");
    };

    cy.get(medicationList.frequencySelector)
      .select("Twice a Day")
      .get(medicationList.nextBtn)
      .click()
      .get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", listConfirmHeaderTxt)
      .get(medicationList.makeChangeBtn)
      .should("be.visible")
      .and("have.text", "Make Changes")
      .get(medicationList.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.contains(otherInputFieldHeading)
      .should("be.visible");

    cy.get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", reasonHeaderTitle)
      .get(medicationList.anxietyDisCheckBox)
      .should("be.visible")
      .and("have.text", "Anxiety Disorder")
      .click()
      .get(medicationList.panickAttCheckBox)
      .should("be.visible")
      .and("have.text", "Panic Attacks")
      .get(medicationList.otherCheckBox)
      .should("be.visible")
      .and("have.text", "Other")
      .click()
      .get(medicationList.idkCheckBox)
      .should("be.visible")
      .and("have.text", "I do not know")
      .get(medicationList.otherInputField)
      .should("be.visible")
      .type("Other Reason")
      .get(medicationList.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", medConditionsListHeader);

  });

  it("Should check the medications-list-rx-ada-1 page elements - Make Changes scenario ", () => {

    var doses = [
      "2000 mg",
      "1500 mg",
      "250 mg",
      "1000 mg",
      "Other"
    ];
    var frequences = [
      "Once a Day",
      "In the Morning",
      "Once a Day (at night only)",
      "At Noon",
      "In the Afternoon",
      "In the Evening",
      "At Bedtime",
      "Twice a Day",
      "Three Times a Day",
      "Four Times a Day",
      "As Needed",
      "Every Other Day",
      "Weekly",
      "Monthly",
      "I don't know",
      "Other"
    ];
    var medConditionsListHeader = "Do you have or have you had any of the following medical conditions?";
    var listConfirmHeaderTxt = "If below is a complete list of medications, vitamins and supplements taken on a regular/occasional basis, click NEXT:";

    cy.visit("/instructions.04")
      .get(medicationList.introStartSurBtn)
      .click()
      .get(medicationList.enterMedicationsRadioBtn)
      .click()
      .get(medicationList.nextBtn)
      .click()
      .get(medicationList.medsInputField)
      .type("Aspirin")
      .wait(100)
      .get(medicationList.medsListWrapper)
      .get(medicationList.suggestedItem)
      .click()
      .get(medicationList.nextBtn)
      .click()
      .get(medicationList.makeChangeBtn)
      .click()
      .get(medicationList.medsDropdownCloseBtn)
      .click()
      .get(medicationList.medsInputField)
      .type("Vitamin C")
      .wait(100)
      .get(medicationList.medsListWrapper)
      .get(medicationList.suggestedItem)
      .click()
      .get(medicationList.medsDropdownExpandBtn)
      .click();

    cy.get(medicationList.dosageSelector)
    for (var i = 0; i < doses.length; i++) {
      cy.get(medicationList.dosageSelector)
        .select(doses[i])
        .should("be.visible");
    };

    cy.get(medicationList.dosageSelector)
      .select("1000 mg")
    for (var i = 0; i < frequences.length; i++) {
      cy.get(medicationList.frequencySelector)
        .select(frequences[i])
        .should("be.visible");
    };

    cy.get(medicationList.frequencySelector)
      .select("In the Evening")
      .get(medicationList.nextBtn)
      .click()
      .wait(200)
      .get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", listConfirmHeaderTxt);

    cy.get(medicationList.nextBtn)
      .click();

    cy.get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", medConditionsListHeader);

  });

  it("Should check the shc-condition-category page elements - No follow-ups scenario ", () => {

    var airwayModalContent = "Airway and/or Lungs×For Example: Asthma COPD Interstitial Lung Disease (ILD) Pneumothorax (Collapsed Lung) Pulmonary Fibrosis Restrictive Lung Disease Sleep Apnea Tuberculosis";
    var bloodDisModalContent = "Blood Disorder (Abnormal Bruising, Bleeding, or Clotting)×For Example: Anemia (Low blood count) Blood Transfusion Hemophilia A (Factor VIII Deficiency) I have or had a clot in my leg (DVT) Idiopathic Thrombocytopenic Purpura (ITP) Thalassemia Von Willebrand's Disease";
    var cancerModalContent = "Cancer, Chemotherapy, and/or Radiation Therapy×For Example: Cancer Multiple Myeloma";
    var diabetesModalContent = "Diabetes, Thyroid, Adrenal and/or other Endocrine Disorder×For Example: Cushing's Syndrome Elevated Parathyroid Level (Hyperparathyroidism) Low Sodium (Salt) Level (Hyponatremia) Multinodular Goiter Pheochromocytoma Pituitary Adenoma Prolactinoma SIADH (Syndrome of Inappropriate ADH Secretion)";
    var digestiveTractModalContent = "Digestive Tract and/or Liver Disease×For Example: Bile Duct Obstruction Chronic Pancreatitis Cirrhosis of the Liver Constipation Difficulty Swallowing Fatty Liver Disease Heartburn (Reflux) Hepatitis C Hepatocellular Carcinoma (Liver Cancer) Indigestion (Abdominal Pain/Gas/Belching) Liver Transplant Peptic Ulcer Disease (Stomach or Duodenum)";
    var heartModalContent = "Heart and/or Circulatory System×For Example: Atrial Fibrillation/Flutter Aortic Stenosis Cardiomyopathy Congenital Heart Defect Coronary Artery Disease Leg pain when walking (Intermittent Claudication) Mitral Valve Prolapse Pacemaker and/or Defibrillator Peripheral Vascular Disease (Peripheral Arterial Disease) Supraventricular Tachycardia (SVT)";
    var immuneMedModalContent = "Immune-Mediated Diseases×For Example: Ankylosing Spondylitis Juvenile Idiopathic Arthritis (Juvenile Rheumatoid Arthritis) Myasthenia Gravis Psoriasis Rheumatoid Arthritis Systemic Lupus Erythematosus (Lupus)";
    var infectionModalContent = "Infection×For Example: Bladder And/Or Urinary Tract Infection Bone Infection (Osteomyelitis) Gangrene (for example black toe) Infection of AV Fistula or AV Graft Infection of Peritoneal Dialysis Catheter (Peritonitis) Joint Infection (Septic Arthritis) Kidney Infection Severe Systemic Infection (Sepsis) Skin and/or Soft Tissue Infection";
    var kidneysModalContent = "Kidneys and/or Bladder×For Example: Bladder Spasms Elevated Uric Acid Level (Hyperuricemia) Kidney Disease or Failure  Kidney Stones  Overactive Bladder (Urinary Urgency Frequency and/or Incontinence)  Polycystic Kidney Disease  Urinary Retention (Difficulty Urinating)";
    var mentalWellModalContent = "Mental Well-Being×For Example: ADHD Depression Eating Disorders Insomnia Panic Attacks Post-Traumatic Stress Disorder (PTSD) Social Anxiety or Phobia";
    var musclesModalContent = "Muscles, Bones, and/or Joints×For Example: Carpal Tunnel Syndrome  Fibromyalgia  Gout  Herniated Disc (Cervical)  Infection Bone and/or Joint  Joint Pain/Arthritis  Low Back Pain  Lyme Disease  Scoliosis  Spinal Stenosis (Cervical)";
    var neuroDefModalContent = "Neurological Deficit (Brain and/or Spine)×For Example: Aneurysm (Brain) Multiple Sclerosis Parkinson's Disease Peripheral Neuropathy Sciatica Seizures Spinal Cord Injury Stroke or TIA";

    cy.visit("/shc-condition-category")
      .contains("Do you have or have you had any of the following medical conditions?")
      .get(medConditionsSurvey.introStartSurBtn)
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.get(medConditionsSurvey.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medConditionsSurvey.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Airway and/or Lungs")
      .scrollIntoView();

    cy.get(medConditionsSurvey.yesAirwaysRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noAirwaysRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetAirways)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.airwaysModalDialog)
      .should("be.visible")
      .and("have.text", airwayModalContent);

    cy.get(medConditionsSurvey.airwaysModalDialog)
      .click("topLeft");

    cy.contains("Blood Disorder (Abnormal Bruising, Bleeding, or Clotting)");
    cy.get(medConditionsSurvey.yesBloodDisRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noBloodDisRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetBloodDis)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.bloodDisModalDialog)
      .should("be.visible")
      .and("have.text", bloodDisModalContent);

    cy.get(medConditionsSurvey.bloodDisModalDialog)
      .click("topLeft");

    cy.contains("Cancer, Chemotherapy, and/or Radiation Therapy");
    cy.get(medConditionsSurvey.yesCancerRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noCancerRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetCancer)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.cancerModalDialog)
      .should("be.visible")
      .and("have.text", cancerModalContent);

    cy.get(medConditionsSurvey.cancerModalDialog)
      .click("topLeft");

    cy.contains("Diabetes, Thyroid, Adrenal and/or other Endocrine Disorder");
    cy.get(medConditionsSurvey.yesDiabetesRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noDiabetesRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetDiabetes)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.diabetesModalDialog)
      .should("be.visible")
      .and("have.text", diabetesModalContent);

    cy.get(medConditionsSurvey.diabetesModalDialog)
      .click("topLeft");

    cy.contains("Digestive Tract and/or Liver Disease");
    cy.get(medConditionsSurvey.yesDigestiveTractRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noDigestiveTractRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetDigestiveTract)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.digestiveTractModalDialog)
      .should("be.visible")
      .and("have.text", digestiveTractModalContent);

    cy.get(medConditionsSurvey.digestiveTractModalDialog)
      .click("topLeft");

    cy.contains("Heart and/or Circulatory System");
    cy.get(medConditionsSurvey.yesHeartRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noHeartRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetHeart)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.heartModalDialog)
      .should("be.visible")
      .and("have.text", heartModalContent);

    cy.get(medConditionsSurvey.heartModalDialog)
      .click("topLeft");

    cy.contains("Immune-Mediated Diseases");
    cy.get(medConditionsSurvey.yesImmuneMedRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noImmuneMedRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetImmuneMed)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.immuneMedModalDialog)
      .should("be.visible")
      .and("have.text", immuneMedModalContent);

    cy.get(medConditionsSurvey.immuneMedModalDialog)
      .click("topLeft");

    cy.contains("Infection");
    cy.get(medConditionsSurvey.yesInfectionRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noInfectionRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetInfection)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.infectionModalDialog)
      .should("be.visible")
      .and("have.text", infectionModalContent);

    cy.get(medConditionsSurvey.infectionModalDialog)
      .click("topLeft");

    cy.contains("Kidneys and/or Bladder");
    cy.get(medConditionsSurvey.yesKidneysRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noKidneysRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetKidneys)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.kidneysModalDialog)
      .should("be.visible")
      .and("have.text", kidneysModalContent);

    cy.get(medConditionsSurvey.kidneysModalDialog)
      .click("topLeft");

    cy.contains("Mental Well-Being");
    cy.get(medConditionsSurvey.yesMentalWellRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noMentalWellRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetMentalWell)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.mentalWellModalDialog)
      .should("be.visible")
      .and("have.text", mentalWellModalContent);

    cy.get(medConditionsSurvey.mentalWellModalDialog)
      .click("topLeft");

    cy.contains("Muscles, Bones, and/or Joints");
    cy.get(medConditionsSurvey.yesMusclesRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noMusclesRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetMuscles)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.musclesModalDialog)
      .should("be.visible")
      .and("have.text", musclesModalContent);

    cy.get(medConditionsSurvey.musclesModalDialog)
      .click("topLeft");

    cy.contains("Neurological Deficit (Brain and/or Spine)");
    cy.get(medConditionsSurvey.yesNeuroDefRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")
      .get(medConditionsSurvey.noNeuroDefRadioBtn)
      .should("be.visible")
      .and("contain", "No")
      .click();

    cy.get(medConditionsSurvey.dataTargetNeuroDef)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")
      .click()
      .wait(200)
      .get(medConditionsSurvey.neuroDefModalDialog)
      .should("be.visible")
      .and("have.text", neuroDefModalContent);

    cy.get(medConditionsSurvey.neuroDefModalDialog)
      .click("topLeft");

    cy.get(medConditionsSurvey.nextBtn)
      .click()
      .wait(200)
      .get(medConditionsSurvey.headerBar)
      .should("be.visible")
      .and("contain", "Do you have any ALLERGIES to medications?");

  });

  it("Should check the shc-condition-category page elements -  Airway and/or Lungs conditions - Asthma follow-up scenario ", () => {

    var asthmaCondText = "Asthma";
    var bronchiectasisCondText = "Bronchiectasis";
    var chronicBronchitisCondText = "COPD (Chronic Bronchitis and/or Emphysema)";
    var fluidAroundLungsCondText = "Fluid around my Lungs (Pleural Effusion)";
    var fluidInLungsCondText = "Fluid in my Lungs (Pulmonary Edema)";
    var ildCondText = "Interstitial Lung Disease (ILD)";
    var pneumoniaCondText = "Pneumonia";
    var pneumothoraxCondText = "Pneumothorax (Collapsed Lung)";
    var pulmonaryFibrosisCondText = "Pulmonary Fibrosis";
    var sleepApneaCondText = "Sleep Apnea";
    var influenzaCondText = "The Flu (Influenza)";
    var tuberculosisCondText = "Tuberculosis (TB)";
    var urtInfectionCondText = "Upper Respiratory Tract Infection (Cold/Flu/Acute Bronchitis)";

    var steroidsQueryHeading = "Have you ever taken steroids to manage your Asthma?";
    var hospitalizedQueryHeading = "Have you been hospitalized because of your Asthma?";
    var intubatedQueryHeading = "Have you ever been intubated (that is, had a breathing tube) because of your Asthma?";

    cy.visit("/shc-condition-category")
      .contains("Do you have or have you had any of the following medical conditions?")
      .get(medConditionsSurvey.introStartSurBtn)
      .click();

    cy.get(medConditionsSurvey.yesAirwaysRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noBloodDisRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noCancerRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noDiabetesRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noDigestiveTractRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noHeartRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noImmuneMedRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noInfectionRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noKidneysRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noMentalWellRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noMusclesRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.noNeuroDefRadioBtn)
      .scrollIntoView()
      .click();

    cy.get(medConditionsSurvey.nextBtn)
      .click();

    cy.get(medConditionsSurvey.headerBar)
      .should("be.visible")
      .and("have.text", "Specifically, which of the following conditions apply?");

    cy.contains("A condition related to Airway and/or Lungs. Please check all that apply:");
    cy.get(medConditionsSurvey.asthmaCheckBox)
      .should("be.visible")
      .and("have.text", asthmaCondText);

    cy.get(medConditionsSurvey.bronchiectasisCheckBox)
      .should("be.visible")
      .and("have.text", bronchiectasisCondText);

    cy.get(medConditionsSurvey.chronicBronchitisCheckBox)
      .should("be.visible")
      .and("have.text", chronicBronchitisCondText);

    cy.get(medConditionsSurvey.fluidAroundLungsCheckBox)
      .should("be.visible")
      .and("have.text", fluidAroundLungsCondText);

    cy.get(medConditionsSurvey.fluidInLungsCheckBox)
      .should("be.visible")
      .and("have.text", fluidInLungsCondText);

    cy.get(medConditionsSurvey.ildCheckBox)
      .should("be.visible")
      .and("have.text", ildCondText);

    cy.get(medConditionsSurvey.pneumoniaCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", pneumoniaCondText);

    cy.get(medConditionsSurvey.pneumothoraxCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", pneumothoraxCondText);

    cy.get(medConditionsSurvey.pulmonaryFibrosisCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", pulmonaryFibrosisCondText);

    cy.get(medConditionsSurvey.sleepApneaCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", sleepApneaCondText);

    cy.get(medConditionsSurvey.influenzaCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", influenzaCondText);

    cy.get(medConditionsSurvey.tuberculosisCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", tuberculosisCondText);

    cy.get(medConditionsSurvey.urtInfectionCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", urtInfectionCondText);

    cy.get(medConditionsSurvey.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medConditionsSurvey.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(medConditionsSurvey.asthmaCheckBox)
      .scrollIntoView()
      .click()
      .get(medConditionsSurvey.nextBtn)
      .click()
      .get(medConditionsSurvey.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Asthma?");

    cy.get(medConditionsSurvey.steroidsQuery)
      .should("be.visible")
      .and("contain", steroidsQueryHeading);

    cy.get(medConditionsSurvey.yesSteroidsQuery)
      .should("be.visible")
      .and("have.text", "Yes")
      .get(medConditionsSurvey.noSteroidsQuery)
      .should("be.visible")
      .and("have.text", "No")
      .click();

    cy.get(medConditionsSurvey.hospitalizedQuery)
      .should("be.visible")
      .and("contain", hospitalizedQueryHeading)
      .get(medConditionsSurvey.yesHospitalizedQuery)
      .should("be.visible")
      .and("have.text", "Yes")
      .get(medConditionsSurvey.noHospitalizedQuery)
      .should("be.visible")
      .and("have.text", "No")
      .click();

    cy.get(medConditionsSurvey.intubatedQuery)
      .should("be.visible")
      .and("contain", intubatedQueryHeading)
      .get(medConditionsSurvey.yesIntubatedQuery)
      .should("be.visible")
      .and("have.text", "Yes")
      .get(medConditionsSurvey.noIntubatedQuery)
      .should("be.visible")
      .and("have.text", "No")
      .click()
      .get(medConditionsSurvey.nextBtn)
      .click()
      .get(medConditionsSurvey.headerBar)
      .should("be.visible")
      .and("have.text", "Do you have any ALLERGIES to medications?");

  });

  it("Should check the med-allergies page elements - Yes Vitamin C scenario ", () => {

    var anaphylaxisReactionCheckBoxTitle = "ANAPHYLAXIS";
    var anxietyReactionCheckBoxTitle = "Anxiety";
    var breathIssuesReactionCheckBoxTitle = "Difficulty breathing, speaking and/or swallowing";
    var nauseaReactionCheckBoxTitle = "Nausea and/or Vomiting";
    var rashHivesReactionCheckBoxTitle = "Rash or Hives";
    var swellingReactionCheckBoxTitle = "Swelling of the eyes, face, lips, throat and/or tongue";
    var otherReactionCheckBoxTitle = "Other";

    cy.visit("/med-allergies")
      .contains("Do you have any ALLERGIES to medications?")
      .get(medAllergies.introStartSurBtn)
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.get(medAllergies.noMedAllergies)
      .should("be.visible")
      .and("have.text", "No")
      .get(medAllergies.yesMedAllergies)
      .should("be.visible")
      .and("have.text", "Yes")
      .click()
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Please enter the medications which you take:");

    cy.contains("Search for medications")
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medAllergies.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Please add medications");

    cy.get(medAllergies.placeHolder)
      .should("be.visible")
      .get(medAllergies.medsInputField)
      .should("be.visible")
      .type("Aspirin")
      .get(medAllergies.medsListWrapper)
      .should("be.visible")
      .and("contain", "Aspirin")
      .get(medAllergies.firstSuggestedItem)
      .should("be.visible")
      .and("contain", "Aspirin")
      .click()
      .get(medAllergies.nextBtn)
      .click();

    cy.contains("Aspirin")
      .get(medAllergies.headerBar)
      .should("be.visible")
      .and("contain", "Confirm your medications")
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .get(medAllergies.makeChangesBtn)
      .should("be.visible")
      .and("contain", "Make Changes")
      .click();

    cy.get(medAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Please enter the medications which you take:")
      .get(medAllergies.deleteMedBtn)
      .should("be.visible")
      .click();

    cy.get(medAllergies.medsInputField)
      .type("Vitamin C")
      .get(medAllergies.medsListWrapper)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .get(medAllergies.firstSuggestedItem)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .click()
      .get(medAllergies.nextBtn)
      .click();

    cy.contains("Vitamin C")
      .get(medAllergies.makeChangesBtn)
      .should("be.visible")
      .and("contain", "Make Changes")
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.contains("If Other, please explain:")
      .get(medAllergies.headerBar)
      .should("be.visible")
      .and("contain", "What allergic reactions do you have to Vitamin C?")
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medAllergies.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required")
      .wait(300);

    cy.get(medAllergies.anaphylaxisReactionCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", anaphylaxisReactionCheckBoxTitle)
      .get(medAllergies.anxietyReactionCheckBox)
      .should("be.visible")
      .and("have.text", anxietyReactionCheckBoxTitle)
      .click()
      .get(medAllergies.breathIssuesReactionCheckBox)
      .should("be.visible")
      .and("have.text", breathIssuesReactionCheckBoxTitle)
      .get(medAllergies.nauseaReactionCheckBox)
      .should("be.visible")
      .and("have.text", nauseaReactionCheckBoxTitle)
      .get(medAllergies.rashHivesReactionCheckBox)
      .should("be.visible")
      .and("have.text", rashHivesReactionCheckBoxTitle)
      .get(medAllergies.swellingReactionCheckBox)
      .should("be.visible")
      .and("have.text", swellingReactionCheckBoxTitle)
      .get(medAllergies.otherReactionCheckBox)
      .should("be.visible")
      .and("have.text", otherReactionCheckBoxTitle)
      .click()
      .get(medAllergies.otherInputField)
      .type("Other Reaction")
      .get(medAllergies.nextBtn)
      .click();

    cy.get(medAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Are you allergic to any of the following?");
    cy.contains("Please check all that apply:");

  });

  it("Should check the med-allergies page elements - No scenario ", () => {

    cy.visit("/med-allergies")
      .contains("Do you have any ALLERGIES to medications?")
      .get(medAllergies.introStartSurBtn)
      .click();

    cy.get(medAllergies.noMedAllergies)
      .click()
      .get(medAllergies.nextBtn)
      .click()
      .get(medAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Are you allergic to any of the following?");

    cy.contains("Please check all that apply:");

  });

  it("Should check the material-allergies page elements - Betadine scenario ", () => {

    var betadineMaterialAllergyTitle = "Betadine";
    var chlorhexidineMaterialAllergyTitle = "Chlorhexidine";
    var contrastMaterialAllergyTitle = "Contrast (X-Ray Dye)";
    var iodineMaterialAllergyTitle = "Iodine";
    var latexMaterialAllergyTitle = "LATEX";
    var tapeMaterialAllergyTitle = "Tape";
    var noMaterialAllergyTitle = "NO, I am NOT Allergic to ANY of the items on this list";

    var anaphylaxisReactionTitle = "ANAPHYLAXIS";
    var anxietyReactionTitle = "Anxiety";
    var breathIssuesReactionTitle = "Difficulty breathing, speaking and/or swallowing";
    var nauseaReactionTitle = "Nausea and/or Vomiting";
    var rashHivesReactionTitle = "Rash or Hives";
    var swellingReactionTitle = "Swelling of the eyes, face, lips, throat and/or tongue";
    var otherReactionTitle = "Other";

    cy.visit("/material-allergies")
      .contains("Are you allergic to any of the following?")
      .get(materialAllergies.introStartSurBtn)
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.contains("Please check all that apply:");

    cy.get(materialAllergies.betadineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", betadineMaterialAllergyTitle)
      .click()
      .get(materialAllergies.chlorhexidineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", chlorhexidineMaterialAllergyTitle)
      .get(materialAllergies.contrastMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", contrastMaterialAllergyTitle)
      .get(materialAllergies.iodineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", iodineMaterialAllergyTitle)
      .get(materialAllergies.latexMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", latexMaterialAllergyTitle)
      .get(materialAllergies.tapeMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", tapeMaterialAllergyTitle)
      .get(materialAllergies.noMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", noMaterialAllergyTitle)
      .get(materialAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.get(materialAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "What is the nature of your allergy to Betadine?");
    cy.contains("Please check all that apply:");

    cy.get(materialAllergies.anaphylaxisReactionCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", anaphylaxisReactionTitle)
      .get(materialAllergies.anxietyReactionCheckBox)
      .should("be.visible")
      .and("have.text", anxietyReactionTitle)
      .click()
      .get(materialAllergies.breathIssuesReactionCheckBox)
      .should("be.visible")
      .and("have.text", breathIssuesReactionTitle)
      .get(materialAllergies.nauseaReactionCheckBox)
      .should("be.visible")
      .and("have.text", nauseaReactionTitle)
      .get(materialAllergies.rashHivesReactionCheckBox)
      .should("be.visible")
      .and("have.text", rashHivesReactionTitle)
      .get(materialAllergies.swellingReactionCheckBox)
      .should("be.visible")
      .and("have.text", swellingReactionTitle)
      .get(materialAllergies.otherReactionCheckBox)
      .should("be.visible")
      .and("have.text", otherReactionTitle)
      .click()
      .get(materialAllergies.otherInputField)
      .type("Other Reaction");

    cy.contains("If Other, please explain:");
    cy.get(materialAllergies.nextBtn)
      .click();

    cy.get(materialAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?")

  });

  it("Should check the material-allergies page elements - NO, I am NOT Allergic scenario ", () => {

    var betadineMaterialAllergyTitle = "Betadine";
    var chlorhexidineMaterialAllergyTitle = "Chlorhexidine";
    var contrastMaterialAllergyTitle = "Contrast (X-Ray Dye)";
    var iodineMaterialAllergyTitle = "Iodine";
    var latexMaterialAllergyTitle = "LATEX";
    var tapeMaterialAllergyTitle = "Tape";
    var noMaterialAllergyTitle = "NO, I am NOT Allergic to ANY of the items on this list";

    cy.visit("/material-allergies")
      .contains("Are you allergic to any of the following?")
      .get(materialAllergies.introStartSurBtn)
      .click();

    cy.contains("Please check all that apply:");

    cy.get(materialAllergies.betadineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", betadineMaterialAllergyTitle)
      .get(materialAllergies.chlorhexidineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", chlorhexidineMaterialAllergyTitle)
      .get(materialAllergies.contrastMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", contrastMaterialAllergyTitle)
      .get(materialAllergies.iodineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", iodineMaterialAllergyTitle)
      .get(materialAllergies.latexMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", latexMaterialAllergyTitle)
      .get(materialAllergies.tapeMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", tapeMaterialAllergyTitle)
      .get(materialAllergies.noMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", noMaterialAllergyTitle)
      .click()
      .get(materialAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.get(materialAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?");

  });

  it("Should check the doyousmoke.0 page elements - Yes scenario ", () => {

    var selectorText = "Select One";
    var yearsValues = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50"
    ];
    var packsValues = [
      "1/4 pack",
      "1/2 pack",
      "1 pack",
      "2 packs",
      "3 packs",
      ">3 packs"
    ];

    cy.visit("/doyousmoke.0")
      .contains("Do you smoke cigarettes?")
      .get(doYouSmokeCigarettes.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(doYouSmokeCigarettes.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required")
      .get(doYouSmokeCigarettes.yesDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")
      .click()
      .get(doYouSmokeCigarettes.noDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .get(doYouSmokeCigarettes.usedToDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "I Used To")
      .get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your current tobacco use:");

    cy.contains("Approximately, how many years have you smoked?");
    cy.contains("Approximately, how many packs per day?");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < yearsValues.length; i++) {
      cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
        .select(yearsValues[i])
        .should("be.visible")
    };

    cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
      .select("5");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(doYouSmokeCigarettes.packsQuantitySelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < packsValues.length; i++) {
      cy.get(doYouSmokeCigarettes.packsQuantitySelector)
        .select(packsValues[i])
        .should("be.visible")
    };

    cy.get(doYouSmokeCigarettes.packsQuantitySelector)
      .select("1/4 pack");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click();

    cy.get(doYouSmokeCigarettes.headerBar)
      .should("be.visible")
      .and("have.text", "Approximately, how often do you drink beer, wine, or liquor?");

    cy.contains("Do you have a history of Alcohol Abuse?");

  });

  it("Should check the doyousmoke.0 page elements - No scenario ", () => {

    cy.visit("/doyousmoke.0")
      .contains("Do you smoke cigarettes?")
      .get(doYouSmokeCigarettes.introStartSurBtn)
      .click();

    cy.get(doYouSmokeCigarettes.yesDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")
      .get(doYouSmokeCigarettes.noDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .click()
      .get(doYouSmokeCigarettes.usedToDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "I Used To")
      .get(doYouSmokeCigarettes.nextBtn)
      .click();

    cy.get(doYouSmokeCigarettes.headerBar)
      .should("be.visible")
      .and("have.text", "Approximately, how often do you drink beer, wine, or liquor?");
    cy.contains("Do you have a history of Alcohol Abuse?");

  });

  it("Should check the doyousmoke.0 page elements - I Used To scenario ", () => {
    var selectorText = "Select One";
    var quitYearValues = [
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
      "2011",
      "2010",
      "2009",
      "2008",
      "2007",
      "2006",
      "2005",
      "2004",
      "2003",
      "2002",
      "2001",
      "2000",
      "1999",
      "1998",
      "1997",
      "1996",
      "1995",
      "1994",
      "1993",
      "1992",
      "1991",
      "1990",
      "1989",
      "1988",
      "1987",
      "1986",
      "1985",
      "1984",
      "1983",
      "1982",
      "1981",
      "1980",
      "1979",
      "1978",
      "1977",
      "1976",
      "1975",
      "1974",
      "1973",
      "1972",
      "1971",
      "1970",
      "1969",
      "1968",
      "1967",
      "1966",
      "1965",
      "1964",
      "1963",
      "1962",
      "1961",
      "1960",
      "1959",
      "1958",
      "1957",
      "1956",
      "1955",
      "1954",
      "1953",
      "1952",
      "1951",
      "1950",
      "1949",
      "1948",
      "1947",
      "1946",
      "1945",
      "1944",
      "1943",
      "1942",
      "1941",
      "1940",
      "1939",
      "1938",
      "1937",
      "1936",
      "1935",
      "1934",
      "1933",
      "1932",
      "1931",
      "1930",
      "1929",
      "1928",
      "1927",
      "1926",
      "1925",
      "1924",
      "1923",
      "1922",
      "1921",
      "1920",
      "1919",
      "1918",
      "1917",
      "1916",
      "1915",
      "1914",
      "1913",
      "1912",
      "1911",
      "1910",
      "1909",
      "1908",
      "1907",
      "1906",
      "1905",
      "1904",
      "1903",
      "1902",
      "1901",
      "1900"
    ];
    var yearsValues = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50"
    ];
    var packsValues = [
      "1/4 pack",
      "1/2 pack",
      "1 pack",
      "2 packs",
      "3 packs",
      ">3 packs"
    ];

    cy.visit("/doyousmoke.0")
      .contains("Do you smoke cigarettes?")
      .get(doYouSmokeCigarettes.introStartSurBtn)
      .click();

    cy.get(doYouSmokeCigarettes.yesDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")
      .get(doYouSmokeCigarettes.noDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .get(doYouSmokeCigarettes.usedToDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "I Used To")
      .click()
      .get(doYouSmokeCigarettes.nextBtn)
      .click();

    cy.contains("With regard to your past tobacco use:");
    cy.contains("What year did you quit?");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(doYouSmokeCigarettes.quitYearSelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < quitYearValues.length; i++) {
      cy.get(doYouSmokeCigarettes.quitYearSelector)
        .select(quitYearValues[i])
        .should("be.visible")
    };

    cy.get(doYouSmokeCigarettes.quitYearSelector)
      .select("2010")
      .get(doYouSmokeCigarettes.nextBtn)
      .click();

    cy.get(doYouSmokeCigarettes.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your past tobacco use:");

    cy.contains("Approximately, how many years have you smoked?");
    cy.contains("Approximately, how many packs per day?");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < yearsValues.length; i++) {
      cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
        .select(yearsValues[i])
        .should("be.visible")
    };

    cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
      .select("5");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(doYouSmokeCigarettes.packsQuantitySelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < packsValues.length; i++) {
      cy.get(doYouSmokeCigarettes.packsQuantitySelector)
        .select(packsValues[i])
        .should("be.visible")
    };

    cy.get(doYouSmokeCigarettes.packsQuantitySelector)
      .select("1/4 pack");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click();

    cy.get(doYouSmokeCigarettes.headerBar)
      .should("be.visible")
      .and("have.text", "Approximately, how often do you drink beer, wine, or liquor?");
    cy.contains("Do you have a history of Alcohol Abuse?");

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

  it("Should check the illicitdrugs.0 page elements - Yes scenario ", () => {

    var marijuanaIllicitDrugsTitle = "Marijuana";
    var cocaineIllicitDrugsTitle = "Cocaine";
    var heroinIllicitDrugsTitle = "Heroin";
    var methamphetaminesIllicitDrugsTitle = "Methamphetamines ('Ecstasy', 'Crystal Meth')";
    var otherIllicitDrugsTitle = "Other";

    cy.visit("/illicitdrugs.0")
      .contains("Do you use recreational or illicit drugs?")
      .get(illicitDrugsPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(illicitDrugsPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(illicitDrugsPage.yesIllicitDrugsRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")
      .click()
      .get(illicitDrugsPage.noIllicitDrugsRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .get(illicitDrugsPage.usedToIllicitDrugsRadioBtn)
      .should("be.visible")
      .and("have.text", "I Used To")
      .get(illicitDrugsPage.nextBtn)
      .click()
      .get(illicitDrugsPage.headerBar)
      .should("be.visible")
      .and("have.text", "Please indicate the recreational or illicit drug(s) you currently use:");

    cy.contains("Please check all that apply:");
    cy.contains("If other:");

    cy.get(illicitDrugsPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(illicitDrugsPage.marijuanaIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", marijuanaIllicitDrugsTitle)
      .click()
      .get(illicitDrugsPage.cocaineIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", cocaineIllicitDrugsTitle)
      .get(illicitDrugsPage.heroinIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", heroinIllicitDrugsTitle)
      .get(illicitDrugsPage.methamphetaminesIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", methamphetaminesIllicitDrugsTitle)
      .get(illicitDrugsPage.otherIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", otherIllicitDrugsTitle)
      .click()
      .get(illicitDrugsPage.otherIllicitInputField)
      .should("be.visible")
      .type("Other Drugs")
      .get(illicitDrugsPage.nextBtn)
      .click();

    cy.get(illicitDrugsPage.headerBar)
      .should("be.visible")
      .and("have.text", "Which of the following most closely represents your level of physical activity?");
    cy.contains("Please select ONE of the following:");

  });

  it("Should check the illicitdrugs.0 page elements - No scenario ", () => {

    cy.visit("/illicitdrugs.0")
      .contains("Do you use recreational or illicit drugs?")
      .get(illicitDrugsPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(illicitDrugsPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(illicitDrugsPage.yesIllicitDrugsRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")
      .get(illicitDrugsPage.noIllicitDrugsRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .click()
      .get(illicitDrugsPage.usedToIllicitDrugsRadioBtn)
      .should("be.visible")
      .and("have.text", "I Used To")
      .get(illicitDrugsPage.nextBtn)
      .click();

    cy.get(illicitDrugsPage.headerBar)
      .should("be.visible")
      .and("have.text", "Which of the following most closely represents your level of physical activity?");
    cy.contains("Please select ONE of the following:");

  });

  it("Should check the illicitdrugs.0 page elements - I Used To scenario ", () => {

    var marijuanaIllicitDrugsTitle = "Marijuana";
    var cocaineIllicitDrugsTitle = "Cocaine";
    var heroinIllicitDrugsTitle = "Heroin";
    var methamphetaminesIllicitDrugsTitle = "Methamphetamines ('Ecstasy', 'Crystal Meth')";
    var otherIllicitDrugsTitle = "Other";
    var selectorText = "Select One";
    var quitYearValues = [
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
      "2011",
      "2010",
      "2009",
      "2008",
      "2007",
      "2006",
      "2005",
      "2004",
      "2003",
      "2002",
      "2001",
      "2000",
      "1999",
      "1998",
      "1997",
      "1996",
      "1995",
      "1994",
      "1993",
      "1992",
      "1991",
      "1990",
      "1989",
      "1988",
      "1987",
      "1986",
      "1985",
      "1984",
      "1983",
      "1982",
      "1981",
      "1980",
      "1979",
      "1978",
      "1977",
      "1976",
      "1975",
      "1974",
      "1973",
      "1972",
      "1971",
      "1970",
      "1969",
      "1968",
      "1967",
      "1966",
      "1965",
      "1964",
      "1963",
      "1962",
      "1961",
      "1960",
      "1959",
      "1958",
      "1957",
      "1956",
      "1955",
      "1954",
      "1953",
      "1952",
      "1951",
      "1950",
      "1949",
      "1948",
      "1947",
      "1946",
      "1945",
      "1944",
      "1943",
      "1942",
      "1941",
      "1940",
      "1939",
      "1938",
      "1937",
      "1936",
      "1935",
      "1934",
      "1933",
      "1932",
      "1931",
      "1930",
      "1929",
      "1928",
      "1927",
      "1926",
      "1925",
      "1924",
      "1923",
      "1922",
      "1921",
      "1920",
      "1919",
      "1918",
      "1917",
      "1916",
      "1915",
      "1914",
      "1913",
      "1912",
      "1911",
      "1910",
      "1909",
      "1908",
      "1907",
      "1906",
      "1905",
      "1904",
      "1903",
      "1902",
      "1901",
      "1900"
    ];

    cy.visit("/illicitdrugs.0")
      .contains("Do you use recreational or illicit drugs?")
      .get(illicitDrugsPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(illicitDrugsPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(illicitDrugsPage.yesIllicitDrugsRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")
      .get(illicitDrugsPage.noIllicitDrugsRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .get(illicitDrugsPage.usedToIllicitDrugsRadioBtn)
      .should("be.visible")
      .and("have.text", "I Used To")
      .click()
      .get(illicitDrugsPage.nextBtn)
      .click()
      .get(illicitDrugsPage.headerBar)
      .should("be.visible")
      .and("have.text", "Please indicate the recreational or illicit drug(s) you have previously used:");

    cy.contains("When did you last use drugs?");
    cy.contains("Please check all that apply:");
    cy.contains("If other:");

    cy.get(illicitDrugsPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(illicitDrugsPage.quitYearSelector)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < quitYearValues.length; i++) {
      cy.get(illicitDrugsPage.quitYearSelector)
        .select(quitYearValues[i])
        .should("be.visible")
    };

    cy.get(illicitDrugsPage.quitYearSelector)
      .select("2010");

    cy.get(illicitDrugsPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(illicitDrugsPage.marijuanaIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", marijuanaIllicitDrugsTitle)
      .click()
      .get(illicitDrugsPage.cocaineIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", cocaineIllicitDrugsTitle)
      .get(illicitDrugsPage.heroinIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", heroinIllicitDrugsTitle)
      .get(illicitDrugsPage.methamphetaminesIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", methamphetaminesIllicitDrugsTitle)
      .get(illicitDrugsPage.otherIllicitDrugsCheckBox)
      .should("be.visible")
      .and("have.text", otherIllicitDrugsTitle)
      .click()
      .get(illicitDrugsPage.otherIllicitInputField)
      .should("be.visible")
      .type("Other Drugs")
      .get(illicitDrugsPage.nextBtn)
      .click();

    cy.get(illicitDrugsPage.headerBar)
      .should("be.visible")
      .and("have.text", "Which of the following most closely represents your level of physical activity?");
    cy.contains("Please select ONE of the following:");

  });

  it("Should check the activity.0 page elements - Strenuous Sports scenario ", () => {

    /*
      1. navigate to the "activity.0" dialog
      2. check the title of the dialog
      3. click to start survey
      4. check the title of the section
      5. validation error message checking
      6. check the visibility of the checkboxes
      7. choose the necessary value
      8. navigate to the next page
      9. check the title of a header of the page
      10. check the title of a header of the section
      11. validation error message checking
      12. check the visibility of the checkboxes
      13. choose the necessary value
      14. navigate to the next page
      15. check the title of a header of the page
      */

    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    var doNotFrequencyTitle = "I do not exercise on a regular basis";
    var onceFrequencyTitle = "Once per week";
    var twiceFrequencyTitle = "Twice per week";
    var threeFrequencyTitle = "Three times per week";
    var moreThreeFrequencyTitle = "More than three times per week";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click();    //8. navigate to the next page

    cy.get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Approximately how often do you exercise per week?");    //9. check the title of a header of the page
    cy.contains("Please select one of the following choices:");    //10. check the title of a header of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //11. validation error message checking

    cy.get(activityPage.doNotFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", doNotFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.onceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", onceFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.twiceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", twiceFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.threeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", threeFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.moreThreeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", moreThreeFrequencyTitle)    //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.nextBtn)
      .click()    //14. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //15. check the title of a header of the page

  });

  it("Should check the activity.0 page elements - Recreational Activities scenario ", () => {

    /*
    1. navigate to the "activity.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. validation error message checking
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    10. check the title of a header of the section
    11. validation error message checking
    12. check the visibility of the checkboxes
    13. choose the necessary value
    14. navigate to the next page
    15. check the title of a header of the page
    */

    var strenuousActivityTitle =
      "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    var doNotFrequencyTitle = "I do not exercise on a regular basis";
    var onceFrequencyTitle = "Once per week";
    var twiceFrequencyTitle = "Twice per week";
    var threeFrequencyTitle = "Three times per week";
    var moreThreeFrequencyTitle = "More than three times per week";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click();    //8. navigate to the next page

    cy.get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Approximately how often do you exercise per week?");    //9. check the title of a header of the page
    cy.contains("Please select one of the following choices:");    //10. check the title of a header of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //11. validation error message checking

    cy.get(activityPage.doNotFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", doNotFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.onceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", onceFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.twiceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", twiceFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.threeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", threeFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.moreThreeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", moreThreeFrequencyTitle)    //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.nextBtn)
      .click()    //14. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //15. check the title of a header of the page

  });

  it("Should check the activity.0 page elements - 2 Flights Of Stairs scenario ", () => {

    /*
    1. navigate to the "activity.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. validation error message checking
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    10. check the title of a header of the section
    11. validation error message checking
    12. check the visibility of the checkboxes
    13. choose the necessary value
    14. navigate to the next page
    15. check the title of a header of the page
    */

    var strenuousActivityTitle =
      "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    var doNotFrequencyTitle = "I do not exercise on a regular basis";
    var onceFrequencyTitle = "Once per week";
    var twiceFrequencyTitle = "Twice per week";
    var threeFrequencyTitle = "Three times per week";
    var moreThreeFrequencyTitle = "More than three times per week";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)
      .get(activityPage.nextBtn)
      .click();    //8. navigate to the next page

    cy.get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Approximately how often do you exercise per week?");    //9. check the title of a header of the page
    cy.contains("Please select one of the following choices:");    //10. check the title of a header of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //11. validation error message checking

    cy.get(activityPage.doNotFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", doNotFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.onceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", onceFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.twiceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", twiceFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.threeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", threeFrequencyTitle)    //12. check the visibility of the checkboxes
      .get(activityPage.moreThreeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", moreThreeFrequencyTitle)    //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.nextBtn)
      .click()    //14. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //15. check the title of a header of the page

  });

  it("Should check the activity.0 page elements - 1 Flight Of Stairs Negative Answers scenario ", () => {

    /*
    1. navigate to the "activity.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. validation error message checking
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    10. validation error message checking
    11. check the title of a header of the section
    12. check the visibility of the checkboxes
    13. choose the necessary value
    14. validation error message checking
    15. check the title of a header of the section
    16. check the visibility of the checkboxes
    17. choose the necessary value
    18. validation error message checking
    19. check the title of a header of the section
    20. check the visibility of the checkboxes
    21. choose the necessary value
    22. validation error message checking
    23. check the title of a header of the section
    24. check the visibility of the checkboxes
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of a header of the page
    */

    var strenuousActivityTitle =
      "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking    //6. check the visibility of the checkboxes

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()    //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //9. check the title of a header of the page

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //10. validation error message checking

    cy.contains("Do you get chest pain at REST?")    //11. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainRestCheckBox)    //12. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Yes")
      .get(activityPage.noPainRestCheckBox)    //12. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "No")
      .click()    //13. choose the necessary value
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //14. validation error message checking

    cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")    //15. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //16. check the visibility of the checkboxes
      .get(activityPage.noPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //16. check the visibility of the checkboxes
      .click()    //17. choose the necessary value
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //18. validation error message checking

    cy.contains("Have you had a stress test?");    //19. check the title of a header of the section
    cy.get(activityPage.yesStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the checkboxes
      .get(activityPage.noStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the checkboxes
      .click()    //21. choose the necessary value
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //22. validation error message checking

    cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");    //23. check the title of a header of the section
    cy.get(activityPage.yesCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //24. check the visibility of the checkboxes
      .get(activityPage.noCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //24. check the visibility of the checkboxes
      .click();    //25. choose the necessary value

    cy.get(activityPage.nextBtn)
      .click()    //26. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //27. check the title of a header of the page
  });

  it("Should check the activity.0 page elements - 1 Flight Of Stairs Positive Answers scenario ", () => {

    /*
    1. navigate to the "activity.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. validation error message checking
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    10. validation error message checking
    11. check the title of a header of the section
    12. check the visibility of the checkboxes
    13. choose the necessary value
    14. validation error message checking
    15. check the title of a header of the section
    16. check the visibility of the checkboxes
    17. choose the necessary value
    18. validation error message checking
    19. check the title of a header of the section
    20. check the visibility of the checkboxes
    21. choose the necessary value
    22. validation error message checking
    23. check the title of a header of the section
    24. check the visibility of the checkboxes
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of a header of the page
    28. check the title of a header of the section
    29. check the visibility of the selector's content
    30. choose the necessary value
    31. validation error message checking
    32. check the title of a header of the section
    33. input the necessary date
    34. validation error message checking
    35. check the title of a header of the section
    36. check the visibility of the checkboxes
    37. choose the necessary value
    38. navigate to the next page
    39. check the title of a header of the page
    40. check the title of a header of the section
    41. check the visibility of the selector's content
    42. choose the necessary value
    43. validation error message checking
    44. check the title of a header of the section
    45. input the necessary date
    46. check the title of a header of the section
    47. check the visibility of the checkboxes
    48. choose the necessary value
    49. navigate to the next page
    50. check the title of a header of the page
    */

    var strenuousActivityTitle =
      "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    var selectorText = "Select One";
    var stressTestsQtyValues = ["1", "2", "3", "4", "5"];
    var catheterizationQtyValues = ["1", "2", "3", "4", "5"];
    var angioplastyStentCathTitle = "I had a Ballon Angioplasty with Stent";
    var angioplastyNoStentCathTitle = "I had a Ballon Angioplasty, NO Stent";
    var bypassCathTitle = "I had Bypass Surgery";
    var pacemakerCathTitle = "I had a Pacemaker and/or Defibrillator placed";
    var ablationCathTitle = "I had an Ablation for Arrhythmia";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()    //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //9. check the title of a header of the page

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //10. validation error message checking

    cy.contains("Do you get chest pain at REST?")    //11. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.noPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //12. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //14. validation error message checking

    cy.contains(
      "Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)"
    )    //15. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //16. check the visibility of the checkboxes
      .click()    //17. choose the necessary value
      .get(activityPage.noPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //16. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //18. validation error message checking

    cy.contains("Have you had a stress test?");    //19. check the title of a header of the section
    cy.get(activityPage.yesStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the checkboxes
      .click()    //21. choose the necessary value
      .get(activityPage.noStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //22. validation error message checking

    cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");    //23. check the title of a header of the section
    cy.get(activityPage.yesCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //24. check the visibility of the checkboxes
      .click()    //25. choose the necessary value
      .get(activityPage.noCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "No");    //24. check the visibility of the checkboxes
    cy.get(activityPage.nextBtn)
      .click()    //26. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //27. check the title of a header of the page

    cy.contains("How many stress tests have you had?");    //28. check the title of a header of the section
    cy.get(activityPage.stressTestsQtySelect)
      .should("be.visible")
      .and("contain", selectorText);    //29. check the visibility of the selector's content
    for (var i = 0; i < stressTestsQtyValues.length; i++) {
      cy.get(activityPage.stressTestsQtySelect)
        .select(stressTestsQtyValues[i])
        .should("be.visible");
    }    //29. check the visibility of the selector's content
    cy.get(activityPage.stressTestsQtySelect).select("2");    //30. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //31. validation error message checking

    cy.contains("Approximately when was your most recent stress test?");    //32. check the title of a header of the section
    cy.get(activityPage.stressTestsDateInput)
      .should("be.visible")
      .type("02281984")    //33. input the necessary date
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //34. validation error message checking

    cy.contains("Was your most recent stress test normal?");    //35. check the title of a header of the section
    cy.get(activityPage.yesNormalTest)
      .should("be.visible")
      .and("have.text", "Yes")    //36. check the visibility of the checkboxes
      .click()    //37. choose the necessary value
      .get(activityPage.noNormalTest)
      .should("be.visible")
      .and("have.text", "No")    //36. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()    //38. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //39. check the title of a header of the page

    cy.contains("How many Cardiac Catheterizations have you had?");    //40. check the title of a header of the section
    cy.get(activityPage.catheterizationQtySelect)
      .should("be.visible")
      .and("contain", selectorText);    //41. check the visibility of the selector's content
    for (var i = 0; i < catheterizationQtyValues.length; i++) {
      cy.get(activityPage.catheterizationQtySelect)
        .select(catheterizationQtyValues[i])
        .should("be.visible");
    }    //41. check the visibility of the selector's content
    cy.get(activityPage.catheterizationQtySelect).select("1");    //42. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //43. validation error message checking

    cy.contains(
      "Approximately when was your most recent Cardiac Catheterization?"
    );    //44. check the title of a header of the section
    cy.get(activityPage.catheterizationDateInput)
      .should("be.visible")
      .type("02281984");    //45. input the necessary date

    cy.contains("Which procedure was performed during your most recent Cardiac Catheterization?");    //46. check the title of a header of the section
    cy.get(activityPage.angioplastyStentCathCheckBox)
      .should("be.visible")
      .and("have.text", angioplastyStentCathTitle)    //47. check the visibility of the checkboxes
      .click()    //48. choose the necessary value
      .get(activityPage.angioplastyNoStentCathCheckBox)
      .should("be.visible")
      .and("have.text", angioplastyNoStentCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.bypassCathCheckBox)
      .should("be.visible")
      .and("have.text", bypassCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.pacemakerCathCheckBox)
      .should("be.visible")
      .and("have.text", pacemakerCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.ablationCathCheckBox)
      .should("be.visible")
      .and("have.text", ablationCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()    //49. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //50. check the title of a header of the page

  });

  it("Should check the activity.0 page elements - 1 Block Or Less Negative Answers scenario ", () => {

    /*
    1. navigate to the "activity.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. validation error message checking
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    10. validation error message checking
    11. check the title of a header of the section
    12. check the visibility of the checkboxes
    13. choose the necessary value
    14. validation error message checking
    15. check the title of a header of the section
    16. check the visibility of the checkboxes
    17. choose the necessary value
    18. validation error message checking
    19. check the title of a header of the section
    20. check the visibility of the checkboxes
    21. choose the necessary value
    22. validation error message checking
    23. check the title of a header of the section
    24. check the visibility of the checkboxes
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of a header of the page
    */

    var strenuousActivityTitle =
      "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()    //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //9. check the title of a header of the page

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //10. validation error message checking

    cy.contains("Do you get chest pain at REST?")    //11. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //12. check the visibility of the checkboxes
      .get(activityPage.noPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //14. validation error message checking

    cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")    //15. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //16. check the visibility of the checkboxes
      .get(activityPage.noPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //16. check the visibility of the checkboxes
      .click()    //17. choose the necessary value
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //18. validation error message checking

    cy.contains("Have you had a stress test?");    //19. check the title of a header of the section
    cy.get(activityPage.yesStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the checkboxes
      .get(activityPage.noStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the checkboxes
      .click()    //21. choose the necessary value
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //22. validation error message checking

    cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");    //23. check the title of a header of the section
    cy.get(activityPage.yesCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //24. check the visibility of the checkboxes
      .get(activityPage.noCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //24. check the visibility of the checkboxes
      .click();    //25. choose the necessary value
    cy.get(activityPage.nextBtn)
      .click()    //26. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //27. check the title of a header of the page

  });

  it("Should check the activity.0 page elements - 1 Block Or Less Positive Answers scenario ", () => {

    /*
    1. navigate to the "activity.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. validation error message checking
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    10. validation error message checking
    11. check the title of a header of the section
    12. check the visibility of the checkboxes
    13. choose the necessary value
    14. validation error message checking
    15. check the title of a header of the section
    16. check the visibility of the checkboxes
    17. choose the necessary value
    18. validation error message checking
    19. check the title of a header of the section
    20. check the visibility of the checkboxes
    21. choose the necessary value
    22. validation error message checking
    23. check the title of a header of the section
    24. check the visibility of the checkboxes
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of a header of the page
    28. check the title of a header of the section
    29. check the visibility of the selector's content
    30. choose the necessary value
    31. validation error message checking
    32. check the title of a header of the section
    33. input the necessary date
    34. validation error message checking
    35. check the title of a header of the section
    36. check the visibility of the checkboxes
    37. choose the necessary value
    38. navigate to the next page
    39. check the title of a header of the page
    40. check the title of a header of the section
    41. check the visibility of the selector's content
    42. choose the necessary value
    43. validation error message checking
    44. check the title of a header of the section
    45. input the necessary date
    46. check the title of a header of the section
    47. check the visibility of the checkboxes
    48. choose the necessary value
    49. navigate to the next page
    50. check the title of a header of the page
    */

    var strenuousActivityTitle =
      "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    var selectorText = "Select One";
    var stressTestsQtyValues = ["1", "2", "3", "4", "5"];
    var catheterizationQtyValues = ["1", "2", "3", "4", "5"];
    var angioplastyStentCathTitle = "I had a Ballon Angioplasty with Stent";
    var angioplastyNoStentCathTitle = "I had a Ballon Angioplasty, NO Stent";
    var bypassCathTitle = "I had Bypass Surgery";
    var pacemakerCathTitle = "I had a Pacemaker and/or Defibrillator placed";
    var ablationCathTitle = "I had an Ablation for Arrhythmia";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()    //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //9. check the title of a header of the page

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //10. validation error message checking

    cy.contains("Do you get chest pain at REST?")    //11. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.noPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //12. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //14. validation error message checking

    cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")    //15. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //16. check the visibility of the checkboxes
      .click()    //17. choose the necessary value
      .get(activityPage.noPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //16. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //18. validation error message checking

    cy.contains("Have you had a stress test?");    //19. check the title of a header of the section
    cy.get(activityPage.yesStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the checkboxes
      .click()    //21. choose the necessary value
      .get(activityPage.noStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //22. validation error message checking

    cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");    //23. check the title of a header of the section
    cy.get(activityPage.yesCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //24. check the visibility of the checkboxes
      .click()    //25. choose the necessary value
      .get(activityPage.noCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "No");    //24. check the visibility of the checkboxes
    cy.get(activityPage.nextBtn)
      .click()    //26. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //27. check the title of a header of the page

    cy.contains("How many stress tests have you had?");    //28. check the title of a header of the section
    cy.get(activityPage.stressTestsQtySelect)
      .should("be.visible")
      .and("contain", selectorText);    //29. check the visibility of the selector's content
    for (var i = 0; i < stressTestsQtyValues.length; i++) {
      cy.get(activityPage.stressTestsQtySelect)
        .select(stressTestsQtyValues[i])
        .should("be.visible");
    }    //29. check the visibility of the selector's content
    cy.get(activityPage.stressTestsQtySelect)
      .select("2");    //30. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //31. validation error message checking

    cy.contains("Approximately when was your most recent stress test?");    //32. check the title of a header of the section
    cy.get(activityPage.stressTestsDateInput)
      .should("be.visible")
      .type("02281984")    //33. input the necessary date

      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //34. validation error message checking

    cy.contains("Was your most recent stress test normal?");    //35. check the title of a header of the section
    cy.get(activityPage.yesNormalTest)
      .should("be.visible")
      .and("have.text", "Yes")    //36. check the visibility of the checkboxes
      .click()    //37. choose the necessary value
      .get(activityPage.noNormalTest)
      .should("be.visible")
      .and("have.text", "No")    //36. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()    //38. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //39. check the title of a header of the page

    cy.contains("How many Cardiac Catheterizations have you had?");    //40. check the title of a header of the section
    cy.get(activityPage.catheterizationQtySelect)
      .should("be.visible")
      .and("contain", selectorText);    //41. check the visibility of the selector's content
    for (var i = 0; i < catheterizationQtyValues.length; i++) {
      cy.get(activityPage.catheterizationQtySelect)
        .select(catheterizationQtyValues[i])
        .should("be.visible");
    }    //41. check the visibility of the selector's content
    cy.get(activityPage.catheterizationQtySelect)
      .select("1");    //42. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //43. validation error message checking

    cy.contains("Approximately when was your most recent Cardiac Catheterization?");    //44. check the title of a header of the section
    cy.get(activityPage.catheterizationDateInput)
      .should("be.visible")
      .type("02281984");    //45. input the necessary date

    cy.contains("Which procedure was performed during your most recent Cardiac Catheterization?");    //46. check the title of a header of the section
    cy.get(activityPage.angioplastyStentCathCheckBox)
      .should("be.visible")
      .and("have.text", angioplastyStentCathTitle)    //47. check the visibility of the checkboxes
      .click()    //48. choose the necessary value
      .get(activityPage.angioplastyNoStentCathCheckBox)
      .should("be.visible")
      .and("have.text", angioplastyNoStentCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.bypassCathCheckBox)
      .should("be.visible")
      .and("have.text", bypassCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.pacemakerCathCheckBox)
      .should("be.visible")
      .and("have.text", pacemakerCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.ablationCathCheckBox)
      .should("be.visible")
      .and("have.text", ablationCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()    //49. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //50. check the title of a header of the page

  });

  it("Should check the activity.0 page elements - Short Of Breath Positive Answers scenario ", () => {

    /*
    1. navigate to the "activity.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. validation error message checking
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    10. validation error message checking
    11. check the title of a header of the section
    12. check the visibility of the checkboxes
    13. choose the necessary value
    14. validation error message checking
    15. check the title of a header of the section
    16. check the visibility of the checkboxes
    17. choose the necessary value
    18. validation error message checking
    19. check the title of a header of the section
    20. check the visibility of the checkboxes
    21. choose the necessary value
    22. validation error message checking
    23. check the title of a header of the section
    24. check the visibility of the checkboxes
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of a header of the page
    28. check the title of a header of the section
    29. check the visibility of the selector's content
    30. choose the necessary value
    31. validation error message checking
    32. check the title of a header of the section
    33. input the necessary date
    34. validation error message checking
    35. check the title of a header of the section
    36. check the visibility of the checkboxes
    37. choose the necessary value
    38. navigate to the next page
    39. check the title of a header of the page
    40. check the title of a header of the section
    41. check the visibility of the selector's content
    42. choose the necessary value
    43. validation error message checking
    44. check the title of a header of the section
    45. input the necessary date
    46. check the title of a header of the section
    47. check the visibility of the checkboxes
    48. choose the necessary value
    49. navigate to the next page
    50. check the title of a header of the page
    */

    var strenuousActivityTitle =
      "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    var selectorText = "Select One";
    var stressTestsQtyValues = ["1", "2", "3", "4", "5"];
    var catheterizationQtyValues = ["1", "2", "3", "4", "5"];
    var angioplastyStentCathTitle = "I had a Ballon Angioplasty with Stent";
    var angioplastyNoStentCathTitle = "I had a Ballon Angioplasty, NO Stent";
    var bypassCathTitle = "I had Bypass Surgery";
    var pacemakerCathTitle = "I had a Pacemaker and/or Defibrillator placed";
    var ablationCathTitle = "I had an Ablation for Arrhythmia";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()    //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //9. check the title of a header of the page

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //10. validation error message checking

    cy.contains("Do you get chest pain at REST?")    //11. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.noPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //12. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //14. validation error message checking

    cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")    //15. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //16. check the visibility of the checkboxes
      .click()    //17. choose the necessary value
      .get(activityPage.noPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //16. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //18. validation error message checking

    cy.contains("Have you had a stress test?");    //19. check the title of a header of the section
    cy.get(activityPage.yesStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the checkboxes
      .click()    //21. choose the necessary value
      .get(activityPage.noStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //22. validation error message checking

    cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");    //23. check the title of a header of the section
    cy.get(activityPage.yesCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //24. check the visibility of the checkboxes
      .click()    //25. choose the necessary value
      .get(activityPage.noCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "No");    //24. check the visibility of the checkboxes
    cy.get(activityPage.nextBtn)
      .click()    //26. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //27. check the title of a header of the page

    cy.contains("How many stress tests have you had?");    //28. check the title of a header of the section
    cy.get(activityPage.stressTestsQtySelect)
      .should("be.visible")
      .and("contain", selectorText);    //29. check the visibility of the selector's content
    for (var i = 0; i < stressTestsQtyValues.length; i++) {
      cy.get(activityPage.stressTestsQtySelect)
        .select(stressTestsQtyValues[i])
        .should("be.visible");
    }    //29. check the visibility of the selector's content
    cy.get(activityPage.stressTestsQtySelect)
      .select("2");    //30. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //31. validation error message checking

    cy.contains("Approximately when was your most recent stress test?");    //32. check the title of a header of the section
    cy.get(activityPage.stressTestsDateInput)
      .should("be.visible")
      .type("02281984")    //33. input the necessary date

      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //34. validation error message checking

    cy.contains("Was your most recent stress test normal?");    //35. check the title of a header of the section
    cy.get(activityPage.yesNormalTest)
      .should("be.visible")
      .and("have.text", "Yes")    //36. check the visibility of the checkboxes
      .click()    //37. choose the necessary value
      .get(activityPage.noNormalTest)
      .should("be.visible")
      .and("have.text", "No")    //36. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()    //38. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");    //39. check the title of a header of the page

    cy.contains("How many Cardiac Catheterizations have you had?");    //40. check the title of a header of the section
    cy.get(activityPage.catheterizationQtySelect)
      .should("be.visible")
      .and("contain", selectorText);    //41. check the visibility of the selector's content
    for (var i = 0; i < catheterizationQtyValues.length; i++) {
      cy.get(activityPage.catheterizationQtySelect)
        .select(catheterizationQtyValues[i])
        .should("be.visible");
    };    //41. check the visibility of the selector's content
    cy.get(activityPage.catheterizationQtySelect)
      .select("1");    //42. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //43. validation error message checking

    cy.contains("Approximately when was your most recent Cardiac Catheterization?");    //44. check the title of a header of the section
    cy.get(activityPage.catheterizationDateInput)
      .should("be.visible")
      .type("02281984");    //45. input the necessary date

    cy.contains("Which procedure was performed during your most recent Cardiac Catheterization?");    //46. check the title of a header of the section
    cy.get(activityPage.angioplastyStentCathCheckBox)
      .should("be.visible")
      .and("have.text", angioplastyStentCathTitle)    //47. check the visibility of the checkboxes
      .click()    //48. choose the necessary value
      .get(activityPage.angioplastyNoStentCathCheckBox)
      .should("be.visible")
      .and("have.text", angioplastyNoStentCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.bypassCathCheckBox)
      .should("be.visible")
      .and("have.text", bypassCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.pacemakerCathCheckBox)
      .should("be.visible")
      .and("have.text", pacemakerCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.ablationCathCheckBox)
      .should("be.visible")
      .and("have.text", ablationCathTitle)    //47. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()    //49. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //50. check the title of a header of the page

  });

  it("Should check the activity.0 page elements - Wheelchair Bound scenario ", () => {

    /*
    1. navigate to the "activity.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. validation error message checking
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    */

    var strenuousActivityTitle =
      "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()    //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //9. check the title of a header of the page

  });

  it("Should check the activity.0 page elements - Unable scenario ", () => {

    /*
    1. navigate to the "activity.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. validation error message checking
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    */

    var strenuousActivityTitle =
      "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle =
      "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle =
      "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle =
      "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle =
      "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle =
      "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")    //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please select ONE of the following:");    //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)    //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(activityPage.nextBtn)
      .click()    //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");    //9. check the title of a header of the page

  });

  it("Should check the waitlist-inquiry.4.1 page elements - Chest Surgery scenario ", () => {

    /*
    1. navigate to the "waitlist-inquiry.4.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the visibility of the checkboxes
    8. navigate to the next page
    9. check the title of a header of the page
    10. choose the body region
    11. check the visibility of the body region's name
    12. reject the body region
    13. rotate the mannequin
    14. choose the body region
    15. navigate to the next page
    16. check the title of a header of the page
    17. check the visibility of the checkboxes
    18. choose the operated body part
    19. navigate to the next page
    20. check the title of a header of the page
    21. check the visibility of the checkboxes
    22. choose the surgery type
    23. choose the surgery type
    24. navigate to the next page
    25. check the title of a header of the page
    */

    var breastChestSurgery = "Breast";
    var wallChestSurgery = "Chest Wall";
    var clavicleChestSurgery = "Clavicle (Collarbone)";
    var heartChestSurgery = "Heart";
    var lungsChestSurgery = "Lungs";
    var ribsChestSurgery = "Ribs";

    var augumentationBrestSurgeryTitle = "Augmentation";
    var leftBiopsyBrestSurgeryTitle = "Biopsy, Left Breast";
    var rightBiopsyBrestSurgeryTitle = "Biopsy, Right Breast";
    var reconstructionBrestSurgeryTitle = "Breast Reconstruction";
    var reductionBrestSurgeryTitle = "Breast Reduction";
    var pectusBrestSurgeryTitle = "Corrective Surgery for Pectus Excavatum";
    var leftLumpectomyBrestSurgeryTitle = "Lumpectomy, Left";
    var rightLumpectomyBrestSurgeryTitle = "Lumpectomy, Right";
    var leftMastectomyBrestSurgeryTitle = "Mastectomy, Left";
    var rightMastectomyBrestSurgeryTitle = "Mastectomy, Right";
    var otherBrestSurgeryTitle = "Other";

    cy.visit("/waitlist-inquiry.4.1")    //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains("Have you had Surgery in the past?")    //2. check the title of the dialog
      .get(waitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(waitlistInquiry.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(waitlistInquiry.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //4. validation error message checking

    cy.get(waitlistInquiry.yesSurgeryRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the checkboxes
      .click()    //6. choose the necessary value 
      .get(waitlistInquiry.noSurgeryRadioBtn)
      .should("be.visible")
      .and("have.text", "No")    //7. check the visibility of the checkboxes
    cy.get(waitlistInquiry.nextBtn)
      .click();    //8. navigate to the next page 

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all regions of the body where you have had Surgery:");    //9. check the title of a header of the page

    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Neck");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.chesFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Chest");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.chesFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Abdomen");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Pelvis");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.rotateButton)
      .should("be.visible")
      .click();    //13. rotate the mannequin

    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Cervical Spine");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.backBackRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Back");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.backBackRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Buttock");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity");    //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(waitlistInquiry.rotateButton)
      .should("be.visible")
      .click();    //13. rotate the mannequin 

    cy.get(waitlistInquiry.chesFrontRegion)
      .click()    //14. choose the body region
      .get(waitlistInquiry.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click();    //15. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please check all parts of your Chest listed below where you have had surgery:");    //16. check the title of a header of the page

    cy.get(waitlistInquiry.breastChestCheckBox)
      .should("be.visible")
      .and("have.text", breastChestSurgery)    //17. check the visibility of the checkboxes
      .click()    //18. choose the operated body part
      .get(waitlistInquiry.wallChestCheckBox)
      .should("be.visible")
      .and("have.text", wallChestSurgery)    //17. check the visibility of the checkboxes
      .get(waitlistInquiry.clavicleChestCheckBox)
      .should("be.visible")
      .and("have.text", clavicleChestSurgery)    //17. check the visibility of the checkboxes
      .get(waitlistInquiry.heartChestCheckBox)
      .should("be.visible")
      .and("have.text", heartChestSurgery)    //17. check the visibility of the checkboxes
      .get(waitlistInquiry.lungsChestCheckBox)
      .should("be.visible")
      .and("have.text", lungsChestSurgery)    //17. check the visibility of the checkboxes
      .get(waitlistInquiry.ribsChestCheckBox)
      .should("be.visible")
      .and("have.text", ribsChestSurgery);    //17. check the visibility of the checkboxes

    cy.get(waitlistInquiry.nextBtn)
      .click();    //19. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all surgical procedures performed on your Breast");    //20. check the title of a header of the page

    cy.get(waitlistInquiry.augumentationBrestSurgery)
      .should("be.visible")
      .and("have.text", augumentationBrestSurgeryTitle)    //21. check the visibility of the checkboxes
      .click()    //22. choose the surgery type

      .get(waitlistInquiry.leftBiopsyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftBiopsyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(waitlistInquiry.rightBiopsyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightBiopsyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(waitlistInquiry.reconstructionBrestSurgery)
      .should("be.visible")
      .and("have.text", reconstructionBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(waitlistInquiry.reductionBrestSurgery)
      .should("be.visible")
      .and("have.text", reductionBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(waitlistInquiry.pectusBrestSurgery)
      .should("be.visible")
      .and("have.text", pectusBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(waitlistInquiry.leftLumpectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftLumpectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(waitlistInquiry.rightLumpectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightLumpectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(waitlistInquiry.leftMastectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftMastectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(waitlistInquiry.rightMastectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightMastectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(waitlistInquiry.otherBrestSurgery)
      .should("be.visible")
      .and("have.text", otherBrestSurgeryTitle)    //21. check the visibility of the checkboxes
      .click();    //23. choose the surgery type

    cy.get(waitlistInquiry.nextBtn)
      .click()    //24. navigate to the next page
      .get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Do you have any other medical issues that you have not already identified?");    //25. check the title of a header of the page

  });

  it("Should check the waitlist-inquiry.4.1 page elements - Back Surgery scenario ", () => {

    /*
    1. navigate to the "waitlist-inquiry.4.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of a header of the page
    7. rotate the mannequin
    8. choose the body region
    9. check the visibility of the body region's name
    10. navigate to the next page
    11. check the title of a header of the page
    12. check the visibility of the checkboxes
    13. choose the operated body part
    14. navigate to the next page
    15. check the title of a header of the page
    16. check the visibility of the checkboxes
    17. choose the surgery type
    18. navigate to the next page
    19. check the title of a header of the page
    */

    cy.visit("/waitlist-inquiry.4.1")    //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains("Have you had Surgery in the past?")    //2. check the title of the dialog
      .get(waitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(waitlistInquiry.yesSurgeryRadioBtn)
      .click()    //4. choose the necessary value

    cy.get(waitlistInquiry.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //5. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all regions of the body where you have had Surgery:");    //6. check the title of a header of the page

    cy.get(waitlistInquiry.rotateButton)
      .should("be.visible")
      .click();    //7. rotate the mannequin

    cy.get(waitlistInquiry.backBackRegion)
      .should("be.visible")
      .click();    //8. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Back");    //9. check the visibility of the body region's name

    cy.get(waitlistInquiry.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click();    //10. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all regions of the body where you have had Surgery:");    //11. check the title of a header of the page

    cy.get(waitlistInquiry.glandBackCheckBox)
      .should("be.visible")
      .and("have.text", "Adrenal Gland")    //12. check the visibility of the checkboxes
      .get(waitlistInquiry.flankBackCheckBox)
      .should("be.visible")
      .and("have.text", "Flank")    //12. check the visibility of the checkboxes
      .click()    //13. choose the operated body part
      .get(waitlistInquiry.kidneyBackCheckBox)
      .should("be.visible")
      .and("have.text", "Kidney")    //12. check the visibility of the checkboxes
      .get(waitlistInquiry.scapulaBackCheckBox)
      .should("be.visible")
      .and("have.text", "Scapula (Shoulder Blade)")    //12. check the visibility of the checkboxes
      .get(waitlistInquiry.spineBackCheckBox)
      .should("be.visible")
      .and("have.text", "Spine")    //12. check the visibility of the checkboxes
      .get(waitlistInquiry.nextBtn)
      .click();    //14. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all surgical procedures performed on your Flank");    //15. check the title of a header of the page

    cy.get(waitlistInquiry.lesionFlankSurgery)
      .should("be.visible")
      .and("have.text", "Removal of Lesion")    //16. check the visibility of the checkboxes
      .get(waitlistInquiry.tumorFlankSurgery)
      .should("be.visible")
      .and("have.text", "Tumor Removal")    //16. check the visibility of the checkboxes
      .click();    //17. choose the surgery type

    cy.get(waitlistInquiry.nextBtn)
      .click()    //18. navigate to the next page
      .get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Do you have any other medical issues that you have not already identified?");    //19. check the title of a header of the page

  });

  it("Should check the waitlist-inquiry.4.1 page elements - Had No Surgery scenario ", () => {

    /*
    1. navigate to the "waitlist-inquiry.4.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of a header of the page
    */

    cy.visit("/waitlist-inquiry.4.1")    //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains("Have you had Surgery in the past?")    //2. check the title of the dialog
      .get(waitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(waitlistInquiry.noSurgeryRadioBtn)
      .click();    //4. choose the necessary value

    cy.get(waitlistInquiry.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Do you have any other medical issues that you have not already identified?");    //6. check the title of a header of the page

  });

  it("Should check the other-med-conditions.1 page elements - Yes scenario ", () => {

    /*
    1. navigate to the "other-med-conditions.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    9. validation error message checking
    10. type the description of all other medical issues
    11. navigate to the next page
    12. check the title of a header of the page
    */

    cy.visit("/other-med-conditions.1")    //1. navigate to the "other-med-conditions.1" dialog
      .contains("Do you have any other medical issues that you have not already identified?")    //2. check the title of the dialog
      .get(otherMedConditions.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(otherMedConditions.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(otherMedConditions.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //4. validation error message checking

    cy.get(otherMedConditions.yesOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the checkboxes
      .click()    //6. choose the necessary value 
      .get(otherMedConditions.noOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the checkboxes

    cy.get(otherMedConditions.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(otherMedConditions.headerBar)
      .should("be.visible")
      .and("have.text", "Please describe all other medical issues:");    //8. check the title of a header of the page

    cy.get(otherMedConditions.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(otherMedConditions.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //9. validation error message checking

    cy.get(otherMedConditions.inputOtherMedCond)
      .should("be.visible")
      .type("Other Medical Condition");    //10. type the description of all other medical issues

    cy.get(otherMedConditions.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(otherMedConditions.headerBar)
      .should("be.visible")
      .and("have.text", "Have you ever received treatment or care from one of our affiliated clinics?");    //12. check the title of a header of the page

  });

  it("Should check the other-med-conditions.1 page elements - No scenario ", () => {

    /*
    1. navigate to the "other-med-conditions.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the checkboxes
    5. choose the necessary value
    6. navigate to the next page
    7. check the title of a header of the page
    */

    cy.visit("/other-med-conditions.1")    //1. navigate to the "other-med-conditions.1" dialog
      .contains("Do you have any other medical issues that you have not already identified?")    //2. check the title of the dialog
      .get(otherMedConditions.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(otherMedConditions.yesOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //4. check the visibility of the checkboxes
      .get(otherMedConditions.noOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "No")    //4. check the visibility of the checkboxes
      .click();    //5. choose the necessary value

    cy.get(otherMedConditions.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(otherMedConditions.headerBar)
      .should("be.visible")
      .and("have.text", "Have you ever received treatment or care from one of our affiliated clinics?");    //7. check the title of a header of the page

  });

  it("Should check the med-service.0 page elements - Yes scenario ", () => {

    /*
    1. navigate to the "med-servise.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    */

    cy.visit("/med-service.0")    //1. navigate to the "med-servise.0" dialog
      .contains("Have you ever received treatment or care from one of our affiliated clinics?")    //2. check the title of the dialog
      .get(medService.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(medService.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medService.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //4. validation error message checking

    cy.get(medService.yesOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the checkboxes
      .click()    //6. choose the necessary value 
      .get(medService.noOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the checkboxes

    cy.get(medService.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(medService.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Family's Medical History:");    //8. check the title of a header of the page

  });

  it("Should check the med-service.0 page elements - No scenario ", () => {

    /*
    1. navigate to the "med-servise.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    */

    cy.visit("/med-service.0")    //1. navigate to the "med-servise.0" dialog
      .contains("Have you ever received treatment or care from one of our affiliated clinics?")    //2. check the title of the dialog
      .get(medService.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(medService.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medService.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //4. validation error message checking

    cy.get(medService.yesOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the checkboxes
      .get(medService.noOtherMedCondRadioBtn)
      .should("be.visible")
      .and("have.text", "No")    //5. check the visibility of the checkboxes
      .click();    //6. choose the necessary value 

    cy.get(medService.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(medService.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Family's Medical History:");    //8. check the title of a header of the page

  });

  it("Should check the family-medical-history.0 page elements - Kidney Disease scenario ", () => {

    /*
    1. navigate to the "family-medical-history.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the checkboxes
    11. choose the necessary value
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of the checkboxes
    15. choose the necessary value
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of the checkboxes
    19. choose the necessary value
    20. validation error message checking
    21. check the title of the section
    22. check the visibility of the checkboxes
    23. choose the necessary value
    24. navigate to the next page
    25. check the title of a header of the page
    26. validation error message checking
    27. check the visibility of the checkboxes
    28. choose the necessary value
    29. navigate to the next page
    30. check the title of a header of the page
    */

    cy.visit("/family-medical-history.0")    //1. navigate to the "family-medical-history.0" dialog
      .contains("With regard to your Family's Medical History:")    //2. check the title of the dialog
      .get(familyMedHistory0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Do any of your family members have Kidney Disease?")    //5. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory0.yesKidneyDisease)
      .should("be.visible")
      .and("have.text", "Yes")    //6. check the visibility of the checkboxes
      .click()    //7. choose the necessary value
      .get(familyMedHistory0.noKidneyDisease)
      .should("be.visible")
      .and("have.text", "No");    //6. check the visibility of the checkboxes

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Do any of your family members have Polycystic Kidney Disease (PCKD)?")    //9. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory0.yesPolycystic)
      .should("be.visible")
      .and("have.text", "Yes")    //10. check the visibility of the checkboxes
      .get(familyMedHistory0.noPolycystic)
      .should("be.visible")
      .and("have.text", "No")    //10. check the visibility of the checkboxes
      .click();    //11. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //12. validation error message checking

    cy.contains("Do any of your family members have Kidney Stones?");    //13. check the title of the section
    cy.get(familyMedHistory0.yesKidneyStones)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the checkboxes
      .get(familyMedHistory0.noKidneyStones)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the checkboxes
      .click();    //15. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //16. validation error message checking

    cy.contains("Do any of your family members have Diabetes?");    //17. check the title of the section
    cy.get(familyMedHistory0.yesDiabetes)
      .should("be.visible")
      .and("have.text", "Yes")    //18. check the visibility of the checkboxes
      .get(familyMedHistory0.noDiabetes)
      .should("be.visible")
      .and("have.text", "No")    //18. check the visibility of the checkboxes
      .click();    //19. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //20. validation error message checking

    cy.contains("Do any of your family members have Sickle Cell?");    //21. check the title of the section
    cy.get(familyMedHistory0.yesSickleCell)
      .should("be.visible")
      .and("have.text", "Yes")    //22. check the visibility of the checkboxes
      .get(familyMedHistory0.noSickleCell)
      .should("be.visible")
      .and("have.text", "No")    //22. check the visibility of the checkboxes
      .click();    //23. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .click();    //24. navigate to the next page

    cy.get(familyMedHistory0.headerBar)
      .should("be.visible")
      .and("have.text", "Which members of your family have Kidney Disease?");    //25. check the title of a header of the page

    cy.get(familyMedHistory0.nextBtn)
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //26. validation error message checking

    cy.get(familyMedHistory0.motherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Mother");    //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.fatherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Father");    //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.childFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Child");    //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.siblingFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Sibling");    //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.grandparentFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Grandparent")    //27. check the visibility of the checkboxes
      .click();    //28. choose the necessary value

    cy.get(familyMedHistory0.auntUnkleFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Aunt/Uncle");    //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.cousinFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Cousin");    //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.nextBtn)
      .click();    //29. navigate to the next page

    cy.get(familyMedHistory0.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Family's Medical History:");    //30. check the title of a header of the page

  });

  it("Should check the family-medical-history.0 page elements - No scenario ", () => {

    /*
    1. navigate to the "family-medical-history.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the title of the section
    8. check the visibility of the checkboxes
    9. choose the necessary value
    10. check the title of the section
    11. check the visibility of the checkboxes
    12. choose the necessary value
    13. check the title of the section
    14. check the visibility of the checkboxes
    15. choose the necessary value
    16. check the title of the section
    17. check the visibility of the checkboxes
    18. choose the necessary value
    19. navigate to the next page
    20. check the title of a header of the page
    */

    cy.visit("/family-medical-history.0")    //1. navigate to the "family-medical-history.0" dialog
      .contains("With regard to your Family's Medical History:")    //2. check the title of the dialog
      .get(familyMedHistory0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Do any of your family members have Kidney Disease?")    //4. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory0.yesKidneyDisease)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the checkboxes
      .get(familyMedHistory0.noKidneyDisease)
      .should("be.visible")
      .and("have.text", "No")    //5. check the visibility of the checkboxes
      .click()    //6. choose the necessary value

    cy.contains("Do any of your family members have Polycystic Kidney Disease (PCKD)?")    //7. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory0.yesPolycystic)
      .should("be.visible")
      .and("have.text", "Yes")    //8. check the visibility of the checkboxes
      .get(familyMedHistory0.noPolycystic)
      .should("be.visible")
      .and("have.text", "No")    //8. check the visibility of the checkboxes
      .click();    //9. choose the necessary value

    cy.contains("Do any of your family members have Kidney Stones?");    //10. check the title of the section
    cy.get(familyMedHistory0.yesKidneyStones)
      .should("be.visible")
      .and("have.text", "Yes")    //11. check the visibility of the checkboxes
      .get(familyMedHistory0.noKidneyStones)
      .should("be.visible")
      .and("have.text", "No")    //11. check the visibility of the checkboxes
      .click();    //12. choose the necessary value

    cy.contains("Do any of your family members have Diabetes?");    //13. check the title of the section
    cy.get(familyMedHistory0.yesDiabetes)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the checkboxes
      .get(familyMedHistory0.noDiabetes)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the checkboxes
      .click();    //15. choose the necessary value

    cy.contains("Do any of your family members have Sickle Cell?");    //16. check the title of the section
    cy.get(familyMedHistory0.yesSickleCell)
      .should("be.visible")
      .and("have.text", "Yes")    //17. check the visibility of the checkboxes
      .get(familyMedHistory0.noSickleCell)
      .should("be.visible")
      .and("have.text", "No")    //17. check the visibility of the checkboxes
      .click();    //18. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .click();    //19. navigate to the next page

    cy.get(familyMedHistory0.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Family's Medical History:");    //20. check the title of a header of the page

  });

  it("Should check the family-medical-history.1 page elements - High Blood Pressure scenario ", () => {

    /*
    1. navigate to the "family-medical-history.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the checkboxes
    11. choose the necessary value
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of the checkboxes
    15. choose the necessary value
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of the checkboxes
    19. choose the necessary value
    20. validation error message checking
    21. check the title of the section
    22. check the visibility of the checkboxes
    23. choose the necessary value
    24. validation error message checking
    25. check the title of the section
    26. check the visibility of the checkboxes
    27. choose the necessary value
    28. validation error message checking
    29. check the title of the section
    30. check the visibility of the checkboxes
    31. choose the necessary value
    32. navigate to the next page
    33. check the title of a header of the page
    34. validation error message checking
    35. check the visibility of the checkboxes
    36. choose the necessary value
    37. navigate to the next page
    38. check the title of a header of the page
    */

    cy.visit("/family-medical-history.1")    //1. navigate to the "family-medical-history.1" dialog
      .contains("With regard to your Family's Medical History:")    //2. check the title of the dialog
      .get(familyMedHistory1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Do any of your family members have Cancer?")    //5. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //6. check the visibility of the checkboxes
    cy.get(familyMedHistory1.noCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //6. check the visibility of the checkboxes
      .click();    //7. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Do any of your family members have High Blood Pressure?")    //9. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //10. check the visibility of the checkboxes
      .click()    //11. choose the necessary value
      .get(familyMedHistory1.noBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "No");    //10. check the visibility of the checkboxes

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //12. validation error message checking

    cy.contains("Do any of your family members have Heart Disease?")    //13. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the checkboxes
      .get(familyMedHistory1.noHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the checkboxes
      .click();    //15. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //16. validation error message checking

    cy.contains("Do any of your family members have Lupus?")    //17. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //18. check the visibility of the checkboxes
      .get(familyMedHistory1.noLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //18. check the visibility of the checkboxes
      .click();    //19. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //20. validation error message checking

    cy.contains("Do any of your family members have Blood Clots?");    //21. check the title of the section
    cy.get(familyMedHistory1.yesBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //22. check the visibility of the checkboxes
      .get(familyMedHistory1.noBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //22. check the visibility of the checkboxes
      .click();    //23. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //24. validation error message checking

    cy.contains("Do any of your family members have Mental Illness?");    //25. check the title of the section
    cy.get(familyMedHistory1.yesMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //26. check the visibility of the checkboxes
      .get(familyMedHistory1.noMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //26. check the visibility of the checkboxes
      .click();    //27. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //28. validation error message checking

    cy.contains("Have any of your family members died before the age of 50?");    //29. check the title of the section
    cy.get(familyMedHistory1.yesDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //30. check the visibility of the checkboxes
      .get(familyMedHistory1.noDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //30. check the visibility of the checkboxes
      .click();    //31. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .click();    //32. navigate to the next page

    cy.get(familyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", "Which members of your family have High Blood Pressure?");    //33. check the title of a header of the page

    cy.get(familyMedHistory1.nextBtn)
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //34. validation error message checking

    cy.get(familyMedHistory1.motherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Mother");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.fatherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Father");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.childFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Child");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.siblingFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Sibling");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.grandparentFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Grandparent")    //35. check the visibility of the checkboxes
      .click();    //36. choose the necessary value

    cy.get(familyMedHistory1.auntUnkleFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Aunt/Uncle");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.cousinFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Cousin");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.nextBtn)
      .click();    //37. navigate to the next page

    cy.get(familyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", "What is your blood type:");    //38. check the title of a header of the page

  });

  it("Should check the family-medical-history.1 page elements - No scenario ", () => {

    /*
    1. navigate to the "family-medical-history.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the title of the section
    8. check the visibility of the checkboxes
    9. choose the necessary value
    10. check the title of the section
    11. check the visibility of the checkboxes
    12. choose the necessary value
    13. check the title of the section
    14. check the visibility of the checkboxes
    15. choose the necessary value
    16. check the title of the section
    17. check the visibility of the checkboxes
    18. choose the necessary value
    19. check the title of the section
    20. check the visibility of the checkboxes
    21. choose the necessary value
    22. check the title of the section
    23. check the visibility of the checkboxes
    24. choose the necessary value
    25. navigate to the next page
    26. check the title of a header of the page
    */

    cy.visit("/family-medical-history.1")    //1. navigate to the "family-medical-history.1" dialog
      .contains("With regard to your Family's Medical History:")    //2. check the title of the dialog
      .get(familyMedHistory1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Do any of your family members have Cancer?")    //4. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the checkboxes
    cy.get(familyMedHistory1.noCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //5. check the visibility of the checkboxes
      .click();    //6. choose the necessary value

    cy.contains("Do any of your family members have High Blood Pressure?")    //7. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //8. check the visibility of the checkboxes
      .get(familyMedHistory1.noBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //8. check the visibility of the checkboxes
      .click();    //9. choose the necessary value

    cy.contains("Do any of your family members have Heart Disease?")    //10. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //11. check the visibility of the checkboxes
      .get(familyMedHistory1.noHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //11. check the visibility of the checkboxes
      .click();    //12. choose the necessary value

    cy.contains("Do any of your family members have Lupus?")    //13. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the checkboxes
      .get(familyMedHistory1.noLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the checkboxes
      .click();    //15. choose the necessary value

    cy.contains("Do any of your family members have Blood Clots?");    //16. check the title of the section
    cy.get(familyMedHistory1.yesBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //17. check the visibility of the checkboxes
      .get(familyMedHistory1.noBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //17. check the visibility of the checkboxes
      .click();    //18. choose the necessary value

    cy.contains("Do any of your family members have Mental Illness?");    //19. check the title of the section
    cy.get(familyMedHistory1.yesMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the checkboxes
      .get(familyMedHistory1.noMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the checkboxes
      .click();    //21. choose the necessary value

    cy.contains("Have any of your family members died before the age of 50?");    //22. check the title of the section
    cy.get(familyMedHistory1.yesDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //23. check the visibility of the checkboxes
      .get(familyMedHistory1.noDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //23. check the visibility of the checkboxes
      .click();    //24. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .click();    //25. navigate to the next page

    cy.get(familyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", "What is your blood type:");    //26. check the title of a header of the page

  });

  it("Should check the blood.0 page elements", () => {

    /*
    1. navigate to the "blood.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the title of the section
    8. validation error message checking
    9. check the visibility of the checkboxes
    10. choose the necessary value
    11. navigate to the next page
    12. check the title of a header of the page
    */

    cy.visit("/blood.0")    //1. navigate to the "blood.0" dialog
      .contains("What is your blood type:")    //2. check the title of the dialog
      .get(typeBlood0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(typeBlood0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(typeBlood0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(typeBlood0.aBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "A")    //5. check the visibility of the checkboxes
      .click()    //6. choose the necessary value

      .get(typeBlood0.bBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "B")    //5. check the visibility of the checkboxes

      .get(typeBlood0.abBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "AB")    //5. check the visibility of the checkboxes

      .get(typeBlood0.zeroBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "O")    //5. check the visibility of the checkboxes

      .get(typeBlood0.unknownBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "Unknown");    //5. check the visibility of the checkboxes

    cy.contains("If necessary, would you be willing to accept a blood transfusion?");    //7. check the title of the section

    cy.get(typeBlood0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(typeBlood0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.get(typeBlood0.yesTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //9. check the visibility of the checkboxes
      .click()    //10. choose the necessary value
      .get(typeBlood0.noTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "No");    //9. check the visibility of the checkboxes

    cy.get(typeBlood0.nextBtn)
      .click()    //11. navigate to the next page
      .get(typeBlood0.headerBar)
      .should("be.visible")
      .and("have.text", "Within the previous 12 months, do any of the following situations apply to you?");    //12. check the title of a header of the page

  });

  it("Should check the highriskbehavior.1 page elements", () => {

    /*
    1. navigate to the "highriskbehavior.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the title of the item
    7. open the help modal
    8. check the modal's content
    9. close the help modal
    10. check the visibility of the checkboxes
    11. choose the necessary value
    12. navigate to the next page
    13. check the title of a header of the page
    */

    var dataTargetTitle = "ⓘWhy do I need to answer these questions?";
    var helpModalContent = "×The following list of questions was developed using the Centers for Disease Control’s (CDC) Donor Exclusion Criteria guidelines. The CDC is a United States federal agency under the Department of Health and Human Services. You will be asked the below questions about high risk behavior on multiple occasions during the evaluation process. This is to protect you and to protect your recipient from possible harmful infectious disease that have been known to have been transmitted during the organ donation process.";

    var escortServiceTwoBehaviorDescription = "I have had sexual intercourse with a person known to engage in acts of prostitution";
    var bloodTransfusionBehaviorDescription = "I have received a blood transfusion";
    var hemodialysisBehaviorDescription = "I have received hemodialysis treatment";
    var hrbMaleSexBehaviorDescription = "I am a male who has had sex with other males (MSM)";
    var hrbFemaleSexBehaviorDescription = "I am a female who has sex with a man with a history of having sex with other males (MSM)";
    var hivSexBehaviorDescription = "I have had sexual intercourse with a person known to have HIV, HBV, and/or HCV infection(s)";
    var escortServiceOneBehaviorDescription = "I have engaged in acts of prostitution";
    var escortServiceThreeBehaviorDescription = "I have had sexual intercourse with an intravenous illicit drug user";
    var illicitDrugInjectBehaviorDescription = "I have injected illicit drugs";
    var prisonBehaviorDescription = "I have been incarcerated for 72 hours or longer";
    var diagnoseBehaviorDescription = "I have been diagnosed with or treated for syphilis, gonorrhea, chlamydia, or genital ulcers";
    var notApplyBehaviorDescription = "None of these situations apply to me";

    var addInfoRequestHeadind = "We may need to request additional information such as laboratory or other diagnostic test from your other health care providers. Please provide us with the following information (OPTIONAL)";

    cy.visit("/highriskbehavior.1")    //1. navigate to the "highriskbehavior.1" dialog
      .contains("Within the previous 12 months, do any of the following situations apply to you?")    //2. check the title of the dialog
      .get(highriskbehavior1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(highriskbehavior1.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(highriskbehavior1.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //4. validation error message checking

    cy.contains("Please check any that apply:");    //5. check the title of the section

    cy.get(highriskbehavior1.dataTargetRiskBehavior)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", dataTargetTitle)    //6. check the title of the item
      .click();    //7. open the help modal

    cy.get(highriskbehavior1.helpModal)
      .should("be.visible")
      .and("have.text", helpModalContent)    //8. check the modal's content
      .click("topLeft");    //9. close the help modal

    cy.get(highriskbehavior1.escortServiceTwoBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", escortServiceTwoBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.bloodTransfusionBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", bloodTransfusionBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.hemodialysisBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hemodialysisBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.hrbMaleSexBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hrbMaleSexBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.hrbFemaleSexBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hrbFemaleSexBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.hivSexBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hivSexBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.escortServiceOneBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", escortServiceOneBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.escortServiceThreeBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", escortServiceThreeBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.illicitDrugInjectBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", illicitDrugInjectBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.prisonBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", prisonBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.diagnoseBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", diagnoseBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.notApplyBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", notApplyBehaviorDescription)    //10. check the visibility of the checkboxes
      .click();    //11. choose the necessary value

    cy.get(highriskbehavior1.nextBtn)
      .scrollIntoView()
      .click();    //12. navigate to the next page

    cy.get(highriskbehavior1.headerBar)
      .should("be.visible")
      .and("have.text", addInfoRequestHeadind);    //13. check the title of a header of the page

  });

  it("Should check the request-for-additional-info.1 page elements", () => {

    /*
    1. navigate to the "request-for-additional-info.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the item
    6. type the requested information 
    7. check the title of the section
    8. check the visibility of the item
    9. type the requested information 
    10. check the title of the section
    11. check the visibility of the item
    12. type the requested information 
    13. check the title of the section
    14. check the visibility of the item
    15. check the visibility of the item
    16. check the visibility of the selector's content
    17. choose the necessary value
    18. navigate to the next page
    19. check the title of a header of the page
    */

    var selectorText = "Select One";
    var stateNames = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY"
    ];

    cy.visit("/request-for-additional-info.1")    //1. navigate to the "request-for-additional-info.1" dialog
      .contains("We may need to request additional information such as laboratory or other diagnostic test from your other health care providers. Please provide us with the following information (OPTIONAL)")    //2. check the title of the dialog
      .get(requestForAdditionalInfo1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Name:");    //4. check the title of the section
    cy.get(requestForAdditionalInfo1.nameAddInfoInputField)    //5. check the visibility of the item
      .should("be.visible")
      .type("Donor Name");    //6. type the requested information 

    cy.contains("Phone Number:");    //7. check the title of the section
    cy.get(requestForAdditionalInfo1.phoneAddInfoInputField)    //8. check the visibility of the item
      .should("be.visible")
      .type("5555555555");    //9. type the requested information 

    cy.contains("City:");    //10. check the title of the section
    cy.get(requestForAdditionalInfo1.cityAddInfoInputField)    //11. check the visibility of the item
      .should("be.visible")
      .type("Racoon City");    //12. type the requested information 

    cy.contains("State:");    //13. check the title of the section
    cy.get(requestForAdditionalInfo1.stateSelectAddInfo)    //14. check the visibility of the item
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < stateNames.length; i++) {
      cy.get(requestForAdditionalInfo1.stateSelectAddInfo)    //15. check the visibility of the item
        .select(stateNames[i])
        .should("be.visible")
    };    //16. check the visibility of the selector's content
    cy.get(requestForAdditionalInfo1.stateSelectAddInfo)
      .select("WA");    //17. choose the necessary value

    cy.get(requestForAdditionalInfo1.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //18. navigate to the next page

    cy.get(requestForAdditionalInfo1.headerBar)
      .should("be.visible")
      .and("have.text", "Please select which of the options below most closely matches your highest level of education.");    //19. check the title of a header of the page

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

  it("Should check the blood.0 page elements", () => {

    /*
    1. navigate to the "blood.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the title of the section
    8. validation error message checking
    9. check the visibility of the checkboxes
    10. choose the necessary value
    11. navigate to the next page
    12. check the title of a header of the page
    */

    cy.visit("/blood.0")    //1. navigate to the "blood.0" dialog
      .contains("What is your blood type:")    //2. check the title of the dialog
      .get(typeBlood0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(typeBlood0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(typeBlood0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(typeBlood0.aBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "A")    //5. check the visibility of the checkboxes
      .click()    //6. choose the necessary value

      .get(typeBlood0.bBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "B")    //5. check the visibility of the checkboxes

      .get(typeBlood0.abBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "AB")    //5. check the visibility of the checkboxes

      .get(typeBlood0.zeroBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "O")    //5. check the visibility of the checkboxes

      .get(typeBlood0.unknownBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "Unknown");    //5. check the visibility of the checkboxes

    cy.contains("If necessary, would you be willing to accept a blood transfusion?");    //7. check the title of the section

    cy.get(typeBlood0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(typeBlood0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.get(typeBlood0.yesTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //9. check the visibility of the checkboxes
      .click()    //10. choose the necessary value
      .get(typeBlood0.noTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "No");    //9. check the visibility of the checkboxes

    cy.get(typeBlood0.nextBtn)
      .click()    //11. navigate to the next page
      .get(typeBlood0.headerBar)
      .should("be.visible")
      .and("have.text", "Within the previous 12 months, do any of the following situations apply to you?");    //12. check the title of a header of the page

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

  it("Should check the living-arrangement.0 page elements", () => {

    /*
    1. navigate to the "living-arrangement.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the radio buttons
    7. choose the necessary value
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the radio buttons
    11. choose the necessary value
    12. navigate to the next page
    13. check the title of a header of the page
    */

    var rentHouseholdTitle = "I rent my home/apartment";
    var ownHouseholdTitle = "I own my home/apartment";
    var temporaryHouseholdTitle = "I live in temporary housing (college dorm, friend's house, residential hotel, etc.)";
    var homelessHouseholdTitle = "I am currently homeless";
    var militaryHouseholdTitle = "I am currently deployed in the military";
    var assistedFacilityHouseholdTitle = "I live in an assisted living facility";
    var otherHouseholdTitle = "Other";

    var aloneTitle = "I live alone";
    var significantTitle = "I live with my spouse or significant other";
    var parentsTitle = "I live with my parents";
    var otherFamilyTitle = "I live with other family";
    var roommateTitle = "I live with roommate(s)";
    var otherTitle = "Other";

    cy.visit("/living-arrangement.0")    //1. navigate to the "living-arrangement.0" dialog
      .contains("With regard to your living arrangment:")    //2. check the title of the dialog
      .get(livingArrangement0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(livingArrangement0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(livingArrangement0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Please describe your household:")    //5. check the title of the section
      .scrollIntoView();
    cy.get(livingArrangement0.rentRadioBtn)
      .should("be.visible")
      .and("have.text", rentHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.ownRadioBtn)
      .should("be.visible")
      .and("have.text", ownHouseholdTitle)    //6. check the visibility of the radio buttons
      .click()    //7. choose the necessary value

      .get(livingArrangement0.temporaryRadioBtn)
      .should("be.visible")
      .and("have.text", temporaryHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.homelessRadioBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", homelessHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.militaryRadioBtn)
      .should("be.visible")
      .and("have.text", militaryHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.assistedFacilityRadioBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", assistedFacilityHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.otherRadioBtn)
      .should("be.visible")
      .and("have.text", otherHouseholdTitle);    //6. check the visibility of the radio buttons

    cy.get(livingArrangement0.nextBtn)
      .scrollIntoView()
      .click()
      .get(livingArrangement0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Who do you live with?");    //9. check the title of the section
    cy.get(livingArrangement0.aloneRadioBtn)
      .should("be.visible")
      .and("have.text", aloneTitle)    //10. check the visibility of the radio buttons
      .click()    //11. choose the necessary value

      .get(livingArrangement0.significantRadioBtn)
      .should("be.visible")
      .and("have.text", significantTitle)    //10. check the visibility of the radio buttons

      .get(livingArrangement0.parentsRadioBtn)
      .should("be.visible")
      .and("have.text", parentsTitle)    //10. check the visibility of the radio buttons

      .get(livingArrangement0.otherFamilyRadioBtn)
      .should("be.visible")
      .and("have.text", otherFamilyTitle)    //10. check the visibility of the radio buttons

      .get(livingArrangement0.roommateRadioBtn)
      .should("be.visible")
      .and("have.text", roommateTitle)    //10. check the visibility of the radio buttons

      .get(livingArrangement0.otherRoommateRadioBtn)
      .should("be.visible")
      .and("have.text", otherTitle);    //10. check the visibility of the radio buttons

    cy.get(livingArrangement0.nextBtn)
      .click();    //12. navigate to the next page

    cy.get(livingArrangement0.headerBar)
      .should("be.visible")
      .and("have.text", "Are you currently covered under a Medical Insurance plan?");    //13. check the title of a header of the page

  });

  it("Should check the insurance.0 page elements - Yes scenario", () => {

    /*
    1. navigate to the "insurance.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the radio buttons
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    9. check the title of the section
    10. type in a required information
    11. navigate to the next page
    12. check the title of a header of the page
    */

    cy.visit("/insurance.0")    //1. navigate to the "insurance.0" dialog
      .contains("Are you currently covered under a Medical Insurance plan?")    //2. check the title of the dialog
      .get(insurance0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(insurance0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(insurance0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(insurance0.yesInsurancePlan)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio buttons
      .click()    //6. choose the necessary value
      .get(insurance0.noInsurancePlan)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the radio buttons

    cy.get(insurance0.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(insurance0.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Medical Insurance plan: (Optional)");    //8. check the title of a header of the page

    cy.contains("Who is your Medical Insurance Provider?");    //9. check the title of the section
    cy.get(insurance0.providerInsuranceInput)
      .should("be.visible")
      .type("Medical Insurance Provider Name");    //10. type in a required information

    cy.contains("Group #");    //9. check the title of the section
    cy.get(insurance0.groupInsuranceInput)
      .should("be.visible")
      .type("321654987");    //10. type in a required information

    cy.contains("Member ID #");    //9. check the title of the section
    cy.get(insurance0.memberIDInsuranceInput)
      .should("be.visible")
      .type("Member #1");    //10. type in a required information

    cy.contains("Customer or Member Service Telephone Number:");    //9. check the title of the section
    cy.get(insurance0.phoneNumberInsuranceInput)
      .should("be.visible")
      .type("555555132");    //10. type in a required information

    cy.get(insurance0.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(insurance0.headerBar)
      .should("be.visible")
      .and("have.text", "What is your current marital status?");    //12. check the title of a header of the page

  });

  it("Should check the insurance.0 page elements - No scenario", () => {

    /*
    1. navigate to the "insurance.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the radio buttons
    5. choose the necessary value
    6. navigate to the next page
    7. check the title of a header of the page
    */

    cy.visit("/insurance.0")    //1. navigate to the "insurance.0" dialog
      .contains("Are you currently covered under a Medical Insurance plan?")    //2. check the title of the dialog
      .get(insurance0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(insurance0.noInsurancePlan)
      .should("have.text", "No")    //4. check the visibility of the radio buttons
      .click();    //5. choose the necessary value

    cy.get(insurance0.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(insurance0.headerBar)
      .should("be.visible")
      .and("have.text", "What is your current marital status?");    //7. check the title of a header of the page

  });

  it("Should check the maritalstatus.0 page elements - Married scenario", () => {

    /*
    1. navigate to the "maritalstatus.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the selector
    6. check the visibility of the selector's conten
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of a header of the page
    */

    var maritalStatusValues = [
      "Single",
      "Married",
      "Domestic Partnership",
      "Divorced",
      "Widowed"
    ];

    cy.visit("/maritalstatus.0")    //1. navigate to the "maritalstatus.0" dialog
      .contains("What is your current marital status?")    //2. check the title of the dialog
      .get(maritalStatus0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(maritalStatus0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(maritalStatus0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(maritalStatus0.maritalStatusSelector)
      .should("be.visible")
      .and("contain", "Select One")    //5. check the visibility of the selector
    for (var i = 0; i < maritalStatusValues.length; i++) {
      cy.get(maritalStatus0.maritalStatusSelector)
        .select(maritalStatusValues[i])
        .should("be.visible")
    };    //6. check the visibility of the selector's content
    cy.get(maritalStatus0.maritalStatusSelector)
      .select("Married");    //7. choose the necessary value

    cy.get(maritalStatus0.nextBtn)
      .click();    //8. navigate to the next page

    cy.get(maritalStatus0.headerBar)
      .should("be.visible")
      .and("have.text", "Do you have children that you currently care for?");    //9. check the title of a header of the page

  });

  it("Should check the offspring.0 page elements - Has Children scenario", () => {

    /*
    1. navigate to the "offspring.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of radio buttons
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    9. validation error message checking
    10. check the visibility of the selector
    11. check the visibility of the selector's content
    12. choose the necessary value
    13. navigate to the next page
    14. check the title of a header of the page
    15. validation error message checking
    16. check the title of the section
    17. check the visibility of the selector
    18. check the visibility of the selector's content
    19. choose the necessary value
    20. validation error message checking
    21. check the title of the section
    22. check the visibility of the selector
    23. check the visibility of the selector's content
    24. choose the necessary value
    25. navigate to the next page
    26. check the title of a header of the page
    */

    var howManyChildrenValues = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ];

    var childrenYearsValues = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50"
    ];

    cy.visit("/offspring.0")    //1. navigate to the "offspring.0" dialog
      .contains("Do you have children that you currently care for?")    //2. check the title of the dialog
      .get(offspring0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(offspring0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(offspring0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(offspring0.yesHasChildrenRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of radio buttons
      .click()    //6. choose the necessary value
      .get(offspring0.noHasChildrenRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of radio buttons

    cy.get(offspring0.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(offspring0.headerBar)
      .should("be.visible")
      .and("have.text", "How many children do you care for currently?");    //8. check the title of a header of the page

    cy.get(offspring0.nextBtn)
      .click()
      .get(offspring0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //9. validation error message checking

    cy.get(offspring0.howManyChildrenSelector)
      .should("be.visible")
      .and("contain", "Select One")    //10. check the visibility of the selector
    for (var i = 0; i < howManyChildrenValues.length; i++) {
      cy.get(offspring0.howManyChildrenSelector)
        .select(howManyChildrenValues[i])
        .should("be.visible")
    };    //11. check the visibility of the selector's content
    cy.get(offspring0.howManyChildrenSelector)
      .select("2");    //12. choose the necessary value

    cy.get(offspring0.nextBtn)
      .click();    //13. navigate to the next page

    cy.get(offspring0.headerBar)
      .should("be.visible")
      .and("have.text", "How old are your children?");    //14. check the title of a header of the page

    cy.get(offspring0.nextBtn)
      .click()
      .get(offspring0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //15. validation error message checking

    cy.contains("Age of Youngest Child:");    //16. check the title of the section
    cy.get(offspring0.youngestChildYearsSelector)
      .should("be.visible")
      .and("contain", "Select One")    //17. check the visibility of the selector
    for (var i = 0; i < childrenYearsValues.length; i++) {
      cy.get(offspring0.youngestChildYearsSelector)
        .select(childrenYearsValues[i])
        .should("be.visible")
    };    //18. check the visibility of the selector's content
    cy.get(offspring0.youngestChildYearsSelector)
      .select("5");    //19. choose the necessary value

    cy.get(offspring0.nextBtn)
      .click()
      .get(offspring0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //20. validation error message checking

    cy.contains("Age of Oldest Child:");    //21. check the title of the section
    cy.get(offspring0.oldestestChildYearsSelector)
      .should("be.visible")
      .and("contain", "Select One")    //22. check the visibility of the selector
    for (var i = 0; i < childrenYearsValues.length; i++) {
      cy.get(offspring0.oldestestChildYearsSelector)
        .select(childrenYearsValues[i])
        .should("be.visible")
    };    //23. check the visibility of the selector's content
    cy.get(offspring0.oldestestChildYearsSelector)
      .select("8");    //24. choose the necessary value

    cy.get(offspring0.nextBtn)
      .click();    //25. navigate to the next page

    cy.get(offspring0.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Kidney Donation:");    //26. check the title of a header of the page

  });

  it("Should check the offspring.0 page elements - Has No Children scenario", () => {

    /*
    1. navigate to the "offspring.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of a header of the page
    */

    cy.visit("/offspring.0")    //1. navigate to the "offspring.0" dialog
      .contains("Do you have children that you currently care for?")    //2. check the title of the dialog
      .get(offspring0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(offspring0.noHasChildrenRadioBtn)
      .should("have.text", "No")
      .click();    //4. choose the necessary value

    cy.get(offspring0.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(offspring0.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Kidney Donation:");    //6. check the title of a header of the page

  });

  it("Should check the motivation.1 page elements - Positive Answers scenario", () => {

    /*
    1. navigate to the "motivation.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the item
    7. type in a required information
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of radio buttons
    11. choose the necessary value
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of radio buttons
    15. choose the necessary value
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of radio buttons
    19. choose the necessary value
    20. navigate to the next page
    21. check the title of a header of the page
    */

    var motivationHeadingOne = "Why are you interested in donation?";
    var motivationHeadingTwo = "Which sentence most closely describes how you feel about donating?";

    var gatheringHowYouFeelQuestion = "I am still just gathering information; I still have a lot of questions.";
    var doubtsHowYouFeelQuestion = "I think I'm ready to start the evaluation, but I am not certain donation is right for me yet.";
    var motivatedHowYouFeelQuestion = "I am highly motivated to be a donor for my intended recipient, and I would like to get the process started soon.";

    var motivationHeadingThree = "Can we disclose your willingness to donate a kidney to the intended recipient?";
    var motivationHeadingFour = "Have you previously applied to become a living donor at our center or any other transplant center?";

    cy.visit("/motivation.1")    //1. navigate to the "motivation.1" dialog
      .contains("With regard to your Kidney Donation:")    //2. check the title of the dialog
      .get(motivation1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(motivation1.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(motivation1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains(motivationHeadingOne)    //5. check the title of the section
      .scrollIntoView();
    cy.get(motivation1.whyInterestedTextArea)
      .should("be.visible")    //6. check the visibility of the item
      .type("Highly Motivated Donor");    //7. type in a required information

    cy.get(motivation1.nextBtn)
      .scrollIntoView()
      .click()
      .get(motivation1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains(motivationHeadingTwo);    //9. check the title of the section
    cy.get(motivation1.gatheringInfoRadioBtn)    //10. check the visibility of radio buttons
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", gatheringHowYouFeelQuestion)
      .get(motivation1.inDoubtsRadioBtn)    //10. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", doubtsHowYouFeelQuestion)
      .get(motivation1.motivatedRadioBtn)    //10. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", motivatedHowYouFeelQuestion)
      .click();    //11. choose the necessary value

    cy.get(motivation1.nextBtn)
      .scrollIntoView()
      .click()
      .get(motivation1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //12. validation error message checking

    cy.contains(motivationHeadingThree)    //13. check the title of the section
      .scrollIntoView();
    cy.get(motivation1.yesDiscloseRadioBtn)    //14. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //15. choose the necessary value
      .get(motivation1.noDiscloseRadioBtn)    //14. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "No");

    cy.get(motivation1.nextBtn)
      .scrollIntoView()
      .click()
      .get(motivation1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //16. validation error message checking

    cy.contains(motivationHeadingFour)    //17. check the title of the section
      .scrollIntoView();
    cy.get(motivation1.yesPreviouslyApplied)    //18. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //19. choose the necessary value
      .get(motivation1.noPreviouslyApplied)    //18. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "No");

    cy.get(motivation1.nextBtn)
      .scrollIntoView()
      .click();    //20. navigate to the next page

    cy.get(motivation1.headerBar)
      .should("be.visible")
      .and("have.text", "Please provide Emergency Contact Information");    //21. check the title of a header of the page

  });

  it("Should check the motivation.1 page elements - Negative Answers scenario", () => {

    /*
    1. navigate to the "motivation.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the item
    5. type in a required information
    6. check the visibility of radio buttons
    7. choose the necessary value
    8. check the visibility of radio buttons
    9. choose the necessary value
    10. check the visibility of radio buttons
    11. choose the necessary value
    12. navigate to the next page
    13. check the title of a header of the page
    */

    var gatheringHowYouFeelQuestion = "I am still just gathering information; I still have a lot of questions.";

    cy.visit("/motivation.1")    //1. navigate to the "motivation.1" dialog
      .contains("With regard to your Kidney Donation:")    //2. check the title of the dialog
      .get(motivation1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(motivation1.whyInterestedTextArea)
      .should("be.visible")    //4. check the visibility of the item
      .type(gatheringHowYouFeelQuestion);    //5. type in a required information

    cy.get(motivation1.gatheringInfoRadioBtn)    //6. check the visibility of radio buttons
      .scrollIntoView()
      .click();    //7. choose the necessary value

    cy.get(motivation1.noDiscloseRadioBtn)    //8. check the visibility of radio buttons
      .scrollIntoView()
      .click();    //9. choose the necessary value

    cy.get(motivation1.noPreviouslyApplied)    //10. check the visibility of radio buttons
      .scrollIntoView()
      .click();    //11. choose the necessary value

    cy.get(motivation1.nextBtn)
      .scrollIntoView()
      .click();    //12. navigate to the next page

    cy.get(motivation1.headerBar)
      .should("be.visible")
      .and("have.text", "Please provide Emergency Contact Information");    //13. check the title of a header of the page

  });

  it("Should check the emergencycontact.0 page elements", () => {

    /*
    1. navigate to the "emergencycontact.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the item
    7. type in a required information
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the item
    11. type in a required information
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of the item
    15. type in a required information
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of the item
    19. check the visibility of the selector's content
    20. choose the necessary value
    21. validation error message checking
    22. check the title of the section
    23. check the visibility of the item
    24. check the visibility of the selector's content
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of a header of the page
    */

    var phoneTypeValues = [
      "Mobile",
      "Home",
      "Work - Shared",
      "Work - Private"
    ];
    var relationshipValues = [
      "Mother",
      "Father",
      "Spouse",
      "Legal Guardian",
      "Child",
      "Sibling",
      "Grandparent",
      "Aunt/Uncle",
      "Friend or Other"
    ];

    cy.visit("/emergencycontact.0")    //1. navigate to the "emergencycontact.0" dialog
      .contains("Please provide Emergency Contact Information")    //2. check the title of the dialog
      .get(emergencycontact0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(emergencycontact0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("First Name")    //5. check the title of the section
      .scrollIntoView();
    cy.get(emergencycontact0.firstNameInputField)    //6. check the visibility of the item
      .should("be.visible")
      .type("Donor's First Name");    //7. type in a required information

    cy.get(emergencycontact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Last Name")    //9. check the title of the section
      .scrollIntoView();
    cy.get(emergencycontact0.lastNameInputField)    //10. check the visibility of the item
      .should("be.visible")
      .type("Donor's Last Name");    //11. type in a required information

    cy.get(emergencycontact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //12. validation error message checking

    cy.contains("Phone");    //13. check the title of the section
    cy.get(emergencycontact0.phoneNumberInputField)    //14. check the visibility of the item
      .should("be.visible")
      .type(555554321);    //15. type in a required information

    cy.get(emergencycontact0.nextBtn)
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //16. validation error message checking

    cy.contains("Phone Type");    //17. check the title of the section
    cy.get(emergencycontact0.phoneTypeSelector)    //18. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(emergencycontact0.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //19. check the visibility of the selector's content
    cy.get(emergencycontact0.phoneTypeSelector)
      .select("Home");    //20. choose the necessary value

    cy.get(emergencycontact0.nextBtn)
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //21. validation error message checking

    cy.contains("Relationship");    //22. check the title of the section
    cy.get(emergencycontact0.relationshipSelector)    //23. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < relationshipValues.length; i++) {
      cy.get(emergencycontact0.relationshipSelector)
        .select(relationshipValues[i])
        .should("be.visible")
    };    //24. check the visibility of the selector's content
    cy.get(emergencycontact0.relationshipSelector)
      .select("Friend or Other");    //25. choose the necessary value

    cy.get(emergencycontact0.nextBtn)
      .click();    //26. navigate to the next page

    cy.get(emergencycontact0.headerBar)
      .should("be.visible")
      .and("have.text", "Secondary Emergency Contact (Optional)");    //27. check the title of a header of the page

  });

  it("Should check the emergencycontact.1 page elements - No Skip Scenario", () => {

    /*
    1. navigate to the "emergencycontact.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the item
    6. type in a required information
    7. check the title of the section
    8. check the visibility of the item
    9. type in a required information
    10. check the title of the section
    11. check the visibility of the item
    12. type in a required information
    13. check the title of the section
    14. check the visibility of the item
    15. check the visibility of the selector's content
    16. choose the necessary value
    17. check the title of the section
    18. check the visibility of the item
    19. check the visibility of the selector's content
    20. choose the necessary value
    21. navigate to the next page
    22. check the title of a header of the page
    */

    var phoneTypeValues = [
      "Mobile",
      "Home",
      "Work - Shared",
      "Work - Private"
    ];
    var relationshipValues = [
      "Mother",
      "Father",
      "Spouse",
      "Legal Guardian",
      "Child",
      "Sibling",
      "Grandparent",
      "Aunt/Uncle",
      "Friend or Other"
    ];

    cy.visit("/emergencycontact.1")    //1. navigate to the "emergencycontact.1" dialog
      .contains("Secondary Emergency Contact (Optional)")    //2. check the title of the dialog
      .get(emergencycontact1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("First Name")    //4. check the title of the section
      .scrollIntoView();
    cy.get(emergencycontact1.firstNameInputField)    //5. check the visibility of the item
      .should("be.visible")
      .type("Donor's First Name");    //6. type in a required information

    cy.contains("Last Name")    //7. check the title of the section
      .scrollIntoView();
    cy.get(emergencycontact1.lastNameInputField)    //8. check the visibility of the item
      .should("be.visible")
      .type("Donor's Last Name");    //9. type in a required information

    cy.contains("Phone");    //10. check the title of the section
    cy.get(emergencycontact1.phoneNumberInputField)    //11. check the visibility of the item
      .should("be.visible")
      .type(555554321);    //12. type in a required information

    cy.contains("Phone Type");    //13. check the title of the section
    cy.get(emergencycontact1.phoneTypeSelector)    //14. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(emergencycontact1.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //15. check the visibility of the selector's content
    cy.get(emergencycontact1.phoneTypeSelector)
      .select("Work - Private");    //16. choose the necessary value

    cy.contains("Relationship");    //17. check the title of the section
    cy.get(emergencycontact1.relationshipSelector)    //18. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < relationshipValues.length; i++) {
      cy.get(emergencycontact1.relationshipSelector)
        .select(relationshipValues[i])
        .should("be.visible")
    };    //19. check the visibility of the selector's content
    cy.get(emergencycontact1.relationshipSelector)
      .select("Grandparent");    //20. choose the necessary value

    cy.get(emergencycontact1.nextBtn)
      .click();    //21. navigate to the next page

    cy.get(emergencycontact1.headerBar)
      .should("be.visible")
      .and("have.text", "Please enter your contact phone number and verify your email address: ");    //22. check the title of a header of the page

  });

  it("Should check the emergencycontact.1 page elements - Skip Scenario", () => {

    /*
    1. navigate to the "emergencycontact.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. navigate to the next page
    5. check the title of a header of the page
    */

    cy.visit("/emergencycontact.1")    //1. navigate to the "emergencycontact.1" dialog
      .contains("Secondary Emergency Contact (Optional)")    //2. check the title of the dialog
      .get(emergencycontact1.introStartSurBtn)
      .should("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(emergencycontact1.nextBtn)
      .scrollIntoView()
      .click();    //4. navigate to the next page

    cy.get(emergencycontact1.headerBar)
      .should("be.visible")
      .and("have.text", "Please enter your contact phone number and verify your email address: ");    //5. check the title of a header of the page

  });

  it("Should check the contact.0 page elements - No Skip Optional Fields Scenario", () => {

    /*
    1. navigate to the "contact.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the item
    7. type in a required information
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the item
    11. check the visibility of the selector's content
    12. choose the necessary value
    13. check the title of the section
    14. check the visibility of the item
    15. type in a required information
    16. check the title of the section
    17. check the visibility of the item
    18. check the visibility of the selector's content
    19. choose the necessary value
    20. check the title of the section
    21. check the visibility of the item
    22. type in a required information
    23. navigate to the next page
    24. validation error message checking
    25. check the title of the section
    26. check the visibility of the item
    27. type in a required information
    28. validation error message checking
    29. check the title of the section
    30. check the visibility of the item
    31. type in a required information
    32. validation error message checking
    33. check the title of the section
    34. check the visibility of the item
    35. check the visibility of the selector's content
    36. choose the necessary value
    37. validation error message checking
    38. check the title of the section
    39. check the visibility of the item
    40. type in a required information
    41. navigate to the next page
    42. check the title of a header of the page
    */

    var phoneTypeValues = [
      "Mobile",
      "Home",
      "Work - Shared",
      "Work - Private"
    ];

    var stateValues = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY"
    ];

    cy.visit("/contact.0")    //1. navigate to the "contact.0" dialog
      .contains("Please enter your contact phone number and verify your email address:")    //2. check the title of the dialog
      .get(contact0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Best Phone Number")    //5. check the title of the section
      .scrollIntoView();
    cy.get(contact0.phoneNumberInput)    //6. check the visibility of the item
      .should("be.visible")
      .type("555-554-321");    //7. type in a required information

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Best Phone Type");    //9. check the title of the section
    cy.get(contact0.phoneTypeSelector)    //10. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(contact0.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //11. check the visibility of the selector's content
    cy.get(contact0.phoneTypeSelector)
      .select("Mobile");    //12. choose the necessary value

    cy.contains("Alternate Phone Number: (Optional)");    //13. check the title of the section
    cy.get(contact0.alternatePhoneNumberInput)    //14. check the visibility of the item
      .should("be.visible")
      .type("555-567-098");    //15. type in a required information

    cy.contains("Alternate Phone Type: (Optional)");    //16. check the title of the section
    cy.get(contact0.alternatePhoneTypeSelector)    //17. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(contact0.alternatePhoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //18. check the visibility of the selector's content
    cy.get(contact0.alternatePhoneTypeSelector)
      .select("Work - Private");    //19. choose the necessary value

    cy.contains("Your Email: (Optional)");    //20. check the title of the section
    cy.get(contact0.emailInput)    //21. check the visibility of the item
      .should("be.visible")
      .type("proud_donor@donormail.com");    //22. type in a required information

    cy.get(contact0.nextBtn)
      .click();    //23. navigate to the next page

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //24. validation error message checking

    cy.contains("Your Home Address:");    //25. check the title of the section
    cy.get(contact0.addressInput)    //26. check the visibility of the item
      .should("be.visible")
      .type("742 Evergreen Terrace");    //27. type in a required information

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //28. validation error message checking

    cy.contains("City:");    //29. check the title of the section
    cy.get(contact0.cityInput)    //30. check the visibility of the item
      .should("be.visible")
      .type("Springfield");    //31. type in a required information

    cy.get(contact0.nextBtn)
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");    //32. validation error message checking

    cy.contains("State:");    //33. check the title of the section
    cy.get(contact0.stateSelector)    //34. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < stateValues.length; i++) {
      cy.get(contact0.stateSelector)
        .select(stateValues[i])
        .should("be.visible")
    };    //35. check the visibility of the selector's content
    cy.get(contact0.stateSelector)
      .select("IL");    //36. choose the necessary value

    cy.get(contact0.nextBtn)
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");    //37. validation error message checking

    cy.contains("Zip:");    //38. check the title of the section
    cy.get(contact0.zipCodeInput)    //39. check the visibility of the item
      .should("be.visible")
      .type("62704");    //40. type in a required information

    cy.get(contact0.nextBtn)
      .click();    //41. navigate to the next page

    cy.get(contact0.headerBar)
      .should("be.visible")
      .and("have.text", "Please select the best days and times to contact you if necessary: (Optional)");    //42. check the title of a header of the page

  });

  it("Should check the contact.0 page elements - Skip Optional Fields Scenario", () => {

    /*
    1. navigate to the "contact.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the item
    7. type in a required information
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the item
    11. check the visibility of the selector's content
    12. choose the necessary value
    13. navigate to the next page
    14. check the title of the section
    15. check the visibility of the item
    16. type in a required information
    17. check the title of the section
    18. check the visibility of the item
    19. type in a required information
    20. check the title of the section
    21. check the visibility of the item
    22. check the visibility of the selector's content
    23. choose the necessary value
    24. check the title of the section
    25. check the visibility of the item
    26. type in a required information
    27. navigate to the next page
    28. check the title of a header of the page
    */

    var phoneTypeValues = [
      "Mobile",
      "Home",
      "Work - Shared",
      "Work - Private"
    ];

    var stateValues = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY"
    ];

    cy.visit("/contact.0")    //1. navigate to the "contact.0" dialog
      .contains("Please enter your contact phone number and verify your email address:")    //2. check the title of the dialog
      .get(contact0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Best Phone Number")    //5. check the title of the section
      .scrollIntoView();
    cy.get(contact0.phoneNumberInput)    //6. check the visibility of the item
      .should("be.visible")
      .type("555-554-321");    //7. type in a required information

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Best Phone Type");    //9. check the title of the section
    cy.get(contact0.phoneTypeSelector)    //10. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(contact0.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //11. check the visibility of the selector's content
    cy.get(contact0.phoneTypeSelector)
      .select("Home");    //12. choose the necessary value

    cy.get(contact0.nextBtn)
      .click();    //13. navigate to the next page

    cy.contains("Your Home Address:");    //14. check the title of the section
    cy.get(contact0.addressInput)    //15. check the visibility of the item
      .should("be.visible")
      .type("742 Evergreen Terrace");    //16. type in a required information

    cy.contains("City:");    //17. check the title of the section
    cy.get(contact0.cityInput)    //18. check the visibility of the item
      .should("be.visible")
      .type("Springfield");    //19. type in a required information

    cy.contains("State:");    //20. check the title of the section
    cy.get(contact0.stateSelector)    //21. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < stateValues.length; i++) {
      cy.get(contact0.stateSelector)
        .select(stateValues[i])
        .should("be.visible")
    };    //22. check the visibility of the selector's content
    cy.get(contact0.stateSelector)
      .select("IL");    //23. choose the necessary value

    cy.contains("Zip:");    //24. check the title of the section
    cy.get(contact0.zipCodeInput)    //25. check the visibility of the item
      .should("be.visible")
      .type("62704");    //26. type in a required information

    cy.get(contact0.nextBtn)
      .click();    //27. navigate to the next page

    cy.get(contact0.headerBar)
      .should("be.visible")
      .and("have.text", "Please select the best days and times to contact you if necessary: (Optional)");    //28. check the title of a header of the page

  });

  it("Should check the contact-schedule.01 page elements - No Skip Scenario", () => {

    /*
    1. navigate to the "contact-schedule.01" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the title of the section
    8. check the visibility of the radio buttons
    9. choose the necessary value
    10. navigate to the next page
    11. check the title of a header of the page
    */

    cy.visit("/contact-schedule.01")    //1. navigate to the "contact-schedule.01" dialog
      .contains("Please select the best days and times to contact you if necessary: (Optional)")    //2. check the title of the dialog
      .get(contactSchedule01.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("In order to facilitate easier contact, please select as many options as possible");    //4. check the title of the section

    cy.get(contactSchedule01.mondayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Monday")

      .get(contactSchedule01.tuesdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Tuesday")

      .get(contactSchedule01.wednesdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Wednesday")

      .get(contactSchedule01.thursdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Thursday")

      .get(contactSchedule01.fridayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Friday")
      .click()    //6. choose the necessary value

      .get(contactSchedule01.morningCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "8:00 AM - 12:00 PM")
      .click()    //6. choose the necessary value

      .get(contactSchedule01.afternoonCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "12:00 PM - 5:00 PM")
      .click();    //6. choose the necessary value

    cy.contains("What is your preferred method of contact?");    //7. check the title of the section

    cy.get(contactSchedule01.phonePreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "Phone")
      .click()    //9. choose the necessary value
      .get(contactSchedule01.emailPreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "Email")
      .get(contactSchedule01.noPreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "No Preference");

    cy.get(contactSchedule01.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //10. navigate to the next page

    cy.get(contactSchedule01.headerBar)
      .should("be.visible")
      .and("have.text", "Have you watched the UCSF video about Living Kidney Donation, 'The Gift of Life'?");    //11. check the title of a header of the page

  });

  it("Should check the contact-schedule.01 page elements - Skip Scenario", () => {

    /*
    1. navigate to the "contact-schedule.01" dialog
    2. check the title of the dialog
    3. click to start survey
    4. navigate to the next page
    5. check the title of a header of the page
    */

    cy.visit("/contact-schedule.01")    //1. navigate to the "contact-schedule.01" dialog
      .contains("Please select the best days and times to contact you if necessary: (Optional)")    //2. check the title of the dialog
      .get(contactSchedule01.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(contactSchedule01.nextBtn)
      .scrollIntoView()
      .click();    //4. navigate to the next page

    cy.get(contactSchedule01.headerBar)
      .should("be.visible")
      .and("have.text", "Have you watched the UCSF video about Living Kidney Donation, 'The Gift of Life'?");    //5. check the title of a header of the page

  });

  it("Should check the videoscreen.yn page elements - Yes Scenario", () => {

    /*
    1. navigate to the "videoscreen.yn" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    */

    var dialogHeaderTitle = "Have you watched the UCSF video about Living Kidney Donation, 'The Gift of Life'?";
    var additionalInfoHeader = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";

    cy.visit("/videoscreen.yn")    //1. navigate to the "videoscreen.yn" dialog
      .contains(dialogHeaderTitle)    //2. check the title of the dialog
      .get(videoscreenYesNo.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(videoscreenYesNo.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(videoscreenYesNo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(videoscreenYesNo.yesRadioBtn)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //6. choose the necessary value
      .get(videoscreenYesNo.noRadioBtn)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "No");

    cy.get(videoscreenYesNo.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(videoscreenYesNo.headerBar)
      .should("be.visible")
      .and("have.text", additionalInfoHeader);    //8. check the title of a header of the page

  });

  it("Should check the videoscreen.yn page elements - No Scenario", () => {

    /*
    1. navigate to the "videoscreen.yn" dialog
    2. check the title of the dialog
    3. click to start survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of a header of the page
    */

    var dialogHeaderTitle = "Have you watched the UCSF video about Living Kidney Donation, 'The Gift of Life'?";
    var additionalInfoHeader = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";

    cy.visit("/videoscreen.yn")    //1. navigate to the "videoscreen.yn" dialog
      .contains(dialogHeaderTitle)    //2. check the title of the dialog
      .get(videoscreenYesNo.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(videoscreenYesNo.noRadioBtn)
      .should("have.text", "No")
      .click();    //4. choose the necessary value

    cy.get(videoscreenYesNo.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(videoscreenYesNo.headerBar)
      .should("be.visible")
      .and("have.text", additionalInfoHeader);    //6. check the title of a header of the page

  });

  it("Should check the supplemental.01 page elements", () => {

    /*
    1. navigate to the "supplemental.01" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the item
    6. type in the required information
    7. check the visibility of the button
    8. submit the questionnaire
    9. check the title of a header of the page
    */

    var dialogHeaderTitle = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";

    cy.visit("/supplemental.01")    //1. navigate to the "supplemental.01" dialog
      .contains(dialogHeaderTitle)    //2. check the title of the dialog
      .get(supplemental01.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please write here...");    //4. check the title of the section

    cy.get(supplemental01.textArea)    //5. check the visibility of the item 
      .should("be.visible")
      .type("Additional Information");    //6. type in the required information

    cy.get(supplemental01.submitBtn)    //7. check the visibility of the button
      .should("be.visible")
      .and("have.text", "Submit")
      .click();    //8. submit the questionnaire

    cy.get(supplemental01.headerBar)
      .should("be.visible")
      .and("have.text", "Questionnaire Submitted");    //9. check the title of a header of the page

  });

  it("Should check the thankyou.0 page elements", () => {

    /*
    1. navigate to the "thankyou.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the page's content
    5. check the visibility of the page's content
    6. check the visibility of the page's content
    7. check the visibility of the page's content
    */

    var thankYouPrologue = "Thank you for your generous offer to be a living kidney donor. Our goal is to begin the formal evaluation process as soon as possible. Below are some useful educational materials about living kidney donation. Please take a moment to review these materials.";
    var pleaseSendUsEmail = "If you wish to contact us please send an e-mail to:";

    var donorMaterials = "UCSF Kidney Transplant Living Donor Educational Materials";
    var donorOverview = "UCSF Kidney Transplant Living Donor Overview";
    var giftOfLife = "UCSF 'The Gift of Life' Video";
    var nationalRegistry = "National Kidney Registry";
    var nationalFoundation = "National Kidney Foundation";
    var practices = "UCSF Notice of Privacy Practices";
    var patientSafety = "UCSF Patient Safety";
    var patientResources = "NLDAC Patient Resources";

    cy.visit("/thankyou.0")    //1. navigate to the "thankyou.0" dialog
      .contains("Questionnaire Submitted")    //2. check the title of the dialog
      .get(thankYou0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains(thankYouPrologue);    //4. check the visibility of the page's content

    cy.get(thankYou0.donorMaterialsEducationLink)
      .should("be.visible")
      .and("have.text", donorMaterials)    //5. check the visibility of the page's content

      .get(thankYou0.donorOverviewEducationLink)
      .should("be.visible")
      .and("have.text", donorOverview)    //5. check the visibility of the page's content

      .get(thankYou0.giftOfLifeEducationLink)
      .should("be.visible")
      .and("have.text", giftOfLife)    //5. check the visibility of the page's content

      .get(thankYou0.nationalRegistryEducationLink)
      .should("be.visible")
      .and("have.text", nationalRegistry)    //5. check the visibility of the page's content

      .get(thankYou0.nationalFoundationEducationLink)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", nationalFoundation)    //5. check the visibility of the page's content

      .get(thankYou0.practicesEducationLink)
      .should("be.visible")
      .and("have.text", practices)    //5. check the visibility of the page's content

      .get(thankYou0.patientSafetyEducationLink)
      .should("be.visible")
      .and("have.text", patientSafety)    //5. check the visibility of the page's content

      .get(thankYou0.patientResourcesEducationLink)
      .should("be.visible")
      .and("have.text", patientResources);    //5. check the visibility of the page's content

    cy.contains(pleaseSendUsEmail);    //6. check the visibility of the page's content

    cy.get(thankYou0.contactEmail)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Living.Donor@ucsfmedctr.org");    //7. check the visibility of the page's content

  });

})