import livingArrangement0 from "../page-objects/29_living-arrangement0_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the living-arrangement.0 page elements", () => {

    /*
    1. navigate to the "living-arrangement.0" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the radio buttons
    7. choose the necessary value
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the radio buttons
    11. choose the necessary value
    12. navigate to the next page
    13. check the title of a header of the page
    */

    var rentHouseholdTitle = "I rent my home/apartment";
    var ownHouseholdTitle = "I own my home/apartment";
    var temporaryHouseholdTitle = "I live in temporary housing (college dorm, friend's house, residential hotel, etc.)";
    var homelessHouseholdTitle = "I am currently homeless";
    var militaryHouseholdTitle = "I am currently deployed in the military";
    var assistedFacilityHouseholdTitle = "I live in an assisted living facility";
    var otherHouseholdTitle = "Other";

    var aloneTitle = "I live alone";
    var significantTitle = "I live with my spouse or significant other";
    var parentsTitle = "I live with my parents";
    var otherFamilyTitle = "I live with other family";
    var roommateTitle = "I live with roommate(s)";
    var otherTitle = "Other";

    cy.visit("/living-arrangement.0")    //1. navigate to the "living-arrangement.0" dialog
      .contains("With regard to your living arrangment:")    //2. check the title of the dialog
      .get(livingArrangement0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(livingArrangement0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(livingArrangement0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Please describe your household:")    //5. check the title of the section
      .scrollIntoView();
    cy.get(livingArrangement0.rentRadioBtn)
      .should("be.visible")
      .and("have.text", rentHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.ownRadioBtn)
      .should("be.visible")
      .and("have.text", ownHouseholdTitle)    //6. check the visibility of the radio buttons
      .click()    //7. choose the necessary value

      .get(livingArrangement0.temporaryRadioBtn)
      .should("be.visible")
      .and("have.text", temporaryHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.homelessRadioBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", homelessHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.militaryRadioBtn)
      .should("be.visible")
      .and("have.text", militaryHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.assistedFacilityRadioBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", assistedFacilityHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(livingArrangement0.otherRadioBtn)
      .should("be.visible")
      .and("have.text", otherHouseholdTitle);    //6. check the visibility of the radio buttons

    cy.get(livingArrangement0.nextBtn)
      .scrollIntoView()
      .click()
      .get(livingArrangement0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking


    cy.contains("Who do you live with?");    //9. check the title of the section
    cy.get(livingArrangement0.aloneRadioBtn)
      .should("be.visible")
      .and("have.text", aloneTitle)    //10. check the visibility of the radio buttons
      .click()    //11. choose the necessary value

      .get(livingArrangement0.significantRadioBtn)
      .should("be.visible")
      .and("have.text", significantTitle)    //10. check the visibility of the radio buttons

      .get(livingArrangement0.parentsRadioBtn)
      .should("be.visible")
      .and("have.text", parentsTitle)    //10. check the visibility of the radio buttons

      .get(livingArrangement0.otherFamilyRadioBtn)
      .should("be.visible")
      .and("have.text", otherFamilyTitle)    //10. check the visibility of the radio buttons

      .get(livingArrangement0.roommateRadioBtn)
      .should("be.visible")
      .and("have.text", roommateTitle)    //10. check the visibility of the radio buttons

      .get(livingArrangement0.otherRoommateRadioBtn)
      .should("be.visible")
      .and("have.text", otherTitle);    //10. check the visibility of the radio buttons

    cy.get(livingArrangement0.nextBtn)
      .click();    //12. navigate to the next page

    cy.get(livingArrangement0.headerBar)
      .should("be.visible")
      .and("have.text", "Are you currently covered under a Medical Insurance plan?");    //13. check the title of a header of the page

  });

})
