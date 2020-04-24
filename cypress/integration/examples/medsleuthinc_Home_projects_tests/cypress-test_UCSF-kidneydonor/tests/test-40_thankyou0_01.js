import thankYou0 from "../page-objects/40_thankyou0_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the thankyou.0 page elements", () => {

    /*
    1. navigate to the "thankyou.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the page's content
    5. check the visibility of the page's content
    6. check the visibility of the page's content
    7. check the visibility of the page's content
    */

    var thankYouPrologue = "Thank you for your generous offer to be a living kidney donor. Our goal is to begin the formal evaluation process as soon as possible. Below are some useful educational materials about living kidney donation. Please take a moment to review these materials.";
    var pleaseSendUsEmail = "If you wish to contact us please send an e-mail to:";

    var donorMaterials = "UCSF Kidney Transplant Living Donor Educational Materials";
    var donorOverview = "UCSF Kidney Transplant Living Donor Overview";
    var giftOfLife = "UCSF 'The Gift of Life' Video";
    var nationalRegistry = "National Kidney Registry";
    var nationalFoundation = "National Kidney Foundation";
    var practices = "UCSF Notice of Privacy Practices";
    var patientSafety = "UCSF Patient Safety";
    var patientResources = "NLDAC Patient Resources";

    cy.visit("/thankyou.0")    //1. navigate to the "thankyou.0" dialog
      .contains("Questionnaire Submitted")    //2. check the title of the dialog
      .get(thankYou0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains(thankYouPrologue);    //4. check the visibility of the page's content

    cy.get(thankYou0.donorMaterialsEducationLink)
      .should("be.visible")
      .and("have.text", donorMaterials)    //5. check the visibility of the page's content

      .get(thankYou0.donorOverviewEducationLink)
      .should("be.visible")
      .and("have.text", donorOverview)    //5. check the visibility of the page's content

      .get(thankYou0.giftOfLifeEducationLink)
      .should("be.visible")
      .and("have.text", giftOfLife)    //5. check the visibility of the page's content

      .get(thankYou0.nationalRegistryEducationLink)
      .should("be.visible")
      .and("have.text", nationalRegistry)    //5. check the visibility of the page's content

      .get(thankYou0.nationalFoundationEducationLink)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", nationalFoundation)    //5. check the visibility of the page's content

      .get(thankYou0.practicesEducationLink)
      .should("be.visible")
      .and("have.text", practices)    //5. check the visibility of the page's content

      .get(thankYou0.patientSafetyEducationLink)
      .should("be.visible")
      .and("have.text", patientSafety)    //5. check the visibility of the page's content

      .get(thankYou0.patientResourcesEducationLink)
      .should("be.visible")
      .and("have.text", patientResources);    //5. check the visibility of the page's content

    cy.contains(pleaseSendUsEmail);    //6. check the visibility of the page's content

    cy.get(thankYou0.contactEmail)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Living.Donor@ucsfmedctr.org");    //7. check the visibility of the page's content

  });

})