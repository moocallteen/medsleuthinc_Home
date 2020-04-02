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
        .should("be.visible");

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

    
})