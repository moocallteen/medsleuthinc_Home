import medicationListAppError from "../page-objects/10_instructions04_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/shc-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the instructions.04 dialog's [application error] issue's fix", () => {

    // link to the ticket [https://trello.com/c/O5GEWJ0D]

    /*
    1. navigate to the "instructions.04" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the radio button
    5. choose the necessary value
    6. navigate to the next page
    7. check the title of a header of the page
    8. check the visibility of the input field
    9. type in the madication's name
    10. choose the necessary medication
    11. navigate to the next page
    12. click to make changes
    13. remove the unnecessary medication
    14. check the visibility of the input field
    15. type in the madication's name
    16. choose the necessary medication
    17. navigate to the next page
    18. check the title of a header of the page
    19. navigate to the next page
    20. check the title of a header of the page
    21. check the visibility of the checkbox
    22. choose the necessary value
    23. navigate to the next page
    24. check the title of a header of the page
    */

    var instructionHeadingText = "This health questionnaire will take approximately 15 to 20 minutes to complete.";
    var pleaseEnterMedsHeading = "Please enter the medications which you take:";
    var debacterolForHeading = "What are you taking Debacterol for?";
    var folowinfContitionsHeading = "Do you have or have you had any of the following medical conditions?";

    cy.visit("/instructions.04")    //1. navigate to the "instructions.04" dialog
      .contains(instructionHeadingText)   //2. check the title of the dialog
      .get(medicationListAppError.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(medicationListAppError.enterMedsRadioBtn)    //4. check the visibility of the radio button
      .should("be.visible")
      .and("have.text", "Enter medications")
      .click();    //5. choose the necessary value

    cy.get(medicationListAppError.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(medicationListAppError.headerBar)    //7. check the title of a header of the page
      .should("be.visible")
      .and("have.text", pleaseEnterMedsHeading);

    cy.get(medicationListAppError.medsInputField)    //8. check the visibility of the input field
      .should("be.visible")
      .type("Aspirin")    //9. type in the madication's name
      .wait(100)
      .get(medicationListAppError.medsListWrapper)
      .should("be.visible")
      .and("contain", "Aspirin")
      .get(medicationListAppError.suggestedItem)
      .should("be.visible")
      .and("contain", "Aspirin")
      .click();    //10. choose the necessary medication

    cy.get(medicationListAppError.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(medicationListAppError.makeChangeBtn)
      .click();    //12. click to make changes

    cy.get(medicationListAppError.medsDropdownCloseBtn)
      .click();    //13. remove the unnecessary medication

    cy.get(medicationListAppError.medsInputField)    //14. check the visibility of the input field
      .should("be.visible")
      .type("Debacterol")    //15. type in the madication's name
      .wait(100)
      .get(medicationListAppError.medsListWrapper)
      .should("be.visible")
      .and("contain", "Debacterol")
      .get(medicationListAppError.suggestedItem)
      .should("be.visible")
      .and("contain", "Debacterol")
      .click();    //16. choose the necessary medication

    cy.get(medicationListAppError.nextBtn)
      .click();    //17. navigate to the next page

    cy.get(medicationListAppError.headerBar)    //18. check the title of a header of the page
      .should("be.visible")
      .and("have.text", "Confirm your medications");

    cy.get(medicationListAppError.nextBtn)
      .click();    //19. navigate to the next page

    cy.get(medicationListAppError.headerBar)    //20. check the title of a header of the page
      .should("be.visible")
      .and("have.text", debacterolForHeading);

    cy.get(medicationListAppError.idkCheckBox)    //21. check the visibility of the checkbox
      .should("be.visible")
      .and("have.text", "I do not know")
      .click();    //22. choose the necessary value

    cy.get(medicationListAppError.nextBtn)
      .click();    //23. navigate to the next page

    cy.get(medicationListAppError.headerBar)    //24. check the title of a header of the page
      .should("be.visible")
      .and("have.text", folowinfContitionsHeading);

  });

})