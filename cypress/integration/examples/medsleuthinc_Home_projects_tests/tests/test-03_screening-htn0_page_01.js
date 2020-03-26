import screeningHtn0 from "../page objects/03_screening-htn0_page_01";

describe("transplan kidney donor page test", () => {
    before(() => {
      Cypress.config(
        "baseUrl",
        "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
      );
      cy.viewport(1280, 800);
    });

    it("Should check the screening.htn.0 page elements", () => {
        var selectorText = "How many medications do you take to control your blood pressure?";
        var medicationQtyTxt = "How many medications do you take to control your blood pressure?";
      cy.visit("/screening.htn.0")
        .get(screeningHtn0.introText)
        .should("be.visible")
        .get(screeningHtn0.introStartSurBtn)
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
        .get(screeningHtn0.yesRadioBtn)
        .should("be.visible")
        .check()
        .get(screeningHtn0.nextBtn).click()
        .get(screeningHtn0.medicationQtyTxt).should("be.visible")
        .get('select[id="selectID"]')
        .select('Select One')
        // .get(screeningHtn0.medicationQtySelect)//.should("be.visible")
        // .then(el => {
            // assert.include(el.text(), "Select One")
        })

        

        // .then(el => {
        //   assert.include(el.text(), );
    });