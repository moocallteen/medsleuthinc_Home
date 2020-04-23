import emergencycontact0 from "../page-objects/34_emergencycontact0_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the emergencycontact.0 page elements", () => {

    /*
    1. navigate to the "emergencycontact.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the item
    7. type in a required information
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the item
    11. type in a required information
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of the item
    15. type in a required information
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of the item
    19. check the visibility of the selector's content
    20. choose the necessary value
    21. validation error message checking
    22. check the title of the section
    23. check the visibility of the item
    24. check the visibility of the selector's content
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of a header of the page
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

    cy.visit("/emergencycontact.0")    //1. navigate to the "emergencycontact.0" dialog
      .contains("Please provide Emergency Contact Information")    //2. check the title of the dialog
      .get(emergencycontact0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(emergencycontact0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("First Name")    //5. check the title of the section
      .scrollIntoView();
    cy.get(emergencycontact0.firstNameInputField)    //6. check the visibility of the item
      .should("be.visible")
      .type("Donor's First Name");    //7. type in a required information

    cy.get(emergencycontact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Last Name")    //9. check the title of the section
      .scrollIntoView();
    cy.get(emergencycontact0.lastNameInputField)    //10. check the visibility of the item
      .should("be.visible")
      .type("Donor's Last Name");    //11. type in a required information

    cy.get(emergencycontact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //12. validation error message checking

    cy.contains("Phone");    //13. check the title of the section
    cy.get(emergencycontact0.phoneNumberInputField)    //14. check the visibility of the item
      .should("be.visible")
      .type(555554321);    //15. type in a required information

    cy.get(emergencycontact0.nextBtn)
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //16. validation error message checking

    cy.contains("Phone Type");    //17. check the title of the section
    cy.get(emergencycontact0.phoneTypeSelector)    //18. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(emergencycontact0.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //19. check the visibility of the selector's content
    cy.get(emergencycontact0.phoneTypeSelector)
      .select("Home");    //20. choose the necessary value

    cy.get(emergencycontact0.nextBtn)
      .click()
      .get(emergencycontact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //21. validation error message checking

    cy.contains("Relationship");    //22. check the title of the section
    cy.get(emergencycontact0.relationshipSelector)    //23. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < relationshipValues.length; i++) {
      cy.get(emergencycontact0.relationshipSelector)
        .select(relationshipValues[i])
        .should("be.visible")
    };    //24. check the visibility of the selector's content
    cy.get(emergencycontact0.relationshipSelector)
      .select("Friend or Other");    //25. choose the necessary value

    cy.get(emergencycontact0.nextBtn)
      .click();    //26. navigate to the next page

    cy.get(emergencycontact0.headerBar)
      .should("be.visible")
      .and("have.text", "Secondary Emergency Contact (Optional)");    //27. check the title of a header of the page

  });

})