import ohsuContactInfo from "../page-objects/32_contact0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
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
    10. check the visibility of the selector
    11. check the visibility of the placeholder
    12. check the visibility of the selector's content
    13. choose the necessary value
    14. check the title of the section
    15. check the visibility of the item
    16. type in a required information
    17. check the title of the section
    18. check the visibility of the selector
    19. check the visibility of the placeholder
    20. check the visibility of the selector's content
    21. choose the necessary value
    22. check the title of the section
    23. check the visibility of the item
    24. type in a required information
    25. navigate to the next page
    26. validation error message checking
    27. check the title of the section
    28. check the visibility of the item
    29. type in a required information
    30. validation error message checking
    31. check the title of the section
    32. check the visibility of the item
    33. type in a required information
    34. validation error message checking
    35. check the title of the section
    36. check the visibility of the selector
    37. check the visibility of the placeholder
    38. check the visibility of the selector's content
    39. choose the necessary value
    40. validation error message checking
    41. check the title of the section
    42. check the visibility of the item
    43. type in a required information
    44. navigate to the next page
    45. check the title of a header of the page
    */

    var contactInfoHeading = "Please enter your contact phone number and verify your email address:";
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
    var contactScheduleHeading = "Please select the best days and times to contact you if necessary: (Optional)";

    cy.visit("/contact.0")    //1. navigate to the "contact.0" dialog
      .contains(contactInfoHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuContactInfo.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuContactInfo.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Best Phone Number")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuContactInfo.phoneNumberInput)    //6. check the visibility of the item
      .should("be.visible")
      .type("555-554-321");    //7. type in a required information

    cy.get(ohsuContactInfo.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Best Phone Type");    //9. check the title of the section
    cy.get(ohsuContactInfo.phoneTypeSelector)    //10. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //11. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuContactInfo.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //12. check the visibility of the selector's content
    cy.get(ohsuContactInfo.phoneTypeSelector)
      .select("Mobile");    //13. choose the necessary value

    cy.contains("Alternate Phone Number: (Optional)");    //14. check the title of the section
    cy.get(ohsuContactInfo.alternatePhoneNumberInput)    //15. check the visibility of the item
      .should("be.visible")
      .type("555-567-098");    //16. type in a required information

    cy.contains("Alternate Phone Type: (Optional)");    //17. check the title of the section
    cy.get(ohsuContactInfo.alternatePhoneTypeSelector)    //18. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //19. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuContactInfo.alternatePhoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //20. check the visibility of the selector's content
    cy.get(ohsuContactInfo.alternatePhoneTypeSelector)
      .select("Work - Private");    //21. choose the necessary value

    cy.contains("Your Email: (Optional)");    //22. check the title of the section
    cy.get(ohsuContactInfo.emailInput)    //23. check the visibility of the item
      .should("be.visible")
      .type("proud_donor@donormail.com");    //24. type in a required information

    cy.get(ohsuContactInfo.nextBtn)
      .click();    //25. navigate to the next page

    cy.get(ohsuContactInfo.nextBtn)    //26. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Your Home Address:");    //27. check the title of the section
    cy.get(ohsuContactInfo.addressInput)    //28. check the visibility of the item
      .should("be.visible")
      .type("742 Evergreen Terrace");    //29. type in a required information

    cy.get(ohsuContactInfo.nextBtn)    //30. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("City:");    //31. check the title of the section
    cy.get(ohsuContactInfo.cityInput)    //32. check the visibility of the item
      .should("be.visible")
      .type("Springfield");    //33. type in a required information

    cy.get(ohsuContactInfo.nextBtn)    //34. validation error message checking
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.contains("State:");    //35. check the title of the section
    cy.get(ohsuContactInfo.stateSelector)    //36. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //37. check the visibility of the placeholder
    for (var i = 0; i < stateValues.length; i++) {
      cy.get(ohsuContactInfo.stateSelector)
        .select(stateValues[i])
        .should("be.visible")
    };    //38. check the visibility of the selector's content
    cy.get(ohsuContactInfo.stateSelector)
      .select("IL");    //39. choose the necessary value

    cy.get(ohsuContactInfo.nextBtn)    //40. validation error message checking
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.contains("Zip:");    //41. check the title of the section
    cy.get(ohsuContactInfo.zipCodeInput)    //42. check the visibility of the item
      .should("be.visible")
      .type("62704");    //43. type in a required information

    cy.get(ohsuContactInfo.nextBtn)
      .click();    //44. navigate to the next page

    cy.get(ohsuContactInfo.headerBar)
      .should("be.visible")
      .and("have.text", contactScheduleHeading);    //45. check the title of a header of the page

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
    10. check the visibility of the selector
    11. check the visibility of the placeholder
    12. check the visibility of the selector's content
    13. choose the necessary value
    14. navigate to the next page
    15. check the title of the section
    16. check the visibility of the item
    17. type in a required information
    18. check the title of the section
    19. check the visibility of the item
    20. type in a required information
    21. check the title of the section
    22. check the visibility of the selector
    23. check the visibility of the placeholder
    24. check the visibility of the selector's content
    25. choose the necessary value
    26. check the title of the section
    27. check the visibility of the item
    28. type in a required information
    29. navigate to the next page
    30. check the title of a header of the page
    */

    var contactInfoHeading = "Please enter your contact phone number and verify your email address:";
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
    var contactScheduleHeading = "Please select the best days and times to contact you if necessary: (Optional)";

    cy.visit("/contact.0")    //1. navigate to the "contact.0" dialog
      .contains(contactInfoHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuContactInfo.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuContactInfo.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Best Phone Number")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuContactInfo.phoneNumberInput)    //6. check the visibility of the item
      .should("be.visible")
      .type("555-554-321");    //7. type in a required information

    cy.get(ohsuContactInfo.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuContactInfo.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Best Phone Type");    //9. check the title of the section
    cy.get(ohsuContactInfo.phoneTypeSelector)    //10. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //11. check the visibility of the placeholder
    for (var i = 0; i < phoneTypeValues.length; i++) {
      cy.get(ohsuContactInfo.phoneTypeSelector)
        .select(phoneTypeValues[i])
        .should("be.visible")
    };    //12. check the visibility of the selector's content
    cy.get(ohsuContactInfo.phoneTypeSelector)
      .select("Home");    //13. choose the necessary value

    cy.get(ohsuContactInfo.nextBtn)
      .click();    //14. navigate to the next page

    cy.contains("Your Home Address:");    //15. check the title of the section
    cy.get(ohsuContactInfo.addressInput)    //16. check the visibility of the item
      .should("be.visible")
      .type("742 Evergreen Terrace");    //17. type in a required information

    cy.contains("City:");    //18. check the title of the section
    cy.get(ohsuContactInfo.cityInput)    //19. check the visibility of the item
      .should("be.visible")
      .type("Springfield");    //20. type in a required information

    cy.contains("State:");    //21. check the title of the section
    cy.get(ohsuContactInfo.stateSelector)    //22. check the visibility of the selector
      .should("be.visible")
      .and("contain", "Select One")    //23. check the visibility of the placeholder
    for (var i = 0; i < stateValues.length; i++) {
      cy.get(ohsuContactInfo.stateSelector)
        .select(stateValues[i])
        .should("be.visible")
    };    //24. check the visibility of the selector's content
    cy.get(ohsuContactInfo.stateSelector)
      .select("IL");    //25. choose the necessary value

    cy.contains("Zip:");    //26. check the title of the section
    cy.get(ohsuContactInfo.zipCodeInput)    //27. check the visibility of the item
      .should("be.visible")
      .type("62704");    //28. type in a required information

    cy.get(ohsuContactInfo.nextBtn)
      .click();    //29. navigate to the next page

    cy.get(ohsuContactInfo.headerBar)
      .should("be.visible")
      .and("have.text", contactScheduleHeading);    //30. check the title of a header of the page

  });

})