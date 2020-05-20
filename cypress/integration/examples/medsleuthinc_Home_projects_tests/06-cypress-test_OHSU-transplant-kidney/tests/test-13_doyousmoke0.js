import ohsuDoYouSmoke from "../page-objects/13_doyousmoke0";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the doyousmoke.0 page elements - Yes scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the radio button visibility
    7. navigate to the next page
    8. check the title of the current dialog
    9. check the section description text
    10. validation error message check
    11. check the selector visibility
    12. check the placeholder visibility
    13. check the selector's content
    14. choose the necessary value
    15. validation error message check
    16. check the selector visibility
    17. check the placeholder visibility
    18. check the selector's content
    19. choose the necessary value
    20. navigate to the next page
    21. check the title of the current dialog
    22. check the section description text
    */

    var currentUseHeading = "With regard to your current tobacco use:";
    var yearsCurrentHeading = "Approximately, how many years have you smoked?";
    var packsCurrentHeading = "Approximately, how many packs per day?";

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
    var alcoholHeading = "Approximately, how often do you drink beer, wine, or liquor?";

    cy.visit("/doyousmoke.0")    //1. navigate to the specified page
      .contains("Do you smoke cigarettes?")    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuDoYouSmoke.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("have.text", "Start Survey")
      .click();

    cy.get(ohsuDoYouSmoke.nextBtn)    //4. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDoYouSmoke.yesDoYouSmokeRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .click()    //6. choose the necessary value
      .get(ohsuDoYouSmoke.noDoYouSmokeRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .get(ohsuDoYouSmoke.usedToDoYouSmokeRadioBtn)    //5. check the radio button visibility
      .should("be.visible")
      .and("have.text", "I Used To")
      .get(ohsuDoYouSmoke.nextBtn)    //7. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //8. check the title of the current dialog
      .should("be.visible")
      .and("have.text", currentUseHeading);

    cy.contains(yearsCurrentHeading);    //9. check the section description text
    cy.contains(packsCurrentHeading);    //9. check the section description text

    cy.get(ohsuDoYouSmoke.nextBtn)    //10. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDoYouSmoke.yearsQuantitySelector)    //11. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //12. check the placeholder visibility
    for (var i = 0; i < yearsValues.length; i++) {
      cy.get(ohsuDoYouSmoke.yearsQuantitySelector)
        .select(yearsValues[i])
        .should("be.visible")
    };    //13. check the selector's content
    cy.get(ohsuDoYouSmoke.yearsQuantitySelector)
      .select("5");    //14. choose the necessary value

    cy.get(ohsuDoYouSmoke.nextBtn)    //15. validation error message check
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDoYouSmoke.packsQuantitySelector)    //16. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //17. check the placeholder visibility
    for (var i = 0; i < packsValues.length; i++) {
      cy.get(ohsuDoYouSmoke.packsQuantitySelector)
        .select(packsValues[i])
        .should("be.visible")
    };    //18. check the selector's content
    cy.get(ohsuDoYouSmoke.packsQuantitySelector)
      .select("1/4 pack");    //19. choose the necessary value

    cy.get(ohsuDoYouSmoke.nextBtn)    //20. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //21. check the title of the current dialog
      .should("be.visible")
      .and("have.text", alcoholHeading);

    cy.contains("Do you have a history of Alcohol Abuse?");    //22. check the section description text

  });

  it("Should check the doyousmoke.0 page elements - No scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the radio button visibility
    5. choose the necessary value
    6. navigate to the next page
    7. check the title of the current dialog
    8. check the section description text
    */

    var alcoholHeading = "Approximately, how often do you drink beer, wine, or liquor?";

    cy.visit("/doyousmoke.0")    //1. navigate to the specified page
      .contains("Do you smoke cigarettes?")    //2. check the title of the current dialog
      .get(ohsuDoYouSmoke.introStartSurBtn)    //3. click to start the survey
      .click();

    cy.get(ohsuDoYouSmoke.noDoYouSmokeRadioBtn)    //4. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click()    //5. choose the necessary value
      .get(ohsuDoYouSmoke.nextBtn)    //6. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //7. check the title of the current dialog
      .should("be.visible")
      .and("have.text", alcoholHeading);
    cy.contains("Do you have a history of Alcohol Abuse?");    //8. check the section description text

  });

  it("Should check the doyousmoke.0 page elements - I Used To scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. check the radio button visibility
    5. choose the necessary value
    6. navigate to the next page
    7. check the section description text
    8. validation error message check
    9. check the selector visibility
    10. check the placeholder visibility
    11. check the selector's content
    12. choose the necessary value
    13. navigate to the next page
    14. check the title of the current dialog
    15. check the section description text
    16. validation error message check
    17. check the selector visibility
    18. check the placeholder visibility
    19. check the selector's content
    20. choose the necessary value
    21. validation error message check
    22. check the selector visibility
    23. check the placeholder visibility
    24. check the selector's content
    25. choose the necessary value
    26. navigate to the next page
    27. check the title of the current dialog
    28. check the section description text
    */

    var pastUseHeading = "With regard to your past tobacco use:";
    var yearsPastHeading = "Approximately, how many years have you smoked?";
    var packsPastHeading = "Approximately, how many packs per day?";

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
    var alcoholHeading = "Approximately, how often do you drink beer, wine, or liquor?";

    cy.visit("/doyousmoke.0")    //1. navigate to the specified page
      .contains("Do you smoke cigarettes?")    //2. check the title of the current dialog
      .get(ohsuDoYouSmoke.introStartSurBtn)    //3. click to start the survey
      .click();

    cy.get(ohsuDoYouSmoke.usedToDoYouSmokeRadioBtn)    //4. check the radio button visibility
      .should("be.visible")
      .and("have.text", "I Used To")
      .click()    //5. choose the necessary value
      .get(ohsuDoYouSmoke.nextBtn)    //6. navigate to the next page
      .click();

    cy.contains(pastUseHeading);    //7. check the section description text
    cy.contains("What year did you quit?");    //7. check the section description text

    cy.get(ohsuDoYouSmoke.nextBtn)    //8. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuDoYouSmoke.quitYearSelector)    //9. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //10. check the placeholder visibility
    for (var i = 0; i < quitYearValues.length; i++) {
      cy.get(ohsuDoYouSmoke.quitYearSelector)
        .select(quitYearValues[i])
        .should("be.visible")
    };    //11. check the selector's content
    cy.get(ohsuDoYouSmoke.quitYearSelector)
      .select("2010")    //12. choose the necessary value
      .get(ohsuDoYouSmoke.nextBtn)    //13. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //14. check the title of the current dialog
      .should("be.visible")
      .and("have.text", pastUseHeading);

    cy.contains(yearsPastHeading);    //15. check the section description text
    cy.contains(packsPastHeading);    //15. check the section description text

    cy.get(ohsuDoYouSmoke.nextBtn)    //16. validation error message check
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDoYouSmoke.yearsQuantitySelector)    //17. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //18. check the placeholder visibility
    for (var i = 0; i < yearsValues.length; i++) {
      cy.get(ohsuDoYouSmoke.yearsQuantitySelector)
        .select(yearsValues[i])
        .should("be.visible")
    };    //19. check the selector's content
    cy.get(ohsuDoYouSmoke.yearsQuantitySelector)
      .select("5");    //20. choose the necessary value

    cy.get(ohsuDoYouSmoke.nextBtn)    //21. validation error message check
      .click()
      .get(ohsuDoYouSmoke.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(ohsuDoYouSmoke.packsQuantitySelector)    //22. check the selector visibility
      .should("be.visible")
      .and("contain", selectorText)    //23. check the placeholder visibility
    for (var i = 0; i < packsValues.length; i++) {
      cy.get(ohsuDoYouSmoke.packsQuantitySelector)
        .select(packsValues[i])
        .should("be.visible")
    };    //24. check the selector's content
    cy.get(ohsuDoYouSmoke.packsQuantitySelector)
      .select("1/4 pack");    //25. choose the necessary value

    cy.get(ohsuDoYouSmoke.nextBtn)    //26. navigate to the next page
      .click();

    cy.get(ohsuDoYouSmoke.headerBar)    //27. check the title of the current dialog
      .should("be.visible")
      .and("have.text", alcoholHeading);
    cy.contains("Do you have a history of Alcohol Abuse?");    //28. check the section description text

  });

})
