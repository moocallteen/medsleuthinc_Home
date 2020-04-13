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

    var breastChestSurgery = "Breast";
    var wallChestSurgery = "Chest Wall";
    var clavicleChestSurgery = "Clavicle(Collarbone)";
    var heartChestSurgery = "Heart";
    var lungsChestSurgery = "Lungs";
    var ribsChestSurgery = "Ribs";

    cy.visit("/waitlist-inquiry.4.1")   //1. navigate to the "activity.0" dialog
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
      .and("have.text", "No")   //5. check the visibility of the checkboxes
    cy.get(waitlistInquiry.nextBtn)
      .click();  //7. navigate to the next page 

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please select all regions of the body where you have had Surgery:"); //8. check the title of a header of the page

    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click(); //9. choose the body region
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head"); //10. check the visibility of the body region' name
    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Neck");
    cy.get(waitlistInquiry.neckFrontRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.chesFrontyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Chest");
    cy.get(waitlistInquiry.chesFrontyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity");
    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity");
    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Abdomen");
    cy.get(waitlistInquiry.abdomenFrontRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Pelvis");
    cy.get(waitlistInquiry.pelvisFrontRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity");
    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity");
    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.rotateButton)
      .should("be.visible")
      .click(); //. rotate the mannequin 

    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Head");
    cy.get(waitlistInquiry.headBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Cervical Spine");
    cy.get(waitlistInquiry.cervicalBackRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.backBackRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Back");
    cy.get(waitlistInquiry.backBackRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Left Extremity");
    cy.get(waitlistInquiry.upperLeftBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Upper Right Extremity");
    cy.get(waitlistInquiry.upperRightBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Buttock");
    cy.get(waitlistInquiry.buttockBackRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Left Extremity");
    cy.get(waitlistInquiry.lowerLeftBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();
    cy.get(waitlistInquiry.bodyPartsTitleBar)
      .should("be.visible")
      .and("have.text", "Lower Right Extremity");
    cy.get(waitlistInquiry.lowerRightBodyRegion)
      .should("be.visible")
      .click();

    cy.get(waitlistInquiry.rotateButton)
      .should("be.visible")
      .click(); //. rotate the mannequin 

    cy.get(waitlistInquiry.chesFrontyRegion)
      .click()
      .get(waitlistInquiry.nextBtn)
      .first()
      .should("be.visible")
      .and("contain", "Next")
      .click();

    cy.get(waitlistInquiry.headerBar)
      .should("be.visible")
      .and("have.text", "Please check all parts of your Chest listed below where you have had surgery:"); //8. check the title of a header of the page

    cy.get(waitlistInquiry.nextBtn)
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(wallChestSurgery.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");


    cy.get(waitlistInquiry.breastChestCheckBox)
      .should("be.visible")
      .and("have.text", breastChestSurgery)
      .click()
      .get(waitlistInquiry.wallChestCheckBox)
      .should("be.visible")
      .and("have.text", wallChestSurgery)
      .get(waitlistInquiry.clavicleChestCheckBox)
      .should("be.visible")
      .and("have.text", clavicleChestSurgery)
      .get(waitlistInquiry.heartChestCheckBox)
      .should("be.visible")
      .and("have.text", heartChestSurgery)
      .get(waitlistInquiry.lungsChestCheckBox)
      .should("be.visible")
      .and("have.text", lungsChestSurgery)
      .get(waitlistInquiry.ribsChestCheckBox)
      .should("be.visible")
      .and("have.text", ribsChestSurgery);

    cy.get(waitlistInquiry.nextBtn)
      .click();



  });
})
