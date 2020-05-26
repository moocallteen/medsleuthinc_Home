import ohsuContSchedule from "../page-objects/33_contact-schedule01";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the contact-schedule.01 page elements - No Skip Scenario", () => {

    /*
    1. navigate to the "contact-schedule.01" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the title of the section
    8. check the visibility of the radio buttons
    9. choose the necessary value
    10. navigate to the next page
    11. check the title of a header of the page
    */

    var submitHeading = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";
    var contScheduleHeading = "Please select the best days and times to contact you if necessary: (Optional)";
    var contactOptionsHeading = "In order to facilitate easier contact, please select as many options as possible";

    cy.visit("/contact-schedule.01")    //1. navigate to the "contact-schedule.01" dialog
      .contains(contScheduleHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuContSchedule.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains(contactOptionsHeading);    //4. check the title of the section

    cy.get(ohsuContSchedule.mondayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Monday")

      .get(ohsuContSchedule.tuesdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Tuesday")

      .get(ohsuContSchedule.wednesdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Wednesday")

      .get(ohsuContSchedule.thursdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Thursday")

      .get(ohsuContSchedule.fridayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Friday")
      .click()    //6. choose the necessary value

      .get(ohsuContSchedule.morningCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "8:00 AM - 12:00 PM")
      .click()    //6. choose the necessary value

      .get(ohsuContSchedule.afternoonCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "12:00 PM - 5:00 PM")
      .click();    //6. choose the necessary value

    cy.contains("What is your preferred method of contact?");    //7. check the title of the section

    cy.get(ohsuContSchedule.phonePreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "Phone")
      .click()    //9. choose the necessary value
      .get(ohsuContSchedule.emailPreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "Email")
      .get(ohsuContSchedule.noPreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "No Preference");

    cy.get(ohsuContSchedule.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //10. navigate to the next page

    cy.get(ohsuContSchedule.headerBar)
      .should("be.visible")
      .and("have.text", submitHeading);    //11. check the title of a header of the page

  });

  it("Should check the contact-schedule.01 page elements - Skip Scenario", () => {

    /*
    1. navigate to the "contact-schedule.01" dialog
    2. check the title of the dialog
    3. click to start survey
    4. navigate to the next page
    5. check the title of a header of the page
    */

    var submitHeading = "Is there any additional information that you would like shared with your health care providers? (Optional) You must press the SUBMIT button below to complete this health questionnaire.";
    var contScheduleHeading = "Please select the best days and times to contact you if necessary: (Optional)";

    cy.visit("/contact-schedule.01")    //1. navigate to the "contact-schedule.01" dialog
      .contains(contScheduleHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuContSchedule.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuContSchedule.nextBtn)
      .scrollIntoView()
      .click();    //4. navigate to the next page

    cy.get(ohsuContSchedule.headerBar)
      .should("be.visible")
      .and("have.text", submitHeading);    //5. check the title of a header of the page

  });

})