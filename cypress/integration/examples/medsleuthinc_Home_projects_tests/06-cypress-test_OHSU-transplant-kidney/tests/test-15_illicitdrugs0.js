import ohsuDrugs from "../page-objects/15_illicitdrugs0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the illicitdrugs.0 page elements - Yes scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    10. validation error message check
    11. check the checkbox visibility
    12. choose the necessary value
    13. check the innput field
    14. type in the medication name
    15. navigate to the next page
    16. check the title of the current dialog
    17. check the section description text
    */

    var drugsHeading = "Do you use recreational or illicit drugs?";
    var drugsListHeading = "Please indicate the recreational or illicit drug(s) you currently use:";
    var marijuanaIllicitDrugsTitle = "Marijuana";
    var cocaineIllicitDrugsTitle = "Cocaine";
    var heroinIllicitDrugsTitle = "Heroin";
    var methamphetaminesIllicitDrugsTitle = "Methamphetamines ('Ecstasy', 'Crystal Meth')";
    var otherIllicitDrugsTitle = "Other";
    var activityHeading = "Which of the following most closely represents your level of physical activity?";

    cy.visit("/illicitdrugs.0")    //1. navigate to the specified page
      .contains(drugsHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuDrugs.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDrugs.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.yesIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuDrugs.noIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .get(ohsuDrugs.usedToIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "I Used To")
      .get(ohsuDrugs.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuDrugs.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", drugsListHeading);
    cy.contains("Please check all that apply:");    //9. check the section description text
    cy.contains("If other:");    //9. check the section description text

    cy.get(ohsuDrugs.nextBtn)    //10. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.marijuanaIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", marijuanaIllicitDrugsTitle)
      .click();    //12. choose the necessary value

    cy.get(ohsuDrugs.cocaineIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", cocaineIllicitDrugsTitle);

    cy.get(ohsuDrugs.heroinIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", heroinIllicitDrugsTitle);

    cy.get(ohsuDrugs.methamphetaminesIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", methamphetaminesIllicitDrugsTitle);

    cy.get(ohsuDrugs.otherIllicitDrugsCheckBox)    //11. check the checkbox visibility
      .should("be.visible")
      .and("have.text", otherIllicitDrugsTitle)
      .click();    //12. choose the necessary value

    cy.get(ohsuDrugs.otherIllicitInputField)    //13. check the innput field
      .should("be.visible")
      .type("Other Drugs")    //14. type in the medication name
      .get(ohsuDrugs.nextBtn)    //15. navigate to the next page
      .click();

    cy.get(ohsuDrugs.headerBar)    //16. check the title of the current dialog
      .should("be.visible")
      .and("have.text", activityHeading);
    cy.contains("Please select ONE of the following:");    //17. check the section description text

  });

  it("Should check the illicitdrugs.0 page elements - No scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    */

    var drugsHeading = "Do you use recreational or illicit drugs?";
    var activityHeading = "Which of the following most closely represents your level of physical activity?";

    cy.visit("/illicitdrugs.0")    //1. navigate to the specified page
      .contains(drugsHeading)    //2. check the title of the current dialog
      .get(ohsuDrugs.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDrugs.nextBtn)    //4. validation error message check
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.noIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click()    //6. choose the necessary value
      .get(ohsuDrugs.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuDrugs.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", activityHeading);
    cy.contains("Please select ONE of the following:");    //9. check the section description text

  });

  it("Should check the illicitdrugs.0 page elements - I Used To scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    6. choose the necessary value
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    10. validation error message check
    11. check the selector visibility
    12. check the placeholder visibility
    13. check the selector's content
    14. choose the necessary value
    15. validation error message check
    16. check the checkbox visibility
    17. choose the necessary value
    18. check the innput field
    19. type in the required information
    20. navigate to the next page
    21. check the title of the current dialog
    22. check the section description text
    */

    var drugsHeading = "Do you use recreational or illicit drugs?";
    var drugsListHeading = "Please indicate the recreational or illicit drug(s) you have previously used:";
    var marijuanaIllicitDrugsTitle = "Marijuana";
    var cocaineIllicitDrugsTitle = "Cocaine";
    var heroinIllicitDrugsTitle = "Heroin";
    var methamphetaminesIllicitDrugsTitle = "Methamphetamines ('Ecstasy', 'Crystal Meth')";
    var otherIllicitDrugsTitle = "Other";
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
    var activityHeading = "Which of the following most closely represents your level of physical activity?";

    cy.visit("/illicitdrugs.0")    //1. navigate to the specified page
      .contains(drugsHeading)    //2. check the title of the current dialog
      .get(ohsuDrugs.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDrugs.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.usedToIllicitDrugsRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "I Used To")
      .click()    //6. choose the necessary value
      .get(ohsuDrugs.nextBtn)    //7. navigate to the next page
      .click()
      .get(ohsuDrugs.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", drugsListHeading);

    cy.contains("When did you last use drugs?");    //9. check the section description text
    cy.contains("Please check all that apply:");    //9. check the section description text
    cy.contains("If other:");    //9. check the section description text

    cy.get(ohsuDrugs.nextBtn)    //10. validation error message check
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDrugs.quitYearSelector)    //11. check the selector visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", selectorText)    //12. check the placeholder visibility
    for (var i = 0; i < quitYearValues.length; i++) {
      cy.get(ohsuDrugs.quitYearSelector)
        .select(quitYearValues[i])
        .should("be.visible")
    };    //13. check the selector's content
    cy.get(ohsuDrugs.quitYearSelector)
      .select("2010");    //14. choose the necessary value

    cy.get(ohsuDrugs.nextBtn)    //15. validation error message check
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDrugs.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDrugs.marijuanaIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", marijuanaIllicitDrugsTitle)
      .click();    //17. choose the necessary value

    cy.get(ohsuDrugs.cocaineIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", cocaineIllicitDrugsTitle);

    cy.get(ohsuDrugs.heroinIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", heroinIllicitDrugsTitle);

    cy.get(ohsuDrugs.methamphetaminesIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", methamphetaminesIllicitDrugsTitle);

    cy.get(ohsuDrugs.otherIllicitDrugsCheckBox)    //16. check the checkbox visibility
      .should("be.visible")
      .and("have.text", otherIllicitDrugsTitle)
      .click();    //17. choose the necessary value

    cy.get(ohsuDrugs.otherIllicitInputField)    //18. check the innput field
      .should("be.visible")
      .type("Other Drugs")    //19. type in the required information
      .get(ohsuDrugs.nextBtn)    //20. navigate to the next page
      .click();

    cy.get(ohsuDrugs.headerBar)    //21. check the title of the current dialog
      .should("be.visible")
      .and("have.text", activityHeading);
    cy.contains("Please select ONE of the following:");    //22. check the section description text

  });

})