import waitlistInquiry from "../page objects/19_waitlist-inquiry41_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the waitlist-inquiry.4.1 page elements - Back Surgery scenario ", () => {
      cy.visit("/waitlist-inquiry.4.1")   //1. navigate to the "activity.0" dialog
        .contains("Have you had Surgery in the past?") //2. check the title of the dialog
        .get(waitlistInquiry.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();  //3. click to start survey

      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required");   //4. validation error message checking

      cy.get(waitlistInquiry.yesSurgeryRadioBtn)
        .should("be.visible")
        .and("have.text", "Yes")   //5. check the visibility of the checkboxes
        .click()   //6. choose the necessary value      
        .get(waitlistInquiry.noSurgeryRadioBtn)
        .should("be.visible")
        .and("have.text", "No")   //5. check the visibility of the checkboxes
      cy.get(activityPage.nextBtn)
        .click();  //7. navigate to the next page 


    });
})
