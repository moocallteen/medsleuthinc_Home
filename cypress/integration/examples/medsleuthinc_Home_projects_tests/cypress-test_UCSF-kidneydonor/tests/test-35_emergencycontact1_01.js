import emergencycontact1 from "../page-objects/35_emergencycontact1_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
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
    14. check the visibility of the item
    15. check the visibility of the selector's content
    16. choose the necessary value
    17. check the title of the section
    18. check the visibility of the item
    19. check the visibility of the selector's content
    20. choose the necessary value
    21. navigate to the next page
    22. check the title of a header of the page
    */

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

    cy.visit("/emergencycontact.1")    //1. navigate to the "emergencycontact.1" dialog
      .contains("Secondary Emergency Contact (Optional)")    //2. check the title of the dialog
      .get(emergencycontact1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("First Name")    //4. check the title of the section
      .scrollIntoView();
    cy.get(emergencycontact1.firstNameInputField)    //5. check the visibility of the item
      .should("be.visible")
      .type("Donor's First Name");    //6. type in a required information

    cy.contains("Last Name")    //7. check the title of the section
      .scrollIntoView();
    cy.get(emergencycontact1.lastNameInputField)    //8. check the visibility of the item
      .should("be.visible")
      .type("Donor's Last Name");    //9. type in a required information

    cy.contains("Phone");    //10. check the title of the section
    cy.get(emergencycontact1.phoneNumberInputField)    //11. check the visibility of the item
      .should("be.visible")
      .type("555554321");    //12. type in a required information

    cy.contains("Phone Type");    //13. check the title of the section
    cy.get(emergencycontact1.phoneTypeSelector)    //14. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(emergencycontact1.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //15. check the visibility of the selector's content
    cy.get(emergencycontact1.phoneTypeSelector)
      .select("Work - Private");    //16. choose the necessary value

    cy.contains("Relationship");    //17. check the title of the section
    cy.get(emergencycontact1.relationshipSelector)    //18. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < relationshipValues.length; i++) {
      cy.get(emergencycontact1.relationshipSelector)
        .select(relationshipValues[i])
        .should("be.visible")
    };    //19. check the visibility of the selector's content
    cy.get(emergencycontact1.relationshipSelector)
      .select("Grandparent");    //20. choose the necessary value

    cy.get(emergencycontact1.nextBtn)
      .click();    //21. navigate to the next page

    cy.get(emergencycontact1.headerBar)
      .should("be.visible")
      .and("have.text", "Please enter your contact phone number and verify your email address: ");    //22. check the title of a header of the page

  });

  it("Should check the emergencycontact.1 page elements - Skip Scenario", () => {

    /*
    1. navigate to the "emergencycontact.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. navigate to the next page
    5. check the title of a header of the page
    */

    cy.visit("/emergencycontact.1")    //1. navigate to the "emergencycontact.1" dialog
      .contains("Secondary Emergency Contact (Optional)")    //2. check the title of the dialog
      .get(emergencycontact1.introStartSurBtn)
      .should("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(emergencycontact1.nextBtn)
      .scrollIntoView()
      .click();    //4. navigate to the next page

    cy.get(emergencycontact1.headerBar)
      .should("be.visible")
      .and("have.text", "Please enter your contact phone number and verify your email address: ");    //5. check the title of a header of the page

  });

})