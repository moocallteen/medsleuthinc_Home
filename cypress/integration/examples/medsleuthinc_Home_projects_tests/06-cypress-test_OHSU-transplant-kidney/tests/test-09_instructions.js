import ohsuInstructions from "../page-objects/09_instructions";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
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

})