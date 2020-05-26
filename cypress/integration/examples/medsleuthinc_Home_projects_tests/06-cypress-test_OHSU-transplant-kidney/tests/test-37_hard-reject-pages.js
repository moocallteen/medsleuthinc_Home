import ohsuHardRejection from "../page-objects/37_hard-reject-pages";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
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
    10. navigate to the next page
    11. check the content visibility
    */

    var medicationQtyTxt = "How many medications do you take to control your blood pressure?";
    var selectorText = "Select One";
    var selectorValues = [
      "1",
      "2",
      ">2"
    ];
    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Your high blood pressure places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.htn.0")    //1. navigate to the "screening.htn.0" dialog
      .contains("Do you take any medications to control your Blood Pressure?")    //2. check the title of the dialog
      .should("be.visible");

    cy.get(ohsuHardRejection.introStartSurBtn)
      .should("be.visible")
      .click();    //3. click to start survey

    cy.get(ohsuHardRejection.yesBloodPressureRadioBtn)    //4. check the visibility of the checkbox
      .should("be.visible")
      .and("have.text", "Yes")
      .click();    //5. choose the necessary value

    cy.get(ohsuHardRejection.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(ohsuHardRejection.headerBar)    //7. check the title of the section
      .should("be.visible")
      .and("have.text", medicationQtyTxt);

    cy.get(ohsuHardRejection.medicationQtyBar)    //8. check the visibility of the selector
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < selectorValues.length; i++) {
      cy.get(ohsuHardRejection.medicationQtySelector)
        .select(selectorValues[i])
        .should("be.visible")
    };    //9. check the visibility of the selector's content

    cy.get(ohsuHardRejection.nextBtn)
      .click();    //10. navigate to the next page

    cy.contains(rejectionHeader)
      .should("be.visible");    //11. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //11. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //11. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //11. check the content visibility


  });

  it("Should check the screening.htn.0 Hard Rejection - Black or African American scenario", () => {

    /*
    1. navigate to the "race.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the checkbox
    5. choose the necessary value
    6. check the visibility of the radio button
    7. choose the necessary value
    8. check the visibility of the selector
    9. choose the necessary value
    10. check the visibility of the radio button
    11. choose the necessary value
    12. navigate to the next page
    13. check the title of a header of the page
    14. check the visibility of the checkbox
    15. choose the necessary value
    16. navigate to the next page
    17. check the content visibility
    */

    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Your high blood pressure places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/race.0")    //1. navigate to the "race.0" dialog
      .contains("Demographics")    //2. check the title of the dialog
      .should("be.visible");

    cy.get(ohsuHardRejection.introStartSurBtn)
      .should("be.visible")
      .click();    //3. click to start survey

    cy.get(ohsuHardRejection.afroRaceCheckBox)    //4. check the visibility of the checkbox
      .should("be.visible")
      .and("have.text", "Black or African American")
      .click();    //5. choose the necessary value

    cy.get(ohsuHardRejection.noHispanicEthnicityRadioBtn)    //6. check the visibility of the radio button
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuHardRejection.languageSelector)    //8. check the visibility of the selector
      .should("be.visible")
      .select("English");    //9. choose the necessary value

    cy.get(ohsuHardRejection.noTranslatorNecessity)    //10. check the visibility of the radio button
      .should("be.visible")
      .and("have.text", "No")
      .click();    //11. choose the necessary value

    cy.get(ohsuHardRejection.nextBtn)
      .click();    //12. navigate to the next page

    cy.get(ohsuHardRejection.headerBar)    //13. check the title of a header of the page
      .should("be.visible")
      .and("have.text", "Do you take any medications to control your Blood Pressure?");

    cy.get(ohsuHardRejection.yesBloodPressureRadioBtn)    //14. check the visibility of the checkbox
      .should("be.visible")
      .and("have.text", "Yes")
      .click();    //15. choose the necessary value

    cy.get(ohsuHardRejection.nextBtn)
      .click();    //16. navigate to the next page

    cy.contains(rejectionHeader)
      .should("be.visible");    //17. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //17. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //17. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //17. check the content visibility

  });

  it("Should check the screening.diabetesrx Hard Reject page elements", () => {

    /*
    1. navigate to the "screening.diabetesrx" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the checkboxes
    5. choose the necessary value
    6. navigate to the next page
    7. check the content visibility
    */

    var rejectionHeader = "Thank you for your generous offer to be a kidney donor";
    var rejectionContentHeader = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionContentBody = "Your diabetes places you at increased risk of kidney disease and dangerous complications if you donate your kidney.";
    var rejectionContentFooter = "If you have any questions, you may email us at livingdonation@ohsu.edu and a member of our transplant team will get back to you soon.";

    cy.visit("/screening.diabetesrx")    //1. navigate to the "screening.diabetesrx" dialog
      .contains("Do you have Diabetes?")    //2. check the title of the dialog
      .should("be.visible");

    cy.get(ohsuHardRejection.introStartSurBtn)
      .should("be.visible")
      .click();    //3. click to start survey

    cy.get(ohsuHardRejection.yesDiabetesRadioBtn)    //4. check the visibility of the checkboxes
      .should("be.visible")
      .and("contain", "Yes")
      .click();    //5. choose the necessary value

    cy.get(ohsuHardRejection.nextBtn)
      .click();    //6. navigate to the next page

    cy.contains(rejectionHeader)
      .should("be.visible");    //7. check the content visibility

    cy.contains(rejectionContentHeader)
      .should("be.visible");    //7. check the content visibility

    cy.contains(rejectionContentBody)
      .should("be.visible");    //7. check the content visibility

    cy.contains(rejectionContentFooter)
      .should("be.visible");    //7. check the content visibility


  });

  // add kidneystone reject autotest after fixing
  // add tobacco reject autotest after fixing

  /*it("Should check the screening.tobacco.standard Hard Reject page elements", () => {

    
    1. navigate to the "screening.tobacco.standard" dialog
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


    var tobaccoScreeningHeading = "Do you use tobacco (any type: chewing, vapor, e-cigarette, and/or cigarette) or marijuana?";

    var thanksRejectHeading = "Thank you for your generous offer to be a kidney donor";
    var rejectionHeaderText = "Unfortunately, you are not eligible to be a donor at this time";
    var rejectionSmokingText = "You must be willing to quit using marijuana or tobacco products for at least 6 weeks prior to surgery";
    var rejectionFooterText = "If you have any questions, you may email us at\nLiving.Donor@ucsfmedctr.org and a member of our transplant team will get back to you within 48 hours.";

    cy.visit("/screening.tobacco.standard")    //1. navigate to the "screening.tobacco.standard" dialog
      .contains(tobaccoScreeningHeading)    //2. check the title of the dialog
      .should("be.visible");

    cy.get(ohsuHardRejection.introStartSurBtn)
      .should("be.visible")
      .click();    //3. click to start survey

    cy.get(ohsuHardRejection.yesTobaccoRadioBtn)    //4. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Yes")
      .click();    //5. choose the necessary value

    cy.get(ohsuHardRejection.nextBtn)
      .click();    //6. navigate to the next page

    cy.get(ohsuHardRejection.noTobaccoQuitRadioBtn)    //7. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "No")
      .click();    //8. choose the necessary value

    cy.get(ohsuHardRejection.nextBtn)
      .click();    //9. navigate to the next page

    cy.get(ohsuHardRejection.headerBar)    //10. check the title of a header of the page
      .should("be.visible")
      .and("have.text", thanksRejectHeading);

    cy.get(ohsuHardRejection.rejectionHeader)    //11. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionHeaderText);

    cy.get(ohsuHardRejection.rejectionReason)    //11. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionSmokingText);

    cy.get(ohsuHardRejection.rejectionFooter)    //11. check the visibility of the page's content
      .should("be.visible")
      .and("have.text", rejectionFooterText);

  });*/

  // add illdrugs autotest after fixing

})