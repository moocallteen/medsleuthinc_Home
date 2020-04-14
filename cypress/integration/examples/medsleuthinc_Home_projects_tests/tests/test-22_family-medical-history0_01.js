import familyMedHistory0 from "../page objects/22_family-medical-history0_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
            "baseUrl",
            "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the family-medical-history.0 page elements -  scenario ", () => {

    });

})
