import medicationList from "../page objects/11_medications-list-rx-ada_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the medications-list-rx-ada-1 page elements - Enter Medication scenario ", () => {

    var enterMedsHeaderTitle = "Please enter your medications, one by one. You may enter either the brand or generic name.";
    var dosageHeading = "Dosage (Optional)";
    var doses = [
      "2 mg",
      "1 mg",
      "0.25 mg",
      "0.5 mg",
      "Other"
    ];
    var frequencyHeading = "Frequency (Optional)";
    var frequences = [
      "Once a Day",
      "In the Morning",
      "Once a Day (at night only)",
      "At Noon",
      "In the Afternoon",
      "In the Evening",
      "At Bedtime",
      "Twice a Day",
      "Three Times a Day",
      "Four Times a Day",
      "As Needed",
      "Every Other Day",
      "Weekly",
      "Monthly",
      "I don't know",
      "Other"
    ];
    var listConfirmHeaderTxt = "If below is a complete list of medications, vitamins and supplements taken on a regular/occasional basis, click NEXT:";
    var reasonHeaderTitle = "Please select the reason(s) for taking Xanax?";
    var otherInputFieldHeading = "If Other, please explain here:";
    var medConditionsListHeader = "Do you have or have you had any of the following medical conditions?";

    cy.visit("/instructions.04")
      .get(medicationList.introStartSurBtn)
      .click()
      .get(medicationList.enterMedicationsRadioBtn)
      .click()
      .get(medicationList.nextBtn)
      .click()
      .get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", enterMedsHeaderTitle);

    cy.contains("Search for medications")
      .get(medicationList.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medicationList.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Please enter some medications")
      .get(medicationList.placeHolder)
      .should("be.visible")
      .get(medicationList.medsInputField)
      .should("be.visible")
      .type("Vitamin C")
      .wait(100)
      .get(medicationList.medsListWrapper)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .get(medicationList.suggestedItem)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .click()
      .get(medicationList.medsDropdownCloseBtn)
      .should("be.visible")
      .click()
      .get(medicationList.medsInputField)
      .type("Xanax")
      .wait(100);

    cy.get(medicationList.medsListWrapper)
      .should("be.visible")
      .and("contain", "Xanax")
      .get(medicationList.suggestedItem)
      .should("be.visible")
      .and("contain", "Xanax")
      .click()
      .get(medicationList.medsDropdownExpandBtn)
      .should("be.visible")
      .click()
      .get(medicationList.medsInfoBar)
      .should("contain", dosageHeading)
      .and("contain", frequencyHeading)
      .get(medicationList.dosageSelector)
    for (var i = 0; i < doses.length; i++) {
      cy.get(medicationList.dosageSelector)
        .select(doses[i])
        .should("be.visible");
    };

    cy.get(medicationList.dosageSelector)
      .select("0.5 mg");

    for (var i = 0; i < frequences.length; i++) {
      cy.get(medicationList.frequencySelector)
        .select(frequences[i])
        .should("be.visible");
    };

    cy.get(medicationList.frequencySelector)
      .select("Twice a Day")
      .get(medicationList.nextBtn)
      .click()
      .get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", listConfirmHeaderTxt)
      .get(medicationList.makeChangeBtn)
      .should("be.visible")
      .and("have.text", "Make Changes")
      .get(medicationList.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.contains(otherInputFieldHeading)
      .should("be.visible");

    cy.get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", reasonHeaderTitle)
      .get(medicationList.anxietyDisCheckBox)
      .should("be.visible")
      .and("have.text", "Anxiety Disorder")
      .click()
      .get(medicationList.panickAttCheckBox)
      .should("be.visible")
      .and("have.text", "Panic Attacks")
      .get(medicationList.otherCheckBox)
      .should("be.visible")
      .and("have.text", "Other")
      .click()
      .get(medicationList.idkCheckBox)
      .should("be.visible")
      .and("have.text", "I do not know")
      .get(medicationList.otherInputField)
      .should("be.visible")
      .type("Other Reason")
      .get(medicationList.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", medConditionsListHeader);

  });

  it("Should check the medications-list-rx-ada-1 page elements - Make Changes scenario ", () => {

    var doses = [
      "2000 mg",
      "1500 mg",
      "250 mg",
      "1000 mg",
      "Other"
    ];
    var frequences = [
      "Once a Day",
      "In the Morning",
      "Once a Day (at night only)",
      "At Noon",
      "In the Afternoon",
      "In the Evening",
      "At Bedtime",
      "Twice a Day",
      "Three Times a Day",
      "Four Times a Day",
      "As Needed",
      "Every Other Day",
      "Weekly",
      "Monthly",
      "I don't know",
      "Other"
    ];
    var medConditionsListHeader = "Do you have or have you had any of the following medical conditions?";
    var listConfirmHeaderTxt = "If below is a complete list of medications, vitamins and supplements taken on a regular/occasional basis, click NEXT:";

    cy.visit("/instructions.04")
      .get(medicationList.introStartSurBtn)
      .click()
      .get(medicationList.enterMedicationsRadioBtn)
      .click()
      .get(medicationList.nextBtn)
      .click()
      .get(medicationList.medsInputField)
      .type("Aspirin")
      .wait(100)
      .get(medicationList.medsListWrapper)
      .get(medicationList.suggestedItem)
      .click()
      .get(medicationList.nextBtn)
      .click()
      .get(medicationList.makeChangeBtn)
      .click()
      .get(medicationList.medsDropdownCloseBtn)
      .click()
      .get(medicationList.medsInputField)
      .type("Vitamin C")
      .wait(100)
      .get(medicationList.medsListWrapper)
      .get(medicationList.suggestedItem)
      .click()
      .get(medicationList.medsDropdownExpandBtn)
      .click();

    cy.get(medicationList.dosageSelector)
    for (var i = 0; i < doses.length; i++) {
      cy.get(medicationList.dosageSelector)
        .select(doses[i])
        .should("be.visible");
    };

    cy.get(medicationList.dosageSelector)
      .select("1000 mg")
    for (var i = 0; i < frequences.length; i++) {
      cy.get(medicationList.frequencySelector)
        .select(frequences[i])
        .should("be.visible");
    };

    cy.get(medicationList.frequencySelector)
      .select("In the Evening")
      .get(medicationList.nextBtn)
      .click()
      .wait(200)
      .get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", listConfirmHeaderTxt);

    cy.get(medicationList.nextBtn)
      .click();

    cy.get(medicationList.headerBar)
      .should("be.visible")
      .and("have.text", medConditionsListHeader);

  });

})