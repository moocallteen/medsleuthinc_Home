import ohsuOffspring from "../page-objects/28_offspring0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
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

})