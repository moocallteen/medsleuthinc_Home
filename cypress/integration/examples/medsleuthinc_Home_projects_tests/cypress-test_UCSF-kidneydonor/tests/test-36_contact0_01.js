import contact0 from "../page-objects/36_contact0_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the contact.0 page elements - No Skip Optional Fields Scenario", () => {

    /*
    1. navigate to the "contact.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the item
    7. type in a required information
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the item
    11. check the visibility of the selector's content
    12. choose the necessary value
    13. check the title of the section
    14. check the visibility of the item
    15. type in a required information
    16. check the title of the section
    17. check the visibility of the item
    18. check the visibility of the selector's content
    19. choose the necessary value
    20. check the title of the section
    21. check the visibility of the item
    22. type in a required information
    23. navigate to the next page
    24. validation error message checking
    25. check the title of the section
    26. check the visibility of the item
    27. type in a required information
    28. validation error message checking
    29. check the title of the section
    30. check the visibility of the item
    31. type in a required information
    32. validation error message checking
    33. check the title of the section
    34. check the visibility of the item
    35. check the visibility of the selector's content
    36. choose the necessary value
    37. validation error message checking
    38. check the title of the section
    39. check the visibility of the item
    40. type in a required information
    41. navigate to the next page
    42. check the title of a header of the page
    */

    var phoneTypeValues = [
      "Mobile",
      "Home",
      "Work - Shared",
      "Work - Private"
    ];

    var stateValues = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY"
    ];

    cy.visit("/contact.0")    //1. navigate to the "contact.0" dialog
      .contains("Please enter your contact phone number and verify your email address:")    //2. check the title of the dialog
      .get(contact0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Best Phone Number")    //5. check the title of the section
      .scrollIntoView();
    cy.get(contact0.phoneNumberInput)    //6. check the visibility of the item
      .should("be.visible")
      .type("555-554-321");    //7. type in a required information

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Best Phone Type");    //9. check the title of the section
    cy.get(contact0.phoneTypeSelector)    //10. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(contact0.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //11. check the visibility of the selector's content
    cy.get(contact0.phoneTypeSelector)
      .select("Mobile");    //12. choose the necessary value

    cy.contains("Alternate Phone Number: (Optional)");    //13. check the title of the section
    cy.get(contact0.alternatePhoneNumberInput)    //14. check the visibility of the item
      .should("be.visible")
      .type("555-567-098");    //15. type in a required information

    cy.contains("Alternate Phone Type: (Optional)");    //16. check the title of the section
    cy.get(contact0.alternatePhoneTypeSelector)    //17. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(contact0.alternatePhoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //18. check the visibility of the selector's content
    cy.get(contact0.alternatePhoneTypeSelector)
      .select("Work - Private");    //19. choose the necessary value

    cy.contains("Your Email: (Optional)");    //20. check the title of the section
    cy.get(contact0.emailInput)    //21. check the visibility of the item
      .should("be.visible")
      .type("proud_donor@donormail.com");    //22. type in a required information

    cy.get(contact0.nextBtn)
      .click();    //23. navigate to the next page

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //24. validation error message checking

    cy.contains("Your Home Address:");    //25. check the title of the section
    cy.get(contact0.addressInput)    //26. check the visibility of the item
      .should("be.visible")
      .type("742 Evergreen Terrace");    //27. type in a required information

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //28. validation error message checking

    cy.contains("City:");    //29. check the title of the section
    cy.get(contact0.cityInput)    //30. check the visibility of the item
      .should("be.visible")
      .type("Springfield");    //31. type in a required information

    cy.get(contact0.nextBtn)
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");    //32. validation error message checking

    cy.contains("State:");    //33. check the title of the section
    cy.get(contact0.stateSelector)    //34. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < stateValues.length; i++) {
      cy.get(contact0.stateSelector)
        .select(stateValues[i])
        .should("be.visible")
    };    //35. check the visibility of the selector's content
    cy.get(contact0.stateSelector)
      .select("IL");    //36. choose the necessary value

    cy.get(contact0.nextBtn)
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");    //37. validation error message checking

    cy.contains("Zip:");    //38. check the title of the section
    cy.get(contact0.zipCodeInput)    //39. check the visibility of the item
      .should("be.visible")
      .type("62704");    //40. type in a required information

    cy.get(contact0.nextBtn)
      .click();    //41. navigate to the next page

    cy.get(contact0.headerBar)
      .should("be.visible")
      .and("have.text", "Please select the best days and times to contact you if necessary: (Optional)");    //42. check the title of a header of the page

  });

  it("Should check the contact.0 page elements - Skip Optional Fields Scenario", () => {

    /*
    1. navigate to the "contact.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the item
    7. type in a required information
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the item
    11. check the visibility of the selector's content
    12. choose the necessary value
    13. navigate to the next page
    14. check the title of the section
    15. check the visibility of the item
    16. type in a required information
    17. check the title of the section
    18. check the visibility of the item
    19. type in a required information
    20. check the title of the section
    21. check the visibility of the item
    22. check the visibility of the selector's content
    23. choose the necessary value
    24. check the title of the section
    25. check the visibility of the item
    26. type in a required information
    27. navigate to the next page
    28. check the title of a header of the page
    */

    var phoneTypeValues = [
      "Mobile",
      "Home",
      "Work - Shared",
      "Work - Private"
    ];

    var stateValues = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY"
    ];

    cy.visit("/contact.0")    //1. navigate to the "contact.0" dialog
      .contains("Please enter your contact phone number and verify your email address:")    //2. check the title of the dialog
      .get(contact0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Best Phone Number")    //5. check the title of the section
      .scrollIntoView();
    cy.get(contact0.phoneNumberInput)    //6. check the visibility of the item
      .should("be.visible")
      .type("555-554-321");    //7. type in a required information

    cy.get(contact0.nextBtn)
      .scrollIntoView()
      .click()
      .get(contact0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Best Phone Type");    //9. check the title of the section
    cy.get(contact0.phoneTypeSelector)    //10. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(contact0.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //11. check the visibility of the selector's content
    cy.get(contact0.phoneTypeSelector)
      .select("Home");    //12. choose the necessary value

    cy.get(contact0.nextBtn)
      .click();    //13. navigate to the next page

    cy.contains("Your Home Address:");    //14. check the title of the section
    cy.get(contact0.addressInput)    //15. check the visibility of the item
      .should("be.visible")
      .type("742 Evergreen Terrace");    //16. type in a required information

    cy.contains("City:");    //17. check the title of the section
    cy.get(contact0.cityInput)    //18. check the visibility of the item
      .should("be.visible")
      .type("Springfield");    //19. type in a required information

    cy.contains("State:");    //20. check the title of the section
    cy.get(contact0.stateSelector)    //21. check the visibility of the item
      .should("be.visible")
      .and("contain", "Select One")
    for (var i = 0; i < stateValues.length; i++) {
      cy.get(contact0.stateSelector)
        .select(stateValues[i])
        .should("be.visible")
    };    //22. check the visibility of the selector's content
    cy.get(contact0.stateSelector)
      .select("IL");    //23. choose the necessary value

    cy.contains("Zip:");    //24. check the title of the section
    cy.get(contact0.zipCodeInput)    //25. check the visibility of the item
      .should("be.visible")
      .type("62704");    //26. type in a required information

    cy.get(contact0.nextBtn)
      .click();    //27. navigate to the next page

    cy.get(contact0.headerBar)
      .should("be.visible")
      .and("have.text", "Please select the best days and times to contact you if necessary: (Optional)");    //28. check the title of a header of the page

  });

})