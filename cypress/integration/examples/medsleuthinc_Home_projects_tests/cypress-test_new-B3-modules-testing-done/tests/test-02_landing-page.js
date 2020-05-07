import fontShiftButtons from "../page-objects/02_landing-page";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.demo.prod-blue.pipeline.mdsth.co/demo-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the landing-page dialog's [the font shifting buttons don't shift the text font] issue's fix", () => {

    // link to the ticket [https://trello.com/c/kRukDfcl]

    /*
    1. navigate to the "landing-page" dialog
    2. check the title of the dialog
    3. check the content font-size
    4. click to increase the font size
    5. check the content font-size
    6. click to increase the font size
    7. refresh the page to refresh the content's font-size
    8. check the content font-size
    9. click to reduce the font size
    10. check the content font-size
    11. click to reduce the font size
    12. click to start survey to navigate to the next page
    13. check if the font size change affect the whole survey
    */

    var firstLine = "Welcome to the BREEZE TRANSPLANT online health history questionnaire.";

    cy.visit("/landing-page")    //1. navigate to the "landing-page" dialog
      .contains(firstLine);   //2. check the title of the dialog

    cy.get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "27.2px");    //3. check the content font-size 

    cy.get(fontShiftButtons.increasedFontBtn)    //4. click to increase the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "29.0133px");    //5. check the content font-size

    cy.get(fontShiftButtons.increasedFontBtn)    //6. click to increase the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "30.8267px");    //5. check the content font-size

    cy.get(fontShiftButtons.increasedFontBtn)    //6. click to increase the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "32.64px");    //5. check the content font-size

    cy.get(fontShiftButtons.increasedFontBtn)    //6. click to increase the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "34.4533px");    //5. check the content font-size

    cy.get(fontShiftButtons.increasedFontBtn)    //6. click to increase the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "36.2667px");    //5. check the content font-size

    cy.reload();    //7. refresh the page to refresh the content's font-size

    cy.get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "27.2px");    //8. check the content font-size 

    cy.get(fontShiftButtons.reducedFontBtn)    //9. click to reduce the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "25.3867px");    //10. check the content font-size

    cy.get(fontShiftButtons.reducedFontBtn)    //11. click to reduce the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "23.5733px");    //10. check the content font-size

    cy.get(fontShiftButtons.reducedFontBtn)    //11. click to reduce the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "21.76px");    //10. check the content font-size

    cy.get(fontShiftButtons.reducedFontBtn)    //11. click to reduce the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "19.9467px");    //10. check the content font-size

    cy.get(fontShiftButtons.reducedFontBtn)    //11. click to reduce the font size
      .click()
      .get(fontShiftButtons.pageContent)
      .should("have.css", "font-size", "18.1333px");    //10. check the content font-size

    cy.get(fontShiftButtons.introStartSurBtn)
      .should("have.text", "Start Survey")
      .click();    //12. click to start survey to navigate to the next page

    cy.get(fontShiftButtons.inputFieldsHeadings)
      .should("have.css", "font-size", "18.1333px");    //13. check if the font size change affect the whole survey

  });
})
