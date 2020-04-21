import insurance0 from "../page-objects/30_insurance0_01";

describe("transplant kidney donor page test", () => {
    before(() => {
        Cypress.config(
            "baseUrl",
            "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the insurance.0 page elements", () => {

    });

})
