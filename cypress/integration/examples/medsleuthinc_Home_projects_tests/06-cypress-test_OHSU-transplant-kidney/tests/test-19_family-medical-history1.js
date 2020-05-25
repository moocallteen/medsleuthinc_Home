import ohsuFamilyMedHistory1 from "../page-objects/19_family-medical-history1";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the family-medical-history.1 page elements - High Blood Pressure scenario ", () => {

    /*
    1. navigate to the "family-medical-history.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the title of the section
    6. check the visibility of the radio button
    7. choose the necessary value
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the radio button
    11. choose the necessary value
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of the radio button
    15. choose the necessary value
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of the radio button
    19. choose the necessary value
    20. validation error message checking
    21. check the title of the section
    22. check the visibility of the radio button
    23. choose the necessary value
    24. validation error message checking
    25. check the title of the section
    26. check the visibility of the radio button
    27. choose the necessary value
    28. validation error message checking
    29. check the title of the section
    30. check the visibility of the radio button
    31. choose the necessary value
    32. navigate to the next page
    33. check the title of a header of the page
    34. validation error message checking
    35. check the visibility of the checkboxes
    36. choose the necessary value
    37. navigate to the next page
    38. check the title of a header of the page
    */

    var familyMedHistoryHeading = "With regard to your Family's Medical History:";
    var familyMembersListHeading = "Which members of your family have High Blood Pressure?";
    var bloodTypeHeading = "What is your blood type:";

    cy.visit("/family-medical-history.1")    //1. navigate to the "family-medical-history.1" dialog
      .contains(familyMedHistoryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuFamilyMedHistory1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Do any of your family members have Cancer?")    //5. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //6. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //6. check the visibility of the radio button
      .click();    //7. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Do any of your family members have High Blood Pressure?")    //9. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //10. check the visibility of the radio button
      .click()    //11. choose the necessary value
      .get(ohsuFamilyMedHistory1.noBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "No");    //10. check the visibility of the radio button

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //12. validation error message checking

    cy.contains("Do any of your family members have Heart Disease?")    //13. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the radio button
      .click();    //15. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //16. validation error message checking

    cy.contains("Do any of your family members have Lupus?")    //17. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //18. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //18. check the visibility of the radio button
      .click();    //19. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //20. validation error message checking

    cy.contains("Do any of your family members have Blood Clots?");    //21. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //22. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //22. check the visibility of the radio button
      .click();    //23. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //24. validation error message checking

    cy.contains("Do any of your family members have Mental Illness?");    //25. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //26. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //26. check the visibility of the radio button
      .click();    //27. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //28. validation error message checking

    cy.contains("Have any of your family members died before the age of 50?");    //29. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //30. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //30. check the visibility of the radio button
      .click();    //31. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click();    //32. navigate to the next page

    cy.get(ohsuFamilyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", familyMembersListHeading);    //33. check the title of a header of the page

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click()
      .get(ohsuFamilyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //34. validation error message checking

    cy.get(ohsuFamilyMedHistory1.motherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Mother");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.fatherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Father");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.childFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Child");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.siblingFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Sibling");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.grandparentFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Grandparent")    //35. check the visibility of the checkboxes
      .click();    //36. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.auntUnkleFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Aunt/Uncle");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.cousinFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Cousin");    //35. check the visibility of the checkboxes

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click();    //37. navigate to the next page

    cy.get(ohsuFamilyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", bloodTypeHeading);    //38. check the title of a header of the page

  });

  it("Should check the family-medical-history.1 page elements - No scenario ", () => {

    /*
    1. navigate to the "family-medical-history.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the radio button
    6. choose the necessary value
    7. check the title of the section
    8. check the visibility of the radio button
    9. choose the necessary value
    10. check the title of the section
    11. check the visibility of the radio button
    12. choose the necessary value
    13. check the title of the section
    14. check the visibility of the radio button
    15. choose the necessary value
    16. check the title of the section
    17. check the visibility of the radio button
    18. choose the necessary value
    19. check the title of the section
    20. check the visibility of the radio button
    21. choose the necessary value
    22. check the title of the section
    23. check the visibility of the radio button
    24. choose the necessary value
    25. navigate to the next page
    26. check the title of a header of the page
    */

    var familyMedHistoryHeading = "With regard to your Family's Medical History:";
    var bloodTypeHeading = "What is your blood type:";

    cy.visit("/family-medical-history.1")    //1. navigate to the "family-medical-history.1" dialog
      .contains(familyMedHistoryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuFamilyMedHistory1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Do any of your family members have Cancer?")    //4. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //5. check the visibility of the radio button
      .click();    //6. choose the necessary value

    cy.contains("Do any of your family members have High Blood Pressure?")    //7. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //8. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //8. check the visibility of the radio button
      .click();    //9. choose the necessary value

    cy.contains("Do any of your family members have Heart Disease?")    //10. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //11. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //11. check the visibility of the radio button
      .click();    //12. choose the necessary value

    cy.contains("Do any of your family members have Lupus?")    //13. check the title of the section
      .scrollIntoView();
    cy.get(ohsuFamilyMedHistory1.yesLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the radio button
      .click();     //15. choose the necessary value

    cy.contains("Do any of your family members have Blood Clots?");    //16. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //17. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //17. check the visibility of the radio button
      .click();    //18. choose the necessary value

    cy.contains("Do any of your family members have Mental Illness?");    //19. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the radio button
      .click();    //21. choose the necessary value

    cy.contains("Have any of your family members died before the age of 50?");    //22. check the title of the section
    cy.get(ohsuFamilyMedHistory1.yesDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //23. check the visibility of the radio button
      .get(ohsuFamilyMedHistory1.noDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //23. check the visibility of the radio button
      .click();    //24. choose the necessary value

    cy.get(ohsuFamilyMedHistory1.nextBtn)
      .click();    //25. navigate to the next page

    cy.get(ohsuFamilyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", bloodTypeHeading);    //26. check the title of a header of the page

  });

})