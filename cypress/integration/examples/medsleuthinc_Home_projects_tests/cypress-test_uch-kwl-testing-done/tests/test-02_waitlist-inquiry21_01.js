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

    cy.visit("/waitlist-inquiry.2.1")   //1. navigate to the "family-medical-history.1" dialog
      .contains("Within the previous 12 months, have you gone to an Emergency Department or Urgent Care Clinic?") //2. check the title of the dialog
      .get(mismatchListDone.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.get(mismatchListDone.yesWaitlistTwo)
      .click()
      .get(mismatchListDone.nextBtn)
      .click();

    cy.get(mismatchListDone.headerBar)
      .should("be.visible")
      .and("have.text", "With Regard to your Emergency Department or Urgent Care Visit:");

    cy.get(mismatchListDone.inputHospitalName)
      .type("Hospital Name");

    cy.get(mismatchListDone.inputHospitalizationDate)
      .type("02281984")
      .get(mismatchListDone.nextBtn)
      .click();

    cy.get(mismatchListDone.headerBar)
      .should("be.visible")
      .and("have.text", "What was the reason for your Emergency Department or Urgent Care Visit? Please scroll down to review all organ system categories.");

    cy.contains("Airway and/or Lungs")
      .scrollIntoview()
      .contains("Blood Disorder (Abnormal Bruising, Bleeding, or Clotting)")
      .scrollIntoview()
      .contains("Cancer, Chemotherapy, and/or Radiation Therapy")
      .scrollIntoview()
      .contains("Diabetes, Thyroid, Adrenal and/or other Endocrine Disorder")
      .scrollIntoview()
      .contains("Digestive Tract and/or Liver Disease")
      .scrollIntoview()
      .contains("Heart and/or Circulatory System")
      .scrollIntoview()
      .contains("Immune-Mediated Diseases")
      .scrollIntoview();

    cy.contains("Infection")
      .scrollIntoview();
    cy.get(mismatchListDone.infectionDataTarget)
      .should("be.visible")
      .and("have.text", "What does this mean?")
      .click();
cy.get()


    cy.contains("Kidney Transplant or, if applicable, Dialysis Status")
      .scrollIntoview()
      .contains("Mental Well-Being")
      .scrollIntoview()
      .contains("Muscles, Bones, and/or Joints")
      .scrollIntoview()
      .contains("Neurological Deficit (Brain and/or Spine)")
      .scrollIntoview();













  });

  it("Should check the waitlist-inquiry.3.1 dialog's [Mismatch list] issue's fix", () => {

  });

  it("Should check the waitlist-inquiry.4.1 dialog's [Mismatch list] issue's fix", () => {

  });

  it("Should check the waitlist-inquiry.5.1 dialog's [Mismatch list] issue's fix", () => {

  });


})
