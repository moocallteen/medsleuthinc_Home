import contactSchedule01 from "../page-objects/37_contact-schedule01_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
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

    cy.visit("/contact-schedule.01")    //1. navigate to the "contact-schedule.01" dialog
      .contains("Please select the best days and times to contact you if necessary: (Optional)")    //2. check the title of the dialog
      .get(contactSchedule01.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("In order to facilitate easier contact, please select as many options as possible");    //4. check the title of the section

    cy.get(contactSchedule01.mondayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Monday")

      .get(contactSchedule01.tuesdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Tuesday")

      .get(contactSchedule01.wednesdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Wednesday")

      .get(contactSchedule01.thursdayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Thursday")

      .get(contactSchedule01.fridayCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "Friday")
      .click()    //6. choose the necessary value

      .get(contactSchedule01.morningCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "8:00 AM - 12:00 PM")
      .click()    //6. choose the necessary value

      .get(contactSchedule01.afternoonCheckBox)    //5. check the visibility of the checkboxes
      .should("be.visible")
      .and("have.text", "12:00 PM - 5:00 PM")
      .click();    //6. choose the necessary value

    cy.contains("What is your preferred method of contact?");    //7. check the title of the section

    cy.get(contactSchedule01.phonePreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "Phone")
      .click()    //9. choose the necessary value
      .get(contactSchedule01.emailPreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "Email")
      .get(contactSchedule01.noPreferredContactMethod)    //8. check the visibility of the radio buttons
      .should("be.visible")
      .and("have.text", "No Preference");

    cy.get(contactSchedule01.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //10. navigate to the next page

    cy.get(contactSchedule01.headerBar)
      .should("be.visible")
      .and("have.text", "Have you watched the UCSF video about Living Kidney Donation, 'The Gift of Life'?");    //11. check the title of a header of the page

  });

  it("Should check the contact-schedule.01 page elements - Skip Scenario", () => {

    /*
    1. navigate to the "contact-schedule.01" dialog
    2. check the title of the dialog
    3. click to start survey
    4. navigate to the next page
    5. check the title of a header of the page
    */

    cy.visit("/contact-schedule.01")    //1. navigate to the "contact-schedule.01" dialog
      .contains("Please select the best days and times to contact you if necessary: (Optional)")    //2. check the title of the dialog
      .get(contactSchedule01.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(contactSchedule01.nextBtn)
      .scrollIntoView()
      .click();    //4. navigate to the next page

    cy.get(contactSchedule01.headerBar)
      .should("be.visible")
      .and("have.text", "Have you watched the UCSF video about Living Kidney Donation, 'The Gift of Life'?");    //5. check the title of a header of the page

  });

})