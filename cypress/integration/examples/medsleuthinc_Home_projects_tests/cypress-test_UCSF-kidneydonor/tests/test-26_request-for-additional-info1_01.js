import requestForAdditionalInfo1 from "../page-objects/26_request-for-additional-info1_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the request-for-additional-info.1 page elements", () => {

    /*
    1. navigate to the "request-for-additional-info.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the item
    6. type the requested information 
    7. check the title of the section
    8. check the visibility of the item
    9. type the requested information 
    10. check the title of the section
    11. check the visibility of the item
    12. type the requested information 
    13. check the title of the section
    14. check the visibility of the item
    15. check the visibility of the item
    16. check the visibility of the selector's content
    17. choose the necessary value
    18. navigate to the next page
    19. check the title of a header of the page
    */

    var selectorText = "Select One";
    var stateNames = [
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

    cy.visit("/request-for-additional-info.1")    //1. navigate to the "request-for-additional-info.1" dialog
      .contains("We may need to request additional information such as laboratory or other diagnostic test from your other health care providers. Please provide us with the following information (OPTIONAL)")    //2. check the title of the dialog
      .get(requestForAdditionalInfo1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Name:");    //4. check the title of the section
    cy.get(requestForAdditionalInfo1.nameAddInfoInputField)    //5. check the visibility of the item
      .should("be.visible")
      .type("Donor Name");    //6. type the requested information 

    cy.contains("Phone Number:");    //7. check the title of the section
    cy.get(requestForAdditionalInfo1.phoneAddInfoInputField)    //8. check the visibility of the item
      .should("be.visible")
      .type("5555555555");    //9. type the requested information 

    cy.contains("City:");    //10. check the title of the section
    cy.get(requestForAdditionalInfo1.cityAddInfoInputField)    //11. check the visibility of the item
      .should("be.visible")
      .type("Racoon City");    //12. type the requested information 

    cy.contains("State:");    //13. check the title of the section
    cy.get(requestForAdditionalInfo1.stateSelectAddInfo)    //14. check the visibility of the item
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < stateNames.length; i++) {
      cy.get(requestForAdditionalInfo1.stateSelectAddInfo)    //15. check the visibility of the item
        .select(stateNames[i])
        .should("be.visible")
    };    //16. check the visibility of the selector's content
    cy.get(requestForAdditionalInfo1.stateSelectAddInfo)
      .select("WA");    //17. choose the necessary value

    cy.get(requestForAdditionalInfo1.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //18. navigate to the next page

    cy.get(requestForAdditionalInfo1.headerBar)
      .should("be.visible")
      .and("have.text", "Please select which of the options below most closely matches your highest level of education.");    //19. check the title of a header of the page

  });

})