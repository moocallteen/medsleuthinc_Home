import ohsuMotivation from "../page-objects/29_motivation1";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the motivation.1 page elements - Positive Answers scenario", () => {

    /*
    1. navigate to the "motivation.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the item
    7. type in a required information
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of radio buttons
    11. choose the necessary value
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of radio buttons
    15. choose the necessary value
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of radio buttons
    19. choose the necessary value
    20. navigate to the next page
    21. check the title of a header of the page
    */

    var motivationHeading = "With regard to your Kidney Donation:";
    var motivationHeadingOne = "Why are you interested in donation?";
    var motivationHeadingTwo = "Which sentence most closely describes how you feel about donating?";

    var gatheringHowYouFeelQuestion = "I am still just gathering information; I still have a lot of questions.";
    var doubtsHowYouFeelQuestion = "I think I'm ready to start the evaluation, but I am not certain donation is right for me yet.";
    var motivatedHowYouFeelQuestion = "I am highly motivated to be a donor for my intended recipient, and I would like to get the process started soon.";

    var motivationHeadingThree = "Can we disclose your willingness to donate a kidney to the intended recipient?";
    var motivationHeadingFour = "Have you previously applied to become a living donor at our center or any other transplant center?";
    var emergencyContactHeading = "Please provide Emergency Contact Information";

    cy.visit("/motivation.1")    //1. navigate to the "motivation.1" dialog
      .contains(motivationHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMotivation.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMotivation.nextBtn)    //4. validation error message checking
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMotivation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains(motivationHeadingOne)    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuMotivation.whyInterestedTextArea)
      .should("be.visible")    //6. check the visibility of the item
      .type("Highly Motivated Donor");    //7. type in a required information

    cy.get(ohsuMotivation.nextBtn)    //8. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuMotivation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains(motivationHeadingTwo);    //9. check the title of the section
    cy.get(ohsuMotivation.gatheringInfoRadioBtn)    //10. check the visibility of radio buttons
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", gatheringHowYouFeelQuestion)
      .get(ohsuMotivation.inDoubtsRadioBtn)    //10. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", doubtsHowYouFeelQuestion)
      .get(ohsuMotivation.motivatedRadioBtn)    //10. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", motivatedHowYouFeelQuestion)
      .click();    //11. choose the necessary value

    cy.get(ohsuMotivation.nextBtn)    //12. validation error message checking
      .scrollIntoView()
      .click()
      .get(ohsuMotivation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains(motivationHeadingThree)    //13. check the title of the section
    cy.get(ohsuMotivation.yesDiscloseRadioBtn)    //14. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //15. choose the necessary value
      .get(ohsuMotivation.noDiscloseRadioBtn)    //14. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "No");

    cy.get(ohsuMotivation.nextBtn)    //16. validation error message checking
      .click()
      .get(ohsuMotivation.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.contains(motivationHeadingFour)    //17. check the title of the section
    cy.get(ohsuMotivation.yesPreviouslyApplied)    //18. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //19. choose the necessary value
      .get(ohsuMotivation.noPreviouslyApplied)    //18. check the visibility of radio buttons
      .should("be.visible")
      .and("have.text", "No");

    cy.get(ohsuMotivation.nextBtn)
      .click();    //20. navigate to the next page

    cy.get(ohsuMotivation.headerBar)
      .should("be.visible")
      .and("have.text", emergencyContactHeading);    //21. check the title of a header of the page

  });

  it("Should check the motivation.1 page elements - Negative Answers scenario", () => {

    /*
    1. navigate to the "motivation.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the visibility of the item
    5. type in a required information
    6. check the visibility of radio buttons
    7. choose the necessary value
    8. check the visibility of radio buttons
    9. choose the necessary value
    10. check the visibility of radio buttons
    11. choose the necessary value
    12. navigate to the next page
    13. check the title of a header of the page
    */

    var motivationHeading = "With regard to your Kidney Donation:";
    var gatheringHowYouFeelQuestion = "I am still just gathering information; I still have a lot of questions.";
    var emergencyContactHeading = "Please provide Emergency Contact Information";

    cy.visit("/motivation.1")    //1. navigate to the "motivation.1" dialog
      .contains(motivationHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuMotivation.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuMotivation.whyInterestedTextArea)
      .should("be.visible")    //4. check the visibility of the item
      .type(gatheringHowYouFeelQuestion);    //5. type in a required information

    cy.get(ohsuMotivation.gatheringInfoRadioBtn)    //6. check the visibility of radio buttons
      .scrollIntoView()
      .click();    //7. choose the necessary value

    cy.get(ohsuMotivation.noDiscloseRadioBtn)    //8. check the visibility of radio buttons
      .scrollIntoView()
      .click();    //9. choose the necessary value

    cy.get(ohsuMotivation.noPreviouslyApplied)    //10. check the visibility of radio buttons
      .click();    //11. choose the necessary value

    cy.get(ohsuMotivation.nextBtn)
      .click();    //12. navigate to the next page

    cy.get(ohsuMotivation.headerBar)
      .should("be.visible")
      .and("have.text", emergencyContactHeading);    //13. check the title of a header of the page

  });

})