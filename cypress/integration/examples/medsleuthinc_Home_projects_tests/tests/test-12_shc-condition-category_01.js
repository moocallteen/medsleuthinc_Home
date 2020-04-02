import medConditionsSurvey from "../page objects/12_shc-condition-category_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the shc-condition-category page elements - No follow-ups scenario ", () => {
        var airwayModalContent = "Airway and/or Lungs×For Example: Asthma COPD Interstitial Lung Disease (ILD) Pneumothorax (Collapsed Lung) Pulmonary Fibrosis Restrictive Lung Disease Sleep Apnea Tuberculosis";
        cy.visit("/shc-condition-category")
          .contains("Do you have or have you had any of the following medical conditions?")
          .get(medConditionsSurvey.introStartSurBtn)
          .should("be.visible")
          .and("contain", "Start Survey")
          .click();
        cy.contains("Airway and/or Lungs");
        cy.get(medConditionsSurvey.yesAirwaysRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noAirwaysRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetAirways)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.modalDialog)
          .first()
          .should("be.visible")
          .and("have.text", airwayModalContent);
        cy.get(medConditionsSurvey.closeModalDialog)
          .first()
          .should("be.visible")
          .click();
        
        cy.contains("Neurological Deficit (Brain and/or Spine)")
          .get(medConditionsSurvey.yesNeuroDefRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          

    });

})