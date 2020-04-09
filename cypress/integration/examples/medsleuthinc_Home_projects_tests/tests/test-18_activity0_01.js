import activityPage from "../page objects/18_activity0_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the activity.0 page elements - Strenuous Sports scenario ", () => {
      var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
      var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
      var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
      var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
      var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
      var shortOfBreathActivityTitle = "I am short of breath at rest";
      var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
      var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

      var doNotFrequencyTitle = "I do not exercise on a regular basis";      
      var onceFrequencyTitle = "Once per week";      
      var twiceFrequencyTitle = "Twice per week";
      var threeFrequencyTitle = "Three times per week";
      var moreThreeFrequencyTitle = "More than three times per week";

      cy.visit("/activity.0")
        .contains("Which of the following most closely represents your level of physical activity?")
        .get(activityPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.contains("Please select ONE of the following:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required");
      cy.get(activityPage.strenuousActivityCheckBox)
        .should("be.visible")
        .and("have.text", strenuousActivityTitle)
        .click()
        .get(activityPage.recreationalActivityCheckBox)
        .should("be.visible")
        .and("have.text", recreationalActivityTitle)
        .get(activityPage.twoFlightsActivityCheckBox)
        .should("be.visible")
        .and("have.text", twoFlightsActivityTitle)
        .get(activityPage.oneFlightActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneFlightActivityTitle)
        .get(activityPage.oneBlockActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneBlockActivityTitle)
        .get(activityPage.shortOfBreathActivityCheckBox)
        .should("be.visible")
        .and("have.text", shortOfBreathActivityTitle)
        .get(activityPage.wheelchairActivityCheckBox)
        .should("be.visible")
        .and("have.text", wheelchairActivityTitle)
        .get(activityPage.unableActivityCheckBox)
        .should("be.visible")
        .and("have.text", unableActivityTitle)
        .get(activityPage.nextBtn)
        .click();
      cy.get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "Approximately how often do you exercise per week?");
      cy.contains("Please select one of the following choices:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required");

      cy.get(activityPage.doNotFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", doNotFrequencyTitle)
        .get(activityPage.onceFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", onceFrequencyTitle)
        .get(activityPage.twiceFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", twiceFrequencyTitle)
        .get(activityPage.threeFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", threeFrequencyTitle)
        .get(activityPage.moreThreeFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", moreThreeFrequencyTitle)
        .click()
        .get(activityPage.nextBtn)
        .click()
        .get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "Have you had Surgery in the past?");

    });

    it("Should check the activity.0 page elements - Recreational Activities scenario ", () => {
      var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
      var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
      var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
      var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
      var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
      var shortOfBreathActivityTitle = "I am short of breath at rest";
      var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
      var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";
      
      var doNotFrequencyTitle = "I do not exercise on a regular basis";      
      var onceFrequencyTitle = "Once per week";      
      var twiceFrequencyTitle = "Twice per week";
      var threeFrequencyTitle = "Three times per week";
      var moreThreeFrequencyTitle = "More than three times per week";

      cy.visit("/activity.0")
        .contains("Which of the following most closely represents your level of physical activity?")
        .get(activityPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.contains("Please select ONE of the following:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
      cy.get(activityPage.strenuousActivityCheckBox)
        .should("be.visible")
        .and("have.text", strenuousActivityTitle)
        .get(activityPage.recreationalActivityCheckBox)
        .should("be.visible")
        .and("have.text", recreationalActivityTitle)
        .click()
        .get(activityPage.twoFlightsActivityCheckBox)
        .should("be.visible")
        .and("have.text", twoFlightsActivityTitle)
        .get(activityPage.oneFlightActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneFlightActivityTitle)
        .get(activityPage.oneBlockActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneBlockActivityTitle)
        .get(activityPage.shortOfBreathActivityCheckBox)
        .should("be.visible")
        .and("have.text", shortOfBreathActivityTitle)
        .get(activityPage.wheelchairActivityCheckBox)
        .should("be.visible")
        .and("have.text", wheelchairActivityTitle)
        .get(activityPage.unableActivityCheckBox)
        .should("be.visible")
        .and("have.text", unableActivityTitle)
        .get(activityPage.nextBtn)
        .click();
      cy.get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "Approximately how often do you exercise per week?");
      cy.contains("Please select one of the following choices:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required");

      cy.get(activityPage.doNotFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", doNotFrequencyTitle)
        .get(activityPage.onceFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", onceFrequencyTitle)
        .get(activityPage.twiceFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", twiceFrequencyTitle)
        .get(activityPage.threeFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", threeFrequencyTitle)
        .get(activityPage.moreThreeFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", moreThreeFrequencyTitle)
        .click()
        .get(activityPage.nextBtn)
        .click()
        .get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "Have you had Surgery in the past?");

    });

    it("Should check the activity.0 page elements - 2 Flights Of Stairs scenario ", () => {
      var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
      var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
      var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
      var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
      var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
      var shortOfBreathActivityTitle = "I am short of breath at rest";
      var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
      var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";
      
      var doNotFrequencyTitle = "I do not exercise on a regular basis";      
      var onceFrequencyTitle = "Once per week";      
      var twiceFrequencyTitle = "Twice per week";
      var threeFrequencyTitle = "Three times per week";
      var moreThreeFrequencyTitle = "More than three times per week";

      cy.visit("/activity.0")
        .contains("Which of the following most closely represents your level of physical activity?")
        .get(activityPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.contains("Please select ONE of the following:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
      cy.get(activityPage.strenuousActivityCheckBox)
        .should("be.visible")
        .and("have.text", strenuousActivityTitle)
        .get(activityPage.recreationalActivityCheckBox)
        .should("be.visible")
        .and("have.text", recreationalActivityTitle)
        .get(activityPage.twoFlightsActivityCheckBox)
        .should("be.visible")
        .and("have.text", twoFlightsActivityTitle)
        .click()
        .get(activityPage.oneFlightActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneFlightActivityTitle)
        .get(activityPage.oneBlockActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneBlockActivityTitle)
        .get(activityPage.shortOfBreathActivityCheckBox)
        .should("be.visible")
        .and("have.text", shortOfBreathActivityTitle)
        .get(activityPage.wheelchairActivityCheckBox)
        .should("be.visible")
        .and("have.text", wheelchairActivityTitle)
        .get(activityPage.unableActivityCheckBox)
        .should("be.visible")
        .and("have.text", unableActivityTitle)
        .get(activityPage.nextBtn)
        .click();
      cy.get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "Approximately how often do you exercise per week?");
      cy.contains("Please select one of the following choices:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required");

      cy.get(activityPage.doNotFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", doNotFrequencyTitle)
        .get(activityPage.onceFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", onceFrequencyTitle)
        .get(activityPage.twiceFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", twiceFrequencyTitle)
        .get(activityPage.threeFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", threeFrequencyTitle)
        .get(activityPage.moreThreeFrequencyCheckBox)
        .should("be.visible")
        .and("have.text", moreThreeFrequencyTitle)
        .click()
        .get(activityPage.nextBtn)
        .click()
        .get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "Have you had Surgery in the past?");

    });

    it("Should check the activity.0 page elements - 1 Flight Of Stairs Negative scenario ", () => {
      var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
      var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
      var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
      var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
      var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
      var shortOfBreathActivityTitle = "I am short of breath at rest";
      var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
      var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

      cy.visit("/activity.0")
        .contains("Which of the following most closely represents your level of physical activity?")
        .get(activityPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.contains("Please select ONE of the following:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
      cy.get(activityPage.strenuousActivityCheckBox)
        .should("be.visible")
        .and("have.text", strenuousActivityTitle)
        .get(activityPage.recreationalActivityCheckBox)
        .should("be.visible")
        .and("have.text", recreationalActivityTitle)
        .get(activityPage.twoFlightsActivityCheckBox)
        .should("be.visible")
        .and("have.text", twoFlightsActivityTitle)
        .get(activityPage.oneFlightActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneFlightActivityTitle)
        .click()
        .get(activityPage.oneBlockActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneBlockActivityTitle)
        .get(activityPage.shortOfBreathActivityCheckBox)
        .should("be.visible")
        .and("have.text", shortOfBreathActivityTitle)
        .get(activityPage.wheelchairActivityCheckBox)
        .should("be.visible")
        .and("have.text", wheelchairActivityTitle)
        .get(activityPage.unableActivityCheckBox)
        .should("be.visible")
        .and("have.text", unableActivityTitle)
        .get(activityPage.nextBtn)
        .click()
        .get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "With regard to your Heart:");
      cy.get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");
      cy.contains("Do you get chest pain at REST?")
        .scrollIntoView();
      cy.get(activityPage.yesPainRestCheckBox)
        .should("be.visible")
        .and("have.text", "Yes")
        .get(activityPage.noPainRestCheckBox)
        .should("be.visible")
        .and("have.text", "No")
        .click()     
        .get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");
;
      cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")
        .scrollIntoView();
      cy.get(activityPage.yesPainActivityCheckBox)
        .should("be.visible")
        .and("have.text", "Yes")
        .get(activityPage.noPainActivityCheckBox)
        .should("be.visible")
        .and("have.text", "No")
        .click()
        .get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");

      cy.contains("Have you had a stress test?");
      cy.get(activityPage.yesStressTestCheckBox)
        .should("be.visible")
        .and("have.text", "Yes")
        .get(activityPage.noStressTestCheckBox)
        .should("be.visible")
        .and("have.text", "No")
        .click()
        .get(activityPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");

      cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");
      cy.get(activityPage.yesCatheterizationCheckBox)
        .should("be.visible")
        .and("have.text", "Yes")
        .get(activityPage.noCatheterizationCheckBox)
        .should("be.visible")
        .and("have.text", "No")
        .click();
      cy.get(activityPage.nextBtn)
        .click()
        .get(activityPage.headerBar)
        .should("be.visible")
        .and("have.text", "Have you had Surgery in the past?");

    });

    it.only("Should check the activity.0 page elements - 1 Flight Of Stairs Positive scenario ", () => {
        var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
        var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
        var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
        var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
        var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
        var shortOfBreathActivityTitle = "I am short of breath at rest";
        var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
        var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";
        
        var selectorText = "Select One";
        var stressTestsQtyValues = [
            "1",
            "2",
            "3",
            "4",
            "5",
        ];
  
        cy.visit("/activity.0")
          .contains("Which of the following most closely represents your level of physical activity?")
          .get(activityPage.introStartSurBtn)
          .should("be.visible")
          .and("have.text", "Start Survey")
          .click();
        cy.contains("Please select ONE of the following:");
        cy.get(activityPage.nextBtn)
          .should("be.visible")
          .and("have.text","Next")
          .click()
          .get(activityPage.validationErrorMsg)
          .should("be.visible")
          .and("have.text", "Required")
        cy.get(activityPage.strenuousActivityCheckBox)
          .should("be.visible")
          .and("have.text", strenuousActivityTitle)
          .get(activityPage.recreationalActivityCheckBox)
          .should("be.visible")
          .and("have.text", recreationalActivityTitle)
          .get(activityPage.twoFlightsActivityCheckBox)
          .should("be.visible")
          .and("have.text", twoFlightsActivityTitle)
          .get(activityPage.oneFlightActivityCheckBox)
          .should("be.visible")
          .and("have.text", oneFlightActivityTitle)
          .click()
          .get(activityPage.oneBlockActivityCheckBox)
          .should("be.visible")
          .and("have.text", oneBlockActivityTitle)
          .get(activityPage.shortOfBreathActivityCheckBox)
          .should("be.visible")
          .and("have.text", shortOfBreathActivityTitle)
          .get(activityPage.wheelchairActivityCheckBox)
          .should("be.visible")
          .and("have.text", wheelchairActivityTitle)
          .get(activityPage.unableActivityCheckBox)
          .should("be.visible")
          .and("have.text", unableActivityTitle)
          .get(activityPage.nextBtn)
          .click()
          .get(activityPage.headerBar)
          .should("be.visible")
          .and("have.text", "With regard to your Heart:");
        
        cy.get(activityPage.nextBtn)
          .scrollIntoView()
          .should("be.visible")
          .and("have.text","Next")
          .click()
          .get(activityPage.validationErrorMsg)
          .should("be.visible")
          .and("contain", "Required");
        cy.contains("Do you get chest pain at REST?")
          .scrollIntoView();
        cy.get(activityPage.yesPainRestCheckBox)
          .should("be.visible")
          .and("have.text", "Yes")
          .click()     
          .get(activityPage.noPainRestCheckBox)
          .should("be.visible")
          .and("have.text", "No")
          .get(activityPage.nextBtn)
          .scrollIntoView()
          .should("be.visible")
          .and("have.text","Next")
          .click()
          .get(activityPage.validationErrorMsg)
          .should("be.visible")
          .and("contain", "Required");
  
        cy.contains("Do you get chest pain with ACTIVITY? (for example: walking or climbing stairs)")
          .scrollIntoView();
        cy.get(activityPage.yesPainActivityCheckBox)
          .should("be.visible")
          .and("have.text", "Yes")
          .click()
          .get(activityPage.noPainActivityCheckBox)
          .should("be.visible")
          .and("have.text", "No")
          .get(activityPage.nextBtn)
          .scrollIntoView()
          .should("be.visible")
          .and("have.text","Next")
          .click()
          .get(activityPage.validationErrorMsg)
          .should("be.visible")
          .and("contain", "Required");
  
        cy.contains("Have you had a stress test?");
        cy.get(activityPage.yesStressTestCheckBox)
          .should("be.visible")
          .and("have.text", "Yes")
          .click()
          .get(activityPage.noStressTestCheckBox)
          .should("be.visible")
          .and("have.text", "No")
          .get(activityPage.nextBtn)
          .scrollIntoView()
          .should("be.visible")
          .and("have.text","Next")
          .click()
          .get(activityPage.validationErrorMsg)
          .should("be.visible")
          .and("contain", "Required");
  
        cy.contains("Have you had a Cardiac Catheterization (Cardiac Cath)?");
        cy.get(activityPage.yesCatheterizationCheckBox)
          .should("be.visible")
          .and("have.text", "Yes")
          .click()
          .get(activityPage.noCatheterizationCheckBox)
          .should("be.visible")
          .and("have.text", "No");
        cy.get(activityPage.nextBtn)
          .click()
          .get(activityPage.headerBar)
          .should("be.visible")
          .and("have.text", "With regard to your Heart:");

        cy.contains("How many stress tests have you had?");
        cy.get(activityPage.stressTestsQtySelect)
          .should("be.visible")
          .and("contain", selectorText)
          for(var i = 0; i<stressTestsQtyValues.length; i++) {
            cy.get(activityPage.stressTestsQtySelect)
              .select(stressTestsQtyValues[i])
              .should("be.visible")
            };
        cy.get(activityPage.stressTestsQtySelect)
          .select("2"); 
        cy.get(activityPage.nextBtn)
          .scrollIntoView()
          .should("be.visible")
          .and("have.text","Next")
          .click()
          .get(activityPage.validationErrorMsg)
          .should("be.visible")
          .and("contain", "Required");
  
        cy.contains("Approximately when was your most recent stress test?");
        cy.get(activityPage.stressTestsDateInput)
          .should("be.visible")
          .type("02281984")
          .get(activityPage.nextBtn)
          .scrollIntoView()
          .click()
          .get(activityPage.validationErrorMsg)
          .should("be.visible")
          .and("contain", "Required");
        
        cy.contains("Was your most recent stress test normal?");
        cy.get(activityPage.yesNormalTest)
          .should("be.visible")
          .and("have.text", "Yes")
          .click()
          .get(activityPage.noNormalTest)
          .should("be.visible")
          .and("have.text", "No")
          .get(activityPage.nextBtn)
          .scrollIntoView()
          .click()
          .get(activityPage.headerBar)
          .should("be.visible")
          .and("have.text", "With regard to your Heart:");

        cy.contains("How many Cardiac Catheterizations have you had?");

              
      });

    it("Should check the activity.0 page elements - 1 Block Or Less scenario ", () => {
      var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
      var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
      var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
      var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
      var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
      var shortOfBreathActivityTitle = "I am short of breath at rest";
      var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
      var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

      cy.visit("/activity.0")
        .contains("Which of the following most closely represents your level of physical activity?")
        .get(activityPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.contains("Please select ONE of the following:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
      cy.get(activityPage.strenuousActivityCheckBox)
        .should("be.visible")
        .and("have.text", strenuousActivityTitle)
        .get(activityPage.recreationalActivityCheckBox)
        .should("be.visible")
        .and("have.text", recreationalActivityTitle)
        .get(activityPage.twoFlightsActivityCheckBox)
        .should("be.visible")
        .and("have.text", twoFlightsActivityTitle)
        .get(activityPage.oneFlightActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneFlightActivityTitle)
        .get(activityPage.oneBlockActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneBlockActivityTitle)
        .click()
        .get(activityPage.shortOfBreathActivityCheckBox)
        .should("be.visible")
        .and("have.text", shortOfBreathActivityTitle)
        .get(activityPage.wheelchairActivityCheckBox)
        .should("be.visible")
        .and("have.text", wheelchairActivityTitle)
        .get(activityPage.unableActivityCheckBox)
        .should("be.visible")
        .and("have.text", unableActivityTitle)
        .get(activityPage.nextBtn)
        .click()





    });

    it("Should check the activity.0 page elements - Short Of Breath scenario ", () => {
      var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
      var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
      var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
      var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
      var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
      var shortOfBreathActivityTitle = "I am short of breath at rest";
      var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
      var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

      cy.visit("/activity.0")
        .contains("Which of the following most closely represents your level of physical activity?")
        .get(activityPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.contains("Please select ONE of the following:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
      cy.get(activityPage.strenuousActivityCheckBox)
        .should("be.visible")
        .and("have.text", strenuousActivityTitle)
        .get(activityPage.recreationalActivityCheckBox)
        .should("be.visible")
        .and("have.text", recreationalActivityTitle)
        .get(activityPage.twoFlightsActivityCheckBox)
        .should("be.visible")
        .and("have.text", twoFlightsActivityTitle)
        .get(activityPage.oneFlightActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneFlightActivityTitle)
        .get(activityPage.oneBlockActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneBlockActivityTitle)
        .get(activityPage.shortOfBreathActivityCheckBox)
        .should("be.visible")
        .and("have.text", shortOfBreathActivityTitle)
        .get(activityPage.wheelchairActivityCheckBox)
        .should("be.visible")
        .click()
        .and("have.text", wheelchairActivityTitle)
        .get(activityPage.unableActivityCheckBox)
        .should("be.visible")
        .and("have.text", unableActivityTitle)
        .get(activityPage.nextBtn)
        .click()





    });

    it("Should check the activity.0 page elements - Wheelchair Bound scenario ", () => {
      var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
      var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
      var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
      var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
      var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
      var shortOfBreathActivityTitle = "I am short of breath at rest";
      var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
      var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

      cy.visit("/activity.0")
        .contains("Which of the following most closely represents your level of physical activity?")
        .get(activityPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.contains("Please select ONE of the following:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
      cy.get(activityPage.strenuousActivityCheckBox)
        .should("be.visible")
        .and("have.text", strenuousActivityTitle)
        .get(activityPage.recreationalActivityCheckBox)
        .should("be.visible")
        .and("have.text", recreationalActivityTitle)
        .get(activityPage.twoFlightsActivityCheckBox)
        .should("be.visible")
        .and("have.text", twoFlightsActivityTitle)
        .get(activityPage.oneFlightActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneFlightActivityTitle)
        .get(activityPage.oneBlockActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneBlockActivityTitle)
        .get(activityPage.shortOfBreathActivityCheckBox)
        .should("be.visible")
        .and("have.text", shortOfBreathActivityTitle)
        .get(activityPage.wheelchairActivityCheckBox)
        .should("be.visible")
        .and("have.text", wheelchairActivityTitle)
        .click()
        .get(activityPage.unableActivityCheckBox)
        .should("be.visible")
        .and("have.text", unableActivityTitle)
        .get(activityPage.nextBtn)
        .click()





    });

    it("Should check the activity.0 page elements - Unable scenario ", () => {
      var strenuousActivityTitle = "I am able to participate in strenuous sports such as swimming, singles tennis, football, basketball, or skiing";
      var recreationalActivityTitle = "I am able to participate in moderate recreational activities like golf, doubles tennis, dancing, throwing a baseball or football";
      var twoFlightsActivityTitle = "I am able to climb 2 flights of stairs without stopping";
      var oneFlightActivityTitle = "I can only climb 1 flight of stairs or less before stopping";
      var oneBlockActivityTitle = "I can only walk 1 block or less before stopping";
      var shortOfBreathActivityTitle = "I am short of breath at rest";
      var wheelchairActivityTitle = "None of the above: I am wheelchair bound";
      var unableActivityTitle = "None of the above: I am unable to perform any physical activity because I have severe back, joint, and/or neck pain";

      cy.visit("/activity.0")
        .contains("Which of the following most closely represents your level of physical activity?")
        .get(activityPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.contains("Please select ONE of the following:");
      cy.get(activityPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(activityPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
      cy.get(activityPage.strenuousActivityCheckBox)
        .should("be.visible")
        .and("have.text", strenuousActivityTitle)
        .get(activityPage.recreationalActivityCheckBox)
        .should("be.visible")
        .and("have.text", recreationalActivityTitle)
        .get(activityPage.twoFlightsActivityCheckBox)
        .should("be.visible")
        .and("have.text", twoFlightsActivityTitle)
        .get(activityPage.oneFlightActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneFlightActivityTitle)
        .get(activityPage.oneBlockActivityCheckBox)
        .should("be.visible")
        .and("have.text", oneBlockActivityTitle)
        .get(activityPage.shortOfBreathActivityCheckBox)
        .should("be.visible")
        .and("have.text", shortOfBreathActivityTitle)
        .get(activityPage.wheelchairActivityCheckBox)
        .should("be.visible")
        .and("have.text", wheelchairActivityTitle)
        .get(activityPage.unableActivityCheckBox)
        .should("be.visible")
        .and("have.text", unableActivityTitle)
        .click()
        .get(activityPage.nextBtn)
        .click()





    });




})
