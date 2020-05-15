import ohsuLandingPage from "../page-objects/00_landing_page";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("should check the landing-page elements - Named Recipient scenario", () => {

    var text = "Welcome to the BREEZE TRANSPLANT online health";
    var firstName = "First name";
    var middleName = "Middle name";
    var lastName = "Last name";
    var selectorPlaceHolder = "Select One";
    var feetValues = [
      "3",
      "4",
      "5",
      "6",
      "7"
    ];
    var inchesValues = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ];
    var phoneTypesValues = [
      "Mobile",
      "Home",
      "Work - Shared",
      "Work - Private"
    ];
    var countrySelectValues = [
      "United States",
      "Other"
    ];

    var relationshipHeader = "With regard to your Kidney Donation:";
    var relationshipDescriptionTxt = "Based on the categories below, which would best describe your relationship with the transplant candidate?";
    var immediateTitle = "Immediate family member";
    var extendedTitle = "Extended family member";
    var emotionallyTitle = "Emotionally related to transplant candidate";
    var notRelatedTitle = "Not related to the transplant candidate";

    var immediateFamilyMembers = "Immediate Family Members";
    var chooseFromFollowing = "Choose from the following:";

    var parentTitle = "Parent";
    var childTitle = "Child";
    var spouseTitle = "Spouse";
    var grandarentTitle = "Grand Parent";
    var fullSiblingTitle = "Full Sibling";
    var halfSiblingTitle = "Half Sibling";
    var stepParentTitle = "Step Parent";
    var stepChildTitle = "Step Child";
    var stepSiblingTitle = "Step Sibling";
    var grandChildTitle = "Grand Child";

    var referralHeader = "How did you learn about the opportunity for living organ donation?";

    cy.visit("/landing-page")
      .get(ohsuLandingPage.logo)
      .should("be.visible")
      .get(ohsuLandingPage.headerBar)
      .should("be.visible")
      .get(ohsuLandingPage.increaseTextSizeBtn)
      .should("be.visible")
      .get(ohsuLandingPage.decreaseTextSizeBtn)
      .should("be.visible")
      .get(ohsuLandingPage.dialogText)
      .then(el => {
        assert.include(el.text(), text);
      });
    cy.get(ohsuLandingPage.dialogText)
      .should("have.css", "font-size", "27.2px");

    cy.get(ohsuLandingPage.increaseTextSizeBtn)
      .click()
      .get(ohsuLandingPage.dialogText)
      .should("have.css", "font-size", "29.0133px");

    cy.reload();

    cy.get(ohsuLandingPage.decreaseTextSizeBtn)
      .click()
      .get(ohsuLandingPage.dialogText)
      .should("have.css", "font-size", "25.3867px")

    cy.get(ohsuLandingPage.termsLink)
      .should("be.visible")
      .get(ohsuLandingPage.startSurveyBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuLandingPage.nextBtn)
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.yourFirstNameField)
      .should("be.visible")
      .type(firstName)
      .get(ohsuLandingPage.middleNameField)
      .should("be.visible")
      .type(middleName)
      .get(ohsuLandingPage.yourLastNameField)
      .should("be.visible")
      .type(lastName)
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.nextBtn)
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.monthField)
      .should("be.visible")
      .type("01")
      .get(ohsuLandingPage.dayField)
      .should("be.visible")
      .type("01")
      .get(ohsuLandingPage.yearField)
      .should("be.visible")
      .type("1991");

    cy.get(ohsuLandingPage.nextBtn)
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.maleRadioBtn)
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.femaleRadioBtn)
      .should("be.visible")
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.nextBtn)
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.get(ohsuLandingPage.yourHeightFeetSelect)
      .should("be.visible")
      .and("contain", selectorPlaceHolder)
    for (var i = 0; i < feetValues.length; i++) {
      cy.get(ohsuLandingPage.yourHeightFeetSelect)
        .select(feetValues[i])
        .should("be.visible");
    };
    cy.get(ohsuLandingPage.yourHeightFeetSelect)
      .select("5");

    cy.get(ohsuLandingPage.nextBtn)
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.get(ohsuLandingPage.yourHeightInchesSelect)
      .should("be.visible")
      .and("contain", selectorPlaceHolder)
    for (var i = 0; i < inchesValues.length; i++) {
      cy.get(ohsuLandingPage.yourHeightInchesSelect)
        .select(inchesValues[i])
        .should("be.visible");
    };
    cy.get(ohsuLandingPage.yourHeightInchesSelect)
      .select("8");

    cy.get(ohsuLandingPage.nextBtn)
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Not a whole number");

    cy.get(ohsuLandingPage.yourWeightFiled)
      .should("be.visible")
      .type("150")
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.nextBtn)
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.primaryPhoneFiled)
      .should("be.visible")
      .type("555-555-5533");

    cy.get(ohsuLandingPage.nextBtn)
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.phoneNumberTypeSelect)
      .should("be.visible")
      .and("contain", selectorPlaceHolder)
    for (var i = 0; i < phoneTypesValues.length; i++) {
      cy.get(ohsuLandingPage.phoneNumberTypeSelect)
        .select(phoneTypesValues[i])
        .should("be.visible");
    };

    cy.get(ohsuLandingPage.phoneNumberTypeSelect)
      .select("Mobile");

    cy.get(ohsuLandingPage.nextBtn)
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.yourEmailAddressFiled)
      .should("be.visible")
      .type("test@test.com");

    cy.get(ohsuLandingPage.nextBtn)
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.countrySelect)
      .should("be.visible")
      .and("contain", selectorPlaceHolder)
    for (var i = 0; i < countrySelectValues.length; i++) {
      cy.get(ohsuLandingPage.countrySelect)
        .select(countrySelectValues[i])
        .should("be.visible");
    };

    cy.get(ohsuLandingPage.countrySelect)
      .select("Other");

    cy.get(ohsuLandingPage.otherCountryFiled)
      .should("be.visible")
      .type("Austria");

    cy.get(ohsuLandingPage.nextBtn)
      .click();

    cy.contains("Donor Type")
      .should("be.visible")
      .get(ohsuLandingPage.nextBtn)
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.iKnowRecipientRadioBtn)
      .should("be.visible")
      .and("have.text", "Named Recipient")
      .click()
      .get(ohsuLandingPage.iDontKnowRecipientRadioBtn)
      .should("be.visible")
      .and("have.text", "Altruistic Donor (No Named Recipient)")
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)
      .should("be.visible")
      .and("have.text", "Recipient Information");

    cy.get(ohsuLandingPage.nextBtn)
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.recipientFirstNameInput)
      .should("be.visible")
      .type("Named");

    cy.get(ohsuLandingPage.nextBtn)
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.recipientLastNameInput)
      .should("be.visible")
      .type("Recipient");

    cy.get(ohsuLandingPage.monthField)
      .should("be.visible")
      .type('02')
      .get(ohsuLandingPage.dayField)
      .should("be.visible")
      .type('28')
      .get(ohsuLandingPage.yearField)
      .should("be.visible")
      .type('1984')
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)
      .should("be.visible")
      .and("have.text", relationshipHeader);

    cy.contains(relationshipDescriptionTxt);

    cy.get(ohsuLandingPage.nextBtn)
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.immediateRadioBtn)
      .should("be.visible")
      .and("have.text", immediateTitle)
      .click();

    cy.get(ohsuLandingPage.extendedRadioBtn)
      .should("be.visible")
      .and("have.text", extendedTitle);

    cy.get(ohsuLandingPage.emotionallyRadioBtn)
      .should("be.visible")
      .and("have.text", emotionallyTitle);

    cy.get(ohsuLandingPage.notRelatedRadioBtn)
      .should("be.visible")
      .and("have.text", notRelatedTitle);

    cy.get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)
      .should("be.visible")
      .and("have.text", immediateFamilyMembers);

    cy.contains(chooseFromFollowing);

    cy.get(ohsuLandingPage.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .click()
      .get(ohsuLandingPage.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuLandingPage.parentRadioBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", parentTitle);

    cy.get(ohsuLandingPage.childRadioBtn)
      .should("be.visible")
      .and("have.text", childTitle);

    cy.get(ohsuLandingPage.spouseRadioBtn)
      .should("be.visible")
      .and("have.text", spouseTitle);

    cy.get(ohsuLandingPage.grandarentRadioBtn)
      .should("be.visible")
      .and("have.text", grandarentTitle)
      .click();

    cy.get(ohsuLandingPage.fullSiblingRadioBtn)
      .should("be.visible")
      .and("have.text", fullSiblingTitle);

    cy.get(ohsuLandingPage.halfSiblingRadioBtn)
      .should("be.visible")
      .and("have.text", halfSiblingTitle);

    cy.get(ohsuLandingPage.stepParentRadioBtn)
      .should("be.visible")
      .and("have.text", stepParentTitle);

    cy.get(ohsuLandingPage.stepChildRadioBtn)
      .should("be.visible")
      .and("have.text", stepChildTitle);

    cy.get(ohsuLandingPage.stepSiblingRadioBtn)
      .should("be.visible")
      .and("have.text", stepSiblingTitle);

    cy.get(ohsuLandingPage.grandChildRadioBtn)
      .should("be.visible")
      .and("have.text", grandChildTitle);

    cy.get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)
      .should("be.visible")
      .and("have.text", referralHeader)

  });

  it("should check the landing-page elements - Altruistic Donor scenario", () => {

    var referralHeader = "How did you learn about the opportunity for living organ donation?";

    cy.visit("/landing-page")
      .get(ohsuLandingPage.startSurveyBtn)
      .click();

    cy.get(ohsuLandingPage.yourFirstNameField)
      .type("Very")
      .get(ohsuLandingPage.middleNameField)
      .type("Altruisctic")
      .get(ohsuLandingPage.yourLastNameField)
      .type("Donor")
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.monthField)
      .type("02")
      .get(ohsuLandingPage.dayField)
      .type("28")
      .get(ohsuLandingPage.yearField)
      .type("1984")
      .get(ohsuLandingPage.femaleRadioBtn)
      .click()
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.yourHeightFeetSelect)
      .select("5")
      .get(ohsuLandingPage.yourHeightInchesSelect)
      .select("6")
      .get(ohsuLandingPage.yourWeightFiled)
      .type("110")
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.primaryPhoneFiled)
      .type("555-555-3377")
      .get(ohsuLandingPage.phoneNumberTypeSelect)
      .select("Home")
      .get(ohsuLandingPage.yourEmailAddressFiled)
      .type("test@test.com")
      .get(ohsuLandingPage.countrySelect)
      .select("United States")
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.iDontKnowRecipientRadioBtn)
      .should("have.text", "Altruistic Donor (No Named Recipient)")
      .click()
      .get(ohsuLandingPage.nextBtn)
      .click();

    cy.get(ohsuLandingPage.dialogHeaderBar)
      .should("be.visible")
      .and("have.text", referralHeader)

  });

})