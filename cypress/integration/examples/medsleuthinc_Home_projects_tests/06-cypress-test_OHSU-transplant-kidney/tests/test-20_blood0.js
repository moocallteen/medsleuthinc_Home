import ohsuBloodType0 from "../page-objects/20_blood0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the blood.0 page elements", () => {

    /*
    1. navigate to the "blood.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the radio button
    6. choose the necessary value
    7. check the title of the section
    8. validation error message checking
    9. check the visibility of the radio button
    10. choose the necessary value
    11. navigate to the next page
    12. check the title of a header of the page
    */

    var bloodTypeHeading = "What is your blood type:";
    var hrBehaviorHeading = "Within the previous 12 months, do any of the following situations apply to you?";

    cy.visit("/blood.0")    //1. navigate to the "blood.0" dialog
      .contains(bloodTypeHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuBloodType0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuBloodType0.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuBloodType0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuBloodType0.aBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "A")    //5. check the visibility of the radio button
      .click()    //6. choose the necessary value

      .get(ohsuBloodType0.bBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "B")    //5. check the visibility of the radio button

      .get(ohsuBloodType0.abBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "AB")    //5. check the visibility of the radio button

      .get(ohsuBloodType0.zeroBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "O")    //5. check the visibility of the radio button

      .get(ohsuBloodType0.unknownBloodTypeRadioBtn)
      .should("be.visible")
      .and("have.text", "Unknown");    //5. check the visibility of the radio button

    cy.contains("If necessary, would you be willing to accept a blood transfusion?");    //7. check the title of the section

    cy.get(ohsuBloodType0.nextBtn)    //8. validation error message checking
      .click()
      .get(ohsuBloodType0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuBloodType0.yesTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //9. check the visibility of the radio button
      .click()   //10. choose the necessary value
      .get(ohsuBloodType0.noTransfusionCheckBtn)
      .should("be.visible")
      .and("have.text", "No");    //9. check the visibility of the radio button

    cy.get(ohsuBloodType0.nextBtn)
      .click()    //11. navigate to the next page
      .get(ohsuBloodType0.headerBar)
      .should("be.visible")
      .and("have.text", hrBehaviorHeading);    //12. check the title of a header of the page

  });

})