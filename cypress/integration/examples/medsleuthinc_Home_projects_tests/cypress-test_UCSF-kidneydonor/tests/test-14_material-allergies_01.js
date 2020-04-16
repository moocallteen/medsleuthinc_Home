import materialAllergies from "../page-objects/14_material-allergies_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the material-allergies page elements - Betadine scenario ", () => {

    var betadineMaterialAllergyTitle = "Betadine";
    var chlorhexidineMaterialAllergyTitle = "Chlorhexidine";
    var contrastMaterialAllergyTitle = "Contrast (X-Ray Dye)";
    var iodineMaterialAllergyTitle = "Iodine";
    var latexMaterialAllergyTitle = "LATEX";
    var tapeMaterialAllergyTitle = "Tape";
    var noMaterialAllergyTitle = "NO, I am NOT Allergic to ANY of the items on this list";

    var anaphylaxisReactionTitle = "ANAPHYLAXIS";
    var anxietyReactionTitle = "Anxiety";
    var breathIssuesReactionTitle = "Difficulty breathing, speaking and/or swallowing";
    var nauseaReactionTitle = "Nausea and/or Vomiting";
    var rashHivesReactionTitle = "Rash or Hives";
    var swellingReactionTitle = "Swelling of the eyes, face, lips, throat and/or tongue";
    var otherReactionTitle = "Other";

    cy.visit("/material-allergies")
      .contains("Are you allergic to any of the following?")
      .get(materialAllergies.introStartSurBtn)
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.contains("Please check all that apply:");

    cy.get(materialAllergies.betadineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", betadineMaterialAllergyTitle)
      .click()
      .get(materialAllergies.chlorhexidineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", chlorhexidineMaterialAllergyTitle)
      .get(materialAllergies.contrastMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", contrastMaterialAllergyTitle)
      .get(materialAllergies.iodineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", iodineMaterialAllergyTitle)
      .get(materialAllergies.latexMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", latexMaterialAllergyTitle)
      .get(materialAllergies.tapeMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", tapeMaterialAllergyTitle)
      .get(materialAllergies.noMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", noMaterialAllergyTitle)
      .get(materialAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.get(materialAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "What is the nature of your allergy to Betadine?");
    cy.contains("Please check all that apply:");

    cy.get(materialAllergies.anaphylaxisReactionCheckBox)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", anaphylaxisReactionTitle)
      .get(materialAllergies.anxietyReactionCheckBox)
      .should("be.visible")
      .and("have.text", anxietyReactionTitle)
      .click()
      .get(materialAllergies.breathIssuesReactionCheckBox)
      .should("be.visible")
      .and("have.text", breathIssuesReactionTitle)
      .get(materialAllergies.nauseaReactionCheckBox)
      .should("be.visible")
      .and("have.text", nauseaReactionTitle)
      .get(materialAllergies.rashHivesReactionCheckBox)
      .should("be.visible")
      .and("have.text", rashHivesReactionTitle)
      .get(materialAllergies.swellingReactionCheckBox)
      .should("be.visible")
      .and("have.text", swellingReactionTitle)
      .get(materialAllergies.otherReactionCheckBox)
      .should("be.visible")
      .and("have.text", otherReactionTitle)
      .click()
      .get(materialAllergies.otherInputField)
      .type("Other Reaction");

    cy.contains("If Other, please explain:");
    cy.get(materialAllergies.nextBtn)
      .click();

    cy.get(materialAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?")

  });

  it("Should check the material-allergies page elements - NO, I am NOT Allergic scenario ", () => {

    var betadineMaterialAllergyTitle = "Betadine";
    var chlorhexidineMaterialAllergyTitle = "Chlorhexidine";
    var contrastMaterialAllergyTitle = "Contrast (X-Ray Dye)";
    var iodineMaterialAllergyTitle = "Iodine";
    var latexMaterialAllergyTitle = "LATEX";
    var tapeMaterialAllergyTitle = "Tape";
    var noMaterialAllergyTitle = "NO, I am NOT Allergic to ANY of the items on this list";

    cy.visit("/material-allergies")
      .contains("Are you allergic to any of the following?")
      .get(materialAllergies.introStartSurBtn)
      .click();

    cy.contains("Please check all that apply:");

    cy.get(materialAllergies.betadineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", betadineMaterialAllergyTitle)
      .get(materialAllergies.chlorhexidineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", chlorhexidineMaterialAllergyTitle)
      .get(materialAllergies.contrastMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", contrastMaterialAllergyTitle)
      .get(materialAllergies.iodineMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", iodineMaterialAllergyTitle)
      .get(materialAllergies.latexMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", latexMaterialAllergyTitle)
      .get(materialAllergies.tapeMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", tapeMaterialAllergyTitle)
      .get(materialAllergies.noMaterialAllergyCheckBox)
      .should("be.visible")
      .and("have.text", noMaterialAllergyTitle)
      .click()
      .get(materialAllergies.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.get(materialAllergies.headerBar)
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?");

  });

}) 