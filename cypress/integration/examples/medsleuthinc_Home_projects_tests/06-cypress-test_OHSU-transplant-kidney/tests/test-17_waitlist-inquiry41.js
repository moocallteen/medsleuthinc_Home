import ohsuWaitlistInquiry from "../page-objects/17_waitlist-inquiry41";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
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

    var surgeryHeading = "Have you had Surgery in the past?";
    var selectBodyRegionHeading = "Please select all regions of the body where you have had Surgery:";
    var selectChestRegionHeading = "Please check all parts of your Chest listed below where you have had surgery:";
    var breastChestSurgery = "Breast";
    var wallChestSurgery = "Chest Wall";
    var clavicleChestSurgery = "Clavicle (Collarbone)";
    var heartChestSurgery = "Heart";
    var lungsChestSurgery = "Lungs";
    var ribsChestSurgery = "Ribs";

    var proceduresListHeading = "Please select all surgical procedures performed on your Breast";
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
    var familyMedHistoryHeading = "With regard to your Family's Medical History:";

    cy.visit("/waitlist-inquiry.4.1")    //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains(surgeryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuWaitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuWaitlistInquiry.nextBtn)    //4. validation error message checking
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuWaitlistInquiry.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuWaitlistInquiry.yesSurgeryRadioBtn)
      .should("be.visible")
      .and("have.text", "Yes")    //5. check the visibility of the radio button
      .click()    //6. choose the necessary value
      .get(ohsuWaitlistInquiry.noSurgeryRadioBtn)
      .should("be.visible")
      .and("have.text", "No");    //7. check the visibility of the radio button
    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click();    //8. navigate to the next page 

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", selectBodyRegionHeading);    //9. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Neck");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.chesFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Chest");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.chesFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Abdomen");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Pelvis");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.rotateButton)
      .should("be.visible")
      .click();    //13. rotate the mannequin

    cy.get(ohsuWaitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Cervical Spine");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.backBackRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Back");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.backBackRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Buttock");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //10. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity");    //11. check the visibility of the body region's name
    cy.get(ohsuWaitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();    //12. reject the body region

    cy.get(ohsuWaitlistInquiry.rotateButton)
      .should("be.visible")
      .click();    //13. rotate the mannequin 

    cy.get(ohsuWaitlistInquiry.chesFrontRegion)
      .click()    //14. choose the body region
      .get(ohsuWaitlistInquiry.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click();    //15. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", selectChestRegionHeading);    //16. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.breastChestCheckBox)
      .should("be.visible")
      .and("have.text", breastChestSurgery)        //17. check the visibility of the checkboxes
      .click()        //18. choose the operated body part
      .get(ohsuWaitlistInquiry.wallChestCheckBox)
      .should("be.visible")
      .and("have.text", wallChestSurgery)        //17. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.clavicleChestCheckBox)
      .should("be.visible")
      .and("have.text", clavicleChestSurgery)        //17. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.heartChestCheckBox)
      .should("be.visible")
      .and("have.text", heartChestSurgery)        //17. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.lungsChestCheckBox)
      .should("be.visible")
      .and("have.text", lungsChestSurgery)        //17. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.ribsChestCheckBox)
      .should("be.visible")
      .and("have.text", ribsChestSurgery);        //17. check the visibility of the checkboxes

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click();        //19. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", proceduresListHeading);        //20. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.augumentationBrestSurgery)
      .should("be.visible")
      .and("have.text", augumentationBrestSurgeryTitle)    //21. check the visibility of the checkboxes
      .click()    //22. choose the surgery type

      .get(ohsuWaitlistInquiry.leftBiopsyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftBiopsyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.rightBiopsyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightBiopsyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.reconstructionBrestSurgery)
      .should("be.visible")
      .and("have.text", reconstructionBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.reductionBrestSurgery)
      .should("be.visible")
      .and("have.text", reductionBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.pectusBrestSurgery)
      .should("be.visible")
      .and("have.text", pectusBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.leftLumpectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftLumpectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.rightLumpectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightLumpectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.leftMastectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", leftMastectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.rightMastectomyBrestSurgery)
      .should("be.visible")
      .and("have.text", rightMastectomyBrestSurgeryTitle)    //21. check the visibility of the checkboxes

      .get(ohsuWaitlistInquiry.otherBrestSurgery)
      .should("be.visible")
      .and("have.text", otherBrestSurgeryTitle)    //21. check the visibility of the checkboxes
      .click();    //23. choose the surgery type

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click()    //24. navigate to the next page
      .get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);    //25. check the title of a header of the page

  });

  it("Should check the waitlist-inquiry.4.1 page elements - Back Surgery scenario ", () => {

    /*
    1. navigate to the "waitlist-inquiry.4.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of a header of the page
    7. rotate the mannequin
    8. choose the body region
    9. check the visibility of the body region's name
    10. navigate to the next page
    11. check the title of a header of the page
    12. check the visibility of the checkboxes
    13. choose the operated body part
    14. navigate to the next page
    15. check the title of a header of the page
    16. check the visibility of the checkboxes
    17. choose the surgery type
    18. navigate to the next page
    19. check the title of a header of the page
    */

    var surgeryHeading = "Have you had Surgery in the past?";
    var selectBodyRegionHeadingHeading = "Please select all regions of the body where you have had Surgery:";
    var selectBackRegionHeading = "Please check all parts of your Back listed below where you have had surgery:";
    var proceduresListHeading = "Please select all surgical procedures performed on your Flank";
    var familyMedHistoryHeading = "With regard to your Family's Medical History:";

    cy.visit("/waitlist-inquiry.4.1")    //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains(surgeryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuWaitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuWaitlistInquiry.yesSurgeryRadioBtn)
      .click();    //4. choose the necessary value

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click();    //5. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", selectBodyRegionHeadingHeading);    //6. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.rotateButton)
      .should("be.visible")
      .click();    //7. rotate the mannequin

    cy.get(ohsuWaitlistInquiry.backBackRegion)
      .should("be.visible")
      .click(); //8. choose the body region
    cy.get(ohsuWaitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Back");    //9. check the visibility of the body region's name

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .should("be.visible")
      .and("contain", "Next")
      .click();    //10. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", selectBackRegionHeading);    //11. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.glandBackCheckBox)
      .should("be.visible")
      .and("have.text", "Adrenal Gland")    //12. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.flankBackCheckBox)
      .should("be.visible")
      .and("have.text", "Flank")    //12. check the visibility of the checkboxes
      .click()    //13. choose the operated body part
      .get(ohsuWaitlistInquiry.kidneyBackCheckBox)
      .should("be.visible")
      .and("have.text", "Kidney")    //12. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.scapulaBackCheckBox)
      .should("be.visible")
      .and("have.text", "Scapula (Shoulder Blade)")    //12. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.spineBackCheckBox)
      .should("be.visible")
      .and("have.text", "Spine")    //12. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.nextBtn)
      .click();    //14. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", proceduresListHeading);    //15. check the title of a header of the page

    cy.get(ohsuWaitlistInquiry.lesionFlankSurgery)
      .should("be.visible")
      .and("have.text", "Removal of Lesion")    //16. check the visibility of the checkboxes
      .get(ohsuWaitlistInquiry.tumorFlankSurgery)
      .should("be.visible")
      .and("have.text", "Tumor Removal")    //16. check the visibility of the checkboxes
      .click();    //17. choose the surgery type

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click()    //18. navigate to the next page
      .get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);    //19. check the title of a header of the page

  });

  it("Should check the waitlist-inquiry.4.1 page elements - Had No Surgery scenario ", () => {

    /*
    1. navigate to the "waitlist-inquiry.4.1" dialog
    2. check the title of the dialog
    3. click to start survey
    4. choose the necessary value
    5. navigate to the next page
    6. check the title of a header of the page
    */

    var surgeryHeading = "Have you had Surgery in the past?";
    var familyMedHistoryHeading = "With regard to your Family's Medical History:";

    cy.visit("/waitlist-inquiry.4.1")    //1. navigate to the "waitlist-inquiry.4.1" dialog
      .contains(surgeryHeading)    //2. check the title of the dialog
      .should("be.visible")
      .get(ohsuWaitlistInquiry.introStartSurBtn)
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();    //3. click to start survey

    cy.get(ohsuWaitlistInquiry.noSurgeryRadioBtn)
      .click();    //4. choose the necessary value

    cy.get(ohsuWaitlistInquiry.nextBtn)
      .click();    //5. navigate to the next page

    cy.get(ohsuWaitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", familyMedHistoryHeading);    //6. check the title of a header of the page

  });

})