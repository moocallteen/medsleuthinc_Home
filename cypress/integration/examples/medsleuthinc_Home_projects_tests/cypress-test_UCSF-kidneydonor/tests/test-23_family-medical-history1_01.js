import familyMedHistory1 from "../page-objects/23_family-medical-history1_01";

describe("transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
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
    6. check the visibility of the checkboxes
    7. choose the necessary value
    8. validation error message checking
    9. check the title of the section
    10. check the visibility of the checkboxes
    11. choose the necessary value
    12. validation error message checking
    13. check the title of the section
    14. check the visibility of the checkboxes
    15. choose the necessary value
    16. validation error message checking
    17. check the title of the section
    18. check the visibility of the checkboxes
    19. choose the necessary value
    20. validation error message checking
    21. check the title of the section
    22. check the visibility of the checkboxes
    23. choose the necessary value
    24. validation error message checking
    25. check the title of the section
    26. check the visibility of the checkboxes
    27. choose the necessary value
    28. validation error message checking
    29. check the title of the section
    30. check the visibility of the checkboxes
    31. choose the necessary value
    32. navigate to the next page
    33. check the title of a header of the page
    34. validation error message checking
    35. check the visibility of the checkboxes
    36. choose the necessary value
    37. navigate to the next page
    38. check the title of a header of the page
    */

    cy.visit("/family-medical-history.1")    //1. navigate to the "family-medical-history.1" dialog
      .contains("With regard to your Family's Medical History:")    //2. check the title of the dialog
      .get(familyMedHistory1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //4. validation error message checking

    cy.contains("Do any of your family members have Cancer?")    //5. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //6. check the visibility of the checkboxes
      .get(familyMedHistory1.noCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //6. check the visibility of the checkboxes
      .click();    //7. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //8. validation error message checking

    cy.contains("Do any of your family members have High Blood Pressure?")    //9. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //10. check the visibility of the checkboxes
      .click()    //11. choose the necessary value
      .get(familyMedHistory1.noBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "No");    //10. check the visibility of the checkboxes

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //12. validation error message checking

    cy.contains("Do any of your family members have Heart Disease?")    //13. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the checkboxes
      .get(familyMedHistory1.noHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the checkboxes
      .click();    //15. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //16. validation error message checking

    cy.contains("Do any of your family members have Lupus?")    //17. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //18. check the visibility of the checkboxes
      .get(familyMedHistory1.noLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //18. check the visibility of the checkboxes
      .click();    //19. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //20. validation error message checking

    cy.contains("Do any of your family members have Blood Clots?");    //21. check the title of the section
    cy.get(familyMedHistory1.yesBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //22. check the visibility of the checkboxes
      .get(familyMedHistory1.noBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //22. check the visibility of the checkboxes
      .click();    //23. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //24. validation error message checking

    cy.contains("Do any of your family members have Mental Illness?");    //25. check the title of the section
    cy.get(familyMedHistory1.yesMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //26. check the visibility of the checkboxes
      .get(familyMedHistory1.noMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //26. check the visibility of the checkboxes
      .click();    //27. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //28. validation error message checking

    cy.contains("Have any of your family members died before the age of 50?");    //29. check the title of the section
    cy.get(familyMedHistory1.yesDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //30. check the visibility of the checkboxes
      .get(familyMedHistory1.noDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //30. check the visibility of the checkboxes
      .click();    //31. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .click();    //32. navigate to the next page

    cy.get(familyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", "Which members of your family have High Blood Pressure?");    //33. check the title of a header of the page

    cy.get(familyMedHistory1.nextBtn)
      .click()
      .get(familyMedHistory1.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");    //34. validation error message checking

    cy.get(familyMedHistory1.motherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Mother");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.fatherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Father");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.childFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Child");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.siblingFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Sibling");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.grandparentFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Grandparent")    //35. check the visibility of the checkboxes
      .click();    //36. choose the necessary value

    cy.get(familyMedHistory1.auntUnkleFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Aunt/Uncle");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.cousinFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Cousin");    //35. check the visibility of the checkboxes

    cy.get(familyMedHistory1.nextBtn)
      .click();    //37. navigate to the next page

    cy.get(familyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", "What is your blood type:");    //38. check the title of a header of the page

  });

  it("Should check the family-medical-history.1 page elements - No scenario ", () => {

    /*
    1. navigate to the "family-medical-history.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. check the title of the section
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the title of the section
    8. check the visibility of the checkboxes
    9. choose the necessary value
    10. check the title of the section
    11. check the visibility of the checkboxes
    12. choose the necessary value
    13. check the title of the section
    14. check the visibility of the checkboxes
    15. choose the necessary value
    16. check the title of the section
    17. check the visibility of the checkboxes
    18. choose the necessary value
    19. check the title of the section
    20. check the visibility of the checkboxes
    21. choose the necessary value
    22. check the title of the section
    23. check the visibility of the checkboxes
    24. choose the necessary value
    25. navigate to the next page
    26. check the title of a header of the page
    */

    cy.visit("/family-medical-history.1")    //1. navigate to the "family-medical-history.1" dialog
      .contains("With regard to your Family's Medical History:")    //2. check the title of the dialog
      .get(familyMedHistory1.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.contains("Do any of your family members have Cancer?")    //4. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the checkboxes
      .get(familyMedHistory1.noCancerFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //5. check the visibility of the checkboxes
      .click();    //6. choose the necessary value

    cy.contains("Do any of your family members have High Blood Pressure?")    //7. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //8. check the visibility of the checkboxes
      .get(familyMedHistory1.noBloodPressureFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //8. check the visibility of the checkboxes
      .click();    //9. choose the necessary value

    cy.contains("Do any of your family members have Heart Disease?")    //10. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //11. check the visibility of the checkboxes
      .get(familyMedHistory1.noHeartDieseseFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //11. check the visibility of the checkboxes
      .click();    //12. choose the necessary value

    cy.contains("Do any of your family members have Lupus?")    //13. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory1.yesLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //14. check the visibility of the checkboxes
      .get(familyMedHistory1.noLupusFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //14. check the visibility of the checkboxes
      .click();     //15. choose the necessary value

    cy.contains("Do any of your family members have Blood Clots?");    //16. check the title of the section
    cy.get(familyMedHistory1.yesBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //17. check the visibility of the checkboxes
      .get(familyMedHistory1.noBloodClotsFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //17. check the visibility of the checkboxes
      .click();    //18. choose the necessary value

    cy.contains("Do any of your family members have Mental Illness?");    //19. check the title of the section
    cy.get(familyMedHistory1.yesMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //20. check the visibility of the checkboxes
      .get(familyMedHistory1.noMentalIllFamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //20. check the visibility of the checkboxes
      .click();    //21. choose the necessary value

    cy.contains("Have any of your family members died before the age of 50?");    //22. check the title of the section
    cy.get(familyMedHistory1.yesDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "Yes")    //23. check the visibility of the checkboxes
      .get(familyMedHistory1.noDied50FamilyIssue)
      .should("be.visible")
      .and("have.text", "No")    //23. check the visibility of the checkboxes
      .click();    //24. choose the necessary value

    cy.get(familyMedHistory1.nextBtn)
      .click();    //25. navigate to the next page

    cy.get(familyMedHistory1.headerBar)
      .should("be.visible")
      .and("have.text", "What is your blood type:");    //26. check the title of a header of the page

  });

})