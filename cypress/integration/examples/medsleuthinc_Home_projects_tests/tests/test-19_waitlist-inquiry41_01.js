import waitlistInquiry from "../page objects/19_waitlist-inquiry41_01";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the waitlist-inquiry.4.1 page elements - Chest Surgery scenario ", () => {

    /*
    1. navigate to the "waitlist-inquiry.4.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. validation error message checking
    5. check the visibility of the checkboxes
    6. choose the necessary value
    7. check the visibility of the checkboxes
    8. navigate to the next page
    9. check the title of a header of the page
    10. choose the body region
    11. check the visibility of the body region's name
    12. reject the body region
    13. rotate the mannequin
    14. choose the body region
    15. navigate to the next page
    16. check the title of a header of the page
    17. check the visibility of the checkboxes
    18. choose the operated body part
    19. navigate to the next page
    20. check the title of a header of the page
    21. check the visibility of the checkboxes
    22. choose the surgery type
    23. choose the surgery type
    24. navigate to the next page
    25. check the title of a header of the page
    */

    var breastChestSurgery = "Breast";
    var wallChestSurgery = "Chest Wall";
    var clavicleChestSurgery = "Clavicle (Collarbone)";
    var heartChestSurgery = "Heart";
    var lungsChestSurgery = "Lungs";
    var ribsChestSurgery = "Ribs";

    var augumentationBrestSurgeryTitle = "Augmentation";
    var leftBiopsyBrestSurgeryTitle = "Biopsy, Left Breast";
    var rightBiopsyBrestSurgeryTitle = "Biopsy, Right Breast";
    var reconstructionBrestSurgeryTitle = "Breast Reconstruction";
    var reductionBrestSurgeryTitle = "Breast Reduction";
    var pectusBrestSurgeryTitle = "Corrective Surgery for Pectus Excavatum";
    var leftLumpectomyBrestSurgeryTitle = "Lumpectomy, Left";
    var rightLumpectomyBrestSurgeryTitle = "Lumpectomy, Right";
    var leftMastectomyBrestSurgeryTitle = "Mastectomy, Left";
    var rightMastectomyBrestSurgeryTitle = "Mastectomy, Right";
    var otherBrestSurgeryTitle = "Other";

    cy.visit("/waitlist-inquiry.4.1")   //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains("Have you had Surgery in the past?") //2. check the title of the dialog
      .get(waitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.get(waitlistInquiry.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(waitlistInquiry.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");   //4. validation error message checking

    cy.get(waitlistInquiry.yesSurgeryRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")   //5. check the visibility of the checkboxes
      .click()   //6. choose the necessary value      
      .get(waitlistInquiry.noSurgeryRadioBtn)
      .should("be.visible")
      .and("have.text", "No")   //7. check the visibility of the checkboxes
    cy.get(waitlistInquiry.nextBtn)
      .click();  //8. navigate to the next page 

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all regions of the body where you have had Surgery:"); //9. check the title of a header of the page

    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Neck"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.chesFrontRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Chest"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.chesFrontRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Abdomen"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Pelvis"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.rotateButton)
      .should("be.visible")
      .click(); //13. rotate the mannequin

    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Cervical Spine"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.backBackRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Back"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.backBackRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Buttock"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click(); //10. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity"); //11. check the visibility of the body region's name
    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click(); //12. reject the body region

    cy.get(waitlistInquiry.rotateButton)
      .should("be.visible")
      .click(); //13. rotate the mannequin 

    cy.get(waitlistInquiry.chesFrontRegion)
      .click() //14. choose the body region
      .get(waitlistInquiry.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click(); //15. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please check all parts of your Chest listed below where you have had surgery:"); //16. check the title of a header of the page

    cy.get(waitlistInquiry.breastChestCheckBox)
      .should("be.visible")
      .and("have.text", breastChestSurgery) //17. check the visibility of the checkboxes
      .click() //18. choose the operated body part
      .get(waitlistInquiry.wallChestCheckBox)
      .should("be.visible")
      .and("have.text", wallChestSurgery) //17. check the visibility of the checkboxes
      .get(waitlistInquiry.clavicleChestCheckBox)
      .should("be.visible")
      .and("have.text", clavicleChestSurgery) //17. check the visibility of the checkboxes
      .get(waitlistInquiry.heartChestCheckBox)
      .should("be.visible")
      .and("have.text", heartChestSurgery) //17. check the visibility of the checkboxes
      .get(waitlistInquiry.lungsChestCheckBox)
      .should("be.visible")
      .and("have.text", lungsChestSurgery) //17. check the visibility of the checkboxes
      .get(waitlistInquiry.ribsChestCheckBox)
      .should("be.visible")
      .and("have.text", ribsChestSurgery); //17. check the visibility of the checkboxes

    cy.get(waitlistInquiry.nextBtn)
      .click(); //19. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all surgical procedures performed on your Breast"); //20. check the title of a header of the page

    cy.get(waitlistInquiry.augumentationBrestSurgery)
      .should("be.visible")
      .and("have.text", augumentationBrestSurgeryTitle) //21. check the visibility of the checkboxes
      .click() //22. choose the surgery type

      .get(waitlistInquiry.leftBiopsyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftBiopsyBrestSurgeryTitle) //21. check the visibility of the checkboxes

      .get(waitlistInquiry.rightBiopsyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightBiopsyBrestSurgeryTitle) //21. check the visibility of the checkboxes

      .get(waitlistInquiry.reconstructionBrestSurgery)
      .should("be.visible")
      .and("have.text", reconstructionBrestSurgeryTitle) //21. check the visibility of the checkboxes

      .get(waitlistInquiry.reductionBrestSurgery)
      .should("be.visible")
      .and("have.text", reductionBrestSurgeryTitle) //21. check the visibility of the checkboxes

      .get(waitlistInquiry.pectusBrestSurgery)
      .should("be.visible")
      .and("have.text", pectusBrestSurgeryTitle) //21. check the visibility of the checkboxes

      .get(waitlistInquiry.leftLumpectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftLumpectomyBrestSurgeryTitle) //21. check the visibility of the checkboxes

      .get(waitlistInquiry.rightLumpectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightLumpectomyBrestSurgeryTitle) //21. check the visibility of the checkboxes

      .get(waitlistInquiry.leftMastectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftMastectomyBrestSurgeryTitle) //21. check the visibility of the checkboxes

      .get(waitlistInquiry.rightMastectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightMastectomyBrestSurgeryTitle) //21. check the visibility of the checkboxes

      .get(waitlistInquiry.otherBrestSurgery)
      .should("be.visible")
      .and("have.text", otherBrestSurgeryTitle) //21. check the visibility of the checkboxes
      .click(); //23. choose the surgery type

    cy.get(waitlistInquiry.nextBtn)
      .click() //24. navigate to the next page
      .get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Do you have any other medical issues that you have not already identified?"); //25. check the title of a header of the page

  });

  it.only("Should check the waitlist-inquiry.4.1 page elements - Back Surgery scenario ", () => {
    cy.visit("/waitlist-inquiry.4.1")   //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains("Have you had Surgery in the past?") //2. check the title of the dialog
      .get(waitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();  //3. click to start survey

    cy.get(waitlistInquiry.yesSurgeryRadioBtn)
      .click()   //4. choose the necessary value

    cy.get(waitlistInquiry.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click(); //5. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all regions of the body where you have had Surgery:"); //6. check the title of a header of the page

    cy.get(waitlistInquiry.rotateButton)
      .should("be.visible")
      .click(); //7. rotate the mannequin

    cy.get(waitlistInquiry.backBackRegion)
      .should("be.visible")
      .click(); //8. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Back") //9. check the visibility of the body region's name
      .click(); //10. choose the body region

    cy.get(waitlistInquiry.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click(); //11. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all regions of the body where you have had Surgery:"); //12. check the title of a header of the page

    cy.get(waitlistInquiry.glandBackCheckBox)
      .should("be.visible")
      .and("have.text", "Adrenal Gland") //13. check the visibility of the checkboxes
      .get(waitlistInquiry.flankBackCheckBox)
      .should("be.visible")
      .and("have.text", "Flank") //13. check the visibility of the checkboxes
      .click() //14. choose the operated body part
      .get(waitlistInquiry.kidneyBackCheckBox)
      .should("be.visible")
      .and("have.text", "Kidney") //13. check the visibility of the checkboxes
      .get(waitlistInquiry.scapulaBackCheckBox)
      .should("be.visible")
      .and("have.text", "Scapula (Shoulder Blade)") //13. check the visibility of the checkboxes
      .get(waitlistInquiry.spineBackCheckBox)
      .should("be.visible")
      .and("have.text", "Spine") //13. check the visibility of the checkboxes
      .get(waitlistInquiry.nextBtn)
      .click(); //15. navigate to the next page

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all surgical procedures performed on your Flank"); //16. check the title of a header of the page

    cy.get(waitlistInquiry.lesionFlankSurgery)
      .should("be.visible")
      .and("have.text", "Removal of Lesion") //17. check the visibility of the checkboxes
      .get(waitlistInquiry.tumorFlankSurgery)
      .should("be.visible")
      .and("have.text", "Tumor Removal") //17. check the visibility of the checkboxes
      .click(); //18. choose the surgery type

    cy.get(waitlistInquiry.nextBtn)
      .click() //19. navigate to the next page
      .get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Do you have any other medical issues that you have not already identified?");  //20. check the title of a header of the page

  });


})
