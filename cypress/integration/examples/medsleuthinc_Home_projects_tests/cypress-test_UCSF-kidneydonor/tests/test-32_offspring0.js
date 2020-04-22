import offspring0 from "../page-objects/32_offspring0";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
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

})