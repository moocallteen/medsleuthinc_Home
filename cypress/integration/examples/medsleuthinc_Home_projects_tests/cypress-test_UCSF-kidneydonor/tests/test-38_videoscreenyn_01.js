import videoscreenYesNo from "../page-objects/38_videoscreenyn_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the videoscreen.yn page elements - Yes Scenario", () => {

    /*
    1. navigate to the "videoscreen.yn" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of a header of the page
    */

    var dialogHeaderTitle = "Have you watched the UCSF video about Living Kidney Donation, 'The Gift of Life'?";
    var additionalInfoHeader = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";

    cy.visit("/videoscreen.yn")    //1. navigate to the "videoscreen.yn" dialog
      .contains(dialogHeaderTitle)    //2. check the title of the dialog
      .get(videoscreenYesNo.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(videoscreenYesNo.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(videoscreenYesNo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(videoscreenYesNo.yesRadioBtn)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //6. choose the necessary value
      .get(videoscreenYesNo.noRadioBtn)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "No");

    cy.get(videoscreenYesNo.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(videoscreenYesNo.headerBar)
      .should("be.visible")
      .and("have.text", additionalInfoHeader);    //8. check the title of a header of the page

  });

  it("Should check the videoscreen.yn page elements - No Scenario", () => {

    /*
    1. navigate to the "videoscreen.yn" dialog
    2. check the title of the dialog
    3. click to start survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of a header of the page
    */

    var dialogHeaderTitle = "Have you watched the UCSF video about Living Kidney Donation, 'The Gift of Life'?";
    var additionalInfoHeader = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";

    cy.visit("/videoscreen.yn")    //1. navigate to the "videoscreen.yn" dialog
      .contains(dialogHeaderTitle)    //2. check the title of the dialog
      .get(videoscreenYesNo.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(videoscreenYesNo.noRadioBtn)
      .should("have.text", "No")
      .click();    //4. choose the necessary value

    cy.get(videoscreenYesNo.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(videoscreenYesNo.headerBar)
      .should("be.visible")
      .and("have.text", additionalInfoHeader);    //6. check the title of a header of the page

  });

})