import ohsuLandingPage from "../page-objects/00_landing_page";
import ohsuReferralPage from "../page-objects/01_referral_page";
import ohsuDemographics from "../page-objects/02_race_page";
import ohsuBloodScreening from "../page-objects/03_screening-htn_page";
import ohsuDiabetesScreening from "../page-objects/04_screening-diabetesrx";
import ohsuKidneyStonesScreening from "../page-objects/05_screening-kidneystones";
import ohsuTobaccoScreening from "../page-objects/06_screening-tobacco";
import ohsuDrugAbuseScreening from "../page-objects/07_screening-ildrs";
import ohsuWhatToExpect from "../page-objects/08_what_to_expect";
import ohsuInstructions from "../page-objects/09_instructions";
import ohsuMedConditions from "../page-objects/10_shc-condition-category";
import ohsuMedAllergies from "../page-objects/11_med-allergies";
import ohsuMaterialAllergies from "../page-objects/12_material-allergies";
import ohsuDoYouSmoke from "../page-objects/13_doyousmoke0";
import ohsuAlcohol from "../page-objects/14_alcohol0";
import ohsuDrugs from "../page-objects/15_illicitdrugs0";
// import ohsuActivity0 from "../page-objects/16_activity0";
import ohsuWaitlistInquiry from "../page-objects/17_waitlist-inquiry41";
import ohsuFamilyMedHistory0 from "../page-objects/18_family-medical-history0";
import ohsuFamilyMedHistory1 from "../page-objects/19_family-medical-history1";
import ohsuBloodType0 from "../page-objects/20_blood0";
import ohsuHighriskbehavior1 from "../page-objects/21_highriskbehavior1";
import ohsuRequestAddInfo1 from "../page-objects/22_request-for-additional-info1";
import ohsuEducation from "../page-objects/23_education0";
import ohsuEmploymentYn from "../page-objects/24_employmentyn";
import ohsuLivingArrangement from "../page-objects/25_living-arrangement0";
import ohsuMedInsurance from "../page-objects/26_insurance0";
import ohsuMaritalStatus from "../page-objects/27_maritalstatus0";
import ohsuOffspring from "../page-objects/28_offspring0";
import ohsuMotivation from "../page-objects/29_motivation1";
import ohsuEmergencyContact0 from "../page-objects/30_emergencycontact0";
import ohsuEmergencyContact1 from "../page-objects/31_emergencycontact1";
import ohsuContactInfo from "../page-objects/32_contact0";
import ohsuContSchedule from "../page-objects/33_contact-schedule01";
import ohsuSupplemental from "../page-objects/34_supplemental01";
import ohsuThankYou from "../page-objects/35_thankyou0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("should check the landing-page elements - Named Recipient - Immediate family member scenario", () => {

    /*
    1. navigate to the specified page
    2. check the Logo image visibility
    3. check the header bar visibility
    4. check the visibility of the font shifting buttons
    5. check the visibility of the font shifting buttons
    6. check the survey description text
    7. check the font of the text
    8. click the font-shifting button
    9. check the font of the text
    10. reload page
    11. click the font-shifting button
    12. check the font of the text
    13. check the terms link
    14. click to start the survey
    15. validation error message check
    16. check the "First Name" innput field
    17. type in the required information
    18. check the "Middle Name" innput field
    19. type in the required information
    20. check the "Last Name" innput field
    21. type in the required information
    22. navigate to the next page
    23. validation error message check
    24. check the "Month" innput field
    25. type in the required information
    26. check the "Day" innput field
    27. type in the required information
    28. check the "Year" innput field
    29. type in the required information
    30. validation error message check
    31. check the radio button visibility
    32. choose the necessary value
    33. navigate to the next page
    34. validation error message check
    35. check the selector visibility
    36. check the placeholder visibility
    37. check the selector's content
    38. choose the necessary value
    39. validation error message check
    40. check the selector visibility
    41. check the placeholder visibility
    42. check the selector's content
    43. choose the necessary value
    44. validation error message check
    45. check the "Your Weight" innput field
    46. type in the required information
    47. navigate to the next page
    48. validation error message check
    49. check the innput field
    50. type in the required information
    51. validation error message check
    52. check the selector visibility
    53. check the placeholder visibility
    54. check the selector's content
    55. choose the necessary value
    56. validation error message check
    57. check the innput field
    58. type in the required information
    59. validation error message check
    60. check the selector visibility
    61. check the placeholder visibility
    62. check the selector's content
    63. choose the necessary value
    64. check the innput field
    65. type in the required information
    66. navigate to the next page
    67. check the section description text
    68. validation error message check
    69. check the radio button visibility
    70. choose the necessary value
    71. navigate to the next page
    72. check the title of the current dialog
    73. validation error message check
    74. check the "First Name" innput field
    75. type in the required information
    76. validation error message check
    77. check the "Last Name" innput field
    78. type in the required information
    79. check the "Month" innput field
    80. type in the required information
    81. check the "Day" innput field
    82. type in the required information
    83. check the "Year" innput field
    84. type in the required information
    85. navigate to the next page
    86. check the title of the current dialog
    87. check the section description text
    88. validation error message check
    89. check the radio button visibility
    90. choose the necessary value
    91. navigate to the next page
    92. check the title of the current dialog
    93. check the section description text
    94. validation error message check
    95. check the radio button visibility
    96. choose the necessary value
    97. navigate to the next page
    98. check the title of the current dialog
    */

    var text = "Welcome to the BREEZE TRANSPLANT online health";
    var firstName = "First name";
    var middleName = "Middle name";
    var lastName = "Last name";

    var selectorPlaceHolder = "Select One";
    var feetValues = [
      "3",
      "4",
      "5",
      "6",
      "7"
    ];
    var inchesValues = [
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
      "11"
    ];
    var phoneTypesValues = [
      "Mobile",
      "Home",
      "Work - Shared",
      "Work - Private"
    ];
    var countrySelectValues = [
      "United States",
      "Other"
    ];

    var relationshipHeader = "With regard to your Kidney Donation:";
    var relationshipDescriptionTxt = "Based on the categories below, which would best describe your relationship with the transplant candidate?";
    var immediateTitle = "Immediate family member";
    var extendedTitle = "Extended family member";
    var emotionallyTitle = "Emotionally related to transplant candidate";
    var notRelatedTitle = "Not related to the transplant candidate";

    var immediateFamilyMembers = "Immediate Family Members";
    var chooseFromFollowing = "Choose from the following:";

    var parentTitle = "Parent";
    var childTitle = "Child";
    var spouseTitle = "Spouse";
    var grandarentTitle = "Grand Parent";
    var fullSiblingTitle = "Full Sibling";
    var halfSiblingTitle = "Half Sibling";
    var stepParentTitle = "Step Parent";
    var stepChildTitle = "Step Child";
    var stepSiblingTitle = "Step Sibling";
    var grandChildTitle = "Grand Child";

    var referralHeader = "How did you learn about the opportunity for living organ donation?";

    cy.visit("/landing-page")    //1. navigate to the specified page
      .get(ohsuLandingPage.logo)    //2. check the Logo image visibility
      .should("be.visible")
      .get(ohsuLandingPage.headerBar)    //3. check the header bar visibility
      .should("be.visible")
      .get(ohsuLandingPage.increaseTextSizeBtn)    //4. check the visibility of the font shifting buttons
      .should("be.visible")
      .get(ohsuLandingPage.decreaseTextSizeBtn)    //5. check the visibility of the font shifting buttons
      .should("be.visible")
      .get(ohsuLandingPage.dialogText)    //6. check the survey description text
      .then(el => {
        assert.include(el.text(), text);
      });

    cy.get(ohsuLandingPage.dialogText)    //7. check the font of the text
      .should("have.css", "font-size", "27.2px");

    cy.get(ohsuLandingPage.increaseTextSizeBtn)    //8. click the font-shifting button
      .click()
      .get(ohsuLandingPage.dialogText)    //9. check the font of the text
      .should("have.css", "font-size", "29.0133px");

    cy.reload();    //10. reload page

    cy.get(ohsuLandingPage.decreaseTextSizeBtn)    //11. click the font-shifting button
      .click()
      .get(ohsuLandingPage.dialogText)    //12. check the font of the text
      .should("have.css", "font-size", "25.3867px")

    cy.get(ohsuLandingPage.termsLink)    //13. check the terms link
      .should("be.visible")
      .get(ohsuLandingPage.startSurveyBtn)    //14. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuLandingPage.nextBtn)    //15. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.yourFirstNameField)    //16. check the "First Name" innput field
      .should("be.visible")
      .type(firstName)    //17. type in the required information
      .get(ohsuLandingPage.middleNameField)    //18. check the "Middle Name" innput field
      .should("be.visible")
      .type(middleName)    //19. type in the required information
      .get(ohsuLandingPage.yourLastNameField)    //20. check the "Last Name" innput field
      .should("be.visible")
      .type(lastName)    //21. type in the required information
      .get(ohsuLandingPage.nextBtn)    //22. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.nextBtn)    //23. validation error message check
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.monthField)    //24. check the "Month" innput field
      .should("be.visible")
      .type("01")    //25. type in the required information
      .get(ohsuLandingPage.dayField)    //26. check the "Day" innput field
      .should("be.visible")
      .type("01")    //27. type in the required information
      .get(ohsuLandingPage.yearField)    //28. check the "Year" innput field
      .should("be.visible")
      .type("1991");    //29. type in the required information

    cy.get(ohsuLandingPage.nextBtn)    //30. validation error message check
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.maleRadioBtn)    //31. check the radio button visibility
      .should("be.visible")
      .click()    //32. choose the necessary value
      .get(ohsuLandingPage.femaleRadioBtn)    //31. check the radio button visibility
      .should("be.visible")
      .get(ohsuLandingPage.nextBtn)    //33. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.nextBtn)    //34. validation error message check
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.get(ohsuLandingPage.yourHeightFeetSelect)    //35. check the selector visibility
      .should("be.visible")
      .and("contain", selectorPlaceHolder)    //36. check the placeholder visibility
    for (var i = 0; i < feetValues.length; i++) {
      cy.get(ohsuLandingPage.yourHeightFeetSelect)
        .select(feetValues[i])
        .should("be.visible");
    };    //37. check the selector's content
    cy.get(ohsuLandingPage.yourHeightFeetSelect)    //38. choose the necessary value
      .select("5");

    cy.get(ohsuLandingPage.nextBtn)    //39. validation error message check
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.get(ohsuLandingPage.yourHeightInchesSelect)    //40. check the selector visibility
      .should("be.visible")
      .and("contain", selectorPlaceHolder)    //41. check the placeholder visibility
    for (var i = 0; i < inchesValues.length; i++) {
      cy.get(ohsuLandingPage.yourHeightInchesSelect)
        .select(inchesValues[i])
        .should("be.visible");
    };    //42. check the selector's content
    cy.get(ohsuLandingPage.yourHeightInchesSelect)
      .select("8");    //43. choose the necessary value

    cy.get(ohsuLandingPage.nextBtn)    //44. validation error message check
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.get(ohsuLandingPage.yourWeightFiled)    //45. check the "Your Weight" innput field
      .should("be.visible")
      .type("150")    //46. type in the required information
      .get(ohsuLandingPage.nextBtn)    //47. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.nextBtn)    //48. validation error message check
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.primaryPhoneFiled)    //49. check the innput field
      .should("be.visible")
      .type("555-555-5533");    //50. type in the required information

    cy.get(ohsuLandingPage.nextBtn)    //51. validation error message check
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.phoneNumberTypeSelect)    //52. check the selector visibility
      .should("be.visible")
      .and("contain", selectorPlaceHolder)    //53. check the placeholder visibility
    for (var i = 0; i < phoneTypesValues.length; i++) {
      cy.get(ohsuLandingPage.phoneNumberTypeSelect)
        .select(phoneTypesValues[i])
        .should("be.visible");
    };    //54. check the selector's content
    cy.get(ohsuLandingPage.phoneNumberTypeSelect)    //55. choose the necessary value
      .select("Mobile");

    cy.get(ohsuLandingPage.nextBtn)    //56. validation error message check
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.yourEmailAddressFiled)    //57. check the innput field
      .should("be.visible")
      .type("test@test.com");    //58. type in the required information

    cy.get(ohsuLandingPage.nextBtn)    //59. validation error message check
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.countrySelect)    //60. check the selector visibility
      .should("be.visible")
      .and("contain", selectorPlaceHolder)    //61. check the placeholder visibility
    for (var i = 0; i < countrySelectValues.length; i++) {
      cy.get(ohsuLandingPage.countrySelect)
        .select(countrySelectValues[i])
        .should("be.visible");
    };    //62. check the selector's content
    cy.get(ohsuLandingPage.countrySelect)
      .select("Other");    //63. choose the necessary value

    cy.get(ohsuLandingPage.otherCountryFiled)    //64. check the innput field
      .should("be.visible")
      .type("Austria");    //65. type in the required information

    cy.get(ohsuLandingPage.nextBtn)    //66. navigate to the next page
      .click();

    cy.contains("Donor Type")    //67. check the section description text
      .should("be.visible")
      .get(ohsuLandingPage.nextBtn)    //68. validation error message check
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.iKnowRecipientRadioBtn)    //69. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Named Recipient")
      .click()    //70. choose the necessary value
      .get(ohsuLandingPage.iDontKnowRecipientRadioBtn)    //69. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Altruistic Donor (No Named Recipient)")
      .get(ohsuLandingPage.nextBtn)    //71. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)    //72. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Recipient Information");

    cy.get(ohsuLandingPage.nextBtn)    //73. validation error message check
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.recipientFirstNameInput)    //74. check the "First Name" innput field
      .should("be.visible")
      .type("Named");    //75. type in the required information

    cy.get(ohsuLandingPage.nextBtn)    //76. validation error message check
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.recipientLastNameInput)    //77. check the "Last Name" innput field
      .should("be.visible")
      .type("Recipient");    //78. type in the required information

    cy.get(ohsuLandingPage.monthField)    //79. check the "Month" innput field
      .should("be.visible")
      .type('02')    //80. type in the required information
      .get(ohsuLandingPage.dayField)    //81. check the "Day" innput field
      .should("be.visible")
      .type('28')    //82. type in the required information
      .get(ohsuLandingPage.yearField)    //83. check the "Year" innput field
      .should("be.visible")
      .type('1984')    //84. type in the required information
      .get(ohsuLandingPage.nextBtn)    //85. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)    //86. check the title of the current dialog
      .should("be.visible")
      .and("have.text", relationshipHeader);

    cy.contains(relationshipDescriptionTxt);    //87. check the section description text

    cy.get(ohsuLandingPage.nextBtn)    //88. validation error message check
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.immediateRadioBtn)    //89. check the radio button visibility
      .should("be.visible")
      .and("have.text", immediateTitle)
      .click();    //90. choose the necessary value

    cy.get(ohsuLandingPage.extendedRadioBtn)    //89. check the radio button visibility
      .should("be.visible")
      .and("have.text", extendedTitle);

    cy.get(ohsuLandingPage.emotionallyRadioBtn)    //89. check the radio button visibility
      .should("be.visible")
      .and("have.text", emotionallyTitle);

    cy.get(ohsuLandingPage.notRelatedRadioBtn)    //89. check the radio button visibility
      .should("be.visible")
      .and("have.text", notRelatedTitle);

    cy.get(ohsuLandingPage.nextBtn)    //91. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)    //92. check the title of the current dialog
      .should("be.visible")
      .and("have.text", immediateFamilyMembers);

    cy.contains(chooseFromFollowing);    //93. check the section description text

    cy.get(ohsuLandingPage.nextBtn)    //94. validation error message check
      .scrollIntoView()
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.parentRadioBtn)    //95. check the radio button visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", parentTitle);

    cy.get(ohsuLandingPage.childRadioBtn)    //95. check the radio button visibility
      .should("be.visible")
      .and("have.text", childTitle);

    cy.get(ohsuLandingPage.spouseRadioBtn)    //95. check the radio button visibility
      .should("be.visible")
      .and("have.text", spouseTitle);

    cy.get(ohsuLandingPage.grandarentRadioBtn)    //95. check the radio button visibility
      .should("be.visible")
      .and("have.text", grandarentTitle)
      .click();    //96. choose the necessary value

    cy.get(ohsuLandingPage.fullSiblingRadioBtn)    //95. check the radio button visibility
      .should("be.visible")
      .and("have.text", fullSiblingTitle);

    cy.get(ohsuLandingPage.halfSiblingRadioBtn)    //95. check the radio button visibility
      .should("be.visible")
      .and("have.text", halfSiblingTitle);

    cy.get(ohsuLandingPage.stepParentRadioBtn)    //95. check the radio button visibility
      .should("be.visible")
      .and("have.text", stepParentTitle);

    cy.get(ohsuLandingPage.stepChildRadioBtn)    //95. check the radio button visibility
      .should("be.visible")
      .and("have.text", stepChildTitle);

    cy.get(ohsuLandingPage.stepSiblingRadioBtn)    //95. check the radio button visibility
      .should("be.visible")
      .and("have.text", stepSiblingTitle);

    cy.get(ohsuLandingPage.grandChildRadioBtn)    //95. check the radio button visibility
      .should("be.visible")
      .and("have.text", grandChildTitle);

    cy.get(ohsuLandingPage.nextBtn)    //97. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)    //98. check the title of the current dialog
      .should("be.visible")
      .and("have.text", referralHeader)

  });

  it("should check the landing-page elements - Named Recipient - Extended family member scenario", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. type in the required information
    4. navigate to the next page
    5. type in the required information
    6. choose the necessary value
    7. navigate to the next page
    8. choose the necessary value
    9. type in the required information
    10. navigate to the next page
    11. type in the required information
    12. choose the necessary value
    13. type in the required information
    14. choose the necessary value
    15. navigate to the next page
    16. choose the necessary value
    17. navigate to the next page
    18. check the title of the current dialog
    19. type in the required information
    20. navigate to the next page
    21. check the title of the current dialog
    23. check the section description text
    24. check the radio button visibility
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of the current dialog
    28. check the section description text
    29. check the radio button visibility
    30. choose the necessary value
    31. navigate to the next page
    32. check the title of the current dialog
    */

    var relationshipHeader = "With regard to your Kidney Donation:";
    var relationshipDescriptionTxt = "Based on the categories below, which would best describe your relationship with the transplant candidate?";
    var extendedTitle = "Extended family member";

    var auntuncleTitle = "Aunt/Uncle";
    var nieceNephewTitle = "Niece/Nephew";
    var cousinTitle = "Cousin";
    var parentInLawTitle = "Father/Mother In-Law";
    var siblingInLawTitle = "Sister/Brother In-Law";
    var childInLawTitle = "Son/Daughter In-Law";

    var referralHeader = "How did you learn about the opportunity for living organ donation?";

    cy.visit("/landing-page")    //1. navigate to the specified page
      .get(ohsuLandingPage.startSurveyBtn)    //2. click to start the survey
      .click();

    cy.get(ohsuLandingPage.yourFirstNameField)
      .type("Extended")    //3. type in the required information
      .get(ohsuLandingPage.middleNameField)
      .type("Family")    //3. type in the required information
      .get(ohsuLandingPage.yourLastNameField)
      .type("Member")    //3. type in the required information
      .get(ohsuLandingPage.nextBtn)
      .click();    //4. navigate to the next page

    cy.get(ohsuLandingPage.monthField)
      .type("02")    //5. type in the required information
      .get(ohsuLandingPage.dayField)
      .type("28")    //5. type in the required information
      .get(ohsuLandingPage.yearField)
      .type("1984")    //5. type in the required information
      .get(ohsuLandingPage.femaleRadioBtn)
      .click()    //6. choose the necessary value
      .get(ohsuLandingPage.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuLandingPage.yourHeightFeetSelect)
      .select("5")    //8. choose the necessary value
      .get(ohsuLandingPage.yourHeightInchesSelect)
      .select("6")    //8. choose the necessary value
      .get(ohsuLandingPage.yourWeightFiled)
      .type("110")    //9. type in the required information
      .get(ohsuLandingPage.nextBtn)
      .click();    //10. navigate to the next page

    cy.get(ohsuLandingPage.primaryPhoneFiled)
      .type("555-555-3377")    //11. type in the required information
      .get(ohsuLandingPage.phoneNumberTypeSelect)
      .select("Home")    //12. choose the necessary value
      .get(ohsuLandingPage.yourEmailAddressFiled)
      .type("test@test.com")    //13. type in the required information
      .get(ohsuLandingPage.countrySelect)
      .select("United States")    //14. choose the necessary value
      .get(ohsuLandingPage.nextBtn)
      .click();    //15. navigate to the next page

    cy.get(ohsuLandingPage.iKnowRecipientRadioBtn)
      .should("have.text", "Named Recipient")
      .click()    //16. choose the necessary value
      .get(ohsuLandingPage.nextBtn)
      .click();    //17. navigate to the next page

    cy.get(ohsuLandingPage.dialogHeaderBar)    //18. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Recipient Information");

    cy.get(ohsuLandingPage.recipientFirstNameInput)
      .type("Named")    //19. type in the required information
      .get(ohsuLandingPage.recipientLastNameInput)
      .type("Recipient")    //19. type in the required information
      .get(ohsuLandingPage.monthField)
      .type('10')    //19. type in the required information
      .get(ohsuLandingPage.dayField)
      .type('30')    //19. type in the required information
      .get(ohsuLandingPage.yearField)
      .type('1977')    //19. type in the required information
      .get(ohsuLandingPage.nextBtn)    //20. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)    //21. check the title of the current dialog
      .should("be.visible")
      .and("have.text", relationshipHeader);

    cy.contains(relationshipDescriptionTxt);    //23. check the section description text

    cy.get(ohsuLandingPage.extendedRadioBtn)    //24. check the radio button visibility
      .should("be.visible")
      .and("have.text", extendedTitle)
      .click()    //25. choose the necessary value
      .get(ohsuLandingPage.nextBtn)    //26. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)    //27. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Extended Family Members");

    cy.contains("Choose from the following:");    //28. check the section description text

    cy.get(ohsuLandingPage.auntuncleRadioBtn)    //29. check the radio button visibility
      .should("be.visible")
      .and("have.text", auntuncleTitle);

    cy.get(ohsuLandingPage.nieceNephewRadioBtn)    //29. check the radio button visibility
      .should("be.visible")
      .and("have.text", nieceNephewTitle);

    cy.get(ohsuLandingPage.cousinRadioBtn)    //29. check the radio button visibility
      .should("be.visible")
      .and("have.text", cousinTitle)
      .click();    //30. choose the necessary value

    cy.get(ohsuLandingPage.parentInLawRadioBtn)    //29. check the radio button visibility
      .should("be.visible")
      .and("have.text", parentInLawTitle);

    cy.get(ohsuLandingPage.siblingInLawRadioBtn)    //29. check the radio button visibility
      .should("be.visible")
      .and("have.text", siblingInLawTitle);

    cy.get(ohsuLandingPage.childInLawRadioBtn)    //29. check the radio button visibility
      .should("be.visible")
      .and("have.text", childInLawTitle);

    cy.get(ohsuLandingPage.nextBtn)    //31. navigate to the next page
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)    //32. check the title of the current dialog
      .should("be.visible")
      .and("have.text", referralHeader);

  });

  it("should check the landing-page elements - Altruistic Donor scenario", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. type in the required information
    4. navigate to the next page
    5. type in the required information
    6. choose the necessary value
    7. navigate to the next page
    8. choose the necessary value
    9. type in the required information
    10. navigate to the next page
    11. type in the required information
    12. choose the necessary value
    13. type in the required information
    14. choose the necessary value
    15. navigate to the next page
    16. choose the necessary value
    17. navigate to the next page
    18. check the title of the current dialog
    */

    var referralHeader = "How did you learn about the opportunity for living organ donation?";

    cy.visit("/landing-page")    //1. navigate to the specified page
      .get(ohsuLandingPage.startSurveyBtn)    //2. click to start the survey
      .click();

    cy.get(ohsuLandingPage.yourFirstNameField)
      .type("Very")    //3. type in the required information
      .get(ohsuLandingPage.middleNameField)
      .type("Altruisctic")    //3. type in the required information
      .get(ohsuLandingPage.yourLastNameField)
      .type("Donor")    //3. type in the required information
      .get(ohsuLandingPage.nextBtn)
      .click();    //4. navigate to the next page

    cy.get(ohsuLandingPage.monthField)
      .type("02")    //5. type in the required information
      .get(ohsuLandingPage.dayField)
      .type("28")    //5. type in the required information
      .get(ohsuLandingPage.yearField)
      .type("1984")    //5. type in the required information
      .get(ohsuLandingPage.femaleRadioBtn)
      .click()    //6. choose the necessary value
      .get(ohsuLandingPage.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuLandingPage.yourHeightFeetSelect)
      .select("5")    //8. choose the necessary value
      .get(ohsuLandingPage.yourHeightInchesSelect)
      .select("6")    //8. choose the necessary value
      .get(ohsuLandingPage.yourWeightFiled)
      .type("110")    //9. type in the required information
      .get(ohsuLandingPage.nextBtn)
      .click();    //10. navigate to the next page

    cy.get(ohsuLandingPage.primaryPhoneFiled)
      .type("555-555-3377")    //11. type in the required information
      .get(ohsuLandingPage.phoneNumberTypeSelect)
      .select("Home")    //12. choose the necessary value
      .get(ohsuLandingPage.yourEmailAddressFiled)
      .type("test@test.com")    //13. type in the required information
      .get(ohsuLandingPage.countrySelect)
      .select("United States")    //14. choose the necessary value
      .get(ohsuLandingPage.nextBtn)
      .click();    //15. navigate to the next page

    cy.get(ohsuLandingPage.iDontKnowRecipientRadioBtn)
      .should("have.text", "Altruistic Donor (No Named Recipient)")
      .click()    //16. choose the necessary value
      .get(ohsuLandingPage.nextBtn)
      .click();    //17. navigate to the next page

    cy.get(ohsuLandingPage.dialogHeaderBar)    //18. check the title of the current dialog
      .should("be.visible")
      .and("have.text", referralHeader)

  });

  it("should check the referral.0 page elements", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    */

    var transplantCandidateText = "From the transplant candidate";
    var candidatesSomeoneText = "From someone I know on behalf of the transplant candidate (a family member or friend)";
    var socialMediaText = "From social media (such as Facebook)";
    var myOwnResearchText = "From my own research";
    var anotherPatientText = "From another donor, recipient or patient.";
    var otherText = "Other";

    cy.visit("/referral.0")    //1. navigate to the specified page
      .contains("How did you learn about the opportunity for living organ donation?");    //2. check the title of the current dialog

    cy.get(ohsuReferralPage.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuReferralPage.nextBtn)    //4. validation error message check
      .should("be.visible")
      .get(ohsuReferralPage.nextBtn)
      .click()
      .get(ohsuReferralPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuReferralPage.transplantCandidateRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", transplantCandidateText);

    cy.get(ohsuReferralPage.candidatesSomeoneRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", candidatesSomeoneText);

    cy.get(ohsuReferralPage.socialMediaRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", socialMediaText);

    cy.get(ohsuReferralPage.myOwnResearchRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", myOwnResearchText)
      .click();    //6. choose the necessary value

    cy.get(ohsuReferralPage.anotherPatientRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", anotherPatientText);

    cy.get(ohsuReferralPage.otherRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", otherText);

    cy.get(ohsuReferralPage.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuReferralPage.dialogHeaderBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Demographics");

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

  it("Should check the screening.htn.0 page elements - Yes scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the content visibility
    10. check the placeholder visibility
    11. check the selector's content
    12. navigate to the next page
    13. check the content visibility
    */

    var bloodScreeningHeading = "Do you take any medications to control your Blood Pressure?";
    var medicationQtyTxt = "How many medications do you take to control your blood pressure?";
    var selectorText = "Select One";
    var selectorValues = [
      "1",
      "2",
      ">2"
    ];
    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Your high blood pressure places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.htn.0")    //1. navigate to the specified page
      .contains(bloodScreeningHeading)    //2. check the title of the current dialog
      .should("be.visible");

    cy.get(ohsuBloodScreening.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuBloodScreening.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(ohsuBloodScreening.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuBloodScreening.noRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .get(ohsuBloodScreening.yesRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuBloodScreening.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuBloodScreening.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("contain", medicationQtyTxt)
      .get(ohsuBloodScreening.medicationQtyBar)    //9. check the content visibility
      .should("be.visible")
      .and("contain", selectorText)    //10. check the placeholder visibility
    for (var i = 0; i < selectorValues.length; i++) {
      cy.get(ohsuBloodScreening.medicationQtySelector)
        .select(selectorValues[i])
        .should("be.visible")
    };    //11. check the selector's content

    cy.get(ohsuBloodScreening.nextBtn)
      .click();    //12. navigate to the next page

    cy.contains(rejectionHeader)
      .should("be.visible");    //13. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //13. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //13. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //13. check the content visibility

  });

  it("Should check the screening.htn.0 page elements - No scenario", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the title of the current dialog
    */

    cy.visit("/screening.htn.0")    //1. navigate to the specified page
      .get(ohsuBloodScreening.introStartSurBtn)    //2. click to start the survey
      .click();

    cy.get(ohsuBloodScreening.noRadioBtn)    //3. choose the necessary value
      .click();

    cy.get(ohsuBloodScreening.nextBtn)    //4. navigate to the next page
      .click();

    cy.contains("Do you have Diabetes?")    //5. check the title of the current dialog
      .should("be.visible");

  });

  it("Should check the screening.diabetesrx page elements - Yes scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the content visibility
    */

    var diabetesScreeningHeading = "Do you have Diabetes?";

    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Your diabetes places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.diabetesrx")    //1. navigate to the specified page
      .contains(diabetesScreeningHeading)    //2. check the title of the current dialog
      .should("be.visible");

    cy.get(ohsuDiabetesScreening.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDiabetesScreening.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDiabetesScreening.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDiabetesScreening.noRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .get(ohsuDiabetesScreening.yesRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuDiabetesScreening.nextBtn)
      .click();    //7. navigate to the next page

    cy.contains(rejectionHeader)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //8. check the content visibility

  });

  it("Should check the screening.diabetesrx page elements - No scenario", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the title of the current dialog
    */

    var validationText = "Have you had any kidney stones in the past 10 years?";

    cy.visit("/screening.diabetesrx")    //1. navigate to the specified page
      .get(ohsuDiabetesScreening.introStartSurBtn)    //2. click to start the survey
      .click()
      .get(ohsuDiabetesScreening.noRadioBtn)    //3. choose the necessary value
      .click()
      .get(ohsuDiabetesScreening.nextBtn)    //4. navigate to the next page
      .click()
      .get(ohsuDiabetesScreening.headerBar)    //5. check the title of the current dialog
      .then(el => {
        assert.include(el.text(), validationText)
      });

  });

  it("Should check the screening.kidneystones.everhadthem page elements - Yes scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the content visibility
    */

    var kidneyStonesScreeningHeading = "Have you had any kidney stones in the past 10 years?";
    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Your history of kidney stones places you at increased risk of kidney disease and dangerous complications if you donate your kidney";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.kidneystones.everhadthem")    //1. navigate to the specified page
      .contains(kidneyStonesScreeningHeading)    //2. check the title of the current dialog
      .should("be.visible");

    cy.get(ohsuKidneyStonesScreening.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuKidneyStonesScreening.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuKidneyStonesScreening.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuKidneyStonesScreening.noRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .get(ohsuKidneyStonesScreening.yesRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuKidneyStonesScreening.nextBtn)
      .click();    //7. navigate to the next page

    cy.contains(rejectionHeader)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //8. check the content visibility


  });

  it("Should check the screening.kidneystones.everhadthem page elements - No scenario", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the title of the current dialog
    */

    var pageToCheckTitle = "Do you use tobacco (any type: chewing, vapor, e-cigarette, and/or cigarette) or marijuana?";

    cy.visit("/screening.kidneystones.everhadthem")    //1. navigate to the specified page
      .get(ohsuKidneyStonesScreening.introStartSurBtn)    //2. click to start the survey
      .click()
      .get(ohsuKidneyStonesScreening.noRadioBtn)    //3. choose the necessary value
      .click()
      .get(ohsuKidneyStonesScreening.nextBtn)    //4. navigate to the next page
      .click()
      .get(ohsuKidneyStonesScreening.headerBar)    //5. check the title of the current dialog
      .then(el => {
        assert.include(el.text(), pageToCheckTitle)
      });

  });

  it("Should check the screening.tobacco.standard page elements - Yes-Yes scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. validation error message check
    10. check the radio button visibility
    11. choose the necessary value
    12. navigate to the next page
    13. check the title of the current dialog
    */

    var tobaccoScreeningHeading = "Do you use tobacco (any type: chewing, vapor, e-cigarette, and/or cigarette) or marijuana?";
    var quitHeaderTitle = "Are you willing to quit smoking 4 weeks prior to surgery?";
    var pageToCheckTitle = "Do you use recreational or illicit drugs not including marijuana?";

    cy.visit("/screening.tobacco.standard")    //1. navigate to the specified page
      .contains(tobaccoScreeningHeading)    //2. check the title of the current dialog
      .should("be.visible");

    cy.get(ohsuTobaccoScreening.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuTobaccoScreening.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(ohsuTobaccoScreening.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuTobaccoScreening.noTobaccoRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .get(ohsuTobaccoScreening.yesTobaccoRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuTobaccoScreening.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuTobaccoScreening.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", quitHeaderTitle)
      .get(ohsuTobaccoScreening.nextBtn)    //9. validation error message check
      .and("contain", "Next")
      .click()
      .get(ohsuTobaccoScreening.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuTobaccoScreening.noTobaccoQuitRadioBtn)    //10. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .get(ohsuTobaccoScreening.yesTobaccoQuitRadioBtn)    //10. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .click()    //11. choose the necessary value
      .get(ohsuTobaccoScreening.nextBtn)
      .click()    //12. navigate to the next page
      .get(ohsuTobaccoScreening.headerBar)
      .should("have.text", pageToCheckTitle);    //13. check the title of the current dialog

  });

  it("Should check the screening.tobacco.standard page elements - No scenario", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the title of the current dialog
    */

    var pageToCheckTitle = "Do you use recreational or illicit drugs not including marijuana?";

    cy.visit("/screening.tobacco.standard")    //1. navigate to the specified page
      .get(ohsuTobaccoScreening.introStartSurBtn)    //2. click to start the survey
      .click()
      .get(ohsuTobaccoScreening.noTobaccoRadioBtn)    //3. choose the necessary value
      .click()
      .get(ohsuTobaccoScreening.nextBtn)    //4. navigate to the next page
      .click()
      .get(ohsuTobaccoScreening.headerBar)    //5. check the title of the current dialog
      .should("be.visible")
      .and("have.text", pageToCheckTitle);

  });

  it("Should check the screening.drugabuse page elements - Yes scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the content visibility
    */

    var dialogHeading = "Do you use recreational or illicit drugs not including marijuana?";
    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Stop using illicit drugs for at least 6 months.";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.drugabuse")    //1. navigate to the specified page
      .contains(dialogHeading)    //2. check the title of the current dialog
      .get(ohsuDrugAbuseScreening.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDrugAbuseScreening.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("contain", "Next")
      .click()
      .get(ohsuDrugAbuseScreening.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDrugAbuseScreening.noIlDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .get(ohsuDrugAbuseScreening.yesIlDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuDrugAbuseScreening.nextBtn)
      .click();    //7. navigate to the next page

    cy.contains(rejectionHeader)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //8. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //8. check the content visibility

  });

  it("Should check the screening.drugabuse page elements - No scenario", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of the current dialog
    */

    var dialogHeading = "Do you use recreational or illicit drugs not including marijuana?";
    var headerToCheck = "Before we proceed with the Online Screening, here is some important information.";

    cy.visit("/screening.drugabuse")    //1. navigate to the specified page
      .contains(dialogHeading)    //2. check the title of the current dialog
      .get(ohsuDrugAbuseScreening.introStartSurBtn)    //3. click to start the survey
      .click()
      .get(ohsuDrugAbuseScreening.noIlDrugsRadioBtn)    //4. choose the necessary value
      .click()
      .get(ohsuDrugAbuseScreening.nextBtn)    //5. navigate to the next page
      .click()
      .get(ohsuDrugAbuseScreening.headerBar)    //6. check the title of the current dialog
      .should("be.visible")
      .and("have.text", headerToCheck);

  });

  it("Should check the screening.what_to_expect.0.ohsu page elements", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the content visibility
    5. check the reference visibility
    6. validation error message check
    7. check the checkbox visibility
    8. activate the checkbox
    9. check the input field visibility
    10. navigate to the next page
    11. check the title of the current dialog
    */

    var whatToExpectHeading = "Before we proceed with the Online Screening, here is some important information.";
    var evaluationSomeContent = "All donors are required to come to OHSU for at least one full day of testing and appointments with the living donor team.";
    var consentTermsRefTitle = "Living Donor Consent Terms";
    var consentText = "I consent to initiate the living kidney donation evaluation process and allow the transplant center to review my health questionnaire and any additional health history available in the shared medical record. The review of my medical record is confidential and will be viewed only by individuals directly involved in determining if I am eligible for living donation.";
    var inputHeading = "Please enter your full legal name:Required";
    var instructionsHeading = "This health questionnaire will take approximately 15 to 20 minutes to complete.";

    cy.visit("/what_to_expect.0.ohsu")    //1. navigate to the specified page
      .contains(whatToExpectHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuWhatToExpect.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.contains("Donor Evaluation")    //4. check the content visibility
      .should("be.visible")
      .get(ohsuWhatToExpect.evaluationInfoText)
      .should("be.visible")
      .and("contain", evaluationSomeContent);

    cy.get(ohsuWhatToExpect.consentTermsReference)    //5. check the reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", consentTermsRefTitle);

    cy.get(ohsuWhatToExpect.nextBtn)    //6. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuWhatToExpect.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuWhatToExpect.choiceConsentCheckBox)    //7. check the checkbox visibility
      .should("be.visible")
      .and("have.text", consentText)
      .click();    //8. activate the checkbox

    cy.get(ohsuWhatToExpect.fullLegalNameInput)    //9. check the input field visibility
      .should("be.visible")
      .and("have.text", inputHeading)
      .type("Donor's FullLegal Name");

    cy.get(ohsuWhatToExpect.nextBtn)    //10. navigate to the next page
      .click()
      .get(ohsuWhatToExpect.headerBar)    //11. check the title of the current dialog
      .should("be.visible")
      .and("have.text", instructionsHeading);

  });

  it("Should check the instructions.04 page elements - Enter medications scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the section description text
    6. check the radio button visibility
    7. choose the necessary value
    8. navigate to the next page
    9. check the title of the current dialog
    10. check the section description text
    11. validation error message check
    12. check the innput field
    13. check the placeholder visibility
    14. type in the medication name
    15. check the autosuggest list visibility
    16. choose the necessary item
    17. navigate to the next page
    18. check the title of the current dialog
    19. check the button visibility
    20. click to make changes
    21. click to delete an unnecessary medication
    22. type in the medication name
    23. check the autosuggest list visibility
    24. choose the necessary item
    25. expand to check an additional information of the medication
    26. check the dosage heading visibility
    27. check the frequency heading visibility
    28. check the selector visibility
    29. check the placeholder visibility
    30. check the selector's content
    31. choose the necessary value
    32. check the input visibility
    33. check the placeholder visibility
    34. type in the required information
    35. check the selector visibility
    36. check the placeholder visibility
    37. check the selector's content
    38. choose the necessary value
    39. validation error message check
    40. check the input visibility
    41. check the placeholder visibility
    42. type in the required information
    43. navigate to the next page
    44. check the title of the current dialog
    45. check the section description text
    46. navigate to the next page
    47. check the title of the current dialog
    48. validation error message check
    49. check the checkbox visibility
    50. choose the necessary value
    51. check the innput field
    52. check the section description text
    53. type in the required information
    54. navigate to the next page
    55. check the title of the current dialog
    */

    var instructionsHeading = "This health questionnaire will take approximately 15 to 20 minutes to complete.";
    var enterMedicationsTitle = "Enter medications";
    var doNotTakeMedsTitle = "I do not take any medication";
    var pageContentText = "In order to complete this questionnaire, you will need to provide the names of all medications, vitamins, and herbal supplements that you currently take. Please include those medications that you take on a regular basis, and also those medications that you take occasionally ('as needed')";
    var medsListHeaderTxt = "Please enter your medications, one by one. You may enter either the brand or generic name.";
    var medsInputPlaceholder = "Enter name of medication";
    var selectorPlaceholder = "Select One";
    var dosageHeading = "Dosage (Optional)";
    var doses = [
      "400 mg",
      "800 mg",
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
    var otherInputFieldHeading = "If Other, please explain here:";
    var reasonHeaderTitle = "Please select the reason(s) for taking Asacol?";
    var conditionsHeading = "Do you have or have you had any of the following medical conditions?";

    cy.visit("/instructions.04")    //1. navigate to the specified page
      .contains(instructionsHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuInstructions.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuInstructions.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuInstructions.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.contains(pageContentText)    //5. check the section description text
      .should("be.visible")
      .get(ohsuInstructions.doNotTakeMedsRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", doNotTakeMedsTitle)
      .get(ohsuInstructions.enterMedicationsRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("have.text", enterMedicationsTitle)
      .click()    //7. choose the necessary value
      .get(ohsuInstructions.nextBtn)    //8. navigate to the next page
      .click();

    cy.get(ohsuInstructions.headerBar)    //9. check the title of the current dialog
      .should("be.visible")
      .and("have.text", medsListHeaderTxt);

    cy.contains("Search for medications")    //10. check the section description text
      .get(ohsuInstructions.nextBtn)    //11. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuInstructions.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Please enter some medications");

    cy.get(ohsuInstructions.medsInputField)    //12. check the innput field
      .should("be.visible")
      .and("have.attr", "placeholder", medsInputPlaceholder)    //13. check the placeholder visibility
      .type("Vitamin C")    //14. type in the medication name
      .get(ohsuInstructions.medsListWrapper)    //15. check the autosuggest list visibility
      .should("be.visible")
      .and("contain", "Vitamin C")
      .get(ohsuInstructions.suggestedItem)    //16. choose the necessary item
      .should("be.visible")
      .and("contain", "Vitamin C")
      .click();

    cy.get(ohsuInstructions.nextBtn)    //17. navigate to the next page
      .click()
      .get(ohsuInstructions.headerBar)    //18. check the title of the current dialog
      .should("be.visible")
      .and("have.text", listConfirmHeaderTxt)
      .get(ohsuInstructions.nextBtn)    //19. check the button visibility
      .should("be.visible")
      .and("have.text", "Next")
      .get(ohsuInstructions.makeChangeBtn)    //19. check the button visibility
      .should("be.visible")
      .and("have.text", "Make Changes")
      .click();    //20. click to make changes

    cy.get(ohsuInstructions.medsDropdownCloseBtn)    //21. click to delete an unnecessary medication
      .should("be.visible")
      .click();

    cy.get(ohsuInstructions.medsInputField)    //22. type in the medication name
      .type("Asacol")
      .wait(100)
      .get(ohsuInstructions.medsListWrapper)    //23. check the autosuggest list visibility
      .should("be.visible")
      .and("contain", "Asacol")
      .get(ohsuInstructions.suggestedItem)    //24. choose the necessary item
      .should("be.visible")
      .and("contain", "Asacol")
      .click()
      .get(ohsuInstructions.medsDropdownExpandBtn)    //25. expand to check an additional information of the medication
      .should("be.visible")
      .click();

    cy.get(ohsuInstructions.medsInfoBar)
      .should("contain", dosageHeading)    //26. check the dosage heading visibility
      .and("contain", frequencyHeading)    //27. check the frequency heading visibility
      .get(ohsuInstructions.dosageSelector)    //28. check the selector visibility
      .should("be.visible")
      .and("contain", selectorPlaceholder)    //29. check the placeholder visibility
    for (var i = 0; i < doses.length; i++) {
      cy.get(ohsuInstructions.dosageSelector)
        .select(doses[i])
        .should("be.visible");
    };    //30. check the selector's content
    cy.get(ohsuInstructions.dosageSelector)
      .select("Other");    //31. choose the necessary value

    cy.get(ohsuInstructions.dosageOtherInput)    //32. check the input visibility
      .should("be.visible")
      .and("have.attr", "placeholder", "Dosage")    //33. check the placeholder visibility
      .type("Random Dosage");    //34. type in the required information

    cy.get(ohsuInstructions.frequencySelector)    //35. check the selector visibility
      .should("be.visible")
      .and("contain", selectorPlaceholder)    //36. check the placeholder visibility
    for (var i = 0; i < frequences.length; i++) {
      cy.get(ohsuInstructions.frequencySelector)
        .select(frequences[i])
        .should("be.visible");
    };    //37. check the selector's content
    cy.get(ohsuInstructions.frequencySelector)
      .select("Other");    //38. choose the necessary value

    cy.get(ohsuInstructions.nextBtn)    //39. validation error message check
      .click()
      .get(ohsuInstructions.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Please fill in dose and frequency information");

    cy.get(ohsuInstructions.frequencyOtherInput)    //40. check the input visibility
      .should("be.visible")
      .and("have.attr", "placeholder", "Frequency")    //41. check the placeholder visibility
      .type("Random Frequency");    //42. type in the required information

    cy.get(ohsuInstructions.nextBtn)    //43. navigate to the next page
      .click()
      .get(ohsuInstructions.headerBar)    //44. check the title of the current dialog
      .should("be.visible")
      .and("have.text", listConfirmHeaderTxt)    //45. check the section description text
      .get(ohsuInstructions.nextBtn)    //46. navigate to the next page
      .click();

    cy.get(ohsuInstructions.headerBar)    //47. check the title of the current dialog
      .should("be.visible")
      .and("have.text", reasonHeaderTitle);

    cy.get(ohsuInstructions.nextBtn)    //48. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuInstructions.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuInstructions.proctitisCheckBox)    //49. check the checkbox visibility
      .should("be.visible")
      .and("have.text", "Proctitis (Inflammation of the Rectum)")
      .click()    //50. choose the necessary value
      .get(ohsuInstructions.colitisCheckBox)    //49. check the checkbox visibility
      .should("be.visible")
      .and("have.text", "Ulcerative Colitis")
      .get(ohsuInstructions.otherCheckBox)    //49. check the checkbox visibility
      .should("be.visible")
      .and("have.text", "Other")
      .click()    //50. choose the necessary value
      .get(ohsuInstructions.idkCheckBox)    //49. check the checkbox visibility
      .should("be.visible")
      .and("have.text", "I do not know");

    cy.get(ohsuInstructions.otherInputField)    //51. check the innput field
      .should("be.visible")
      .contains(otherInputFieldHeading)    //52. check the section description text
      .should("be.visible");

    cy.get(ohsuInstructions.otherInputField)
      .type("Other Reason");    //53. type in the required information

    cy.get(ohsuInstructions.nextBtn)    //54. navigate to the next page
      .click()
    cy.get(ohsuInstructions.headerBar)    //55. check the title of the current dialog
      .should("be.visible")
      .and("have.text", conditionsHeading);

  });

  it("Should check the instructions.04 page elements - I do not take any medication scenario ", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the title of the current dialog
    */

    var conditionsHeading = "Do you have or have you had any of the following medical conditions?";

    cy.visit("instructions.04")    //1. navigate to the specified page
      .get(ohsuInstructions.introStartSurBtn)    //2. click to start the survey
      .click()
      .get(ohsuInstructions.doNotTakeMedsRadioBtn)    //3. choose the necessary value
      .click()
      .get(ohsuInstructions.nextBtn)    //4. navigate to the next page
      .click()
      .get(ohsuInstructions.headerBar)    //5. check the title of the current dialog
      .should("be.visible")
      .and("have.text", conditionsHeading);

  });

  it("Should check the shc-condition-category page elements - No follow-ups scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the section description text
    6. check the radio button visibility
    7. choose the necessary value
    8. check the data target reference visibility
    9. check the data target reference title
    10. open the examples modal
    11. check the modal's content
    12. close the examples modal
    13. navigate to the next page
    14. check the title of the current dialog
    */

    var medConditionsHeading = "Do you have or have you had any of the following medical conditions?";
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

    cy.visit("/shc-condition-category")    //1. navigate to the specified page
      .contains(medConditionsHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuMedConditions.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.get(ohsuMedConditions.nextBtn)    //4. validation error message check
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedConditions.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.contains("Airway and/or Lungs")    //5. check the section description text
      .scrollIntoView();

    cy.get(ohsuMedConditions.yesAirwaysRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noAirwaysRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetAirways)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.airwaysModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", airwayModalContent);

    cy.get(ohsuMedConditions.airwaysModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Blood Disorder (Abnormal Bruising, Bleeding, or Clotting)");    //5. check the section description text
    cy.get(ohsuMedConditions.yesBloodDisRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noBloodDisRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetBloodDis)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.bloodDisModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", bloodDisModalContent);

    cy.get(ohsuMedConditions.bloodDisModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Cancer, Chemotherapy, and/or Radiation Therapy");    //5. check the section description text
    cy.get(ohsuMedConditions.yesCancerRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noCancerRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetCancer)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.cancerModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", cancerModalContent);

    cy.get(ohsuMedConditions.cancerModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Diabetes, Thyroid, Adrenal and/or other Endocrine Disorder");    //5. check the section description text
    cy.get(ohsuMedConditions.yesDiabetesRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noDiabetesRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetDiabetes)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.diabetesModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", diabetesModalContent);

    cy.get(ohsuMedConditions.diabetesModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Digestive Tract and/or Liver Disease");    //5. check the section description text
    cy.get(ohsuMedConditions.yesDigestiveTractRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noDigestiveTractRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetDigestiveTract)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.digestiveTractModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", digestiveTractModalContent);

    cy.get(ohsuMedConditions.digestiveTractModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Heart and/or Circulatory System");    //5. check the section description text
    cy.get(ohsuMedConditions.yesHeartRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noHeartRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetHeart)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.heartModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", heartModalContent);

    cy.get(ohsuMedConditions.heartModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Immune-Mediated Diseases");    //5. check the section description text
    cy.get(ohsuMedConditions.yesImmuneMedRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noImmuneMedRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetImmuneMed)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.immuneMedModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", immuneMedModalContent);

    cy.get(ohsuMedConditions.immuneMedModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Infection");    //5. check the section description text
    cy.get(ohsuMedConditions.yesInfectionRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noInfectionRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetInfection)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.infectionModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", infectionModalContent);

    cy.get(ohsuMedConditions.infectionModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Kidneys and/or Bladder");    //5. check the section description text
    cy.get(ohsuMedConditions.yesKidneysRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noKidneysRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetKidneys)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.kidneysModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", kidneysModalContent);

    cy.get(ohsuMedConditions.kidneysModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Mental Well-Being");    //5. check the section description text
    cy.get(ohsuMedConditions.yesMentalWellRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noMentalWellRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetMentalWell)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.mentalWellModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", mentalWellModalContent);

    cy.get(ohsuMedConditions.mentalWellModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Muscles, Bones, and/or Joints");    //5. check the section description text
    cy.get(ohsuMedConditions.yesMusclesRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noMusclesRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetMuscles)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.musclesModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", musclesModalContent);

    cy.get(ohsuMedConditions.musclesModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Neurological Deficit (Brain and/or Spine)");    //5. check the section description text
    cy.get(ohsuMedConditions.yesNeuroDefRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noNeuroDefRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetNeuroDef)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.neuroDefModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", neuroDefModalContent);

    cy.get(ohsuMedConditions.neuroDefModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.get(ohsuMedConditions.nextBtn)    //13. navigate to the next page
      .click()
      .wait(200)
      .get(ohsuMedConditions.headerBar)
      .should("be.visible")
      .and("contain", "Do you have any ALLERGIES to medications?");    //14. check the title of the current dialog

  });

  it("Should check the shc-condition-category page elements -  Airway and/or Lungs conditions - Asthma follow-up scenario ", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the section description text
    6. check the checkbox visibility
    7. validation error message check
    8. choose the necessary value
    9. navigate to the next page
    10. check the title of the current dialog
    11. check the section description text
    12. check the radio button visibility
    13. choose the necessary value
    14. navigate to the next page
    15. check the title of the current dialog
    */

    var airwaysConditionsListHeading = "A condition related to Airway and/or Lungs. Please check all that apply:";
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

    cy.visit("/shc-condition-category")    //1. navigate to the specified page
      .get(ohsuMedConditions.introStartSurBtn)    //2. click to start the survey
      .click();

    cy.get(ohsuMedConditions.yesAirwaysRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noBloodDisRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noCancerRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noDiabetesRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noDigestiveTractRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noHeartRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noImmuneMedRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noInfectionRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noKidneysRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noMentalWellRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noMusclesRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noNeuroDefRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.nextBtn)    //4. navigate to the next page
      .click();

    cy.get(ohsuMedConditions.headerBar)    //5. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Specifically, which of the following conditions apply?");

    cy.contains(airwaysConditionsListHeading);    //5. check the section description text
    cy.get(ohsuMedConditions.asthmaCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", asthmaCondText);

    cy.get(ohsuMedConditions.bronchiectasisCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", bronchiectasisCondText);

    cy.get(ohsuMedConditions.chronicBronchitisCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", chronicBronchitisCondText);

    cy.get(ohsuMedConditions.fluidAroundLungsCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", fluidAroundLungsCondText);

    cy.get(ohsuMedConditions.fluidInLungsCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", fluidInLungsCondText);

    cy.get(ohsuMedConditions.ildCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", ildCondText);

    cy.get(ohsuMedConditions.pneumoniaCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", pneumoniaCondText);

    cy.get(ohsuMedConditions.pneumothoraxCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", pneumothoraxCondText);

    cy.get(ohsuMedConditions.pulmonaryFibrosisCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", pulmonaryFibrosisCondText);

    cy.get(ohsuMedConditions.sleepApneaCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", sleepApneaCondText);

    cy.get(ohsuMedConditions.influenzaCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", influenzaCondText);

    cy.get(ohsuMedConditions.tuberculosisCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", tuberculosisCondText);

    cy.get(ohsuMedConditions.urtInfectionCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", urtInfectionCondText);

    cy.get(ohsuMedConditions.nextBtn)    //7. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedConditions.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuMedConditions.asthmaCheckBox)    //8. choose the necessary value
      .scrollIntoView()
      .click()
      .get(ohsuMedConditions.nextBtn)    //9. navigate to the next page
      .click()
      .get(ohsuMedConditions.headerBar)    //10. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "With regard to your Asthma?");

    cy.get(ohsuMedConditions.steroidsQuery)    //11. check the section description text
      .should("be.visible")
      .and("contain", steroidsQueryHeading);

    cy.get(ohsuMedConditions.yesSteroidsQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .get(ohsuMedConditions.noSteroidsQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click();    //13. choose the necessary value

    cy.get(ohsuMedConditions.hospitalizedQuery)    //11. check the section description text
      .should("be.visible")
      .and("contain", hospitalizedQueryHeading)
      .get(ohsuMedConditions.yesHospitalizedQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .get(ohsuMedConditions.noHospitalizedQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click();    //13. choose the necessary value

    cy.get(ohsuMedConditions.intubatedQuery)    //11. check the section description text
      .should("be.visible")
      .and("contain", intubatedQueryHeading)
      .get(ohsuMedConditions.yesIntubatedQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .get(ohsuMedConditions.noIntubatedQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click()    //13. choose the necessary value
      .get(ohsuMedConditions.nextBtn)    //14. navigate to the next page
      .click()
      .get(ohsuMedConditions.headerBar)    //15. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Do you have any ALLERGIES to medications?");

  });

  it("Should check the med-allergies page elements - Yes Vitamin C scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    10. validation error message check
    11. check the innput field
    12. check the placeholder visibility
    13. type in the medication name
    14. check the autosuggest list visibility
    15. choose the necessary item
    16. navigate to the next page
    17. check the chosen item name
    18. check the title of the current dialog
    19. check the title of the current dialog
    20. check the button visibility
    21. click to make changes
    22. check the title of the current dialog
    23. click to delete an unnecessary medication
    24. type in the medication name
    25. check the autosuggest list visibility
    26. choose the necessary item
    27. navigate to the next page
    28. check the chosen item name
    29. check the button visibility
    30. navigate to the next page
    31. check the section description text
    32. check the title of the current dialog
    33. validation error message check
    34. check the checkbox visibility
    35. choose the necessary value
    36. type in the required information
    37. navigate to the next page
    38. check the title of the current dialog
    39. check the section description text
    */

    var medAllergiesHeading = "Do you have any ALLERGIES to medications?";
    var medsListHeading = "Please enter the medications to which you are allergic, one by one:";
    var makeChangesHeading = "Are you allergic to any other medications besides the following? If No, please continue.";
    var medsInputPlaceholder = "Enter name of medication";

    var anaphylaxisReactionCheckBoxTitle = "ANAPHYLAXIS";
    var anxietyReactionCheckBoxTitle = "Anxiety";
    var breathIssuesReactionCheckBoxTitle = "Difficulty breathing, speaking and/or swallowing";
    var nauseaReactionCheckBoxTitle = "Nausea and/or Vomiting";
    var rashHivesReactionCheckBoxTitle = "Rash or Hives";
    var swellingReactionCheckBoxTitle = "Swelling of the eyes, face, lips, throat and/or tongue";
    // var otherReactionCheckBoxTitle = "Other";

    var materialsAllergiesHeading = "Are you allergic to any of the following?";

    cy.visit("/med-allergies")    //1. navigate to the specified page
      .contains(medAllergiesHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuMedAllergies.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.get(ohsuMedAllergies.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedAllergies.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuMedAllergies.noMedAllergies)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .get(ohsuMedAllergies.yesMedAllergies)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .click();    //6. choose the necessary value

    cy.get(ohsuMedAllergies.nextBtn)    //7. navigate to the next page
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedAllergies.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", medsListHeading);

    cy.contains("Search for medications")    //9. check the section description text
      .should("be.visible")
      .get(ohsuMedAllergies.nextBtn)    //10. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedAllergies.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Please add medications");

    cy.get(ohsuMedAllergies.medsInputField)    //11. check the innput field
      .should("be.visible")
      .and("have.attr", "placeholder", medsInputPlaceholder)    //12. check the placeholder visibility
      .type("Aspirin")    //13. type in the medication name
      .get(ohsuMedAllergies.medsListWrapper)    //14. check the autosuggest list visibility
      .should("be.visible")
      .and("contain", "Aspirin")
      .get(ohsuMedAllergies.firstSuggestedItem)    //15. choose the necessary item
      .should("be.visible")
      .and("contain", "Aspirin")
      .click()
      .get(ohsuMedAllergies.nextBtn)    //16. navigate to the next page
      .click();

    cy.contains("Aspirin")    //17. check the chosen item name
      .should("be.visible")
      .get(ohsuMedAllergies.headerBar)    //18. check the title of the current dialog
      .should("be.visible")
      .and("have.text", makeChangesHeading)    //19. check the title of the current dialog
      .get(ohsuMedAllergies.nextBtn)    //20. check the button visibility
      .should("be.visible")
      .and("have.text", "Next")
      .get(ohsuMedAllergies.makeChangesBtn)    //20. check the button visibility
      .should("be.visible")
      .and("contain", "Make Changes")
      .click();    //21. click to make changes

    cy.get(ohsuMedAllergies.headerBar)    //22. check the title of the current dialog
      .should("be.visible")
      .and("have.text", medsListHeading)
      .get(ohsuMedAllergies.deleteMedBtn)    //23. click to delete an unnecessary medication
      .should("be.visible")
      .click();

    cy.get(ohsuMedAllergies.medsInputField)    //24. type in the medication name
      .type("Vitamin C")
      .get(ohsuMedAllergies.medsListWrapper)    //25. check the autosuggest list visibility
      .should("be.visible")
      .and("contain", "Vitamin C")
      .get(ohsuMedAllergies.firstSuggestedItem)    //26. choose the necessary item
      .should("be.visible")
      .and("contain", "Vitamin C")
      .click()
      .get(ohsuMedAllergies.nextBtn)    //27. navigate to the next page
      .click();

    cy.contains("Vitamin C")    //28. check the chosen item name
      .should("be.visible")
      .get(ohsuMedAllergies.makeChangesBtn)    //29. check the button visibility
      .should("be.visible")
      .and("contain", "Make Changes")
      .get(ohsuMedAllergies.nextBtn)    //29. check the button visibility
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //30. navigate to the next page

    cy.contains("If Other, please explain:")    //31. check the section description text
      .get(ohsuMedAllergies.headerBar)    //32. check the title of the current dialog
      .should("be.visible")
      .and("contain", "What allergic reactions do you have to Vitamin C?");

    cy.get(ohsuMedAllergies.nextBtn)    //33. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedAllergies.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required")
      .wait(300);

    cy.get(ohsuMedAllergies.anaphylaxisReactionCheckBox)    //34. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", anaphylaxisReactionCheckBoxTitle);

    cy.get(ohsuMedAllergies.anxietyReactionCheckBox)    //34. check the checkbox visibility
      .should("be.visible")
      .and("have.text", anxietyReactionCheckBoxTitle)
      .click();    //35. choose the necessary value

    cy.get(ohsuMedAllergies.breathIssuesReactionCheckBox)    //34. check the checkbox visibility
      .should("be.visible")
      .and("have.text", breathIssuesReactionCheckBoxTitle);

    cy.get(ohsuMedAllergies.nauseaReactionCheckBox)    //34. check the checkbox visibility
      .should("be.visible")
      .and("have.text", nauseaReactionCheckBoxTitle);

    cy.get(ohsuMedAllergies.rashHivesReactionCheckBox)    //34. check the checkbox visibility
      .should("be.visible")
      .and("have.text", rashHivesReactionCheckBoxTitle);

    cy.get(ohsuMedAllergies.swellingReactionCheckBox)    //34. check the checkbox visibility
      .should("be.visible")
      .and("have.text", swellingReactionCheckBoxTitle);

    // cy.get(ohsuMedAllergies.otherReactionCheckBox)    //34. check the checkbox visibility
    // .should("be.visible")
    // .and("have.text", otherReactionCheckBoxTitle)
    // .click();    //35. choose the necessary value

    cy.get(ohsuMedAllergies.otherInputField)    //36. type in the required information
      .type("Other Reaction")
      .get(ohsuMedAllergies.nextBtn)    //37. navigate to the next page
      .click();

    cy.get(ohsuMedAllergies.headerBar)    //38. check the title of the current dialog
      .should("be.visible")
      .and("have.text", materialsAllergiesHeading);

    cy.contains("Please check all that apply:");    //39. check the section description text

  });

  it("Should check the med-allergies page elements - No scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of the current dialog
    7. check the section description text
    */

    var medAllergiesHeading = "Do you have any ALLERGIES to medications?";
    var materialsAllergiesHeading = "Are you allergic to any of the following?";

    cy.visit("/med-allergies")    //1. navigate to the specified page
      .contains(medAllergiesHeading)    //2. check the title of the current dialog
      .get(ohsuMedAllergies.introStartSurBtn)    //3. click to start the survey
      .click();

    cy.get(ohsuMedAllergies.noMedAllergies)    //4. choose the necessary value
      .click()
      .get(ohsuMedAllergies.nextBtn)    //5. navigate to the next page
      .click()
      .get(ohsuMedAllergies.headerBar)    //6. check the title of the current dialog
      .should("be.visible")
      .and("have.text", materialsAllergiesHeading);

    cy.contains("Please check all that apply:");    //7. check the section description text

  });

  it("Should check the material-allergies page elements - Betadine scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the section description text
    5. check the checkbox visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    10. validation error message check
    11. check the checkbox visibility
    12. choose the necessary value
    13. check the section description text
    14. type in the required information
    15. navigate to the next page
    16. check the title of the current dialog
    */

    var matAllergiesHeading = "Are you allergic to any of the following?";
    var betadineMaterialAllergyTitle = "Betadine";
    var chlorhexidineMaterialAllergyTitle = "Chlorhexidine";
    var contrastMaterialAllergyTitle = "Contrast (X-Ray Dye)";
    var iodineMaterialAllergyTitle = "Iodine";
    var latexMaterialAllergyTitle = "LATEX";
    var tapeMaterialAllergyTitle = "Tape";
    var noMaterialAllergyTitle = "NO, I am NOT Allergic to ANY of the items on this list";

    var reactionNatureHeading = "What is the nature of your allergy to Betadine?";
    var anaphylaxisReactionTitle = "ANAPHYLAXIS";
    var anxietyReactionTitle = "Anxiety";
    var breathIssuesReactionTitle = "Difficulty breathing, speaking and/or swallowing";
    var nauseaReactionTitle = "Nausea and/or Vomiting";
    var rashHivesReactionTitle = "Rash or Hives";
    var swellingReactionTitle = "Swelling of the eyes, face, lips, throat and/or tongue";

    cy.visit("/material-allergies")    //1. navigate to the specified page
      .contains(matAllergiesHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuMaterialAllergies.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.contains("Please check all that apply:");    //4. check the section description text

    cy.get(ohsuMaterialAllergies.betadineMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", betadineMaterialAllergyTitle)
      .click();    //6. choose the necessary value

    cy.get(ohsuMaterialAllergies.chlorhexidineMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", chlorhexidineMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.contrastMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", contrastMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.iodineMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", iodineMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.latexMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", latexMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.tapeMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", tapeMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.noMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", noMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.nextBtn)    //7. navigate to the next page
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.get(ohsuMaterialAllergies.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", reactionNatureHeading);
    cy.contains("Please check all that apply:");    //9. check the section description text

    cy.get(ohsuMaterialAllergies.nextBtn)    //10. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMaterialAllergies.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuMaterialAllergies.anaphylaxisReactionCheckBox)    //11. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", anaphylaxisReactionTitle);

    cy.get(ohsuMaterialAllergies.anxietyReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", anxietyReactionTitle)
      .click();    //12. choose the necessary value

    cy.get(ohsuMaterialAllergies.breathIssuesReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", breathIssuesReactionTitle);

    cy.get(ohsuMaterialAllergies.nauseaReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", nauseaReactionTitle);

    cy.get(ohsuMaterialAllergies.rashHivesReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", rashHivesReactionTitle);

    cy.get(ohsuMaterialAllergies.swellingReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", swellingReactionTitle);

    // cy.get(ohsuMaterialAllergies.otherReactionCheckBox)    //11. check the checkbox visibility
    // .should("be.visible")
    // .and("have.text", otherReactionTitle)
    // .click();    //12. choose the necessary value

    cy.contains("If Other, please explain:")    //12. check the section description text
      .should("be.visible")
      .get(ohsuMaterialAllergies.otherInputField)    //13. type in the required information
      .type("Other Reaction");

    cy.get(ohsuMaterialAllergies.nextBtn)    //14. navigate to the next page
      .click();

    cy.get(ohsuMaterialAllergies.headerBar)    //15. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?")

  });

  it("Should check the material-allergies page elements - NO, I am NOT Allergic scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the section description text
    5. check the checkbox visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    */

    var matAllergiesHeading = "Are you allergic to any of the following?";
    var noMaterialAllergyTitle = "NO, I am NOT Allergic to ANY of the items on this list";

    cy.visit("/material-allergies")    //1. navigate to the specified page
      .contains(matAllergiesHeading)    //2. check the title of the current dialog
      .get(ohsuMaterialAllergies.introStartSurBtn)    //3. click to start the survey
      .click();

    cy.contains("Please check all that apply:");    //4. check the section description text

    cy.get(ohsuMaterialAllergies.noMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("have.text", noMaterialAllergyTitle)
      .click()    //6. choose the necessary value
      .get(ohsuMaterialAllergies.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuMaterialAllergies.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?");

  });

  it("Should check the doyousmoke.0 page elements - Yes scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    10. validation error message check
    11. check the selector visibility
    12. check the placeholder visibility
    13. check the selector's content
    14. choose the necessary value
    15. validation error message check
    16. check the selector visibility
    17. check the placeholder visibility
    18. check the selector's content
    19. choose the necessary value
    20. navigate to the next page
    21. check the title of the current dialog
    22. check the section description text
    */

    var currentUseHeading = "With regard to your current tobacco use:";
    var yearsCurrentHeading = "Approximately, how many years have you smoked?";
    var packsCurrentHeading = "Approximately, how many packs per day?";

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
    var alcoholHeading = "Approximately, how often do you drink beer, wine, or liquor?";

    cy.visit("/doyousmoke.0")    //1. navigate to the specified page
      .contains("Do you smoke cigarettes?")    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuDoYouSmoke.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDoYouSmoke.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDoYouSmoke.yesDoYouSmokeRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuDoYouSmoke.noDoYouSmokeRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .get(ohsuDoYouSmoke.usedToDoYouSmokeRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "I Used To")
      .get(ohsuDoYouSmoke.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", currentUseHeading);

    cy.contains(yearsCurrentHeading);    //9. check the section description text
    cy.contains(packsCurrentHeading);    //9. check the section description text

    cy.get(ohsuDoYouSmoke.nextBtn)    //10. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDoYouSmoke.yearsQuantitySelector)    //11. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //12. check the placeholder visibility
    for (var i = 0; i < yearsValues.length; i++) {
      cy.get(ohsuDoYouSmoke.yearsQuantitySelector)
        .select(yearsValues[i])
        .should("be.visible")
    };    //13. check the selector's content
    cy.get(ohsuDoYouSmoke.yearsQuantitySelector)
      .select("5");    //14. choose the necessary value

    cy.get(ohsuDoYouSmoke.nextBtn)    //15. validation error message check
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDoYouSmoke.packsQuantitySelector)    //16. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //17. check the placeholder visibility
    for (var i = 0; i < packsValues.length; i++) {
      cy.get(ohsuDoYouSmoke.packsQuantitySelector)
        .select(packsValues[i])
        .should("be.visible")
    };    //18. check the selector's content
    cy.get(ohsuDoYouSmoke.packsQuantitySelector)
      .select("1/4 pack");    //19. choose the necessary value

    cy.get(ohsuDoYouSmoke.nextBtn)    //20. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //21. check the title of the current dialog
      .should("be.visible")
      .and("have.text", alcoholHeading);

    cy.contains("Do you have a history of Alcohol Abuse?");    //22. check the section description text

  });

  it("Should check the doyousmoke.0 page elements - No scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the radio button visibility
    5. choose the necessary value
    6. navigate to the next page
    7. check the title of the current dialog
    8. check the section description text
    */

    var alcoholHeading = "Approximately, how often do you drink beer, wine, or liquor?";

    cy.visit("/doyousmoke.0")    //1. navigate to the specified page
      .contains("Do you smoke cigarettes?")    //2. check the title of the current dialog
      .get(ohsuDoYouSmoke.introStartSurBtn)    //3. click to start the survey
      .click();

    cy.get(ohsuDoYouSmoke.noDoYouSmokeRadioBtn)    //4. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click()    //5. choose the necessary value
      .get(ohsuDoYouSmoke.nextBtn)    //6. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //7. check the title of the current dialog
      .should("be.visible")
      .and("have.text", alcoholHeading);
    cy.contains("Do you have a history of Alcohol Abuse?");    //8. check the section description text

  });

  it("Should check the doyousmoke.0 page elements - I Used To scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the radio button visibility
    5. choose the necessary value
    6. navigate to the next page
    7. check the section description text
    8. validation error message check
    9. check the selector visibility
    10. check the placeholder visibility
    11. check the selector's content
    12. choose the necessary value
    13. navigate to the next page
    14. check the title of the current dialog
    15. check the section description text
    16. validation error message check
    17. check the selector visibility
    18. check the placeholder visibility
    19. check the selector's content
    20. choose the necessary value
    21. validation error message check
    22. check the selector visibility
    23. check the placeholder visibility
    24. check the selector's content
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of the current dialog
    28. check the section description text
    */

    var pastUseHeading = "With regard to your past tobacco use:";
    var yearsPastHeading = "Approximately, how many years have you smoked?";
    var packsPastHeading = "Approximately, how many packs per day?";

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
    var alcoholHeading = "Approximately, how often do you drink beer, wine, or liquor?";

    cy.visit("/doyousmoke.0")    //1. navigate to the specified page
      .contains("Do you smoke cigarettes?")    //2. check the title of the current dialog
      .get(ohsuDoYouSmoke.introStartSurBtn)    //3. click to start the survey
      .click();

    cy.get(ohsuDoYouSmoke.usedToDoYouSmokeRadioBtn)    //4. check the radio button visibility
      .should("be.visible")
      .and("have.text", "I Used To")
      .click()    //5. choose the necessary value
      .get(ohsuDoYouSmoke.nextBtn)    //6. navigate to the next page
      .click();

    cy.contains(pastUseHeading);    //7. check the section description text
    cy.contains("What year did you quit?");    //7. check the section description text

    cy.get(ohsuDoYouSmoke.nextBtn)    //8. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDoYouSmoke.quitYearSelector)    //9. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //10. check the placeholder visibility
    for (var i = 0; i < quitYearValues.length; i++) {
      cy.get(ohsuDoYouSmoke.quitYearSelector)
        .select(quitYearValues[i])
        .should("be.visible")
    };    //11. check the selector's content
    cy.get(ohsuDoYouSmoke.quitYearSelector)
      .select("2010")    //12. choose the necessary value
      .get(ohsuDoYouSmoke.nextBtn)    //13. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //14. check the title of the current dialog
      .should("be.visible")
      .and("have.text", pastUseHeading);

    cy.contains(yearsPastHeading);    //15. check the section description text
    cy.contains(packsPastHeading);    //15. check the section description text

    cy.get(ohsuDoYouSmoke.nextBtn)    //16. validation error message check
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDoYouSmoke.yearsQuantitySelector)    //17. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //18. check the placeholder visibility
    for (var i = 0; i < yearsValues.length; i++) {
      cy.get(ohsuDoYouSmoke.yearsQuantitySelector)
        .select(yearsValues[i])
        .should("be.visible")
    };    //19. check the selector's content
    cy.get(ohsuDoYouSmoke.yearsQuantitySelector)
      .select("5");    //20. choose the necessary value

    cy.get(ohsuDoYouSmoke.nextBtn)    //21. validation error message check
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDoYouSmoke.packsQuantitySelector)    //22. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //23. check the placeholder visibility
    for (var i = 0; i < packsValues.length; i++) {
      cy.get(ohsuDoYouSmoke.packsQuantitySelector)
        .select(packsValues[i])
        .should("be.visible")
    };    //24. check the selector's content
    cy.get(ohsuDoYouSmoke.packsQuantitySelector)
      .select("1/4 pack");    //25. choose the necessary value

    cy.get(ohsuDoYouSmoke.nextBtn)    //26. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //27. check the title of the current dialog
      .should("be.visible")
      .and("have.text", alcoholHeading);
    cy.contains("Do you have a history of Alcohol Abuse?");    //28. check the section description text

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

  it("Should check the illicitdrugs.0 page elements - Yes scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    10. validation error message check
    11. check the checkbox visibility
    12. choose the necessary value
    13. check the innput field
    14. type in the medication name
    15. navigate to the next page
    16. check the title of the current dialog
    17. check the section description text
    */

    var drugsHeading = "Do you use recreational or illicit drugs?";
    var drugsListHeading = "Please indicate the recreational or illicit drug(s) you currently use:";
    var marijuanaIllicitDrugsTitle = "Marijuana";
    var cocaineIllicitDrugsTitle = "Cocaine";
    var heroinIllicitDrugsTitle = "Heroin";
    var methamphetaminesIllicitDrugsTitle = "Methamphetamines ('Ecstasy', 'Crystal Meth')";
    var otherIllicitDrugsTitle = "Other";
    var activityHeading = "Which of the following most closely represents your level of physical activity?";

    cy.visit("/illicitdrugs.0")    //1. navigate to the specified page
      .contains(drugsHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuDrugs.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDrugs.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.yesIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuDrugs.noIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .get(ohsuDrugs.usedToIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "I Used To")
      .get(ohsuDrugs.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuDrugs.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", drugsListHeading);
    cy.contains("Please check all that apply:");    //9. check the section description text
    cy.contains("If other:");    //9. check the section description text

    cy.get(ohsuDrugs.nextBtn)    //10. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.marijuanaIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", marijuanaIllicitDrugsTitle)
      .click();    //12. choose the necessary value

    cy.get(ohsuDrugs.cocaineIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", cocaineIllicitDrugsTitle);

    cy.get(ohsuDrugs.heroinIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", heroinIllicitDrugsTitle);

    cy.get(ohsuDrugs.methamphetaminesIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", methamphetaminesIllicitDrugsTitle);

    cy.get(ohsuDrugs.otherIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", otherIllicitDrugsTitle)
      .click();    //12. choose the necessary value

    cy.get(ohsuDrugs.otherIllicitInputField)    //13. check the innput field
      .should("be.visible")
      .type("Other Drugs")    //14. type in the medication name
      .get(ohsuDrugs.nextBtn)    //15. navigate to the next page
      .click();

    cy.get(ohsuDrugs.headerBar)    //16. check the title of the current dialog
      .should("be.visible")
      .and("have.text", activityHeading);
    cy.contains("Please select ONE of the following:");    //17. check the section description text

  });

  it("Should check the illicitdrugs.0 page elements - No scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    */

    var drugsHeading = "Do you use recreational or illicit drugs?";
    var activityHeading = "Which of the following most closely represents your level of physical activity?";

    cy.visit("/illicitdrugs.0")    //1. navigate to the specified page
      .contains(drugsHeading)    //2. check the title of the current dialog
      .get(ohsuDrugs.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDrugs.nextBtn)    //4. validation error message check
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.noIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click()    //6. choose the necessary value
      .get(ohsuDrugs.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuDrugs.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", activityHeading);
    cy.contains("Please select ONE of the following:");    //9. check the section description text

  });

  it("Should check the illicitdrugs.0 page elements - I Used To scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    10. validation error message check
    11. check the selector visibility
    12. check the placeholder visibility
    13. check the selector's content
    14. choose the necessary value
    15. validation error message check
    16. check the checkbox visibility
    17. choose the necessary value
    18. check the innput field
    19. type in the required information
    20. navigate to the next page
    21. check the title of the current dialog
    22. check the section description text
    */

    var drugsHeading = "Do you use recreational or illicit drugs?";
    var drugsListHeading = "Please indicate the recreational or illicit drug(s) you have previously used:";
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
    var activityHeading = "Which of the following most closely represents your level of physical activity?";

    cy.visit("/illicitdrugs.0")    //1. navigate to the specified page
      .contains(drugsHeading)    //2. check the title of the current dialog
      .get(ohsuDrugs.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDrugs.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.usedToIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "I Used To")
      .click()    //6. choose the necessary value
      .get(ohsuDrugs.nextBtn)    //7. navigate to the next page
      .click()
      .get(ohsuDrugs.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", drugsListHeading);

    cy.contains("When did you last use drugs?");    //9. check the section description text
    cy.contains("Please check all that apply:");    //9. check the section description text
    cy.contains("If other:");    //9. check the section description text

    cy.get(ohsuDrugs.nextBtn)    //10. validation error message check
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDrugs.quitYearSelector)    //11. check the selector visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", selectorText)    //12. check the placeholder visibility
    for (var i = 0; i < quitYearValues.length; i++) {
      cy.get(ohsuDrugs.quitYearSelector)
        .select(quitYearValues[i])
        .should("be.visible")
    };    //13. check the selector's content
    cy.get(ohsuDrugs.quitYearSelector)
      .select("2010");    //14. choose the necessary value

    cy.get(ohsuDrugs.nextBtn)    //15. validation error message check
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.marijuanaIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", marijuanaIllicitDrugsTitle)
      .click();    //17. choose the necessary value

    cy.get(ohsuDrugs.cocaineIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", cocaineIllicitDrugsTitle);

    cy.get(ohsuDrugs.heroinIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", heroinIllicitDrugsTitle);

    cy.get(ohsuDrugs.methamphetaminesIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", methamphetaminesIllicitDrugsTitle);

    cy.get(ohsuDrugs.otherIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", otherIllicitDrugsTitle)
      .click();    //17. choose the necessary value

    cy.get(ohsuDrugs.otherIllicitInputField)    //18. check the innput field
      .should("be.visible")
      .type("Other Drugs")    //19. type in the required information
      .get(ohsuDrugs.nextBtn)    //20. navigate to the next page
      .click();

    cy.get(ohsuDrugs.headerBar)    //21. check the title of the current dialog
      .should("be.visible")
      .and("have.text", activityHeading);
    cy.contains("Please select ONE of the following:");    //22. check the section description text

  });

  // add "activity" after fixing

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

    var surgeryHeading = "Have you had Surgery in the past?";
    var selectBodyRegionHeading = "Please select all regions of the body where you have had Surgery:";
    var selectChestRegionHeading = "Please check all parts of your Chest listed below where you have had surgery:";
    var breastChestSurgery = "Breast";
    var wallChestSurgery = "Chest Wall";
    var clavicleChestSurgery = "Clavicle (Collarbone)";
    var heartChestSurgery = "Heart";
    var lungsChestSurgery = "Lungs";
    var ribsChestSurgery = "Ribs";

    var proceduresListHeading = "Please select all surgical procedures performed on your Breast";
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
    var familyMedHistoryHeading = "With regard to your Family's Medical History:";

    cy.visit("/waitlist-inquiry.4.1")    //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains(surgeryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuWaitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuWaitlistInquiry.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuWaitlistInquiry.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuWaitlistInquiry.yesSurgeryRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio button
      .click()    //6. choose the necessary value
      .get(ohsuWaitlistInquiry.noSurgeryRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //7. check the visibility of the radio button
    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click();    //8. navigate to the next page 

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", selectBodyRegionHeading);    //9. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Neck");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.chesFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Chest");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.chesFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Abdomen");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Pelvis");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.rotateButton)
      .should("be.visible")
      .click();    //13. rotate the mannequin

    cy.get(ohsuWaitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Cervical Spine");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.backBackRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Back");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.backBackRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Buttock");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.rotateButton)
      .should("be.visible")
      .click();    //13. rotate the mannequin 

    cy.get(ohsuWaitlistInquiry.chesFrontRegion)
      .click()    //14. choose the body region
      .get(ohsuWaitlistInquiry.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click();    //15. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", selectChestRegionHeading);    //16. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.breastChestCheckBox)
      .should("be.visible")
      .and("have.text", breastChestSurgery)        //17. check the visibility of the checkboxes
      .click()        //18. choose the operated body part
      .get(ohsuWaitlistInquiry.wallChestCheckBox)
      .should("be.visible")
      .and("have.text", wallChestSurgery)        //17. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.clavicleChestCheckBox)
      .should("be.visible")
      .and("have.text", clavicleChestSurgery)        //17. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.heartChestCheckBox)
      .should("be.visible")
      .and("have.text", heartChestSurgery)        //17. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.lungsChestCheckBox)
      .should("be.visible")
      .and("have.text", lungsChestSurgery)        //17. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.ribsChestCheckBox)
      .should("be.visible")
      .and("have.text", ribsChestSurgery);        //17. check the visibility of the checkboxes

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click();        //19. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", proceduresListHeading);        //20. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.augumentationBrestSurgery)
      .should("be.visible")
      .and("have.text", augumentationBrestSurgeryTitle)    //21. check the visibility of the checkboxes
      .click()    //22. choose the surgery type

      .get(ohsuWaitlistInquiry.leftBiopsyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftBiopsyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.rightBiopsyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightBiopsyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.reconstructionBrestSurgery)
      .should("be.visible")
      .and("have.text", reconstructionBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.reductionBrestSurgery)
      .should("be.visible")
      .and("have.text", reductionBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.pectusBrestSurgery)
      .should("be.visible")
      .and("have.text", pectusBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.leftLumpectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftLumpectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.rightLumpectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightLumpectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.leftMastectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftMastectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.rightMastectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightMastectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.otherBrestSurgery)
      .should("be.visible")
      .and("have.text", otherBrestSurgeryTitle)    //21. check the visibility of the checkboxes
      .click();    //23. choose the surgery type

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click()    //24. navigate to the next page
      .get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);    //25. check the title of a header of the page

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

    var surgeryHeading = "Have you had Surgery in the past?";
    var selectBodyRegionHeadingHeading = "Please select all regions of the body where you have had Surgery:";
    var selectBackRegionHeading = "Please check all parts of your Back listed below where you have had surgery:";
    var proceduresListHeading = "Please select all surgical procedures performed on your Flank";
    var familyMedHistoryHeading = "With regard to your Family's Medical History:";

    cy.visit("/waitlist-inquiry.4.1")    //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains(surgeryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuWaitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuWaitlistInquiry.yesSurgeryRadioBtn)
      .click();    //4. choose the necessary value

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //5. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", selectBodyRegionHeadingHeading);    //6. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.rotateButton)
      .should("be.visible")
      .click();    //7. rotate the mannequin

    cy.get(ohsuWaitlistInquiry.backBackRegion)
      .should("be.visible")
      .click(); //8. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Back");    //9. check the visibility of the body region's name

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click();    //10. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", selectBackRegionHeading);    //11. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.glandBackCheckBox)
      .should("be.visible")
      .and("have.text", "Adrenal Gland")    //12. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.flankBackCheckBox)
      .should("be.visible")
      .and("have.text", "Flank")    //12. check the visibility of the checkboxes
      .click()    //13. choose the operated body part
      .get(ohsuWaitlistInquiry.kidneyBackCheckBox)
      .should("be.visible")
      .and("have.text", "Kidney")    //12. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.scapulaBackCheckBox)
      .should("be.visible")
      .and("have.text", "Scapula (Shoulder Blade)")    //12. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.spineBackCheckBox)
      .should("be.visible")
      .and("have.text", "Spine")    //12. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.nextBtn)
      .click();    //14. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", proceduresListHeading);    //15. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.lesionFlankSurgery)
      .should("be.visible")
      .and("have.text", "Removal of Lesion")    //16. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.tumorFlankSurgery)
      .should("be.visible")
      .and("have.text", "Tumor Removal")    //16. check the visibility of the checkboxes
      .click();    //17. choose the surgery type

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click()    //18. navigate to the next page
      .get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);    //19. check the title of a header of the page

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

    var surgeryHeading = "Have you had Surgery in the past?";
    var familyMedHistoryHeading = "With regard to your Family's Medical History:";

    cy.visit("/waitlist-inquiry.4.1")    //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains(surgeryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuWaitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuWaitlistInquiry.noSurgeryRadioBtn)
      .click();    //4. choose the necessary value

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);    //6. check the title of a header of the page

  });

  it("Should check the family-medical-history.0 page elements - Kidney Disease scenario ", () => {

    /*
    1. navigate to the "family-medical-history.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the radio button
    7. choose the necessary value
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the radio button
    11. choose the necessary value
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of the radio button
    15. choose the necessary value
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of the radio button
    19. choose the necessary value
    20. validation error message checking
    21. check the title of the section
    22. check the visibility of the radio button
    23. choose the necessary value
    24. navigate to the next page
    25. check the title of a header of the page
    26. validation error message checking
    27. check the visibility of the checkbox
    28. choose the necessary value
    29. navigate to the next page
    30. check the title of a header of the page
    */

    var familyMedHistoryHeading = "With regard to your Family's Medical History:";

    cy.visit("/family-medical-history.0")    //1. navigate to the "family-medical-history.0" dialog
      .contains(familyMedHistoryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuFamilyMedHistory0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuFamilyMedHistory0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuFamilyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");     //4. validation error message checking

    cy.contains("Do any of your family members have Kidney Disease?")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory0.yesKidneyDisease)
      .should("be.visible")
      .and("have.text", "Yes")    //6. check the visibility of the radio button
      .click()    //7. choose the necessary value
      .get(ohsuFamilyMedHistory0.noKidneyDisease)
      .should("be.visible")
      .and("have.text", "No");    //6. check the visibility of the radio button

    cy.get(ohsuFamilyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Do any of your family members have Polycystic Kidney Disease (PCKD)?")    //9. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory0.yesPolycystic)
      .should("be.visible")
      .and("have.text", "Yes")    //10. check the visibility of the radio button
      .get(ohsuFamilyMedHistory0.noPolycystic)
      .should("be.visible")
      .and("have.text", "No")    //10. check the visibility of the radio button
      .click();    //11. choose the necessary value

    cy.get(ohsuFamilyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //12. validation error message checking

    cy.contains("Do any of your family members have Kidney Stones?");    //13. check the title of the section
    cy.get(ohsuFamilyMedHistory0.yesKidneyStones)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the radio button
      .get(ohsuFamilyMedHistory0.noKidneyStones)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the radio button
      .click();    //15. choose the necessary value

    cy.get(ohsuFamilyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //16. validation error message checking

    cy.contains("Do any of your family members have Diabetes?");    //17. check the title of the section
    cy.get(ohsuFamilyMedHistory0.yesDiabetes)
      .should("be.visible")
      .and("have.text", "Yes")    //18. check the visibility of the radio button
      .get(ohsuFamilyMedHistory0.noDiabetes)
      .should("be.visible")
      .and("have.text", "No")    //18. check the visibility of the radio button
      .click();    //19. choose the necessary value

    cy.get(ohsuFamilyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //20. validation error message checking

    cy.contains("Do any of your family members have Sickle Cell?");    //21. check the title of the section
    cy.get(ohsuFamilyMedHistory0.yesSickleCell)
      .should("be.visible")
      .and("have.text", "Yes")    //22. check the visibility of the radio button
      .get(ohsuFamilyMedHistory0.noSickleCell)
      .should("be.visible")
      .and("have.text", "No")    //22. check the visibility of the radio button
      .click();    //23. choose the necessary value

    cy.get(ohsuFamilyMedHistory0.nextBtn)
      .click();    //24. navigate to the next page

    cy.get(ohsuFamilyMedHistory0.headerBar)
      .should("be.visible")
      .and("have.text", "Which members of your family have Kidney Disease?");    //25. check the title of a header of the page

    cy.get(ohsuFamilyMedHistory0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuFamilyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //26. validation error message checking

    cy.get(ohsuFamilyMedHistory0.motherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Mother");    //27. check the visibility of the checkbox

    cy.get(ohsuFamilyMedHistory0.fatherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Father");    //27. check the visibility of the checkbox

    cy.get(ohsuFamilyMedHistory0.childFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Child");    //27. check the visibility of the checkbox

    cy.get(ohsuFamilyMedHistory0.siblingFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Sibling");    //27. check the visibility of the checkbox

    cy.get(ohsuFamilyMedHistory0.grandparentFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Grandparent")    //27. check the visibility of the checkbox
      .click();    //28. choose the necessary value

    cy.get(ohsuFamilyMedHistory0.auntUnkleFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Aunt/Uncle");    //27. check the visibility of the checkbox

    cy.get(ohsuFamilyMedHistory0.cousinFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Cousin");    //27. check the visibility of the checkbox

    cy.get(ohsuFamilyMedHistory0.nextBtn)
      .click();    //29. navigate to the next page

    cy.get(ohsuFamilyMedHistory0.headerBar)
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);    //30. check the title of a header of the page

  });

  it("Should check the family-medical-history.0 page elements - No scenario ", () => {

    /*
    1. navigate to the "family-medical-history.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the radio button
    6. choose the necessary value
    7. check the title of the section
    8. check the visibility of the radio button
    9. choose the necessary value
    10. check the title of the section
    11. check the visibility of the radio button
    12. choose the necessary value
    13. check the title of the section
    14. check the visibility of the radio button
    15. choose the necessary value
    16. check the title of the section
    17. check the visibility of the radio button
    18. choose the necessary value
    19. navigate to the next page
    20. check the title of a header of the page
    */

    var familyMedHistoryHeading = "With regard to your Family's Medical History:";

    cy.visit("/family-medical-history.0")    //1. navigate to the "family-medical-history.0" dialog
      .contains(familyMedHistoryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuFamilyMedHistory0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Do any of your family members have Kidney Disease?")    //4. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory0.yesKidneyDisease)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio button
      .get(ohsuFamilyMedHistory0.noKidneyDisease)
      .should("be.visible")
      .and("have.text", "No")    //5. check the visibility of the radio button
      .click();    //6. choose the necessary value

    cy.contains("Do any of your family members have Polycystic Kidney Disease (PCKD)?")    //7. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory0.yesPolycystic)
      .should("be.visible")
      .and("have.text", "Yes")    //8. check the visibility of the radio button
      .get(ohsuFamilyMedHistory0.noPolycystic)
      .should("be.visible")
      .and("have.text", "No")    //8. check the visibility of the radio button
      .click();    //9. choose the necessary value

    cy.contains("Do any of your family members have Kidney Stones?");    //10. check the title of the section
    cy.get(ohsuFamilyMedHistory0.yesKidneyStones)
      .should("be.visible")
      .and("have.text", "Yes")    //11. check the visibility of the radio button
      .get(ohsuFamilyMedHistory0.noKidneyStones)
      .should("be.visible")
      .and("have.text", "No")    //11. check the visibility of the radio button
      .click();    //12. choose the necessary value

    cy.contains("Do any of your family members have Diabetes?");    //13. check the title of the section
    cy.get(ohsuFamilyMedHistory0.yesDiabetes)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the radio button
      .get(ohsuFamilyMedHistory0.noDiabetes)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the radio button
      .click();    //15. choose the necessary value

    cy.contains("Do any of your family members have Sickle Cell?");    //16. check the title of the section
    cy.get(ohsuFamilyMedHistory0.yesSickleCell)
      .should("be.visible")
      .and("have.text", "Yes")    //17. check the visibility of the radio button
      .get(ohsuFamilyMedHistory0.noSickleCell)
      .should("be.visible")
      .and("have.text", "No")    //17. check the visibility of the radio button
      .click();    //18. choose the necessary value

    cy.get(ohsuFamilyMedHistory0.nextBtn)
      .click();    //19. navigate to the next page

    cy.get(ohsuFamilyMedHistory0.headerBar)
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);    //20. check the title of a header of the page

  });

  it("Should check the family-medical-history.1 page elements - High Blood Pressure scenario ", () => {

    /*
    1. navigate to the "family-medical-history.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the radio button
    7. choose the necessary value
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the radio button
    11. choose the necessary value
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of the radio button
    15. choose the necessary value
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of the radio button
    19. choose the necessary value
    20. validation error message checking
    21. check the title of the section
    22. check the visibility of the radio button
    23. choose the necessary value
    24. validation error message checking
    25. check the title of the section
    26. check the visibility of the radio button
    27. choose the necessary value
    28. validation error message checking
    29. check the title of the section
    30. check the visibility of the radio button
    31. choose the necessary value
    32. navigate to the next page
    33. check the title of a header of the page
    34. validation error message checking
    35. check the visibility of the checkboxes
    36. choose the necessary value
    37. navigate to the next page
    38. check the title of a header of the page
    */

    var familyMedHistoryHeading = "With regard to your Family's Medical History:";
    var familyMembersListHeading = "Which members of your family have High Blood Pressure?";
    var bloodTypeHeading = "What is your blood type:";

    cy.visit("/family-medical-history.1")    //1. navigate to the "family-medical-history.1" dialog
      .contains(familyMedHistoryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuFamilyMedHistory1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Do any of your family members have Cancer?")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //6. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //6. check the visibility of the radio button
      .click();    //7. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Do any of your family members have High Blood Pressure?")    //9. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //10. check the visibility of the radio button
      .click()    //11. choose the necessary value
      .get(ohsuFamilyMedHistory1.noBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "No");    //10. check the visibility of the radio button

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //12. validation error message checking

    cy.contains("Do any of your family members have Heart Disease?")    //13. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the radio button
      .click();    //15. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //16. validation error message checking

    cy.contains("Do any of your family members have Lupus?")    //17. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //18. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //18. check the visibility of the radio button
      .click();    //19. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //20. validation error message checking

    cy.contains("Do any of your family members have Blood Clots?");    //21. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //22. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //22. check the visibility of the radio button
      .click();    //23. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //24. validation error message checking

    cy.contains("Do any of your family members have Mental Illness?");    //25. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //26. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //26. check the visibility of the radio button
      .click();    //27. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //28. validation error message checking

    cy.contains("Have any of your family members died before the age of 50?");    //29. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //30. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //30. check the visibility of the radio button
      .click();    //31. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click();    //32. navigate to the next page

    cy.get(ohsuFamilyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", familyMembersListHeading);    //33. check the title of a header of the page

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //34. validation error message checking

    cy.get(ohsuFamilyMedHistory1.motherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Mother");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.fatherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Father");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.childFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Child");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.siblingFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Sibling");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.grandparentFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Grandparent")    //35. check the visibility of the checkboxes
      .click();    //36. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.auntUnkleFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Aunt/Uncle");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.cousinFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Cousin");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click();    //37. navigate to the next page

    cy.get(ohsuFamilyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", bloodTypeHeading);    //38. check the title of a header of the page

  });

  it("Should check the family-medical-history.1 page elements - No scenario ", () => {

    /*
    1. navigate to the "family-medical-history.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the radio button
    6. choose the necessary value
    7. check the title of the section
    8. check the visibility of the radio button
    9. choose the necessary value
    10. check the title of the section
    11. check the visibility of the radio button
    12. choose the necessary value
    13. check the title of the section
    14. check the visibility of the radio button
    15. choose the necessary value
    16. check the title of the section
    17. check the visibility of the radio button
    18. choose the necessary value
    19. check the title of the section
    20. check the visibility of the radio button
    21. choose the necessary value
    22. check the title of the section
    23. check the visibility of the radio button
    24. choose the necessary value
    25. navigate to the next page
    26. check the title of a header of the page
    */

    var familyMedHistoryHeading = "With regard to your Family's Medical History:";
    var bloodTypeHeading = "What is your blood type:";

    cy.visit("/family-medical-history.1")    //1. navigate to the "family-medical-history.1" dialog
      .contains(familyMedHistoryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuFamilyMedHistory1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Do any of your family members have Cancer?")    //4. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //5. check the visibility of the radio button
      .click();    //6. choose the necessary value

    cy.contains("Do any of your family members have High Blood Pressure?")    //7. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //8. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //8. check the visibility of the radio button
      .click();    //9. choose the necessary value

    cy.contains("Do any of your family members have Heart Disease?")    //10. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //11. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //11. check the visibility of the radio button
      .click();    //12. choose the necessary value

    cy.contains("Do any of your family members have Lupus?")    //13. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the radio button
      .click();     //15. choose the necessary value

    cy.contains("Do any of your family members have Blood Clots?");    //16. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //17. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //17. check the visibility of the radio button
      .click();    //18. choose the necessary value

    cy.contains("Do any of your family members have Mental Illness?");    //19. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the radio button
      .click();    //21. choose the necessary value

    cy.contains("Have any of your family members died before the age of 50?");    //22. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //23. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //23. check the visibility of the radio button
      .click();    //24. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click();    //25. navigate to the next page

    cy.get(ohsuFamilyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", bloodTypeHeading);    //26. check the title of a header of the page

  });

  it("Should check the blood.0 page elements", () => {

    /*
    1. navigate to the "blood.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the radio button
    6. choose the necessary value
    7. check the title of the section
    8. validation error message checking
    9. check the visibility of the radio button
    10. choose the necessary value
    11. navigate to the next page
    12. check the title of a header of the page
    */

    var bloodTypeHeading = "What is your blood type:";
    var hrBehaviorHeading = "Within the previous 12 months, do any of the following situations apply to you?";

    cy.visit("/blood.0")    //1. navigate to the "blood.0" dialog
      .contains(bloodTypeHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuBloodType0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuBloodType0.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuBloodType0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuBloodType0.aBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "A")    //5. check the visibility of the radio button
      .click()    //6. choose the necessary value

      .get(ohsuBloodType0.bBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "B")    //5. check the visibility of the radio button

      .get(ohsuBloodType0.abBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "AB")    //5. check the visibility of the radio button

      .get(ohsuBloodType0.zeroBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "O")    //5. check the visibility of the radio button

      .get(ohsuBloodType0.unknownBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "Unknown");    //5. check the visibility of the radio button

    cy.contains("If necessary, would you be willing to accept a blood transfusion?");    //7. check the title of the section

    cy.get(ohsuBloodType0.nextBtn)    //8. validation error message checking
      .click()
      .get(ohsuBloodType0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuBloodType0.yesTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //9. check the visibility of the radio button
      .click()   //10. choose the necessary value
      .get(ohsuBloodType0.noTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "No");    //9. check the visibility of the radio button

    cy.get(ohsuBloodType0.nextBtn)
      .click()    //11. navigate to the next page
      .get(ohsuBloodType0.headerBar)
      .should("be.visible")
      .and("have.text", hrBehaviorHeading);    //12. check the title of a header of the page

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

    var hrBehaviorHeading = "Within the previous 12 months, do any of the following situations apply to you?";
    var dataTargetTitle = "ⓘWhy do I need to answer these questions? ";
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
      .contains(hrBehaviorHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuHighriskbehavior1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuHighriskbehavior1.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuHighriskbehavior1.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.contains("Please check any that apply:");    //5. check the title of the section

    cy.get(ohsuHighriskbehavior1.dataTargetRiskBehavior)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", dataTargetTitle)    //6. check the title of the item
      .click();    //7. open the help modal

    cy.get(ohsuHighriskbehavior1.helpModal)
      .should("be.visible")
      .and("have.text", helpModalContent)    //8. check the modal's content
      .click("topLeft");    //9. close the help modal

    cy.get(ohsuHighriskbehavior1.escortServiceTwoBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", escortServiceTwoBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.bloodTransfusionBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", bloodTransfusionBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.hemodialysisBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hemodialysisBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.hrbMaleSexBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hrbMaleSexBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.hrbFemaleSexBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hrbFemaleSexBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.hivSexBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hivSexBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.escortServiceOneBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", escortServiceOneBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.escortServiceThreeBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", escortServiceThreeBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.illicitDrugInjectBehaviorCheckBox)
      .should("be.visible")
      .and("have.text", illicitDrugInjectBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.prisonBehaviorCheckBox)
      .should("be.visible")
      .and("have.text", prisonBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.diagnoseBehaviorCheckBox)
      .should("be.visible")
      .and("have.text", diagnoseBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(ohsuHighriskbehavior1.notApplyBehaviorCheckBox)
      .should("be.visible")
      .and("have.text", notApplyBehaviorDescription)    //10. check the visibility of the checkboxes
      .click();    //11. choose the necessary value

    cy.get(ohsuHighriskbehavior1.nextBtn)
      .click();    //12. navigate to the next page

    cy.get(ohsuHighriskbehavior1.headerBar)
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
    15. check the visibility of the selector's content
    16. choose the necessary value
    17. navigate to the next page
    18. check the title of a header of the page
    */

    var addInfoHeading = "We may need to request additional information such as laboratory or other diagnostic test from your other health care providers. Please provide us with the following information (OPTIONAL)";
    var selectorText = "Select One";
    var stateNames = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      // "DE", add after fix
      // "DE",  
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
    var educationHeading = "Please select which of the options below most closely matches your highest level of education.";

    cy.visit("/request-for-additional-info.1")    //1. navigate to the "request-for-additional-info.1" dialog
      .contains(addInfoHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuRequestAddInfo1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Name:");    //4. check the title of the section
    cy.get(ohsuRequestAddInfo1.nameAddInfoInputField)    //5. check the visibility of the item
      .should("be.visible")
      .type("Donor Name");    //6. type the requested information 

    cy.contains("Phone Number:");    //7. check the title of the section
    cy.get(ohsuRequestAddInfo1.phoneAddInfoInputField)    //8. check the visibility of the item
      .should("be.visible")
      .type("5555555555");    //9. type the requested information 

    cy.contains("City:");    //10. check the title of the section
    cy.get(ohsuRequestAddInfo1.cityAddInfoInputField)    //11. check the visibility of the item
      .should("be.visible")
      .type("Racoon City");    //12. type the requested information 

    cy.contains("State:");    //13. check the title of the section
    cy.get(ohsuRequestAddInfo1.stateSelectAddInfo)    //14. check the visibility of the selector
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < stateNames.length; i++) {
      cy.get(ohsuRequestAddInfo1.stateSelectAddInfo)
        .select(stateNames[i])
        .should("be.visible")
    };    //15. check the visibility of the selector's content
    cy.get(ohsuRequestAddInfo1.stateSelectAddInfo)
      .select("WA");    //16. choose the necessary value

    cy.get(ohsuRequestAddInfo1.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //17. navigate to the next page

    cy.get(ohsuRequestAddInfo1.headerBar)
      .should("be.visible")
      .and("have.text", educationHeading);    //18. check the title of a header of the page

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

    var educationHeading = "Please select which of the options below most closely matches your highest level of education.";
    var notAttendedHSEduTitle = "I have not attended high school";
    var notGradHSEduTitle = "I have not graduated high school";
    var hsGraduateEduTitle = "I am a high school graduate";
    var someCollegeEduTitle = "I attended some college, but don't have a degree";
    var associateEduTitle = "I have an Associate's degree";
    var bachelorEduTitle = "I have a Bachelor's degree";
    var masterEduTitle = "I have a Master's or other professional degree";
    var employmentHeading = "Are you currently working for income?";

    cy.visit("/education.0")    //1. navigate to the "education.0" dialog
      .contains(educationHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEducation.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuEducation.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuEducation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuEducation.notAttendedHSEduRadioBtn)
      .should("be.visible")
      .and("have.text", notAttendedHSEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.notGradHSEduRadioBtn)
      .should("be.visible")
      .and("have.text", notGradHSEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.hsGraduateEduRadioBtn)
      .should("be.visible")
      .and("have.text", hsGraduateEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.someCollegeEduRadioBtn)
      .should("be.visible")
      .and("have.text", someCollegeEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.associateEduRadioBtn)
      .should("be.visible")
      .and("have.text", associateEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.bachelorEduRadioBtn)
      .should("be.visible")
      .and("have.text", bachelorEduTitle)    //5. check the visibility of the radio buttons

      .get(ohsuEducation.masterEduRadioBtn)
      .should("be.visible")
      .and("have.text", masterEduTitle)    //5. check the visibility of the radio buttons
      .click();    //6. choose the necessary value

    cy.get(ohsuEducation.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuEducation.headerBar)
      .should("be.visible")
      .and("have.text", employmentHeading);    //8. check the title of a header of the page

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
    9. validation error message checking
    10. check the title of the section
    11. check the visibility of the radio buttons
    12. choose the necessary value
    13. check the title of the section
    14. input required information
    15. check the title of the section
    16. input required information
    17. navigate to the next page
    18. check the title of a header of the page
    */

    var employmentHeading = "Are you currently working for income?";
    var employmentStatusTitile = "Which of the following describes your current Employment Status?";
    var livingArrangementHeading = "With regard to your living arrangment:";

    cy.visit("/employment.yn")    //1. navigate to the "employment.yn" dialog
      .contains(employmentHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmploymentYn.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuEmploymentYn.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuEmploymentYn.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuEmploymentYn.yesEmploymentRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio buttons
      .click()    //6. choose the necessary value
      .get(ohsuEmploymentYn.noEmploymentRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the radio buttons

    cy.get(ohsuEmploymentYn.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuEmploymentYn.headerBar)
      .should("be.visible")
      .and("have.text", employmentStatusTitile);    //8. check the title of a header of the page

    cy.get(ohsuEmploymentYn.nextBtn)    //9. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuEmploymentYn.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Please select ONE of the following:");    //10. check the title of the section
    cy.get(ohsuEmploymentYn.fullTimeStatusRadioBtn)
      .should("be.visible")
      .and("have.text", "Full time employee")    //11. check the visibility of the radio buttons
      .click()    //12. choose the necessary value

      .get(ohsuEmploymentYn.partTimeStatusRadioBtn)
      .should("be.visible")
      .and("have.text", "Part time employee")    //11. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.selfEmployedStatusRadioBtn)
      .should("be.visible")
      .and("have.text", "Self employed");    //11. check the visibility of the radio buttons

    cy.contains("What is your occupation?");    //13. check the title of the section
    cy.get(ohsuEmploymentYn.occupationInputField)
      .should("be.visible")
      .type("Donor's Occupation");    //14. input required information

    cy.contains("Who is your employer?");    //15. check the title of the section
    cy.get(ohsuEmploymentYn.employerInputField)
      .should("be.visible")
      .type("Donor's Employer");    //16. input required information

    cy.get(ohsuEmploymentYn.nextBtn)
      .click();    //17. navigate to the next page

    cy.get(ohsuEmploymentYn.headerBar)
      .should("be.visible")
      .and("have.text", livingArrangementHeading);    //18. check the title of a header of the page

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

    var employmentHeading = "Are you currently working for income?";
    var employmentStatusTitile = "Which of the following describes your current Employment Status?";
    var livingArrangementHeading = "With regard to your living arrangment:";

    cy.visit("/employment.yn")    //1. navigate to the "employment.yn" dialog
      .contains(employmentHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmploymentYn.introStartSurBtn)
      .click();    //3. click to start survey

    cy.get(ohsuEmploymentYn.noEmploymentRadioBtn)
      .should("be.visible")
      .and("have.text", "No")
      .click();    //4. choose the necessary value

    cy.get(ohsuEmploymentYn.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(ohsuEmploymentYn.headerBar)
      .should("be.visible")
      .and("have.text", employmentStatusTitile);    //6. check the title of a header of the page

    cy.get(ohsuEmploymentYn.nextBtn)    //7. validation error message checking
      .click()
      .get(ohsuEmploymentYn.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Please select ONE of the following:");    //8. check the title of the section
    cy.get(ohsuEmploymentYn.disabledRadioBtn)
      .should("be.visible")
      .and("have.text", "Disabled")    //9. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.homemakerRadioBtn)
      .should("be.visible")
      .and("have.text", "Homemaker")    //9. check the visibility of the radio buttons
      .click()    //10. choose the necessary value

      .get(ohsuEmploymentYn.inabilityToFindRadioBtn)
      .should("be.visible")
      .and("have.text", "Inability to Find Work")    //9. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.insuranceConflictRadioBtn)
      .should("be.visible")
      .and("have.text", "Insurance Conflict")    //9. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.retiredRadioBtn)
      .should("be.visible")
      .and("have.text", "Retired")    //9. check the visibility of the radio buttons

      .get(ohsuEmploymentYn.studentRadioBtn)
      .should("be.visible")
      .and("have.text", "Student (Full or Part Time)");    //9. check the visibility of the radio buttons

    cy.get(ohsuEmploymentYn.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(ohsuEmploymentYn.headerBar)
      .should("be.visible")
      .and("have.text", livingArrangementHeading);    //12. check the title of a header of the page

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
    var medInsuranceHeading = "Are you currently covered under a Medical Insurance plan?";

    cy.visit("/living-arrangement.0")    //1. navigate to the "living-arrangement.0" dialog
      .contains("With regard to your living arrangment:")    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuLivingArrangement.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuLivingArrangement.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuLivingArrangement.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Please describe your household:")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuLivingArrangement.rentRadioBtn)
      .should("be.visible")
      .and("have.text", rentHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.ownRadioBtn)
      .should("be.visible")
      .and("have.text", ownHouseholdTitle)    //6. check the visibility of the radio buttons
      .click()    //7. choose the necessary value

      .get(ohsuLivingArrangement.temporaryRadioBtn)
      .should("be.visible")
      .and("have.text", temporaryHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.homelessRadioBtn)
      .should("be.visible")
      .and("have.text", homelessHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.militaryRadioBtn)
      .should("be.visible")
      .and("have.text", militaryHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.assistedFacilityRadioBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", assistedFacilityHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.otherRadioBtn)
      .should("be.visible")
      .and("have.text", otherHouseholdTitle);    //6. check the visibility of the radio buttons

    cy.get(ohsuLivingArrangement.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuLivingArrangement.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Who do you live with?");    //9. check the title of the section
    cy.get(ohsuLivingArrangement.aloneRadioBtn)
      .should("be.visible")
      .and("have.text", aloneTitle)    //10. check the visibility of the radio buttons
      .click()    //11. choose the necessary value

      .get(ohsuLivingArrangement.significantRadioBtn)
      .should("be.visible")
      .and("have.text", significantTitle)    //10. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.parentsRadioBtn)
      .should("be.visible")
      .and("have.text", parentsTitle)    //10. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.otherFamilyRadioBtn)
      .should("be.visible")
      .and("have.text", otherFamilyTitle)    //10. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.roommateRadioBtn)
      .should("be.visible")
      .and("have.text", roommateTitle)    //10. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.otherRoommateRadioBtn)
      .should("be.visible")
      .and("have.text", otherTitle);    //10. check the visibility of the radio buttons

    cy.get(ohsuLivingArrangement.nextBtn)
      .click();    //12. navigate to the next page

    cy.get(ohsuLivingArrangement.headerBar)
      .should("be.visible")
      .and("have.text", medInsuranceHeading);    //13. check the title of a header of the page

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

    var medInsuranceHeading = "Are you currently covered under a Medical Insurance plan?";
    var insurancePlanHeading = "With regard to your Medical Insurance plan: (Optional)";
    var maritalStatusHeading = "What is your current marital status?";

    cy.visit("/insurance.0")    //1. navigate to the "insurance.0" dialog
      .contains(medInsuranceHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMedInsurance.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMedInsurance.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedInsurance.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuMedInsurance.yesInsurancePlan)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio buttons
      .click()    //6. choose the necessary value
      .get(ohsuMedInsurance.noInsurancePlan)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the radio buttons

    cy.get(ohsuMedInsurance.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuMedInsurance.headerBar)
      .should("be.visible")
      .and("have.text", insurancePlanHeading);    //8. check the title of a header of the page

    cy.contains("Who is your Medical Insurance Provider?");    //9. check the title of the section
    cy.get(ohsuMedInsurance.providerInsuranceInput)
      .should("be.visible")
      .type("Medical Insurance Provider Name");    //10. type in a required information

    cy.contains("Group #");    //9. check the title of the section
    cy.get(ohsuMedInsurance.groupInsuranceInput)
      .should("be.visible")
      .type("321654987");    //10. type in a required information

    cy.contains("Customer or Member Service Telephone Number:");    //9. check the title of the section
    cy.get(ohsuMedInsurance.phoneNumberInsuranceInput)
      .should("be.visible")
      .type("555555132");    //10. type in a required information

    cy.contains("Member ID #");    //9. check the title of the section
    cy.get(ohsuMedInsurance.memberIDInsuranceInput)
      .should("be.visible")
      .type("Member #1");    //10. type in a required information

    cy.get(ohsuMedInsurance.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(ohsuMedInsurance.headerBar)
      .should("be.visible")
      .and("have.text", maritalStatusHeading);    //12. check the title of a header of the page

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

    var medInsuranceHeading = "Are you currently covered under a Medical Insurance plan?";
    var maritalStatusHeading = "What is your current marital status?";

    cy.visit("/insurance.0")    //1. navigate to the "insurance.0" dialog
      .contains(medInsuranceHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMedInsurance.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMedInsurance.noInsurancePlan)
      .should("have.text", "No")    //4. check the visibility of the radio buttons
      .click();    //5. choose the necessary value

    cy.get(ohsuMedInsurance.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(ohsuMedInsurance.headerBar)
      .should("be.visible")
      .and("have.text", maritalStatusHeading);    //7. check the title of a header of the page

  });

  it("Should check the maritalstatus.0 page elements - Married scenario", () => {

    /*
    1. navigate to the "maritalstatus.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the selector
    6. check the visibility of the placeholder
    7. check the visibility of the selector's content
    8. choose the necessary value
    9. navigate to the next page
    10. check the title of a header of the page
    */

    var maritalStatusHeading = "What is your current marital status?";
    var maritalStatusValues = [
      "Single",
      "Married",
      "Domestic Partnership",
      "Divorced",
      "Widowed"
    ];
    var offspringHeading = "Do you have children that you currently care for?";

    cy.visit("/maritalstatus.0")    //1. navigate to the "maritalstatus.0" dialog
      .contains(maritalStatusHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMaritalStatus.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMaritalStatus.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMaritalStatus.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuMaritalStatus.maritalStatusSelector)    //5. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //6. check the visibility of the placeholder
    for (var i = 0; i < maritalStatusValues.length; i++) {
      cy.get(ohsuMaritalStatus.maritalStatusSelector)
        .select(maritalStatusValues[i])
        .should("be.visible")
    };    //7. check the visibility of the selector's content
    cy.get(ohsuMaritalStatus.maritalStatusSelector)
      .select("Married");    //8. choose the necessary value

    cy.get(ohsuMaritalStatus.nextBtn)
      .click();    //9. navigate to the next page

    cy.get(ohsuMaritalStatus.headerBar)
      .should("be.visible")
      .and("have.text", offspringHeading);    //10. check the title of a header of the page

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
    11. check the visibility of the placeholder
    12. check the visibility of the selector's content
    13. choose the necessary value
    14. navigate to the next page
    15. check the title of a header of the page
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of the selector
    19. check the visibility of the placeholder
    20. check the visibility of the selector's content
    21. choose the necessary value
    22. validation error message checking
    23. check the title of the section
    24. check the visibility of the selector
    25. check the visibility of the splaceholder
    26. check the visibility of the selector's content
    27. choose the necessary value
    28. navigate to the next page
    29. check the title of a header of the page
    */

    var offspringHeading = "Do you have children that you currently care for?";
    var howManyChildrenHeading = "How many children do you care for currently?";
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
    var motivationHeading = "With regard to your Kidney Donation:";

    cy.visit("/offspring.0")    //1. navigate to the "offspring.0" dialog
      .contains(offspringHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuOffspring.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuOffspring.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuOffspring.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuOffspring.yesHasChildrenRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of radio buttons
      .click()    //6. choose the necessary value
      .get(ohsuOffspring.noHasChildrenRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of radio buttons

    cy.get(ohsuOffspring.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuOffspring.headerBar)
      .should("be.visible")
      .and("have.text", howManyChildrenHeading);    //8. check the title of a header of the page

    cy.get(ohsuOffspring.nextBtn)    //9. validation error message checking
      .click()
      .get(ohsuOffspring.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuOffspring.howManyChildrenSelector)    //10. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //11. check the visibility of the placeholder
    for (var i = 0; i < howManyChildrenValues.length; i++) {
      cy.get(ohsuOffspring.howManyChildrenSelector)
        .select(howManyChildrenValues[i])
        .should("be.visible")
    };    //12. check the visibility of the selector's content
    cy.get(ohsuOffspring.howManyChildrenSelector)
      .select("2");    //13. choose the necessary value

    cy.get(ohsuOffspring.nextBtn)
      .click();    //14. navigate to the next page

    cy.get(ohsuOffspring.headerBar)
      .should("be.visible")
      .and("have.text", "How old are your children?");    //15. check the title of a header of the page

    cy.get(ohsuOffspring.nextBtn)    //16. validation error message checking
      .click()
      .get(ohsuOffspring.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Age of Youngest Child:");    //17. check the title of the section
    cy.get(ohsuOffspring.youngestChildYearsSelector)    //18. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //19. check the visibility of the placeholder
    for (var i = 0; i < childrenYearsValues.length; i++) {
      cy.get(ohsuOffspring.youngestChildYearsSelector)
        .select(childrenYearsValues[i])
        .should("be.visible")
    };    //20. check the visibility of the selector's content
    cy.get(ohsuOffspring.youngestChildYearsSelector)
      .select("5");    //21. choose the necessary value

    cy.get(ohsuOffspring.nextBtn)    //22. validation error message checking
      .click()
      .get(ohsuOffspring.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Age of Oldest Child:");    //23. check the title of the section
    cy.get(ohsuOffspring.oldestestChildYearsSelector)    //24. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //25. check the visibility of the splaceholder
    for (var i = 0; i < childrenYearsValues.length; i++) {
      cy.get(ohsuOffspring.oldestestChildYearsSelector)
        .select(childrenYearsValues[i])
        .should("be.visible")
    };    //26. check the visibility of the selector's content
    cy.get(ohsuOffspring.oldestestChildYearsSelector)
      .select("8");    //27. choose the necessary value

    cy.get(ohsuOffspring.nextBtn)
      .click();    //28. navigate to the next page

    cy.get(ohsuOffspring.headerBar)
      .should("be.visible")
      .and("have.text", motivationHeading);    //29. check the title of a header of the page

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

    var offspringHeading = "Do you have children that you currently care for?";
    var motivationHeading = "With regard to your Kidney Donation:";

    cy.visit("/offspring.0")    //1. navigate to the "offspring.0" dialog
      .contains(offspringHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuOffspring.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuOffspring.noHasChildrenRadioBtn)
      .should("have.text", "No")
      .click();    //4. choose the necessary value

    cy.get(ohsuOffspring.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(ohsuOffspring.headerBar)
      .should("be.visible")
      .and("have.text", motivationHeading);    //6. check the title of a header of the page

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

    var motivationHeading = "With regard to your Kidney Donation:";
    var motivationHeadingOne = "Why are you interested in donation?";
    var motivationHeadingTwo = "Which sentence most closely describes how you feel about donating?";

    var gatheringHowYouFeelQuestion = "I am still just gathering information; I still have a lot of questions.";
    var doubtsHowYouFeelQuestion = "I think I'm ready to start the evaluation, but I am not certain donation is right for me yet.";
    var motivatedHowYouFeelQuestion = "I am highly motivated to be a donor for my intended recipient, and I would like to get the process started soon.";

    var motivationHeadingThree = "Can we disclose your willingness to donate a kidney to the intended recipient?";
    var motivationHeadingFour = "Have you previously applied to become a living donor at our center or any other transplant center?";
    var emergencyContactHeading = "Please provide Emergency Contact Information";

    cy.visit("/motivation.1")    //1. navigate to the "motivation.1" dialog
      .contains(motivationHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMotivation.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMotivation.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMotivation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains(motivationHeadingOne)    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuMotivation.whyInterestedTextArea)
      .should("be.visible")    //6. check the visibility of the item
      .type("Highly Motivated Donor");    //7. type in a required information

    cy.get(ohsuMotivation.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuMotivation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains(motivationHeadingTwo);    //9. check the title of the section
    cy.get(ohsuMotivation.gatheringInfoRadioBtn)    //10. check the visibility of radio buttons
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", gatheringHowYouFeelQuestion)
      .get(ohsuMotivation.inDoubtsRadioBtn)    //10. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", doubtsHowYouFeelQuestion)
      .get(ohsuMotivation.motivatedRadioBtn)    //10. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", motivatedHowYouFeelQuestion)
      .click();    //11. choose the necessary value

    cy.get(ohsuMotivation.nextBtn)    //12. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuMotivation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains(motivationHeadingThree)    //13. check the title of the section
    cy.get(ohsuMotivation.yesDiscloseRadioBtn)    //14. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //15. choose the necessary value
      .get(ohsuMotivation.noDiscloseRadioBtn)    //14. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "No");

    cy.get(ohsuMotivation.nextBtn)    //16. validation error message checking
      .click()
      .get(ohsuMotivation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains(motivationHeadingFour)    //17. check the title of the section
    cy.get(ohsuMotivation.yesPreviouslyApplied)    //18. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //19. choose the necessary value
      .get(ohsuMotivation.noPreviouslyApplied)    //18. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "No");

    cy.get(ohsuMotivation.nextBtn)
      .click();    //20. navigate to the next page

    cy.get(ohsuMotivation.headerBar)
      .should("be.visible")
      .and("have.text", emergencyContactHeading);    //21. check the title of a header of the page

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

    var motivationHeading = "With regard to your Kidney Donation:";
    var gatheringHowYouFeelQuestion = "I am still just gathering information; I still have a lot of questions.";
    var emergencyContactHeading = "Please provide Emergency Contact Information";

    cy.visit("/motivation.1")    //1. navigate to the "motivation.1" dialog
      .contains(motivationHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMotivation.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMotivation.whyInterestedTextArea)
      .should("be.visible")    //4. check the visibility of the item
      .type(gatheringHowYouFeelQuestion);    //5. type in a required information

    cy.get(ohsuMotivation.gatheringInfoRadioBtn)    //6. check the visibility of radio buttons
      .scrollIntoView()
      .click();    //7. choose the necessary value

    cy.get(ohsuMotivation.noDiscloseRadioBtn)    //8. check the visibility of radio buttons
      .scrollIntoView()
      .click();    //9. choose the necessary value

    cy.get(ohsuMotivation.noPreviouslyApplied)    //10. check the visibility of radio buttons
      .click();    //11. choose the necessary value

    cy.get(ohsuMotivation.nextBtn)
      .click();    //12. navigate to the next page

    cy.get(ohsuMotivation.headerBar)
      .should("be.visible")
      .and("have.text", emergencyContactHeading);    //13. check the title of a header of the page

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
    18. check the visibility of the selector
    19. check the visibility of the placeholder
    20. check the visibility of the selector's content
    21. choose the necessary value
    22. validation error message checking
    23. check the title of the section
    24. check the visibility of the selector
    25. check the visibility of the placeholder
    26. check the visibility of the selector's content
    27. choose the necessary value
    28. navigate to the next page
    29. check the title of a header of the page
    */

    var emergencyContHeading = "Please provide Emergency Contact Information";
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
    var secondaryEmContHeading = "Secondary Emergency Contact (Optional)";

    cy.visit("/emergencycontact.0")    //1. navigate to the "emergencycontact.0" dialog
      .contains(emergencyContHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmergencyContact0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuEmergencyContact0.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("First Name")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuEmergencyContact0.firstNameInputField)    //6. check the visibility of the item
      .should("be.visible")
      .type("Donor's First Name");    //7. type in a required information

    cy.get(ohsuEmergencyContact0.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Last Name")    //9. check the title of the section
    cy.get(ohsuEmergencyContact0.lastNameInputField)    //10. check the visibility of the item
      .should("be.visible")
      .type("Donor's Last Name");    //11. type in a required information

    cy.get(ohsuEmergencyContact0.nextBtn)    //12. validation error message checking
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Phone");    //13. check the title of the section
    cy.get(ohsuEmergencyContact0.phoneNumberInputField)    //14. check the visibility of the item
      .should("be.visible")
      .type("555554321");    //15. type in a required information

    cy.get(ohsuEmergencyContact0.nextBtn)    //16. validation error message checking
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Phone Type");    //17. check the title of the section
    cy.get(ohsuEmergencyContact0.phoneTypeSelector)    //18. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //19. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuEmergencyContact0.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //20. check the visibility of the selector's content
    cy.get(ohsuEmergencyContact0.phoneTypeSelector)
      .select("Home");    //21. choose the necessary value

    cy.get(ohsuEmergencyContact0.nextBtn)    //22. validation error message checking
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Relationship");    //23. check the title of the section
    cy.get(ohsuEmergencyContact0.relationshipSelector)    //24. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //25. check the visibility of the placeholder
    for (var i = 0; i < relationshipValues.length; i++) {
      cy.get(ohsuEmergencyContact0.relationshipSelector)
        .select(relationshipValues[i])
        .should("be.visible")
    };    //26. check the visibility of the selector's content
    cy.get(ohsuEmergencyContact0.relationshipSelector)
      .select("Friend or Other");    //27. choose the necessary value

    cy.get(ohsuEmergencyContact0.nextBtn)
      .click();    //28. navigate to the next page

    cy.get(ohsuEmergencyContact0.headerBar)
      .should("be.visible")
      .and("have.text", secondaryEmContHeading);    //29. check the title of a header of the page

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
    14. check the visibility of the selector
    15. check the visibility of the placeholder
    16. check the visibility of the selector's content
    17. choose the necessary value
    18. check the title of the section
    19. check the visibility of the selector
    20. check the visibility of the placeholder
    21. check the visibility of the selector's content
    22. choose the necessary value
    23. navigate to the next page
    24. check the title of a header of the page
    */

    var secondaryEmContHeading = "Secondary Emergency Contact (Optional)";
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
    var contactInfoHeading = "Please enter your contact phone number and verify your email address: ";

    cy.visit("/emergencycontact.1")    //1. navigate to the "emergencycontact.1" dialog
      .contains(secondaryEmContHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmergencyContact1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("First Name")    //4. check the title of the section
      .scrollIntoView();
    cy.get(ohsuEmergencyContact1.firstNameInputField)    //5. check the visibility of the item
      .should("be.visible")
      .type("Donor's First Name");    //6. type in a required information

    cy.contains("Last Name")    //7. check the title of the section
      .scrollIntoView();
    cy.get(ohsuEmergencyContact1.lastNameInputField)    //8. check the visibility of the item
      .should("be.visible")
      .type("Donor's Last Name");    //9. type in a required information

    cy.contains("Phone");    //10. check the title of the section
    cy.get(ohsuEmergencyContact1.phoneNumberInputField)    //11. check the visibility of the item
      .should("be.visible")
      .type("555554321");    //12. type in a required information

    cy.contains("Phone Type");    //13. check the title of the section
    cy.get(ohsuEmergencyContact1.phoneTypeSelector)    //14. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //15. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuEmergencyContact1.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //16. check the visibility of the selector's content
    cy.get(ohsuEmergencyContact1.phoneTypeSelector)
      .select("Work - Private");    //17. choose the necessary value

    cy.contains("Relationship");    //18. check the title of the section
    cy.get(ohsuEmergencyContact1.relationshipSelector)    //19. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //20. check the visibility of the placeholder
    for (var i = 0; i < relationshipValues.length; i++) {
      cy.get(ohsuEmergencyContact1.relationshipSelector)
        .select(relationshipValues[i])
        .should("be.visible")
    };    //21. check the visibility of the selector's content
    cy.get(ohsuEmergencyContact1.relationshipSelector)
      .select("Grandparent");    //22. choose the necessary value

    cy.get(ohsuEmergencyContact1.nextBtn)
      .click();    //23. navigate to the next page

    cy.get(ohsuEmergencyContact1.headerBar)
      .should("be.visible")
      .and("have.text", contactInfoHeading);    //24. check the title of a header of the page

  });

  it("Should check the emergencycontact.1 page elements - Skip Scenario", () => {

    /*
    1. navigate to the "emergencycontact.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. navigate to the next page
    5. check the title of a header of the page
    */

    var secondaryEmContHeading = "Secondary Emergency Contact (Optional)";
    var contactInfoHeading = "Please enter your contact phone number and verify your email address: ";

    cy.visit("/emergencycontact.1")    //1. navigate to the "emergencycontact.1" dialog
      .contains(secondaryEmContHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmergencyContact1.introStartSurBtn)
      .should("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuEmergencyContact1.nextBtn)
      .scrollIntoView()
      .click();    //4. navigate to the next page

    cy.get(ohsuEmergencyContact1.headerBar)
      .should("be.visible")
      .and("have.text", contactInfoHeading);    //5. check the title of a header of the page

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
    10. check the visibility of the selector
    11. check the visibility of the placeholder
    12. check the visibility of the selector's content
    13. choose the necessary value
    14. check the title of the section
    15. check the visibility of the item
    16. type in a required information
    17. check the title of the section
    18. check the visibility of the selector
    19. check the visibility of the placeholder
    20. check the visibility of the selector's content
    21. choose the necessary value
    22. check the title of the section
    23. check the visibility of the item
    24. type in a required information
    25. navigate to the next page
    26. validation error message checking
    27. check the title of the section
    28. check the visibility of the item
    29. type in a required information
    30. validation error message checking
    31. check the title of the section
    32. check the visibility of the item
    33. type in a required information
    34. validation error message checking
    35. check the title of the section
    36. check the visibility of the selector
    37. check the visibility of the placeholder
    38. check the visibility of the selector's content
    39. choose the necessary value
    40. validation error message checking
    41. check the title of the section
    42. check the visibility of the item
    43. type in a required information
    44. navigate to the next page
    45. check the title of a header of the page
    */

    var contactInfoHeading = "Please enter your contact phone number and verify your email address:";
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
    var contactScheduleHeading = "Please select the best days and times to contact you if necessary: (Optional)";

    cy.visit("/contact.0")    //1. navigate to the "contact.0" dialog
      .contains(contactInfoHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuContactInfo.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuContactInfo.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Best Phone Number")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuContactInfo.phoneNumberInput)    //6. check the visibility of the item
      .should("be.visible")
      .type("555-554-321");    //7. type in a required information

    cy.get(ohsuContactInfo.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Best Phone Type");    //9. check the title of the section
    cy.get(ohsuContactInfo.phoneTypeSelector)    //10. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //11. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuContactInfo.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //12. check the visibility of the selector's content
    cy.get(ohsuContactInfo.phoneTypeSelector)
      .select("Mobile");    //13. choose the necessary value

    cy.contains("Alternate Phone Number: (Optional)");    //14. check the title of the section
    cy.get(ohsuContactInfo.alternatePhoneNumberInput)    //15. check the visibility of the item
      .should("be.visible")
      .type("555-567-098");    //16. type in a required information

    cy.contains("Alternate Phone Type: (Optional)");    //17. check the title of the section
    cy.get(ohsuContactInfo.alternatePhoneTypeSelector)    //18. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //19. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuContactInfo.alternatePhoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //20. check the visibility of the selector's content
    cy.get(ohsuContactInfo.alternatePhoneTypeSelector)
      .select("Work - Private");    //21. choose the necessary value

    cy.contains("Your Email: (Optional)");    //22. check the title of the section
    cy.get(ohsuContactInfo.emailInput)    //23. check the visibility of the item
      .should("be.visible")
      .type("proud_donor@donormail.com");    //24. type in a required information

    cy.get(ohsuContactInfo.nextBtn)
      .click();    //25. navigate to the next page

    cy.get(ohsuContactInfo.nextBtn)    //26. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Your Home Address:");    //27. check the title of the section
    cy.get(ohsuContactInfo.addressInput)    //28. check the visibility of the item
      .should("be.visible")
      .type("742 Evergreen Terrace");    //29. type in a required information

    cy.get(ohsuContactInfo.nextBtn)    //30. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("City:");    //31. check the title of the section
    cy.get(ohsuContactInfo.cityInput)    //32. check the visibility of the item
      .should("be.visible")
      .type("Springfield");    //33. type in a required information

    cy.get(ohsuContactInfo.nextBtn)    //34. validation error message checking
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.contains("State:");    //35. check the title of the section
    cy.get(ohsuContactInfo.stateSelector)    //36. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //37. check the visibility of the placeholder
    for (var i = 0; i < stateValues.length; i++) {
      cy.get(ohsuContactInfo.stateSelector)
        .select(stateValues[i])
        .should("be.visible")
    };    //38. check the visibility of the selector's content
    cy.get(ohsuContactInfo.stateSelector)
      .select("IL");    //39. choose the necessary value

    cy.get(ohsuContactInfo.nextBtn)    //40. validation error message checking
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.contains("Zip:");    //41. check the title of the section
    cy.get(ohsuContactInfo.zipCodeInput)    //42. check the visibility of the item
      .should("be.visible")
      .type("62704");    //43. type in a required information

    cy.get(ohsuContactInfo.nextBtn)
      .click();    //44. navigate to the next page

    cy.get(ohsuContactInfo.headerBar)
      .should("be.visible")
      .and("have.text", contactScheduleHeading);    //45. check the title of a header of the page

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
    10. check the visibility of the selector
    11. check the visibility of the placeholder
    12. check the visibility of the selector's content
    13. choose the necessary value
    14. navigate to the next page
    15. check the title of the section
    16. check the visibility of the item
    17. type in a required information
    18. check the title of the section
    19. check the visibility of the item
    20. type in a required information
    21. check the title of the section
    22. check the visibility of the selector
    23. check the visibility of the placeholder
    24. check the visibility of the selector's content
    25. choose the necessary value
    26. check the title of the section
    27. check the visibility of the item
    28. type in a required information
    29. navigate to the next page
    30. check the title of a header of the page
    */

    var contactInfoHeading = "Please enter your contact phone number and verify your email address:";
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
    var contactScheduleHeading = "Please select the best days and times to contact you if necessary: (Optional)";

    cy.visit("/contact.0")    //1. navigate to the "contact.0" dialog
      .contains(contactInfoHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuContactInfo.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuContactInfo.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Best Phone Number")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuContactInfo.phoneNumberInput)    //6. check the visibility of the item
      .should("be.visible")
      .type("555-554-321");    //7. type in a required information

    cy.get(ohsuContactInfo.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Best Phone Type");    //9. check the title of the section
    cy.get(ohsuContactInfo.phoneTypeSelector)    //10. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //11. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuContactInfo.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //12. check the visibility of the selector's content
    cy.get(ohsuContactInfo.phoneTypeSelector)
      .select("Home");    //13. choose the necessary value

    cy.get(ohsuContactInfo.nextBtn)
      .click();    //14. navigate to the next page

    cy.contains("Your Home Address:");    //15. check the title of the section
    cy.get(ohsuContactInfo.addressInput)    //16. check the visibility of the item
      .should("be.visible")
      .type("742 Evergreen Terrace");    //17. type in a required information

    cy.contains("City:");    //18. check the title of the section
    cy.get(ohsuContactInfo.cityInput)    //19. check the visibility of the item
      .should("be.visible")
      .type("Springfield");    //20. type in a required information

    cy.contains("State:");    //21. check the title of the section
    cy.get(ohsuContactInfo.stateSelector)    //22. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //23. check the visibility of the placeholder
    for (var i = 0; i < stateValues.length; i++) {
      cy.get(ohsuContactInfo.stateSelector)
        .select(stateValues[i])
        .should("be.visible")
    };    //24. check the visibility of the selector's content
    cy.get(ohsuContactInfo.stateSelector)
      .select("IL");    //25. choose the necessary value

    cy.contains("Zip:");    //26. check the title of the section
    cy.get(ohsuContactInfo.zipCodeInput)    //27. check the visibility of the item
      .should("be.visible")
      .type("62704");    //28. type in a required information

    cy.get(ohsuContactInfo.nextBtn)
      .click();    //29. navigate to the next page

    cy.get(ohsuContactInfo.headerBar)
      .should("be.visible")
      .and("have.text", contactScheduleHeading);    //30. check the title of a header of the page

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

    var submitHeading = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";
    var contScheduleHeading = "Please select the best days and times to contact you if necessary: (Optional)";
    var contactOptionsHeading = "In order to facilitate easier contact, please select as many options as possible";

    cy.visit("/contact-schedule.01")    //1. navigate to the "contact-schedule.01" dialog
      .contains(contScheduleHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuContSchedule.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains(contactOptionsHeading);    //4. check the title of the section

    cy.get(ohsuContSchedule.mondayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Monday")

      .get(ohsuContSchedule.tuesdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Tuesday")

      .get(ohsuContSchedule.wednesdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Wednesday")

      .get(ohsuContSchedule.thursdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Thursday")

      .get(ohsuContSchedule.fridayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Friday")
      .click()    //6. choose the necessary value

      .get(ohsuContSchedule.morningCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "8:00 AM - 12:00 PM")
      .click()    //6. choose the necessary value

      .get(ohsuContSchedule.afternoonCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "12:00 PM - 5:00 PM")
      .click();    //6. choose the necessary value

    cy.contains("What is your preferred method of contact?");    //7. check the title of the section

    cy.get(ohsuContSchedule.phonePreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "Phone")
      .click()    //9. choose the necessary value
      .get(ohsuContSchedule.emailPreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "Email")
      .get(ohsuContSchedule.noPreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "No Preference");

    cy.get(ohsuContSchedule.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //10. navigate to the next page

    cy.get(ohsuContSchedule.headerBar)
      .should("be.visible")
      .and("have.text", submitHeading);    //11. check the title of a header of the page

  });

  it("Should check the contact-schedule.01 page elements - Skip Scenario", () => {

    /*
    1. navigate to the "contact-schedule.01" dialog
    2. check the title of the dialog
    3. click to start survey
    4. navigate to the next page
    5. check the title of a header of the page
    */

    var submitHeading = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";
    var contScheduleHeading = "Please select the best days and times to contact you if necessary: (Optional)";

    cy.visit("/contact-schedule.01")    //1. navigate to the "contact-schedule.01" dialog
      .contains(contScheduleHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuContSchedule.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuContSchedule.nextBtn)
      .scrollIntoView()
      .click();    //4. navigate to the next page

    cy.get(ohsuContSchedule.headerBar)
      .should("be.visible")
      .and("have.text", submitHeading);    //5. check the title of a header of the page

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

    var submitHeading = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";

    cy.visit("/supplemental.01")    //1. navigate to the "supplemental.01" dialog
      .contains(submitHeading)    //2. check the title of the dialog
      .get(ohsuSupplemental.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Please write here...");    //4. check the title of the section

    cy.get(ohsuSupplemental.textArea)    //5. check the visibility of the item 
      .should("be.visible")
      .type("Additional Information");    //6. type in the required information

    cy.get(ohsuSupplemental.submitBtn)    //7. check the visibility of the button
      .should("be.visible")
      .and("have.text", "Submit")
      .click();    //8. submit the questionnaire

    cy.get(ohsuSupplemental.headerBar)
      .should("be.visible")
      .and("have.text", "Questionnaire Submitted");    //9. check the title of a header of the page

  });

  it("Should check the thankyou.0 page elements", () => {

    /*
    1. navigate to the "thankyou.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the page's content
    */

    var thankYouPrologue = "Thank you for considering donating a kidney to someone in need. Our team has received your online health history questionnaire. Our living donor nurse coordinators will contact you soon to go over your health information and to answer any questions you may have about kidney donation. Below are links to our consent forms and to pages with information about living donation, our team, and the evaluation process.";

    var donorProgramInfoTitle = "Information about the OHSU Living Donor Program (link)";
    var factsForDonorsTitle = "Facts for the Living Donor (link)";
    var healthDieteTitle = "Healthy Eating (link)";
    var donorEducationTitle = "UNOS Donor Education (link)";

    var clickForMoreInfo = "The National Living Donor Assistance Center exists to provide access to transplantation for those who want to donate, but face financial barriers to doing so. Click here for more information:";
    var moreInfoLink = "https://www.livingdonorassistance.org/public/resources.aspx";

    var sendEmailHeading = "If you wish to contact us please send an e-mail to:";
    var emailTitle = "livingdonation@ohsu.edu";

    cy.visit("/thankyou.ohsu.0")    //1. navigate to the "thankyou.0" dialog
      .contains("Questionnaire Submitted")    //2. check the title of the dialog
      .get(ohsuThankYou.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains(thankYouPrologue);    //4. check the visibility of the page's content

    cy.get(ohsuThankYou.donorProgramInfoRef)
      .should("be.visible")
      .and("have.text", donorProgramInfoTitle)

      .get(ohsuThankYou.factsForDonorsRef)
      .should("be.visible")
      .and("have.text", factsForDonorsTitle)

      .get(ohsuThankYou.healthDieteRef)
      .should("be.visible")
      .and("have.text", healthDieteTitle)

      .get(ohsuThankYou.donorEducationRef)
      .should("be.visible")
      .and("have.text", donorEducationTitle);

    cy.contains(clickForMoreInfo);

    cy.get(ohsuThankYou.moreInfoRef)
      .should("be.visible")
      .and("have.text", moreInfoLink);

    cy.contains(sendEmailHeading);

    cy.get(ohsuThankYou.contactEmail)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", emailTitle);

    cy.contains("or call 503-494-8500.");
    cy.contains("OHSU Clinical Transplant Services");
    cy.contains("Mail Code: CB 569");
    cy.contains("3181 SW Sam Jackson Park Rd.");
    cy.contains("Portland, OR 97239-3098");
    cy.contains("Office: 503-494-8500");
    cy.contains("Fax: 503-494-4492");
    cy.contains("Toll Free: 800-452-1369 ext 48500");
    cy.contains("Email: livingdonation@ohsu.edu");

  });

})