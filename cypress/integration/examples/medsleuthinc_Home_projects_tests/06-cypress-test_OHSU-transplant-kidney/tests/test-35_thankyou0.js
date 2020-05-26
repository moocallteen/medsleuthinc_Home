import ohsuThankYou from "../page-objects/35_thankyou0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the thankyou.0 page elements", () => {

    /*
    1. navigate to the "thankyou.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the page's content
    */

    var thankYouPrologue = "Thank you for considering donating a kidney to someone in need. Our team has received your online health history questionnaire. Our living donor nurse coordinators will contact you soon to go over your health information and to answer any questions you may have about kidney donation. Below are links to our consent forms and to pages with information about living donation, our team, and the evaluation process.";

    var donorProgramInfoTitle = "Information about the OHSU Living Donor Program (link)";
    var factsForDonorsTitle = "Facts for the Living Donor (link)";
    var healthDieteTitle = "Healthy Eating (link)";
    var donorEducationTitle = "UNOS Donor Education (link)";

    var clickForMoreInfo = "The National Living Donor Assistance Center exists to provide access to transplantation for those who want to donate, but face financial barriers to doing so. Click here for more information:";
    var moreInfoLink = "https://www.livingdonorassistance.org/public/resources.aspx";

    var sendEmailHeading = "If you wish to contact us please send an e-mail to:";
    var emailTitle = "livingdonation@ohsu.edu";

    cy.visit("/thankyou.ohsu.0")    //1. navigate to the "thankyou.0" dialog
      .contains("Questionnaire Submitted")    //2. check the title of the dialog
      .get(ohsuThankYou.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains(thankYouPrologue);    //4. check the visibility of the page's content

    cy.get(ohsuThankYou.donorProgramInfoRef)
      .should("be.visible")
      .and("have.text", donorProgramInfoTitle)

      .get(ohsuThankYou.factsForDonorsRef)
      .should("be.visible")
      .and("have.text", factsForDonorsTitle)

      .get(ohsuThankYou.healthDieteRef)
      .should("be.visible")
      .and("have.text", healthDieteTitle)

      .get(ohsuThankYou.donorEducationRef)
      .should("be.visible")
      .and("have.text", donorEducationTitle);

    cy.contains(clickForMoreInfo);

    cy.get(ohsuThankYou.moreInfoRef)
      .should("be.visible")
      .and("have.text", moreInfoLink);

    cy.contains(sendEmailHeading);

    cy.get(ohsuThankYou.contactEmail)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", emailTitle);

    cy.contains("or call 503-494-8500.");
    cy.contains("OHSU Clinical Transplant Services");
    cy.contains("Mail Code: CB 569");
    cy.contains("3181 SW Sam Jackson Park Rd.");
    cy.contains("Portland, OR 97239-3098");
    cy.contains("Office: 503-494-8500");
    cy.contains("Fax: 503-494-4492");
    cy.contains("Toll Free: 800-452-1369 ext 48500");
    cy.contains("Email: livingdonation@ohsu.edu");

  });

})