import landingPage from "../page objects/00_landing_page_01";
import referralPage from "../page objects/01_referral_page_01";
import demographicsPage from "../page objects/02_race_page_01";
import screeningHtn0 from "../page objects/03_screening-htn_page_01";
import screeningDiabetesrx from "../page objects/04_screening-diabetesrx_01";
import screeningKidneystones from "../page objects/05_screening-kidneystones_01";
import screeningTobacco from "../page objects/06_screening-tobacco_01";
import screeningIlDrugs from "../page objects/07_screening-ildrs_01";
import whatToExpectPage from "../page objects/08_what_to_expect_01";
import thankYouOptOut from "../page objects/09_thankyou_opt_out_01";
import instructionsPage from "../page objects/10_instructions_01";
import medicationList from "../page objects/11_medications-list-rx-ada_01";
import medConditionsSurvey from "../page objects/12_shc-condition-category_01";
import medAllergies from "../page objects/13_med-allergies_01";
import materialAllergies from "../page objects/14_material-allergies_01";
import doYouSmokeCigarettes from "../page objects/15_doyousmoke0_01";
import alcoholPage from "../page objects/16_alcohol0_01";
import illicitDrugsPage from "../page objects/17_illicitdrugs0_01";
import activityPage from "../page objects/18_activity0_01";



describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("should check the Landing page elements", () => {
    var text = "Welcome to the BREEZE TRANSPLANT online health";
    var firstName = "First name";
    var middleName = "Middle name";
    var lastName = "Last name";
    cy.visit("/landing-page")
      .wait(200)
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
      .click()
      .wait(200);
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
      .click() 
      .wait(200);
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
    var textNextBtn = "Next";
    var transplantCandidateText = "From the transplant candidate";
    var candidatesSomeoneText = "From someone I know on behalf of the transplant candidate (a family member or friend)";
    var socialMediaText = "From social media (such as Facebook)";
    var myOwnResearchText = "From my own research";
    var anotherPatientText = "From another donor, recipient or patient.";
    var otherText = "Other";  
    cy.visit("/referral.0")
      .wait(200)
      .get(referralPage.introStartSurBtn)
      .click()
      .get(referralPage.nextBtn)
      .then(el => {
        assert.include(el.text(), textNextBtn);
          
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
      .should("have.text", textNextBtn)
      .click();
    cy.contains("Demographics")
      .should("be.visible")
      });

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
      .wait(200)
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
      .wait(200)
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
      .click()
      .wait(200);
    cy.get(screeningHtn0.headerBar)
      .should("be.visible")
      .and("contain", medicationQtyTxt)
      .get(screeningHtn0.medicationQtyBar)
      .should("be.visible")
      .and("contain", selectorText)
    for(var i = 0; i<selectorValues.length; i++) {
    cy.get(screeningHtn0.medicationQtySelector)
      .select(selectorValues[i])
      .should("be.visible")
    }
    cy.get(screeningHtn0.nextBtn)
      .click()
      .wait(200);
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
      .wait(200)
      .get(screeningHtn0.introStartSurBtn)
      .click()
      .wait(200);
    cy.get(screeningHtn0.noRadioBtn)
      .click()
      .wait(200);
    cy.get(screeningHtn0.nextBtn)
      .click()  
      .wait(200);
    cy.contains("Do you currently take pills or insulin for Diabetes?")
      .should("be.visible");
  
      });

  it("Should check the screening.diabetesrx page elements - Yes scenario", () => {
    var headerBarText = "Thank you for your generous offer to be a kidney donor";
    var contentHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var contentReasonText = "Your diabetes places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var contentFooterText = "If you have any questions, you may email us at\nLiving.Donor@ucsfmedctr.org and a member of our transplant team will get back to you within 48 hours.";
  
    cy.visit("/screening.diabetesrx")
      .wait(200)
      .contains("Do you currently take pills or insulin for Diabetes?")
      .should("be.visible");
    cy.get(screeningDiabetesrx.introStartSurBtn)
      .should("be.visible")
      .click()
      .wait(200);
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
      .click()
      .wait(200);
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
      .wait(200)
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
      .wait(200)
      .contains("Have you had more than one kidney stone in the past 10 years?")
      .should("be.visible");
    cy.get(screeningKidneystones.introStartSurBtn)
      .should("be.visible")
      .click()
      .wait(200);
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
      .wait(200)
      .get(screeningKidneystones.headerBar)
      .then(el => {
        assert.include(el.text(), pageToCheckTitle) 
    });

  });

  it("Should check the screening.kidneystones page elements - No scenario", () => {
    var pageToCheckTitle = "Do you smoke cigarettes or marijuana?";
    cy.visit("/screening.kidneystones")
      .wait(200)
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
      .wait(200)
      .contains("Do you smoke cigarettes or marijuana?")
      .should("be.visible");
    cy.get(screeningTobacco.introStartSurBtn)
      .should("be.visible")
      .click()
      .wait(200);
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
      .click()
      .wait(200);
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
      .wait(200)
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
      .wait(200)
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
      .wait(200)
      .contains("Do you use recreational or illicit drugs not including marijuana?")
      .get(screeningIlDrugs.introStartSurBtn)
      .should("be.visible")
      .click()
      .wait(200);
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
      .wait(200)
      .get(screeningIlDrugs.headerBar)
      .should("be.visible")
      .and("have.text", headerToCheck);
    cy.get(screeningIlDrugs.notInterestedToCheck)
      .scrollIntoView()
      .wait(300)
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
      .wait(200)
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
      .wait(200)
      .contains("Please review the important information below prior to proceeding to the online evaluation")
      .get(whatToExpectPage.introStartSurBtn)
      .should("be.visible")
      .click()
      .wait(200);
    cy.contains("Donor Evaluation")
      .should("be.visible")
      .get(whatToExpectPage.evaluationInfoText)
      .should("be.visible")
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
      .wait(200)
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
      .wait(200)
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
      .click()
      .wait(200);
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
      .wait(200)
      .contains("This health questionnaire will take approximately 15 to 20 minutes to complete.")
      .get(instructionsPage.introStartSurBtn)
      .should("be.visible")
      .click()
      .wait(200);
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
      .wait(200)
      .get(instructionsPage.headerBar)
      .should("be.visible")
      .and("have.text", medsListHeaderTxt);

  });

  it("Should check the instructions.04 page elements - I do not take any medication scenario ", () => {
    var medConditionsListHeader = "Do you have or have you had any of the following medical conditions?";
    cy.visit("instructions.04")
      .wait(300)
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
      .wait(200)
      .get(medicationList.introStartSurBtn)
      .click()
      .wait(200)
      .get(medicationList.enterMedicationsRadioBtn)
      .click()
      .get(medicationList.nextBtn)
      .click()
      .wait(200)
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
      .wait(200)
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
      .wait(200);
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
    for(var i = 0; i < doses.length; i++) {
      cy.get(medicationList.dosageSelector)
        .select(doses[i])
        .should("be.visible");
    };
    cy.get(medicationList.dosageSelector)
      .select("0.5 mg")
    for(var i = 0; i < frequences.length; i++){
      cy.get(medicationList.frequencySelector)
        .select(frequences[i])
        .should("be.visible");
    };
    cy.get(medicationList.frequencySelector)
      .select("Twice a Day")
      .get(medicationList.nextBtn)
      .click()
      .wait(200)
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
      .wait(200)
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
      .click()
      .get(medicationList.dosageSelector)
      for(var i = 0; i < doses.length; i++) {
        cy.get(medicationList.dosageSelector)
          .select(doses[i])
          .should("be.visible");
      };
    cy.get(medicationList.dosageSelector)
      .select("1000 mg")
      for(var i = 0; i < frequences.length; i++){
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
      .click()
      .wait(200);
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
      .and("contain", "Do you have any ALLERGIES to medications?")

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
      .and("have.text", "With regard to your Asthma?")
    cy.get(medConditionsSurvey.steroidsQuery)
      .should("be.visible")
      .and("contain", steroidsQueryHeading)
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
      .and("have.text", "Do you have any ALLERGIES to medications?")

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
      .and("have.text", "Do you smoke cigarettes?")

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
      .and("have.text","Next")
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
      for(var i = 0; i<yearsValues.length; i++) {
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
      for(var i = 0; i<packsValues.length; i++) {
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
      .and("have.text", "Required")
    cy.get(doYouSmokeCigarettes.quitYearSelector)
      .should("be.visible")
      .and("contain", selectorText)
      for(var i = 0; i<quitYearValues.length; i++) {
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
      for(var i = 0; i<yearsValues.length; i++) {
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
      for(var i = 0; i<packsValues.length; i++) {
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
      .and("have.text","Next")
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
      .click()
      .get(alcoholPage.nextBtn)
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
      .and("have.text", everyDayMoreTitle)
      .get(alcoholPage.nextBtn)
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
    var  marijuanaIllicitDrugsTitle = "Marijuana";
    var  cocaineIllicitDrugsTitle = "Cocaine";
    var  heroinIllicitDrugsTitle = "Heroin";
    var  methamphetaminesIllicitDrugsTitle = "Methamphetamines ('Ecstasy', 'Crystal Meth')";
    var  otherIllicitDrugsTitle = "Other";        
    cy.visit("/illicitdrugs.0")
      .contains("Do you use recreational or illicit drugs?")
      .get(illicitDrugsPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();
    cy.get(illicitDrugsPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required")
      .get(illicitDrugsPage.yesIllicitDrugsRadioBtn)
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
      .and("have.text","Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required")
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
      .and("have.text","Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required")
      .get(illicitDrugsPage.yesIllicitDrugsRadioBtn)
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
      .click()
      .get(illicitDrugsPage.headerBar)
      .should("be.visible")
      .and("have.text", "Which of the following most closely represents your level of physical activity?");
    cy.contains("Please select ONE of the following:");

  });

  it("Should check the illicitdrugs.0 page elements - I Used To scenario ", () => {
    var  marijuanaIllicitDrugsTitle = "Marijuana";
    var  cocaineIllicitDrugsTitle = "Cocaine";
    var  heroinIllicitDrugsTitle = "Heroin";
    var  methamphetaminesIllicitDrugsTitle = "Methamphetamines ('Ecstasy', 'Crystal Meth')";
    var  otherIllicitDrugsTitle = "Other";
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
      .and("have.text","Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required")
      .get(illicitDrugsPage.yesIllicitDrugsRadioBtn)
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
      .and("have.text","Next")
      .click()
      .get(illicitDrugsPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");
    cy.get(illicitDrugsPage.quitYearSelector)
      .should("be.visible")
      .and("contain", selectorText)
      for(var i = 0; i<quitYearValues.length; i++) {
        cy.get(illicitDrugsPage.quitYearSelector)
          .select(quitYearValues[i])
          .should("be.visible")
        };
    cy.get(illicitDrugsPage.quitYearSelector)
      .select("2010");
    cy.get(illicitDrugsPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
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
      .click()
      .get(illicitDrugsPage.headerBar)
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
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    var doNotFrequencyTitle = "I do not exercise on a regular basis";      
    var onceFrequencyTitle = "Once per week";      
    var twiceFrequencyTitle = "Twice per week";
    var threeFrequencyTitle = "Three times per week";
    var moreThreeFrequencyTitle = "More than three times per week";

    cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Please select ONE of the following:");  //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click();  //8. navigate to the next page

    cy.get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Approximately how often do you exercise per week?");  //9. check the title of a header of the page
    cy.contains("Please select one of the following choices:");   //10. check the title of a header of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //11. validation error message checking

    cy.get(activityPage.doNotFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", doNotFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.onceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", onceFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.twiceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", twiceFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.threeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", threeFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.moreThreeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", moreThreeFrequencyTitle)        //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.nextBtn)
      .click()  //14. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");  //15. check the title of a header of the page

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
    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";
    
    var doNotFrequencyTitle = "I do not exercise on a regular basis";      
    var onceFrequencyTitle = "Once per week";      
    var twiceFrequencyTitle = "Twice per week";
    var threeFrequencyTitle = "Three times per week";
    var moreThreeFrequencyTitle = "More than three times per week";

    cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Please select ONE of the following:");  //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click();  //8. navigate to the next page

    cy.get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Approximately how often do you exercise per week?");  //9. check the title of a header of the page
    cy.contains("Please select one of the following choices:");   //10. check the title of a header of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //11. validation error message checking

    cy.get(activityPage.doNotFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", doNotFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.onceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", onceFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.twiceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", twiceFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.threeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", threeFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.moreThreeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", moreThreeFrequencyTitle)        //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.nextBtn)
      .click()  //14. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");  //15. check the title of a header of the page

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
    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";
    
    var doNotFrequencyTitle = "I do not exercise on a regular basis";      
    var onceFrequencyTitle = "Once per week";      
    var twiceFrequencyTitle = "Twice per week";
    var threeFrequencyTitle = "Three times per week";
    var moreThreeFrequencyTitle = "More than three times per week";

    cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Please select ONE of the following:");  //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)
      .get(activityPage.nextBtn)
      .click();  //8. navigate to the next page

    cy.get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Approximately how often do you exercise per week?");  //9. check the title of a header of the page
    cy.contains("Please select one of the following choices:");   //10. check the title of a header of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //11. validation error message checking

    cy.get(activityPage.doNotFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", doNotFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.onceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", onceFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.twiceFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", twiceFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.threeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", threeFrequencyTitle)        //12. check the visibility of the checkboxes
      .get(activityPage.moreThreeFrequencyCheckBox)
      .should("be.visible")
      .and("have.text", moreThreeFrequencyTitle)        //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value
      .get(activityPage.nextBtn)
      .click()  //14. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");  //15. check the title of a header of the page

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
    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Please select ONE of the following:");  //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //5. validation error message checking   //6. check the visibility of the checkboxes

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()  //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");  //9. check the title of a header of the page

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //10. validation error message checking

    cy.contains("Do you get chest pain at REST?")   //11. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainRestCheckBox)        //12. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Yes")
      .get(activityPage.noPainRestCheckBox)        //12. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "No")
      .click()    //13. choose the necessary value      
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");     //14. validation error message checking

    cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")//15. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //16. check the visibility of the checkboxes
      .get(activityPage.noPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //16. check the visibility of the checkboxes
      .click()                    //17. choose the necessary value
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //18. validation error message checking

    cy.contains("Have you had a stress test?");       //19. check the title of a header of the section
    cy.get(activityPage.yesStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the checkboxes
      .get(activityPage.noStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the checkboxes
      .click()                    //21. choose the necessary value
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //22. validation error message checking

    cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");       //23. check the title of a header of the section
    cy.get(activityPage.yesCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")    //24. check the visibility of the checkboxes
      .get(activityPage.noCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "No")    //24. check the visibility of the checkboxes
      .click();                    //25. choose the necessary value

    cy.get(activityPage.nextBtn)
      .click()                    //26. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");       //27. check the title of a header of the page

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
      var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
      var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
      var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
      var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
      var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
      var shortOfBreathActivityTitle = "I am short of breath at rest";
      var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
      var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";
      
      var selectorText = "Select One";
      var stressTestsQtyValues = [
          "1",
          "2",
          "3",
          "4",
          "5",
      ];
      var catheterizationQtyValues = [
          "1",
          "2",
          "3",
          "4",
          "5",
      ];
      var angioplastyStentCathTitle = "I had a Ballon Angioplasty with Stent";
      var angioplastyNoStentCathTitle = "I had a Ballon Angioplasty, NO Stent";
      var bypassCathTitle = "I had Bypass Surgery";
      var pacemakerCathTitle = "I had a Pacemaker and/or Defibrillator placed";
      var ablationCathTitle = "I had an Ablation for Arrhythmia";        
                           
      cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
        .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
        .get(activityPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();  //3. click to start survey

      cy.contains("Please select ONE of the following:");  //4. check the title of the section
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()  
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required");   //5. validation error message checking

      cy.get(activityPage.strenuousActivityCheckBox)
        .should("be.visible")
        .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
        .get(activityPage.recreationalActivityCheckBox)
        .should("be.visible")
        .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
        .get(activityPage.twoFlightsActivityCheckBox)
        .should("be.visible")
        .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
        .get(activityPage.oneFlightActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
        .click()   //7. choose the necessary value
        .get(activityPage.oneBlockActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
        .get(activityPage.shortOfBreathActivityCheckBox)
        .should("be.visible")
        .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
        .get(activityPage.wheelchairActivityCheckBox)
        .should("be.visible")
        .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
        .get(activityPage.unableActivityCheckBox)
        .should("be.visible")
        .and("have.text", unableActivityTitle)   //6. check the visibility of the checkboxes
        .get(activityPage.nextBtn)
        .click()  //8. navigate to the next page
        .get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "With regard to your Heart:");  //9. check the title of a header of the page
      
      cy.get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");   //10. validation error message checking

      cy.contains("Do you get chest pain at REST?")   //11. check the title of a header of the section
        .scrollIntoView();
      cy.get(activityPage.yesPainRestCheckBox)
        .should("be.visible")
        .and("have.text", "Yes")        //12. check the visibility of the checkboxes
        .click()    //13. choose the necessary value 
        .get(activityPage.noPainRestCheckBox)
        .should("be.visible")
        .and("have.text", "No")   //12. check the visibility of the checkboxes
        .get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");     //14. validation error message checking

      cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")//15. check the title of a header of the section
        .scrollIntoView();
      cy.get(activityPage.yesPainActivityCheckBox)
        .should("be.visible")
        .and("have.text", "Yes")    //16. check the visibility of the checkboxes
        .click()                    //17. choose the necessary value 
        .get(activityPage.noPainActivityCheckBox)
        .should("be.visible")
        .and("have.text", "No")    //16. check the visibility of the checkboxes
        .get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");   //18. validation error message checking

      cy.contains("Have you had a stress test?");       //19. check the title of a header of the section
      cy.get(activityPage.yesStressTestCheckBox)
        .should("be.visible")
        .and("have.text", "Yes")    //20. check the visibility of the checkboxes
        .click()                    //21. choose the necessary value
        .get(activityPage.noStressTestCheckBox)
        .should("be.visible")
        .and("have.text", "No")    //20. check the visibility of the checkboxes
        .get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");   //22. validation error message checking

      cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");       //23. check the title of a header of the section
      cy.get(activityPage.yesCatheterizationCheckBox)
        .should("be.visible")
        .and("have.text", "Yes")    //24. check the visibility of the checkboxes
        .click()                    //25. choose the necessary value
        .get(activityPage.noCatheterizationCheckBox)
        .should("be.visible")
        .and("have.text", "No");    //24. check the visibility of the checkboxes
      cy.get(activityPage.nextBtn)
        .click()                    //26. navigate to the next page            
        .get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "With regard to your Heart:");       //27. check the title of a header of the page

      cy.contains("How many stress tests have you had?");       //28. check the title of a header of the section
      cy.get(activityPage.stressTestsQtySelect)
        .should("be.visible")
        .and("contain", selectorText)    //29. check the visibility of the selector's content
        for(var i = 0; i<stressTestsQtyValues.length; i++) {
          cy.get(activityPage.stressTestsQtySelect)
            .select(stressTestsQtyValues[i])
            .should("be.visible")
          };    //29. check the visibility of the selector's content
      cy.get(activityPage.stressTestsQtySelect)
        .select("2");                    //30. choose the necessary value

      cy.get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");   //31. validation error message checking

      cy.contains("Approximately when was your most recent stress test?");       //32. check the title of a header of the section
      cy.get(activityPage.stressTestsDateInput)
        .should("be.visible")
        .type("02281984")   //33. input the necessary date
        .get(activityPage.nextBtn)
        .scrollIntoView()
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");   //34. validation error message checking
      
      cy.contains("Was your most recent stress test normal?");       //35. check the title of a header of the section
      cy.get(activityPage.yesNormalTest)
        .should("be.visible")
        .and("have.text", "Yes")    //36. check the visibility of the checkboxes
        .click()                    //37. choose the necessary value 
        .get(activityPage.noNormalTest)
        .should("be.visible")
        .and("have.text", "No")    //36. check the visibility of the checkboxes
        .get(activityPage.nextBtn)
        .scrollIntoView()
        .click()            //38. navigate to the next page
        .get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "With regard to your Heart:");  //39. check the title of a header of the page

      cy.contains("How many Cardiac Catheterizations have you had?");     //40. check the title of a header of the section
      cy.get(activityPage.catheterizationQtySelect)
        .should("be.visible")
        .and("contain", selectorText)    //41. check the visibility of the selector's content
        for(var i = 0; i<catheterizationQtyValues.length; i++) {
          cy.get(activityPage.catheterizationQtySelect)
            .select(catheterizationQtyValues[i])
            .should("be.visible")
          };    //41. check the visibility of the selector's content
      cy.get(activityPage.catheterizationQtySelect)
        .select("1");                    //42. choose the necessary value

      cy.get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");   //43. validation error message checking

      cy.contains("Approximately when was your most recent Cardiac Catheterization?");     //44. check the title of a header of the section
      cy.get(activityPage.catheterizationDateInput)
        .should("be.visible")
        .type("02281984")   //45. input the necessary date

      cy.contains("Which procedure was performed during your most recent Cardiac Catheterization?");     //46. check the title of a header of the section
      cy.get(activityPage.angioplastyStentCathCheckBox)
        .should("be.visible")
        .and("have.text", angioplastyStentCathTitle)    //47. check the visibility of the checkboxes
        .click()                    //48. choose the necessary value
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
        .click()                                 //49. navigate to the next page
        .get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "Have you had Surgery in the past?");  //50. check the title of a header of the page
    
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
    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Please select ONE of the following:");  //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()  //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");  //9. check the title of a header of the page

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //10. validation error message checking

    cy.contains("Do you get chest pain at REST?")   //11. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //12. check the visibility of the checkboxes
      .get(activityPage.noPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value      
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //14. validation error message checking

    cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")   //15. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //16. check the visibility of the checkboxes
      .get(activityPage.noPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //16. check the visibility of the checkboxes
      .click()    //17. choose the necessary value 
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //18. validation error message checking

    cy.contains("Have you had a stress test?");   //19. check the title of a header of the section
    cy.get(activityPage.yesStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //20. check the visibility of the checkboxes
      .get(activityPage.noStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //20. check the visibility of the checkboxes
      .click()    //21. choose the necessary value
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //22. validation error message checking

    cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");   //23. check the title of a header of the section
    cy.get(activityPage.yesCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //24. check the visibility of the checkboxes
      .get(activityPage.noCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //24. check the visibility of the checkboxes
      .click();    //25. choose the necessary value
    cy.get(activityPage.nextBtn)
      .click()                    //26. navigate to the next page 
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");       //27. check the title of a header of the page

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
    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";
   
    var selectorText = "Select One";
    var stressTestsQtyValues = [
        "1",
        "2",
        "3",
        "4",
        "5",
    ];
    var catheterizationQtyValues = [
        "1",
        "2",
        "3",
        "4",
        "5",
    ];
    var angioplastyStentCathTitle = "I had a Ballon Angioplasty with Stent";
    var angioplastyNoStentCathTitle = "I had a Ballon Angioplasty, NO Stent";
    var bypassCathTitle = "I had Bypass Surgery";
    var pacemakerCathTitle = "I had a Pacemaker and/or Defibrillator placed";
    var ablationCathTitle = "I had an Ablation for Arrhythmia";        
                         
    cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Please select ONE of the following:");  //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()  //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");  //9. check the title of a header of the page

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //10. validation error message checking

    cy.contains("Do you get chest pain at REST?")   //11. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value      
      .get(activityPage.noPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //12. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //14. validation error message checking

    cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")   //15. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //16. check the visibility of the checkboxes
      .click()    //17. choose the necessary value 
      .get(activityPage.noPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //16. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //18. validation error message checking

    cy.contains("Have you had a stress test?");   //19. check the title of a header of the section
    cy.get(activityPage.yesStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //20. check the visibility of the checkboxes
      .click()    //21. choose the necessary value
      .get(activityPage.noStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //20. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //22. validation error message checking

    cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");   //23. check the title of a header of the section
    cy.get(activityPage.yesCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //24. check the visibility of the checkboxes
      .click()    //25. choose the necessary value
      .get(activityPage.noCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "No");        //24. check the visibility of the checkboxes
    cy.get(activityPage.nextBtn)
      .click()                    //26. navigate to the next page 
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");       //27. check the title of a header of the page
    
    cy.contains("How many stress tests have you had?");       //28. check the title of a header of the section
    cy.get(activityPage.stressTestsQtySelect)
      .should("be.visible")
      .and("contain", selectorText)    //29. check the visibility of the selector's content
      for(var i = 0; i<stressTestsQtyValues.length; i++) {
        cy.get(activityPage.stressTestsQtySelect)
          .select(stressTestsQtyValues[i])
          .should("be.visible")
        };    //29. check the visibility of the selector's content
    cy.get(activityPage.stressTestsQtySelect)
      .select("2");                    //30. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //31. validation error message checking

    cy.contains("Approximately when was your most recent stress test?");       //32. check the title of a header of the section
    cy.get(activityPage.stressTestsDateInput)
      .should("be.visible")
      .type("02281984")   //33. input the necessary date
      
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //34. validation error message checking

    cy.contains("Was your most recent stress test normal?");       //35. check the title of a header of the section
    cy.get(activityPage.yesNormalTest)
      .should("be.visible")
      .and("have.text", "Yes")    //36. check the visibility of the checkboxes
      .click()                    //37. choose the necessary value 
      .get(activityPage.noNormalTest)
      .should("be.visible")
      .and("have.text", "No")    //36. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()            //38. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");  //39. check the title of a header of the page
     
    cy.contains("How many Cardiac Catheterizations have you had?");     //40. check the title of a header of the section
    cy.get(activityPage.catheterizationQtySelect)
      .should("be.visible")
      .and("contain", selectorText)    //41. check the visibility of the selector's content
      for(var i = 0; i<catheterizationQtyValues.length; i++) {
        cy.get(activityPage.catheterizationQtySelect)
          .select(catheterizationQtyValues[i])
          .should("be.visible")
        };    //41. check the visibility of the selector's content
    cy.get(activityPage.catheterizationQtySelect)
      .select("1");                    //42. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //43. validation error message checking

    cy.contains("Approximately when was your most recent Cardiac Catheterization?");     //44. check the title of a header of the section
    cy.get(activityPage.catheterizationDateInput)
      .should("be.visible")
      .type("02281984")   //45. input the necessary date

    cy.contains("Which procedure was performed during your most recent Cardiac Catheterization?");     //46. check the title of a header of the section
    cy.get(activityPage.angioplastyStentCathCheckBox)
      .should("be.visible")
      .and("have.text", angioplastyStentCathTitle)    //47. check the visibility of the checkboxes
      .click()                    //48. choose the necessary value
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
      .click()                                 //49. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");  //50. check the title of a header of the page

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
    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";
   
    var selectorText = "Select One";
    var stressTestsQtyValues = [
        "1",
        "2",
        "3",
        "4",
        "5",
    ];
    var catheterizationQtyValues = [
        "1",
        "2",
        "3",
        "4",
        "5",
    ];
    var angioplastyStentCathTitle = "I had a Ballon Angioplasty with Stent";
    var angioplastyNoStentCathTitle = "I had a Ballon Angioplasty, NO Stent";
    var bypassCathTitle = "I had Bypass Surgery";
    var pacemakerCathTitle = "I had a Pacemaker and/or Defibrillator placed";
    var ablationCathTitle = "I had an Ablation for Arrhythmia";        

    cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Please select ONE of the following:");  //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()  //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");  //9. check the title of a header of the page

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //10. validation error message checking

    cy.contains("Do you get chest pain at REST?")   //11. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //12. check the visibility of the checkboxes
      .click()    //13. choose the necessary value      
      .get(activityPage.noPainRestCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //12. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //14. validation error message checking

    cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")   //15. check the title of a header of the section
      .scrollIntoView();
    cy.get(activityPage.yesPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //16. check the visibility of the checkboxes
      .click()    //17. choose the necessary value 
      .get(activityPage.noPainActivityCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //16. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //18. validation error message checking

    cy.contains("Have you had a stress test?");   //19. check the title of a header of the section
    cy.get(activityPage.yesStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //20. check the visibility of the checkboxes
      .click()    //21. choose the necessary value
      .get(activityPage.noStressTestCheckBox)
      .should("be.visible")
      .and("have.text", "No")        //20. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //22. validation error message checking

    cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");   //23. check the title of a header of the section
    cy.get(activityPage.yesCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "Yes")        //24. check the visibility of the checkboxes
      .click()    //25. choose the necessary value
      .get(activityPage.noCatheterizationCheckBox)
      .should("be.visible")
      .and("have.text", "No");        //24. check the visibility of the checkboxes
    cy.get(activityPage.nextBtn)
      .click()                    //26. navigate to the next page 
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");       //27. check the title of a header of the page
    
    cy.contains("How many stress tests have you had?");       //28. check the title of a header of the section
    cy.get(activityPage.stressTestsQtySelect)
      .should("be.visible")
      .and("contain", selectorText)    //29. check the visibility of the selector's content
      for(var i = 0; i<stressTestsQtyValues.length; i++) {
        cy.get(activityPage.stressTestsQtySelect)
          .select(stressTestsQtyValues[i])
          .should("be.visible")
        };    //29. check the visibility of the selector's content
    cy.get(activityPage.stressTestsQtySelect)
      .select("2");                    //30. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //31. validation error message checking

    cy.contains("Approximately when was your most recent stress test?");       //32. check the title of a header of the section
    cy.get(activityPage.stressTestsDateInput)
      .should("be.visible")
      .type("02281984")   //33. input the necessary date
      
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //34. validation error message checking

    cy.contains("Was your most recent stress test normal?");       //35. check the title of a header of the section
    cy.get(activityPage.yesNormalTest)
      .should("be.visible")
      .and("have.text", "Yes")    //36. check the visibility of the checkboxes
      .click()                    //37. choose the necessary value 
      .get(activityPage.noNormalTest)
      .should("be.visible")
      .and("have.text", "No")    //36. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .scrollIntoView()
      .click()            //38. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Heart:");  //39. check the title of a header of the page
     
    cy.contains("How many Cardiac Catheterizations have you had?");     //40. check the title of a header of the section
    cy.get(activityPage.catheterizationQtySelect)
      .should("be.visible")
      .and("contain", selectorText)    //41. check the visibility of the selector's content
      for(var i = 0; i<catheterizationQtyValues.length; i++) {
        cy.get(activityPage.catheterizationQtySelect)
          .select(catheterizationQtyValues[i])
          .should("be.visible")
        };    //41. check the visibility of the selector's content
    cy.get(activityPage.catheterizationQtySelect)
      .select("1");                    //42. choose the necessary value

    cy.get(activityPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //43. validation error message checking

    cy.contains("Approximately when was your most recent Cardiac Catheterization?");     //44. check the title of a header of the section
    cy.get(activityPage.catheterizationDateInput)
      .should("be.visible")
      .type("02281984");   //45. input the necessary date

    cy.contains("Which procedure was performed during your most recent Cardiac Catheterization?");     //46. check the title of a header of the section
    cy.get(activityPage.angioplastyStentCathCheckBox)
      .should("be.visible")
      .and("have.text", angioplastyStentCathTitle)    //47. check the visibility of the checkboxes
      .click()                    //48. choose the necessary value
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
      .click()                                 //49. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");  //50. check the title of a header of the page

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
    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Please select ONE of the following:");  //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //5. validation error message checking

    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.nextBtn)
      .click()  //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");  //9. check the title of a header of the page

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
    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

    cy.visit("/activity.0")   //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?") //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Please select ONE of the following:");  //4. check the title of the section
    cy.get(activityPage.nextBtn)
      .should("be.visible")
      .and("have.text","Next")
      .click()
      .get(activityPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //5. validation error message checking
      
    cy.get(activityPage.strenuousActivityCheckBox)
      .should("be.visible")
      .and("have.text", strenuousActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.recreationalActivityCheckBox)
      .should("be.visible")
      .and("have.text", recreationalActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.twoFlightsActivityCheckBox)
      .should("be.visible")
      .and("have.text", twoFlightsActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneFlightActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneFlightActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.oneBlockActivityCheckBox)
      .should("be.visible")
      .and("have.text", oneBlockActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.shortOfBreathActivityCheckBox)
      .should("be.visible")
      .and("have.text", shortOfBreathActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.wheelchairActivityCheckBox)
      .should("be.visible")
      .and("have.text", wheelchairActivityTitle)   //6. check the visibility of the checkboxes
      .get(activityPage.unableActivityCheckBox)
      .should("be.visible")
      .and("have.text", unableActivityTitle)   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(activityPage.nextBtn)
      .click()  //8. navigate to the next page
      .get(activityPage.headerBar)
      .should("be.visible")
      .and("have.text", "Have you had Surgery in the past?");  //9. check the title of a header of the page

  });
        
})