import hardRejectPages from "../page-objects/41_hard-reject-pages_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the screening.htn.0 Hard Reject page elements", () => {

    /*
    1. navigate to the "screening.htn.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the checkbox
    5. choose the necessary value
    6. navigate to the next page
    7. check the title of the section
    8. check the visibility of the selector
    9. check the visibility of the selector's content
    10. choose the necessary value
    11. navigate to the next page
    12. check the title of a header of the page
    13. check the visibility of the page's content
    */

    var medicationQtyTxt = "How many medications do you take to control your blood pressure?";
    var selectorText = "Select One";
    var selectorValues = [
      "1",
      "2",
      ">2"
    ];
    var thanksRejectHeading = "Thank you for your generous offer to be a kidney donor";
    var rejectionHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionHighPressureText = "Your high blood pressure places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var rejectionFooterText = "If you have any questions, you may email us at\nLiving.Donor@ucsfmedctr.org and a member of our transplant team will get back to you within 48 hours.";

    cy.visit("/screening.htn.0")    //1. navigate to the "screening.htn.0" dialog
      .contains("Do you take any medications to control your Blood Pressure?")    //2. check the title of the dialog
      .should("be.visible");

    cy.get(hardRejectPages.introStartSurBtn)
      .should("be.visible")
      .click();    //3. click to start survey

    cy.get(hardRejectPages.yesBloodPressureRadioBtn)    //4. check the visibility of the checkbox
      .should("be.visible")
      .and("have.text", "Yes")
      .click();    //5. choose the necessary value

    cy.get(hardRejectPages.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(hardRejectPages.headerBar)    //7. check the title of the section
      .should("be.visible")
      .and("have.text", medicationQtyTxt);

    cy.get(hardRejectPages.medicationQtyBar)    //8. check the visibility of the selector
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < selectorValues.length; i++) {
      cy.get(hardRejectPages.medicationQtySelector)
        .select(selectorValues[i])
        .should("be.visible")
    };    //9. check the visibility of the selector's content

    cy.get(hardRejectPages.medicationQtyBar)
      .select(">2");    //10. choose the necessary value

    cy.get(hardRejectPages.nextBtn)
      .click();    //11. navigate to the next page

    cy.get(hardRejectPages.headerBar)    //12. check the title of a header of the page
      .should("be.visible")
      .and("have.text", thanksRejectHeading);

    cy.get(hardRejectPages.rejectionHeader)    //13. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionHeaderText);

    cy.get(hardRejectPages.rejectionReason)    //13. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionHighPressureText);

    cy.get(hardRejectPages.rejectionFooter)    //13. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionFooterText);

  });

  it("Should check the screening.diabetesrx Hard Reject page elements", () => {

    /*
    1. navigate to the "screening.diabetesrx" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the checkboxes
    5. choose the necessary value
    6. navigate to the next page
    7. check the title of a header of the page
    8. check the visibility of the page's content
    */

    var thanksRejectHeading = "Thank you for your generous offer to be a kidney donor";
    var rejectionHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionDiabetesText = "Your diabetes places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var rejectionFooterText = "If you have any questions, you may email us at\nLiving.Donor@ucsfmedctr.org and a member of our transplant team will get back to you within 48 hours.";

    cy.visit("/screening.diabetesrx")    //1. navigate to the "screening.diabetesrx" dialog
      .contains("Do you currently take pills or insulin for Diabetes?")    //2. check the title of the dialog
      .should("be.visible");

    cy.get(hardRejectPages.introStartSurBtn)
      .should("be.visible")
      .click();    //3. click to start survey

    cy.get(hardRejectPages.yesDiabetesRadioBtn)    //4. check the visibility of the checkboxes
      .should("be.visible")
      .and("contain", "Yes")
      .click();    //5. choose the necessary value

    cy.get(hardRejectPages.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(hardRejectPages.headerBar)    //7. check the title of a header of the page
      .should("be.visible")
      .and("have.text", thanksRejectHeading);

    cy.get(hardRejectPages.rejectionHeader)    //8. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionHeaderText);

    cy.get(hardRejectPages.rejectionReason)    //8. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionDiabetesText);

    cy.get(hardRejectPages.rejectionFooter)    //8. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionFooterText);

  });

  // add kidneystone autotest after fixing

  it("Should check the screening.tobacco Hard Reject page elements", () => {

    /*
    1. navigate to the "screening.tobacco" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the checkboxes
    5. choose the necessary value
    6. navigate to the next page
    7. check the visibility of the checkboxes
    8. choose the necessary value
    9. navigate to the next page
    10. check the title of a header of the page
    11. check the visibility of the page's content
    */

    var thanksRejectHeading = "Thank you for your generous offer to be a kidney donor";
    var rejectionHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionSmokingText = "You must be willing to quit using marijuana or tobacco products for at least 6 weeks prior to surgery";
    var rejectionFooterText = "If you have any questions, you may email us at\nLiving.Donor@ucsfmedctr.org and a member of our transplant team will get back to you within 48 hours.";

    cy.visit("/screening.tobacco")    //1. navigate to the "screening.tobacco" dialog
      .contains("Do you smoke cigarettes or marijuana?")    //2. check the title of the dialog
      .should("be.visible");

    cy.get(hardRejectPages.introStartSurBtn)
      .should("be.visible")
      .click();    //3. click to start survey

    cy.get(hardRejectPages.yesTobaccoRadioBtn)    //4. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Yes")
      .click();    //5. choose the necessary value

    cy.get(hardRejectPages.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(hardRejectPages.noTobaccoQuitRadioBtn)    //7. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "No")
      .click();    //8. choose the necessary value

    cy.get(hardRejectPages.nextBtn)
      .click();    //9. navigate to the next page

    cy.get(hardRejectPages.headerBar)    //10. check the title of a header of the page
      .should("be.visible")
      .and("have.text", thanksRejectHeading);

    cy.get(hardRejectPages.rejectionHeader)    //11. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionHeaderText);

    cy.get(hardRejectPages.rejectionReason)    //11. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionSmokingText);

    cy.get(hardRejectPages.rejectionFooter)    //11. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionFooterText);

  });

  // add illdrugs autotest after fixing

})