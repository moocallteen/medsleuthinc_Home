import screeningHtn0 from "../page objects/03_screening-htn_page_01";

describe("transplan kidney donor page test", () => {
    before(() => {
      Cypress.config(
        "baseUrl",
        "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
      );
      cy.viewport(1280, 800);
    });

    it("Should check the screening.htn.0 page elements - Yes scenario", () => {
        var medicationQtyTxt = "How many medications do you take to control your blood pressure?";
        var selectorText = "Select One";
        var selectorValues = [
          "1",
          "2",
          ">2"
        ];
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
      cy.get(screeningHtn0.headerBar)
        .should("be.visible")
        .and("contain", medicationQtyTxt)
        .get(screeningHtn0.medicationQtyBar)
        .should("be.visible")
        .and("contain", selectorText)
      for(var i = 0; i<selectorValues.length; i++) {
      cy.get(screeningHtn0.medicationQtySelector)
        .select(selectorValues[i])
        .should("be.visible")
      }
      cy.get(screeningHtn0.nextBtn)
        .click()
      cy.contains("Thank you for your generous offer to be a kidney donor")
        .should("be.visible")
      cy.contains("Unfortunately, you are not eligible to be a donor at this time")
        .should("be.visible")
      cy.contains("Your high blood pressure places you at increased risk of kidney disease and dangerous complications if you donate your kidney.")
        .should("be.visible")
      cy.get(screeningHtn0.footerText)
        .should("be.visible")
        });

    it("Should check the screening.htn.0 page elements - No scenario", () => {
      cy.visit("/screening.htn.0")
        .get(screeningHtn0.introStartSurBtn)
        .click()
      cy.get(screeningHtn0.noRadioBtn)
        .click()
      cy.get(screeningHtn0.nextBtn)
        .click()  
      cy.contains("Do you currently take pills or insulin for Diabetes?")
        .should("be.visible")
        }); 

        
    });

