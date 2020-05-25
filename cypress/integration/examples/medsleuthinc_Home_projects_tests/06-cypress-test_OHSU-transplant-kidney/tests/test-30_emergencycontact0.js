import ohsuEmergencyContact0 from "../page-objects/30_emergencycontact0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
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
    18. check the visibility of the selector
    19. check the visibility of the placeholder
    20. check the visibility of the selector's content
    21. choose the necessary value
    22. validation error message checking
    23. check the title of the section
    24. check the visibility of the selector
    25. check the visibility of the placeholder
    26. check the visibility of the selector's content
    27. choose the necessary value
    28. navigate to the next page
    29. check the title of a header of the page
    */

    var emergencyContHeading = "Please provide Emergency Contact Information";
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
    var secondaryEmContHeading = "Secondary Emergency Contact (Optional)";

    cy.visit("/emergencycontact.0")    //1. navigate to the "emergencycontact.0" dialog
      .contains(emergencyContHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuEmergencyContact0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuEmergencyContact0.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("First Name")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuEmergencyContact0.firstNameInputField)    //6. check the visibility of the item
      .should("be.visible")
      .type("Donor's First Name");    //7. type in a required information

    cy.get(ohsuEmergencyContact0.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Last Name")    //9. check the title of the section
    cy.get(ohsuEmergencyContact0.lastNameInputField)    //10. check the visibility of the item
      .should("be.visible")
      .type("Donor's Last Name");    //11. type in a required information

    cy.get(ohsuEmergencyContact0.nextBtn)    //12. validation error message checking
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Phone");    //13. check the title of the section
    cy.get(ohsuEmergencyContact0.phoneNumberInputField)    //14. check the visibility of the item
      .should("be.visible")
      .type("555554321");    //15. type in a required information

    cy.get(ohsuEmergencyContact0.nextBtn)    //16. validation error message checking
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Phone Type");    //17. check the title of the section
    cy.get(ohsuEmergencyContact0.phoneTypeSelector)    //18. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //19. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuEmergencyContact0.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //20. check the visibility of the selector's content
    cy.get(ohsuEmergencyContact0.phoneTypeSelector)
      .select("Home");    //21. choose the necessary value

    cy.get(ohsuEmergencyContact0.nextBtn)    //22. validation error message checking
      .click()
      .get(ohsuEmergencyContact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Relationship");    //23. check the title of the section
    cy.get(ohsuEmergencyContact0.relationshipSelector)    //24. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //25. check the visibility of the placeholder
    for (var i = 0; i < relationshipValues.length; i++) {
      cy.get(ohsuEmergencyContact0.relationshipSelector)
        .select(relationshipValues[i])
        .should("be.visible")
    };    //26. check the visibility of the selector's content
    cy.get(ohsuEmergencyContact0.relationshipSelector)
      .select("Friend or Other");    //27. choose the necessary value

    cy.get(ohsuEmergencyContact0.nextBtn)
      .click();    //28. navigate to the next page

    cy.get(ohsuEmergencyContact0.headerBar)
      .should("be.visible")
      .and("have.text", secondaryEmContHeading);    //29. check the title of a header of the page

  });

})