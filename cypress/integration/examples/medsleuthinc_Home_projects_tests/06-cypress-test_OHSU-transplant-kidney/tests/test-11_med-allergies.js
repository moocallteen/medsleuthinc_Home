import ohsuMedAllergies from "../page-objects/11_med-allergies";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
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
    var otherReactionCheckBoxTitle = "Other";

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

    cy.get(ohsuMedAllergies.otherReactionCheckBox)    //34. check the checkbox visibility
      .should("be.visible")
      .and("have.text", otherReactionCheckBoxTitle)
      .click();    //35. choose the necessary value

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

})