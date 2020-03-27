import screeningHtn0 from "../page objects/03_screening-htn_page_01";

describe("transplan kidney donor page test", () => {
    before(() => {
      Cypress.config(
        "baseUrl",
        "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
      );
      cy.viewport(1280, 800);
    });

    it("Should check the screening.htn.0 page elements", () => {
        var medicationQtyTxt = "How many medications do you take to control your blood pressure?";
      cy.visit("/screening.htn.0")
        .contains("Do you take any medications to control your Blood Pressure?")
        .should("be.visible");
      cy.get(screeningHtn0.introStartSurBtn)
        .should("be.visible")
        .click()
        .get(screeningHtn0.nextBtn)
        .should("be.visible")
        .and("contain", "Next")
        .click()
        .get(screeningHtn0.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required")
        .get(screeningHtn0.noRadioBtn)
        .should("be.visible")
        .and("contain", "No")
        .get(screeningHtn0.yesRadioBtn)
        .should("be.visible")
        .and("contain", "Yes")
        .click()
        .get(screeningHtn0.nextBtn)
        .click()
      cy.get(screeningHtn0.re)
        .get(screeningHtn0.medicationQtyTxt)
        .should("be.visible")
        .get('select[id="selectID"]')
        .select('Select One')
        // .get(screeningHtn0.medicationQtySelect)//.should("be.visible")
        // .then(el => {
            // assert.include(el.text(), "Select One")
        })

        

        // .then(el => {
        //   assert.include(el.text(), );
    });

