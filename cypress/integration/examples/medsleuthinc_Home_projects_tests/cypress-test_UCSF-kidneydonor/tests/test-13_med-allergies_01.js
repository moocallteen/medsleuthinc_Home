import medAllergies from "../page-objects/13_med-allergies_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the med-allergies page elements - Yes Vitamin C scenario ", () => {

    var anaphylaxisReactionCheckBoxTitle = "ANAPHYLAXIS";
    var anxietyReactionCheckBoxTitle = "Anxiety";
    var breathIssuesReactionCheckBoxTitle = "Difficulty breathing, speaking and/or swallowing";
    var nauseaReactionCheckBoxTitle = "Nausea and/or Vomiting";
    var rashHivesReactionCheckBoxTitle = "Rash or Hives";
    var swellingReactionCheckBoxTitle = "Swelling of the eyes, face, lips, throat and/or tongue";
    var otherReactionCheckBoxTitle = "Other";

    cy.visit("/med-allergies")
      .contains("Do you have any ALLERGIES to medications?")
      .get(medAllergies.introStartSurBtn)
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.get(medAllergies.noMedAllergies)
      .should("be.visible")
      .and("have.text", "No")
      .get(medAllergies.yesMedAllergies)
      .should("be.visible")
      .and("have.text", "Yes")
      .click()
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Please enter the medications which you take:");

    cy.contains("Search for medications")
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medAllergies.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Please add medications");

    cy.get(medAllergies.placeHolder)
      .should("be.visible")
      .get(medAllergies.medsInputField)
      .should("be.visible")
      .type("Aspirin")
      .get(medAllergies.medsListWrapper)
      .should("be.visible")
      .and("contain", "Aspirin")
      .get(medAllergies.firstSuggestedItem)
      .should("be.visible")
      .and("contain", "Aspirin")
      .click()
      .get(medAllergies.nextBtn)
      .click();

    cy.contains("Aspirin")
      .get(medAllergies.headerBar)
      .should("be.visible")
      .and("contain", "Confirm your medications")
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .get(medAllergies.makeChangesBtn)
      .should("be.visible")
      .and("contain", "Make Changes")
      .click();

    cy.get(medAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Please enter the medications which you take:")
      .get(medAllergies.deleteMedBtn)
      .should("be.visible")
      .click();

    cy.get(medAllergies.medsInputField)
      .type("Vitamin C")
      .get(medAllergies.medsListWrapper)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .get(medAllergies.firstSuggestedItem)
      .should("be.visible")
      .and("contain", "Vitamin C")
      .click()
      .get(medAllergies.nextBtn)
      .click();

    cy.contains("Vitamin C")
      .get(medAllergies.makeChangesBtn)
      .should("be.visible")
      .and("contain", "Make Changes")
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.contains("If Other, please explain:")
      .get(medAllergies.headerBar)
      .should("be.visible")
      .and("contain", "What allergic reactions do you have to Vitamin C?")
      .get(medAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(medAllergies.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required")
      .wait(300);

    cy.get(medAllergies.anaphylaxisReactionCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", anaphylaxisReactionCheckBoxTitle)
      .get(medAllergies.anxietyReactionCheckBox)
      .should("be.visible")
      .and("have.text", anxietyReactionCheckBoxTitle)
      .click()
      .get(medAllergies.breathIssuesReactionCheckBox)
      .should("be.visible")
      .and("have.text", breathIssuesReactionCheckBoxTitle)
      .get(medAllergies.nauseaReactionCheckBox)
      .should("be.visible")
      .and("have.text", nauseaReactionCheckBoxTitle)
      .get(medAllergies.rashHivesReactionCheckBox)
      .should("be.visible")
      .and("have.text", rashHivesReactionCheckBoxTitle)
      .get(medAllergies.swellingReactionCheckBox)
      .should("be.visible")
      .and("have.text", swellingReactionCheckBoxTitle)
      .get(medAllergies.otherReactionCheckBox)
      .should("be.visible")
      .and("have.text", otherReactionCheckBoxTitle)
      .click()
      .get(medAllergies.otherInputField)
      .type("Other Reaction")
      .get(medAllergies.nextBtn)
      .click();

    cy.get(medAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Are you allergic to any of the following?");
    cy.contains("Please check all that apply:");

  });

  it("Should check the med-allergies page elements - No scenario ", () => {

    cy.visit("/med-allergies")
      .contains("Do you have any ALLERGIES to medications?")
      .get(medAllergies.introStartSurBtn)
      .click();

    cy.get(medAllergies.noMedAllergies)
      .click()
      .get(medAllergies.nextBtn)
      .click()
      .get(medAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Are you allergic to any of the following?");

    cy.contains("Please check all that apply:");

  });

})