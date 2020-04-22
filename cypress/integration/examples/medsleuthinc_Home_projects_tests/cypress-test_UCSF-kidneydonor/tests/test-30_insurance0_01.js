import insurance0 from "../page-objects/30_insurance0_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
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

    cy.visit("/insurance.0")    //1. navigate to the "insurance.0" dialog
      .contains("Are you currently covered under a Medical Insurance plan?")    //2. check the title of the dialog
      .get(insurance0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(insurance0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(insurance0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(insurance0.yesInsurancePlan)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio buttons
      .click()    //6. choose the necessary value
      .get(insurance0.noInsurancePlan)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the radio buttons

    cy.get(insurance0.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(insurance0.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Medical Insurance plan: (Optional)");    //8. check the title of a header of the page

    cy.contains("Who is your Medical Insurance Provider?");    //9. check the title of the section
    cy.get(insurance0.providerInsuranceInput)
      .should("be.visible")
      .type("Medical Insurance Provider Name");    //10. type in a required information

    cy.contains("Group #");    //9. check the title of the section
    cy.get(insurance0.groupInsuranceInput)
      .should("be.visible")
      .type("321654987");    //10. type in a required information

    cy.contains("Member ID #");    //9. check the title of the section
    cy.get(insurance0.memberIDInsuranceInput)
      .should("be.visible")
      .type("Member #1");    //10. type in a required information

    cy.contains("Customer or Member Service Telephone Number:");    //9. check the title of the section
    cy.get(insurance0.phoneNumberInsuranceInput)
      .should("be.visible")
      .type("555555132");    //10. type in a required information

    cy.get(insurance0.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(insurance0.headerBar)
      .should("be.visible")
      .and("have.text", "What is your current marital status?");    //12. check the title of a header of the page

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

    cy.visit("/insurance.0")    //1. navigate to the "insurance.0" dialog
      .contains("Are you currently covered under a Medical Insurance plan?")    //2. check the title of the dialog
      .get(insurance0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(insurance0.noInsurancePlan)
      .should("have.text", "No")    //4. check the visibility of the radio buttons
      .click();    //5. choose the necessary value

    cy.get(insurance0.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(insurance0.headerBar)
      .should("be.visible")
      .and("have.text", "What is your current marital status?");    //7. check the title of a header of the page

  });

})