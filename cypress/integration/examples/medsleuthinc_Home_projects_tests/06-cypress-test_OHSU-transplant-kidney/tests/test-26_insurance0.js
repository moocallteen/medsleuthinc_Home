import ohsuMedInsurance from "../page-objects/26_insurance0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
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

    var medInsuranceHeading = "Are you currently covered under a Medical Insurance plan?";
    var insurancePlanHeading = "With regard to your Medical Insurance plan: (Optional)";
    var maritalStatusHeading = "What is your current marital status?";

    cy.visit("/insurance.0")    //1. navigate to the "insurance.0" dialog
      .contains(medInsuranceHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMedInsurance.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMedInsurance.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedInsurance.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuMedInsurance.yesInsurancePlan)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio buttons
      .click()    //6. choose the necessary value
      .get(ohsuMedInsurance.noInsurancePlan)
      .should("be.visible")
      .and("have.text", "No");    //5. check the visibility of the radio buttons

    cy.get(ohsuMedInsurance.nextBtn)
      .click();    //7. navigate to the next page

    cy.get(ohsuMedInsurance.headerBar)
      .should("be.visible")
      .and("have.text", insurancePlanHeading);    //8. check the title of a header of the page

    cy.contains("Who is your Medical Insurance Provider?");    //9. check the title of the section
    cy.get(ohsuMedInsurance.providerInsuranceInput)
      .should("be.visible")
      .type("Medical Insurance Provider Name");    //10. type in a required information

    cy.contains("Group #");    //9. check the title of the section
    cy.get(ohsuMedInsurance.groupInsuranceInput)
      .should("be.visible")
      .type("321654987");    //10. type in a required information

    cy.contains("Customer or Member Service Telephone Number:");    //9. check the title of the section
    cy.get(ohsuMedInsurance.phoneNumberInsuranceInput)
      .should("be.visible")
      .type("555555132");    //10. type in a required information

    cy.contains("Member ID #");    //9. check the title of the section
    cy.get(ohsuMedInsurance.memberIDInsuranceInput)
      .should("be.visible")
      .type("Member #1");    //10. type in a required information

    cy.get(ohsuMedInsurance.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(ohsuMedInsurance.headerBar)
      .should("be.visible")
      .and("have.text", maritalStatusHeading);    //12. check the title of a header of the page

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

    var medInsuranceHeading = "Are you currently covered under a Medical Insurance plan?";
    var maritalStatusHeading = "What is your current marital status?";

    cy.visit("/insurance.0")    //1. navigate to the "insurance.0" dialog
      .contains(medInsuranceHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMedInsurance.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMedInsurance.noInsurancePlan)
      .should("have.text", "No")    //4. check the visibility of the radio buttons
      .click();    //5. choose the necessary value

    cy.get(ohsuMedInsurance.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(ohsuMedInsurance.headerBar)
      .should("be.visible")
      .and("have.text", maritalStatusHeading);    //7. check the title of a header of the page

  });

})