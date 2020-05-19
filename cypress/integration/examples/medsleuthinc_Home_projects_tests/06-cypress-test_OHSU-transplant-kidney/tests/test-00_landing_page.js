import ohsuLandingPage from "../page-objects/00_landing_page";

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

})