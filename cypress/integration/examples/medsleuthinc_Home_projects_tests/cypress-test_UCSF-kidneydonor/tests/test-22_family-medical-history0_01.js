import familyMedHistory0 from "../page-objects/22_family-medical-history0_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the family-medical-history.0 page elements - Kidney Disease scenario ", () => {

    /*
    1. navigate to the "family-medical-history.0" dialog
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
    24. navigate to the next page
    25. check the title of a header of the page
    26. validation error message checking
    27. check the visibility of the checkboxes
    28. choose the necessary value
    29. navigate to the next page
    30. check the title of a header of the page
    */

    cy.visit("/family-medical-history.0")   //1. navigate to the "family-medical-history.0" dialog
      .contains("With regard to your Family's Medical History:") //2. check the title of the dialog
      .get(familyMedHistory0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //4. validation error message checking

    cy.contains("Do any of your family members have Kidney Disease?")    //5. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory0.yesKidneyDisease)
      .should("be.visible")
      .and("have.text", "Yes")   //6. check the visibility of the checkboxes
      .click()   //7. choose the necessary value
      .get(familyMedHistory0.noKidneyDisease)
      .should("be.visible")
      .and("have.text", "No");   //6. check the visibility of the checkboxes

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //8. validation error message checking

    cy.contains("Do any of your family members have Polycystic Kidney Disease (PCKD)?")    //9. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory0.yesPolycystic)
      .should("be.visible")
      .and("have.text", "Yes")   //10. check the visibility of the checkboxes
      .get(familyMedHistory0.noPolycystic)
      .should("be.visible")
      .and("have.text", "No")   //10. check the visibility of the checkboxes
      .click();   //11. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //12. validation error message checking

    cy.contains("Do any of your family members have Kidney Stones?");    //13. check the title of the section
    cy.get(familyMedHistory0.yesKidneyStones)
      .should("be.visible")
      .and("have.text", "Yes")   //14. check the visibility of the checkboxes
      .get(familyMedHistory0.noKidneyStones)
      .should("be.visible")
      .and("have.text", "No")   //14. check the visibility of the checkboxes
      .click();   //15. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //16. validation error message checking

    cy.contains("Do any of your family members have Diabetes?");    //17. check the title of the section
    cy.get(familyMedHistory0.yesDiabetes)
      .should("be.visible")
      .and("have.text", "Yes")   //18. check the visibility of the checkboxes
      .get(familyMedHistory0.noDiabetes)
      .should("be.visible")
      .and("have.text", "No")   //18. check the visibility of the checkboxes
      .click();   //19. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .scrollIntoView()
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //20. validation error message checking

    cy.contains("Do any of your family members have Sickle Cell?");    //21. check the title of the section
    cy.get(familyMedHistory0.yesSickleCell)
      .should("be.visible")
      .and("have.text", "Yes")   //22. check the visibility of the checkboxes
      .get(familyMedHistory0.noSickleCell)
      .should("be.visible")
      .and("have.text", "No")   //22. check the visibility of the checkboxes
      .click();   //23. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .click();  //24. navigate to the next page

    cy.get(familyMedHistory0.headerBar)
      .should("be.visible")
      .and("have.text", "Which members of your family have Kidney Disease?"); //25. check the title of a header of the page

    cy.get(familyMedHistory0.nextBtn)
      .click()
      .get(familyMedHistory0.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");   //26. validation error message checking

    cy.get(familyMedHistory0.motherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Mother");   //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.fatherFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Father");   //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.childFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Child");   //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.siblingFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Sibling");   //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.grandparentFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Grandparent")   //27. check the visibility of the checkboxes
      .click();   //28. choose the necessary value

    cy.get(familyMedHistory0.auntUnkleFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Aunt/Uncle");   //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.cousinFamilyMemberCheckBox)
      .should("be.visible")
      .and("have.text", "Cousin");   //27. check the visibility of the checkboxes

    cy.get(familyMedHistory0.nextBtn)
      .click();  //29. navigate to the next page

    cy.get(familyMedHistory0.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Family's Medical History:"); //30. check the title of a header of the page

  });

  it("Should check the family-medical-history.0 page elements - No scenario ", () => {

    /*
    1. navigate to the "family-medical-history.0" dialog
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
    19. navigate to the next page
    20. check the title of a header of the page
    */

    cy.visit("/family-medical-history.0")   //1. navigate to the "family-medical-history.0" dialog
      .contains("With regard to your Family's Medical History:") //2. check the title of the dialog
      .get(familyMedHistory0.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.contains("Do any of your family members have Kidney Disease?")    //4. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory0.yesKidneyDisease)
      .should("be.visible")
      .and("have.text", "Yes")   //5. check the visibility of the checkboxes
      .get(familyMedHistory0.noKidneyDisease)
      .should("be.visible")
      .and("have.text", "No")   //5. check the visibility of the checkboxes
      .click()   //6. choose the necessary value

    cy.contains("Do any of your family members have Polycystic Kidney Disease (PCKD)?")    //7. check the title of the section
      .scrollIntoView();
    cy.get(familyMedHistory0.yesPolycystic)
      .should("be.visible")
      .and("have.text", "Yes")   //8. check the visibility of the checkboxes
      .get(familyMedHistory0.noPolycystic)
      .should("be.visible")
      .and("have.text", "No")   //8. check the visibility of the checkboxes
      .click();   //9. choose the necessary value

    cy.contains("Do any of your family members have Kidney Stones?");    //10. check the title of the section
    cy.get(familyMedHistory0.yesKidneyStones)
      .should("be.visible")
      .and("have.text", "Yes")   //11. check the visibility of the checkboxes
      .get(familyMedHistory0.noKidneyStones)
      .should("be.visible")
      .and("have.text", "No")   //11. check the visibility of the checkboxes
      .click();   //12. choose the necessary value

    cy.contains("Do any of your family members have Diabetes?");    //13. check the title of the section
    cy.get(familyMedHistory0.yesDiabetes)
      .should("be.visible")
      .and("have.text", "Yes")   //14. check the visibility of the checkboxes
      .get(familyMedHistory0.noDiabetes)
      .should("be.visible")
      .and("have.text", "No")   //14. check the visibility of the checkboxes
      .click();   //15. choose the necessary value

    cy.contains("Do any of your family members have Sickle Cell?");    //16. check the title of the section
    cy.get(familyMedHistory0.yesSickleCell)
      .should("be.visible")
      .and("have.text", "Yes")   //17. check the visibility of the checkboxes
      .get(familyMedHistory0.noSickleCell)
      .should("be.visible")
      .and("have.text", "No")   //17. check the visibility of the checkboxes
      .click();   //18. choose the necessary value

    cy.get(familyMedHistory0.nextBtn)
      .click();  //19. navigate to the next page

    cy.get(familyMedHistory0.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your Family's Medical History:"); //20. check the title of a header of the page

  });

})
