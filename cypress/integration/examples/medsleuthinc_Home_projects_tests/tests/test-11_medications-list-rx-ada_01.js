import medicationList from "../page objects/11_medications-list-rx-ada_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the medications-list-rx-ada-1 page elements - Enter Medication scenario ", () => {

        var enterMedsHeaderTitle = "Please enter your medications, one by one. You may enter either the brand or generic name.";

        cy.visit("/instructions.04")
          .get(medicationList.introStartSurBtn)
          .click()
          .get(medicationList.enterMedicationsRadioBtn)
          .click()
          .get(medicationList.nextBtn)
          .click()
          .get(medicationList.headerBar)
          .should("be.visible")
          .and("have.text", enterMedsHeaderTitle)
        cy.contains("Search for medications")
          .get(medicationList.nextBtn)
          .should("be.visible")
          .and("have.text", "Next")
          .click()
          .get(medicationList.validationErrorMsg)
          .should("be.visible")
          .and("have.text", "Please enter some medications")
          .get(medicationList.medsInputField)
          .should("be.visible")
          .get(medicationList.placeHolder)
          .should("be.visible")
          .type("Aspirin")


          
    });

})