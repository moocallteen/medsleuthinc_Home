import ohsuLivingArrangement from "../page-objects/25_living-arrangement0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
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
    var medInsuranceHeading = "Are you currently covered under a Medical Insurance plan?";

    cy.visit("/living-arrangement.0")    //1. navigate to the "living-arrangement.0" dialog
      .contains("With regard to your living arrangment:")    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuLivingArrangement.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuLivingArrangement.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuLivingArrangement.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Please describe your household:")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuLivingArrangement.rentRadioBtn)
      .should("be.visible")
      .and("have.text", rentHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.ownRadioBtn)
      .should("be.visible")
      .and("have.text", ownHouseholdTitle)    //6. check the visibility of the radio buttons
      .click()    //7. choose the necessary value

      .get(ohsuLivingArrangement.temporaryRadioBtn)
      .should("be.visible")
      .and("have.text", temporaryHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.homelessRadioBtn)
      .should("be.visible")
      .and("have.text", homelessHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.militaryRadioBtn)
      .should("be.visible")
      .and("have.text", militaryHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.assistedFacilityRadioBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", assistedFacilityHouseholdTitle)    //6. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.otherRadioBtn)
      .should("be.visible")
      .and("have.text", otherHouseholdTitle);    //6. check the visibility of the radio buttons

    cy.get(ohsuLivingArrangement.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuLivingArrangement.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains("Who do you live with?");    //9. check the title of the section
    cy.get(ohsuLivingArrangement.aloneRadioBtn)
      .should("be.visible")
      .and("have.text", aloneTitle)    //10. check the visibility of the radio buttons
      .click()    //11. choose the necessary value

      .get(ohsuLivingArrangement.significantRadioBtn)
      .should("be.visible")
      .and("have.text", significantTitle)    //10. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.parentsRadioBtn)
      .should("be.visible")
      .and("have.text", parentsTitle)    //10. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.otherFamilyRadioBtn)
      .should("be.visible")
      .and("have.text", otherFamilyTitle)    //10. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.roommateRadioBtn)
      .should("be.visible")
      .and("have.text", roommateTitle)    //10. check the visibility of the radio buttons

      .get(ohsuLivingArrangement.otherRoommateRadioBtn)
      .should("be.visible")
      .and("have.text", otherTitle);    //10. check the visibility of the radio buttons

    cy.get(ohsuLivingArrangement.nextBtn)
      .click();    //12. navigate to the next page

    cy.get(ohsuLivingArrangement.headerBar)
      .should("be.visible")
      .and("have.text", medInsuranceHeading);    //13. check the title of a header of the page

  });

})