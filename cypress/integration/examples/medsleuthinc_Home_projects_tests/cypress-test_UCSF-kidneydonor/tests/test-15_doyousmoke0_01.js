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
      .and("have.text", "Next")
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
      .and("contain", "Required");

    cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < yearsValues.length; i++) {
      cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
        .select(yearsValues[i])
        .should("be.visible")
    };

    cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
      .select("5");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(doYouSmokeCigarettes.packsQuantitySelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < packsValues.length; i++) {
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

  it("Should check the doyousmoke.0 page elements - No scenario ", () => {

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

  it("Should check the doyousmoke.0 page elements - I Used To scenario ", () => {
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
      .get(doYouSmokeCigarettes.usedToDoYouSmokeRadioBtn)
      .should("be.visible")
      .and("have.text", "I Used To")
      .click()
      .get(doYouSmokeCigarettes.nextBtn)
      .click();

    cy.contains("With regard to your past tobacco use:");
    cy.contains("What year did you quit?");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(doYouSmokeCigarettes.quitYearSelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < quitYearValues.length; i++) {
      cy.get(doYouSmokeCigarettes.quitYearSelector)
        .select(quitYearValues[i])
        .should("be.visible")
    };

    cy.get(doYouSmokeCigarettes.quitYearSelector)
      .select("2010")
      .get(doYouSmokeCigarettes.nextBtn)
      .click();

    cy.get(doYouSmokeCigarettes.headerBar)
      .should("be.visible")
      .and("have.text", "With regard to your past tobacco use:");

    cy.contains("Approximately, how many years have you smoked?");
    cy.contains("Approximately, how many packs per day?");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < yearsValues.length; i++) {
      cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
        .select(yearsValues[i])
        .should("be.visible")
    };

    cy.get(doYouSmokeCigarettes.yearsQuantitySelector)
      .select("5");

    cy.get(doYouSmokeCigarettes.nextBtn)
      .click()
      .get(doYouSmokeCigarettes.validationErrorMsg)
      .should("be.visible")
      .and("contain", "Required");

    cy.get(doYouSmokeCigarettes.packsQuantitySelector)
      .should("be.visible")
      .and("contain", selectorText)
    for (var i = 0; i < packsValues.length; i++) {
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

})
