import doYouSmokeCigarettes from "../page objects/15_doyousmoke0_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the doyousmoke.0 page elements - Yes scenario ", () => {
      var selectorText = "Select One";
      var yearsValues = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50"
      ];
      var packsValues = [
          "1/4 pack",
          "1/2 pack",
          "1 pack",
          "2 packs",
          "3 packs",
          ">3 packs"
      ];

      cy.visit("/doyousmoke.0")
        .contains("Do you smoke cigarettes?")
        .get(doYouSmokeCigarettes.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.get(doYouSmokeCigarettes.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(doYouSmokeCigarettes.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
        .get(doYouSmokeCigarettes.yesDoYouSmokeRadioBtn)
        .should("be.visible")
        .and("have.text", "Yes")
        .click()
        .get(doYouSmokeCigarettes.noDoYouSmokeRadioBtn)
        .should("be.visible")
        .and("have.text", "No")
        .get(doYouSmokeCigarettes.usedToDoYouSmokeRadioBtn)
        .should("be.visible")
        .and("have.text", "I Used To")
        .get(doYouSmokeCigarettes.nextBtn)
        .click()
        .get(doYouSmokeCigarettes.headerBar)
        .should("be.visible")
        .and("have.text", "With regard to your current tobacco use:");
      cy.contains("Approximately, how many years have you smoked?"); 
      cy.contains("Approximately, how many packs per day?");
      cy.get(doYouSmokeCigarettes.nextBtn)
        .click()
        .get(doYouSmokeCigarettes.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required")
      cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
        .should("be.visible")
        .and("contain", selectorText)
        for(var i = 0; i<yearsValues.length; i++) {
            cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
              .select(yearsValues[i])
              .should("be.visible")
            };
      cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
        .select("5");
      cy.get(doYouSmokeCigarettes.packsQuantitySelector)
        .should("be.visible")
        .and("contain", selectorText)
        for(var i = 0; i<packsValues.length; i++) {
            cy.get(doYouSmokeCigarettes.packsQuantitySelector)
              .select(packsValues[i])
              .should("be.visible")
            };
      cy.get(doYouSmokeCigarettes.packsQuantitySelector)
        .select("1/4 pack");
      cy.get(doYouSmokeCigarettes.nextBtn)
        .click();
      cy.get(doYouSmokeCigarettes.headerBar)
        .should("be.visible")
        .and("have.text", "Approximately, how often do you drink beer, wine, or liquor?");
      cy.contains("Do you have a history of Alcohol Abuse?");                 

    });

    it.only("Should check the doyousmoke.0 page elements - No scenario ", () => {
      cy.visit("/doyousmoke.0")
        .contains("Do you smoke cigarettes?")
        .get(doYouSmokeCigarettes.introStartSurBtn)
        .click();
      cy.get(doYouSmokeCigarettes.yesDoYouSmokeRadioBtn)
        .should("be.visible")
        .and("have.text", "Yes")
        .get(doYouSmokeCigarettes.noDoYouSmokeRadioBtn)
        .should("be.visible")
        .and("have.text", "No")
        .click()
        .get(doYouSmokeCigarettes.usedToDoYouSmokeRadioBtn)
        .should("be.visible")
        .and("have.text", "I Used To")
        .get(doYouSmokeCigarettes.nextBtn)
        .click();
      cy.get(doYouSmokeCigarettes.headerBar)
        .should("be.visible")
        .and("have.text", "Approximately, how often do you drink beer, wine, or liquor?");
      cy.contains("Do you have a history of Alcohol Abuse?");                 

    });


})
