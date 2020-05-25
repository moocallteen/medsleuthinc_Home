import ohsuEmergencyContact1 from "../page-objects/31_emergencycontact1";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the emergencycontact.1 page elements - No Skip Scenario", () => {

    /*
    1. navigate to the "emergencycontact.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the item
    6. type in a required information
    7. check the title of the section
    8. check the visibility of the item
    9. type in a required information
    10. check the title of the section
    11. check the visibility of the item
    12. type in a required information
    13. check the title of the section
    14. check the visibility of the selector
    15. check the visibility of the placeholder
    16. check the visibility of the selector's content
    17. choose the necessary value
    18. check the title of the section
    19. check the visibility of the selector
    20. check the visibility of the placeholder
    21. check the visibility of the selector's content
    22. choose the necessary value
    23. navigate to the next page
    24. check the title of a header of the page
    */

    var secondaryEmContHeading = "Secondary Emergency Contact (Optional)";
    var phoneTypeValues = [
      "Mobile",
      "Home",
      "Work - Shared",
      "Work - Private"
    ];
    var relationshipValues = [
      "Mother",
      "Father",
      "Spouse",
      "Legal Guardian",
      "Child",
      "Sibling",
      "Grandparent",
      "Aunt/Uncle",
      "Friend or Other"
    ];
    var contactInfoHeading = "Please enter your contact phone number and verify your email address: ";

    cy.visit("/emergencycontact.1")    //1. navigate to the "emergencycontact.1" dialog
      .contains(secondaryEmContHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmergencyContact1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("First Name")    //4. check the title of the section
      .scrollIntoView();
    cy.get(ohsuEmergencyContact1.firstNameInputField)    //5. check the visibility of the item
      .should("be.visible")
      .type("Donor's First Name");    //6. type in a required information

    cy.contains("Last Name")    //7. check the title of the section
      .scrollIntoView();
    cy.get(ohsuEmergencyContact1.lastNameInputField)    //8. check the visibility of the item
      .should("be.visible")
      .type("Donor's Last Name");    //9. type in a required information

    cy.contains("Phone");    //10. check the title of the section
    cy.get(ohsuEmergencyContact1.phoneNumberInputField)    //11. check the visibility of the item
      .should("be.visible")
      .type("555554321");    //12. type in a required information

    cy.contains("Phone Type");    //13. check the title of the section
    cy.get(ohsuEmergencyContact1.phoneTypeSelector)    //14. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //15. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuEmergencyContact1.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //16. check the visibility of the selector's content
    cy.get(ohsuEmergencyContact1.phoneTypeSelector)
      .select("Work - Private");    //17. choose the necessary value

    cy.contains("Relationship");    //18. check the title of the section
    cy.get(ohsuEmergencyContact1.relationshipSelector)    //19. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //20. check the visibility of the placeholder
    for (var i = 0; i < relationshipValues.length; i++) {
      cy.get(ohsuEmergencyContact1.relationshipSelector)
        .select(relationshipValues[i])
        .should("be.visible")
    };    //21. check the visibility of the selector's content
    cy.get(ohsuEmergencyContact1.relationshipSelector)
      .select("Grandparent");    //22. choose the necessary value

    cy.get(ohsuEmergencyContact1.nextBtn)
      .click();    //23. navigate to the next page

    cy.get(ohsuEmergencyContact1.headerBar)
      .should("be.visible")
      .and("have.text", contactInfoHeading);    //24. check the title of a header of the page

  });

  it("Should check the emergencycontact.1 page elements - Skip Scenario", () => {

    /*
    1. navigate to the "emergencycontact.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. navigate to the next page
    5. check the title of a header of the page
    */

    var secondaryEmContHeading = "Secondary Emergency Contact (Optional)";
    var contactInfoHeading = "Please enter your contact phone number and verify your email address: ";

    cy.visit("/emergencycontact.1")    //1. navigate to the "emergencycontact.1" dialog
      .contains(secondaryEmContHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmergencyContact1.introStartSurBtn)
      .should("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuEmergencyContact1.nextBtn)
      .scrollIntoView()
      .click();    //4. navigate to the next page

    cy.get(ohsuEmergencyContact1.headerBar)
      .should("be.visible")
      .and("have.text", contactInfoHeading);    //5. check the title of a header of the page

  });

})