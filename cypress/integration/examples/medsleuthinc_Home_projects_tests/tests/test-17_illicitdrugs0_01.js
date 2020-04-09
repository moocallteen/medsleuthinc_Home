import illicitDrugsPage from "../page objects/17_illicitdrugs0_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the illicitdrugs.0 page elements - Yes scenario ", () => {
      var  marijuanaIllicitDrugsTitle = "Marijuana";
      var  cocaineIllicitDrugsTitle = "Cocaine";
      var  heroinIllicitDrugsTitle = "Heroin";
      var  methamphetaminesIllicitDrugsTitle = "Methamphetamines ('Ecstasy', 'Crystal Meth')";
      var  otherIllicitDrugsTitle = "Other";        
      cy.visit("/illicitdrugs.0")
        .contains("Do you use recreational or illicit drugs?")
        .get(illicitDrugsPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.get(illicitDrugsPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(illicitDrugsPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
        .get(illicitDrugsPage.yesIllicitDrugsRadioBtn)
        .should("be.visible")
        .and("have.text", "Yes")
        .click()
        .get(illicitDrugsPage.noIllicitDrugsRadioBtn)
        .should("be.visible")
        .and("have.text", "No")
        .get(illicitDrugsPage.usedToIllicitDrugsRadioBtn)
        .should("be.visible")
        .and("have.text", "I Used To")
        .get(illicitDrugsPage.nextBtn)
        .click()
        .get(illicitDrugsPage.headerBar)
        .should("be.visible")
        .and("have.text", "Please indicate the recreational or illicit drug(s) you currently use:");
      cy.contains("Please check all that apply:");
      cy.contains("If other:");
      cy.get(illicitDrugsPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(illicitDrugsPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
      cy.get(illicitDrugsPage.marijuanaIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", marijuanaIllicitDrugsTitle)
        .click()
        .get(illicitDrugsPage.cocaineIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", cocaineIllicitDrugsTitle)
        .get(illicitDrugsPage.heroinIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", heroinIllicitDrugsTitle)
        .get(illicitDrugsPage.methamphetaminesIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", methamphetaminesIllicitDrugsTitle)
        .get(illicitDrugsPage.otherIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", otherIllicitDrugsTitle)
        .click()
        .get(illicitDrugsPage.otherIllicitInputField)
        .should("be.visible")
        .type("Other Drugs")
        .get(illicitDrugsPage.nextBtn)
        .click();
      cy.get(illicitDrugsPage.headerBar)
        .should("be.visible")
        .and("have.text", "Which of the following most closely represents your level of physical activity?");
      cy.contains("Please select ONE of the following:");

    });

    it("Should check the illicitdrugs.0 page elements - No scenario ", () => {
      cy.visit("/illicitdrugs.0")
        .contains("Do you use recreational or illicit drugs?")
        .get(illicitDrugsPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.get(illicitDrugsPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(illicitDrugsPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
        .get(illicitDrugsPage.yesIllicitDrugsRadioBtn)
        .should("be.visible")
        .and("have.text", "Yes")
        .get(illicitDrugsPage.noIllicitDrugsRadioBtn)
        .should("be.visible")
        .and("have.text", "No")
        .click()
        .get(illicitDrugsPage.usedToIllicitDrugsRadioBtn)
        .should("be.visible")
        .and("have.text", "I Used To")
        .get(illicitDrugsPage.nextBtn)
        .click()
        .get(illicitDrugsPage.headerBar)
        .should("be.visible")
        .and("have.text", "Which of the following most closely represents your level of physical activity?");
      cy.contains("Please select ONE of the following:");

    });

    it("Should check the illicitdrugs.0 page elements - I Used To scenario ", () => {
      var  marijuanaIllicitDrugsTitle = "Marijuana";
      var  cocaineIllicitDrugsTitle = "Cocaine";
      var  heroinIllicitDrugsTitle = "Heroin";
      var  methamphetaminesIllicitDrugsTitle = "Methamphetamines ('Ecstasy', 'Crystal Meth')";
      var  otherIllicitDrugsTitle = "Other";
      var selectorText = "Select One";
      var quitYearValues = [
          "2020",
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009",
          "2008",
          "2007",
          "2006",
          "2005",
          "2004",
          "2003",
          "2002",
          "2001",
          "2000",
          "1999",
          "1998",
          "1997",
          "1996",
          "1995",
          "1994",
          "1993",
          "1992",
          "1991",
          "1990",
          "1989",
          "1988",
          "1987",
          "1986",
          "1985",
          "1984",
          "1983",
          "1982",
          "1981",
          "1980",
          "1979",
          "1978",
          "1977",
          "1976",
          "1975",
          "1974",
          "1973",
          "1972",
          "1971",
          "1970",
          "1969",
          "1968",
          "1967",
          "1966",
          "1965",
          "1964",
          "1963",
          "1962",
          "1961",
          "1960",
          "1959",
          "1958",
          "1957",
          "1956",
          "1955",
          "1954",
          "1953",
          "1952",
          "1951",
          "1950",
          "1949",
          "1948",
          "1947",
          "1946",
          "1945",
          "1944",
          "1943",
          "1942",
          "1941",
          "1940",
          "1939",
          "1938",
          "1937",
          "1936",
          "1935",
          "1934",
          "1933",
          "1932",
          "1931",
          "1930",
          "1929",
          "1928",
          "1927",
          "1926",
          "1925",
          "1924",
          "1923",
          "1922",
          "1921",
          "1920",
          "1919",
          "1918",
          "1917",
          "1916",
          "1915",
          "1914",
          "1913",
          "1912",
          "1911",
          "1910",
          "1909",
          "1908",
          "1907",
          "1906",
          "1905",
          "1904",
          "1903",
          "1902",
          "1901",
          "1900"
      ];        
      cy.visit("/illicitdrugs.0")
        .contains("Do you use recreational or illicit drugs?")
        .get(illicitDrugsPage.introStartSurBtn)
        .should("be.visible")
        .and("have.text", "Start Survey")
        .click();
      cy.get(illicitDrugsPage.nextBtn)
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(illicitDrugsPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required")
        .get(illicitDrugsPage.yesIllicitDrugsRadioBtn)
        .should("be.visible")
        .and("have.text", "Yes")
        .get(illicitDrugsPage.noIllicitDrugsRadioBtn)
        .should("be.visible")
        .and("have.text", "No")
        .get(illicitDrugsPage.usedToIllicitDrugsRadioBtn)
        .should("be.visible")
        .and("have.text", "I Used To")
        .click()
        .get(illicitDrugsPage.nextBtn)
        .click()
        .get(illicitDrugsPage.headerBar)
        .should("be.visible")
        .and("have.text", "Please indicate the recreational or illicit drug(s) you have previously used:");
      cy.contains("When did you last use drugs?");
      cy.contains("Please check all that apply:");
      cy.contains("If other:");
      cy.get(illicitDrugsPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(illicitDrugsPage.validationErrorMsg)
        .should("be.visible")
        .and("contain", "Required");
      cy.get(illicitDrugsPage.quitYearSelector)
        .should("be.visible")
        .and("contain", selectorText)
        for(var i = 0; i<quitYearValues.length; i++) {
          cy.get(illicitDrugsPage.quitYearSelector)
            .select(quitYearValues[i])
            .should("be.visible")
          };
      cy.get(illicitDrugsPage.quitYearSelector)
        .select("2010");
      cy.get(illicitDrugsPage.nextBtn)
        .scrollIntoView()
        .should("be.visible")
        .and("have.text","Next")
        .click()
        .get(illicitDrugsPage.validationErrorMsg)
        .should("be.visible")
        .and("have.text", "Required");
      cy.get(illicitDrugsPage.marijuanaIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", marijuanaIllicitDrugsTitle)
        .click()
        .get(illicitDrugsPage.cocaineIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", cocaineIllicitDrugsTitle)
        .get(illicitDrugsPage.heroinIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", heroinIllicitDrugsTitle)
        .get(illicitDrugsPage.methamphetaminesIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", methamphetaminesIllicitDrugsTitle)
        .get(illicitDrugsPage.otherIllicitDrugsCheckBox)
        .should("be.visible")
        .and("have.text", otherIllicitDrugsTitle)
        .click()
        .get(illicitDrugsPage.otherIllicitInputField)
        .should("be.visible")
        .type("Other Drugs")
        .get(illicitDrugsPage.nextBtn)
        .click()
        .get(illicitDrugsPage.headerBar)
        .should("be.visible")
        .and("have.text", "Which of the following most closely represents your level of physical activity?");
      cy.contains("Please select ONE of the following:");        

    });

})

