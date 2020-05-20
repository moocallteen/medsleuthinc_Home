import ohsuMaterialAllergies from "../page-objects/12_material-allergies";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the material-allergies page elements - Betadine scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the section description text
    5. check the checkbox visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    10. validation error message check
    11. check the checkbox visibility
    12. choose the necessary value
    13. check the section description text
    14. type in the required information
    15. navigate to the next page
    16. check the title of the current dialog
    */

    var matAllergiesHeading = "Are you allergic to any of the following?";
    var betadineMaterialAllergyTitle = "Betadine";
    var chlorhexidineMaterialAllergyTitle = "Chlorhexidine";
    var contrastMaterialAllergyTitle = "Contrast (X-Ray Dye)";
    var iodineMaterialAllergyTitle = "Iodine";
    var latexMaterialAllergyTitle = "LATEX";
    var tapeMaterialAllergyTitle = "Tape";
    var noMaterialAllergyTitle = "NO, I am NOT Allergic to ANY of the items on this list";

    var reactionNatureHeading = "What is the nature of your allergy to Betadine?";
    var anaphylaxisReactionTitle = "ANAPHYLAXIS";
    var anxietyReactionTitle = "Anxiety";
    var breathIssuesReactionTitle = "Difficulty breathing, speaking and/or swallowing";
    var nauseaReactionTitle = "Nausea and/or Vomiting";
    var rashHivesReactionTitle = "Rash or Hives";
    var swellingReactionTitle = "Swelling of the eyes, face, lips, throat and/or tongue";
    var otherReactionTitle = "Other";

    cy.visit("/material-allergies")    //1. navigate to the specified page
      .contains(matAllergiesHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuMaterialAllergies.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.contains("Please check all that apply:");    //4. check the section description text

    cy.get(ohsuMaterialAllergies.betadineMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", betadineMaterialAllergyTitle)
      .click();    //6. choose the necessary value

    cy.get(ohsuMaterialAllergies.chlorhexidineMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", chlorhexidineMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.contrastMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", contrastMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.iodineMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", iodineMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.latexMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", latexMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.tapeMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", tapeMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.noMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("be.visible")
      .and("have.text", noMaterialAllergyTitle);

    cy.get(ohsuMaterialAllergies.nextBtn)    //7. navigate to the next page
      .should("be.visible")
      .and("have.text", "Next")
      .click();

    cy.get(ohsuMaterialAllergies.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", reactionNatureHeading);
    cy.contains("Please check all that apply:");    //9. check the section description text

    cy.get(ohsuMaterialAllergies.nextBtn)    //10. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMaterialAllergies.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuMaterialAllergies.anaphylaxisReactionCheckBox)    //11. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", anaphylaxisReactionTitle);

    cy.get(ohsuMaterialAllergies.anxietyReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", anxietyReactionTitle)
      .click();    //12. choose the necessary value

    cy.get(ohsuMaterialAllergies.breathIssuesReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", breathIssuesReactionTitle);

    cy.get(ohsuMaterialAllergies.nauseaReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", nauseaReactionTitle);

    cy.get(ohsuMaterialAllergies.rashHivesReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", rashHivesReactionTitle);

    cy.get(ohsuMaterialAllergies.swellingReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", swellingReactionTitle);

    cy.get(ohsuMaterialAllergies.otherReactionCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", otherReactionTitle)
      .click();    //12. choose the necessary value

    cy.contains("If Other, please explain:")    //13. check the section description text
      .should("be.visible")
      .get(ohsuMaterialAllergies.otherInputField)    //14. type in the required information
      .type("Other Reaction");

    cy.get(ohsuMaterialAllergies.nextBtn)    //15. navigate to the next page
      .click();

    cy.get(ohsuMaterialAllergies.headerBar)    //16. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?")

  });

  it("Should check the material-allergies page elements - NO, I am NOT Allergic scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the section description text
    5. check the checkbox visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    */

    var matAllergiesHeading = "Are you allergic to any of the following?";
    var noMaterialAllergyTitle = "NO, I am NOT Allergic to ANY of the items on this list";

    cy.visit("/material-allergies")    //1. navigate to the specified page
      .contains(matAllergiesHeading)    //2. check the title of the current dialog
      .get(ohsuMaterialAllergies.introStartSurBtn)    //3. click to start the survey
      .click();

    cy.contains("Please check all that apply:");    //4. check the section description text

    cy.get(ohsuMaterialAllergies.noMaterialAllergyCheckBox)    //5. check the checkbox visibility
      .should("have.text", noMaterialAllergyTitle)
      .click()    //6. choose the necessary value
      .get(ohsuMaterialAllergies.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuMaterialAllergies.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Do you smoke cigarettes?");

  });

}) 