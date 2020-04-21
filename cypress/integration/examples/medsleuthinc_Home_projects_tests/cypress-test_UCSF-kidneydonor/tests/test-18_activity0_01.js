import activityPage from "../page-objects/18_activity0_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);

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

    cy.visit("/activity.0")    //1. navigate to the "activity.0" dialog
      .contains("Which of the following most closely represents your level of physical activity?")        //2. check the title of the dialog
      .get(activityPage.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();        //3. click to start survey

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

    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

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
      "5"
    ];
    var catheterizationQtyValues = [
      "1",
      "2",
      "3",
      "4",
      "5"
    ];
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
    };    //29. check the visibility of the selector's content
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
      "5"
    ];
    var catheterizationQtyValues = [
      "1",
      "2",
      "3",
      "4",
      "5"
    ];
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
    };    //29. check the visibility of the selector's content
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
      "5"
    ];
    var catheterizationQtyValues = [
      "1",
      "2",
      "3",
      "4",
      "5"
    ];
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
    };    //29. check the visibility of the selector's content
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

    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

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

    var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
    var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
    var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
    var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
    var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
    var shortOfBreathActivityTitle = "I am short of breath at rest";
    var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
    var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

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

});
