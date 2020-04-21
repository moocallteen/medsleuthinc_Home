import highriskbehavior1 from "../page-objects/25_highriskbehavior1_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the highriskbehavior.1 page elements", () => {

    /*
    1. navigate to the "highriskbehavior.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the title of the item
    7. open the help modal
    8. check the modal's content
    9. close the help modal
    10. check the visibility of the checkboxes
    11. choose the necessary value
    12. navigate to the next page
    13. check the title of a header of the page
    */

    var dataTargetTitle = "ⓘWhy do I need to answer these questions?";
    var helpModalContent = "×The following list of questions was developed using the Centers for Disease Control’s (CDC) Donor Exclusion Criteria guidelines. The CDC is a United States federal agency under the Department of Health and Human Services. You will be asked the below questions about high risk behavior on multiple occasions during the evaluation process. This is to protect you and to protect your recipient from possible harmful infectious disease that have been known to have been transmitted during the organ donation process.";

    var escortServiceTwoBehaviorDescription = "I have had sexual intercourse with a person known to engage in acts of prostitution";
    var bloodTransfusionBehaviorDescription = "I have received a blood transfusion";
    var hemodialysisBehaviorDescription = "I have received hemodialysis treatment";
    var hrbMaleSexBehaviorDescription = "I am a male who has had sex with other males (MSM)";
    var hrbFemaleSexBehaviorDescription = "I am a female who has sex with a man with a history of having sex with other males (MSM)";
    var hivSexBehaviorDescription = "I have had sexual intercourse with a person known to have HIV, HBV, and/or HCV infection(s)";
    var escortServiceOneBehaviorDescription = "I have engaged in acts of prostitution";
    var escortServiceThreeBehaviorDescription = "I have had sexual intercourse with an intravenous illicit drug user";
    var illicitDrugInjectBehaviorDescription = "I have injected illicit drugs";
    var prisonBehaviorDescription = "I have been incarcerated for 72 hours or longer";
    var diagnoseBehaviorDescription = "I have been diagnosed with or treated for syphilis, gonorrhea, chlamydia, or genital ulcers";
    var notApplyBehaviorDescription = "None of these situations apply to me";

    var addInfoRequestHeadind = "We may need to request additional information such as laboratory or other diagnostic test from your other health care providers. Please provide us with the following information (OPTIONAL)";

    cy.visit("/highriskbehavior.1")    //1. navigate to the "highriskbehavior.1" dialog
      .contains("Within the previous 12 months, do any of the following situations apply to you?")    //2. check the title of the dialog
      .get(highriskbehavior1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(highriskbehavior1.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(highriskbehavior1.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");    //4. validation error message checking

    cy.contains("Please check any that apply:");    //5. check the title of the section

    cy.get(highriskbehavior1.dataTargetRiskBehavior)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", dataTargetTitle)    //6. check the title of the item
      .click();    //7. open the help modal

    cy.get(highriskbehavior1.helpModal)
      .should("be.visible")
      .and("have.text", helpModalContent)    //8. check the modal's content
      .click("topLeft");    //9. close the help modal

    cy.get(highriskbehavior1.escortServiceTwoBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", escortServiceTwoBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.bloodTransfusionBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", bloodTransfusionBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.hemodialysisBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hemodialysisBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.hrbMaleSexBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hrbMaleSexBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.hrbFemaleSexBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hrbFemaleSexBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.hivSexBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", hivSexBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.escortServiceOneBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", escortServiceOneBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.escortServiceThreeBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", escortServiceThreeBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.illicitDrugInjectBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", illicitDrugInjectBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.prisonBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", prisonBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.diagnoseBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", diagnoseBehaviorDescription)    //10. check the visibility of the checkboxes

      .get(highriskbehavior1.notApplyBehaviorCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", notApplyBehaviorDescription)    //10. check the visibility of the checkboxes
      .click();    //11. choose the necessary value

    cy.get(highriskbehavior1.nextBtn)
      .scrollIntoView()
      .click();    //12. navigate to the next page

    cy.get(highriskbehavior1.headerBar)
      .should("be.visible")
      .and("have.text", addInfoRequestHeadind);    //13. check the title of a header of the page

  });

})
