import typeBlood0 from "../page-objects/24_blood0_01";

// copy to UCSF_TransplantKidneyDonor.spec.js

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the blood.0 page elements", () => {

    /*
    1. navigate to the "blood.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the title of the section
    8. validation error message checking
    9. check the visibility of the checkboxes
    10. choose the necessary value
    11. navigate to the next page
    12. check the title of a header of the page
    */

    cy.visit("/blood.0")    //1. navigate to the "blood.0" dialog
      .contains("What is your blood type:")    //2. check the title of the dialog
      .get(typeBlood0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(typeBlood0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(typeBlood0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.get(typeBlood0.aBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "A")    //5. check the visibility of the checkboxes
      .click()    //6. choose the necessary value

      .get(typeBlood0.bBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "B")    //5. check the visibility of the checkboxes

      .get(typeBlood0.abBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "AB")    //5. check the visibility of the checkboxes

      .get(typeBlood0.zeroBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "0")    //5. check the visibility of the checkboxes

      .get(typeBlood0.unknownBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "Unknown");    //5. check the visibility of the checkboxes

    cy.contains("If necessary, would you be willing to accept a blood transfusion?");    //7. check the title of the section

    cy.get(typeBlood0.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(typeBlood0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.get(typeBlood0.yesTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //9. check the visibility of the checkboxes
      .click()   //10. choose the necessary value
      .get(typeBlood0.noTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "No");    //9. check the visibility of the checkboxes

    cy.get(typeBlood0.nextBtn)
      .click()    //11. navigate to the next page
      .get(typeBlood0.headerBar)
      .should("be.visible")
      .and("have.text", "Within the previous 12 months, do any of the following situations apply to you?");    //12. check the title of a header of the page

  });

})
