import mismatchListDone from "../page-objects/02_waitlist-inquiry21_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/uch-recipient-kidney-followup/candidate-followup/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the waitlist-inquiry.2.1 dialog's [Mismatch list] issue's fix", () => {

    // link to the ticket [https://trello.com/c/3DE56I17]
    /*
    1. navigate to the "waitlist-inquiry.2.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. activate "Yes" radio button
    5. navigate to the next page
    6. check the title of the page
    7. input the demanded information
    8. input the demanded information
    9. navigate to the next page
    10. check the title of the page
    11. check the content availability on page
    12. check the visibility  of the item
    13. open the modal
    14. check the visibility of the modal's content
    15. close the modal
    16. check the visibility of the radio buttons
    */
    var infectionModalContent = "Infection×For Example: Bladder And/Or Urinary Tract Infection Bone Infection (Osteomyelitis) Gangrene (for example black toe) Infection of AV Fistula or AV Graft Infection of Peritoneal Dialysis Catheter (Peritonitis) Joint Infection (Septic Arthritis) Kidney Infection Severe Systemic Infection (Sepsis) Skin and/or Soft Tissue Infection";

    cy.visit("/waitlist-inquiry.2.1")    //1. navigate to the "waitlist-inquiry.2.1" dialog
      .contains("Within the previous 12 months, have you gone to an Emergency Department or Urgent Care Clinic?")   //2. check the title of the dialog
      .get(mismatchListDone.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(mismatchListDone.yesWaitlistTwo)
      .click()    //4. activate "Yes" radio button
      .get(mismatchListDone.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(mismatchListDone.headerBar)
      .should("be.visible")
      .and("have.text", "With Regard to your Emergency Department or Urgent Care Visit:");   //6. check the title of the page

    cy.get(mismatchListDone.inputHospitalName)
      .type("Hospital Name");    //7. input the demanded information

    cy.get(mismatchListDone.inputHospitalizationDate)
      .type("02281984")    //8. input the demanded information
      .get(mismatchListDone.nextBtn)
      .click();    //9. navigate to the next page

    cy.get(mismatchListDone.headerBar)
      .should("be.visible")
      .and("have.text", "What was the reason for your Emergency Department or Urgent Care Visit? Please scroll down to review all organ system categories.");   //10. check the title of the page


    cy.contains("Airway and/or Lungs")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Blood Disorder (Abnormal Bruising, Bleeding, or Clotting)")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Cancer, Chemotherapy, and/or Radiation Therapy")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Diabetes, Thyroid, Adrenal and/or other Endocrine Disorder")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Digestive Tract and/or Liver Disease")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Heart and/or Circulatory System")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Immune-Mediated Diseases")    //11. check the content availability on page
      .scrollIntoView();

    cy.contains("Infection")    //11. check the content availability on page
      .scrollIntoView();
    cy.get(mismatchListDone.infectionDataTarget)
      .should("be.visible")
      .and("have.text", "ⓘ What does this mean?")    //12. check the visibility  of the item
      .click();    //13. open the modal
    cy.get(mismatchListDone.infectionModalDialog)
      .should("be.visible")
      .and("have.text", infectionModalContent);    //14. check the visibility of the modal's content
    cy.get(mismatchListDone.infectionModalDialog)
      .click("topLeft");    //15. close the modal
    cy.get(mismatchListDone.yesInfectionRadioBtn)
      .should("be.visible")
      .and("contain", "Yes")    //16. check the visibility of the radio buttons
      .get(mismatchListDone.noInfectionRadioBtn)
      .should("be.visible")
      .and("contain", "No");    //16. check the visibility of the radio buttons

    cy.contains("Kidney Transplant or, if applicable, Dialysis Status")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Mental Well-Being")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Muscles, Bones, and/or Joints")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Neurological Deficit (Brain and/or Spine)")    //11. check the content availability on page
      .scrollIntoView();

  });

  it("Should check the waitlist-inquiry.3.1 dialog's [Mismatch list] issue's fix", () => {

    // link to the ticket [https://trello.com/c/3DE56I17]

    var infectionModalContent = "Infection×For Example: Bladder And/Or Urinary Tract Infection Bone Infection (Osteomyelitis) Gangrene (for example black toe) Infection of AV Fistula or AV Graft Infection of Peritoneal Dialysis Catheter (Peritonitis) Joint Infection (Septic Arthritis) Kidney Infection Severe Systemic Infection (Sepsis) Skin and/or Soft Tissue Infection";

    cy.visit("/waitlist-inquiry.3.1")   //1. navigate to the "waitlist-inquiry.2.1" dialog
      .contains("Within the previous 12 months, have you been Hospitalized for any reason other than to have surgery?") //2. check the title of the dialog
      .get(mismatchListDone.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.get(mismatchListDone.yesWaitlistThree)
      .click()    //4. activate "Yes" radio button
      .get(mismatchListDone.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(mismatchListDone.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your recent Hospitalization:");   //6. check the title of the page

    cy.get(mismatchListDone.inputHospitalNameThree)
      .type("Hospital Name");    //7. input the demanded information

    cy.get(mismatchListDone.inputHospitalizationDateThree)
      .type("02281984")    //8. input the demanded information
      .get(mismatchListDone.nextBtn)
      .click();    //9. navigate to the next page

    cy.get(mismatchListDone.headerBar)
      .should("be.visible")
      .and("have.text", "What was the reason for your Hospitalization? Please scroll down to review all organ system categories.");   //10. check the title of the page

    cy.contains("Airway and/or Lungs")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Blood Disorder (Abnormal Bruising, Bleeding, or Clotting)")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Cancer, Chemotherapy, and/or Radiation Therapy")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Diabetes, Thyroid, Adrenal and/or other Endocrine Disorder")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Digestive Tract and/or Liver Disease")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Heart and/or Circulatory System")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Immune-Mediated Diseases")    //11. check the content availability on page
      .scrollIntoView();

    cy.contains("Infection")    //11. check the content availability on page
      .scrollIntoView();
    cy.get(mismatchListDone.infectionDataTargetThree)
      .should("be.visible")
      .and("have.text", "ⓘ What does this mean?")    //12. check the visibility  of the item
      .click();    //13. open the modal
    cy.get(mismatchListDone.infectionModalDialogThree)
      .should("be.visible")
      .and("have.text", infectionModalContent);    //14. check the visibility of the modal's content
    cy.get(mismatchListDone.infectionModalDialogThree)
      .click("topLeft");    //15. close the modal
    cy.get(mismatchListDone.yesInfectionRadioBtnThree)
      .should("be.visible")
      .and("contain", "Yes")    //16. check the visibility of the radio buttons
      .get(mismatchListDone.noInfectionRadioBtnThree)
      .should("be.visible")
      .and("contain", "No");    //16. check the visibility of the radio buttons

    cy.contains("Kidney Transplant or, if applicable, Dialysis Status")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Mental Well-Being")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Muscles, Bones, and/or Joints")    //11. check the content availability on page
      .scrollIntoView();
    cy.contains("Neurological Deficit (Brain and/or Spine)")    //11. check the content availability on page
      .scrollIntoView();

  });

})
