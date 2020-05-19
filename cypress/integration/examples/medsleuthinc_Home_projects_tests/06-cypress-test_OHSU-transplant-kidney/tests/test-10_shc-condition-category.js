import ohsuMedConditions from "../page-objects/10_shc-condition-category";

describe("OHSU transplant kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.imsinfra.i.mymedsleuth.com/ohsu-transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("Should check the shc-condition-category page elements - No follow-ups scenario ", () => {

    /*
    1. navigate to the specified page
    2. check the title of the current dialog
    3. click to start the survey
    4. validation error message check
    5. check the section description text
    6. check the radio button visibility
    7. choose the necessary value
    8. check the data target reference visibility
    9. check the data target reference title
    10. open the examples modal
    11. check the modal's content
    12. close the examples modal
    13. navigate to the next page
    14. check the title of the current dialog
    */

    var medConditionsHeading = "Do you have or have you had any of the following medical conditions?";
    var airwayModalContent = "Airway and/or Lungs×For Example: Asthma COPD Interstitial Lung Disease (ILD) Pneumothorax (Collapsed Lung) Pulmonary Fibrosis Restrictive Lung Disease Sleep Apnea Tuberculosis";
    var bloodDisModalContent = "Blood Disorder (Abnormal Bruising, Bleeding, or Clotting)×For Example: Anemia (Low blood count) Blood Transfusion Hemophilia A (Factor VIII Deficiency) I have or had a clot in my leg (DVT) Idiopathic Thrombocytopenic Purpura (ITP) Thalassemia Von Willebrand's Disease";
    var cancerModalContent = "Cancer, Chemotherapy, and/or Radiation Therapy×For Example: Cancer Multiple Myeloma";
    var diabetesModalContent = "Diabetes, Thyroid, Adrenal and/or other Endocrine Disorder×For Example: Cushing's Syndrome Elevated Parathyroid Level (Hyperparathyroidism) Low Sodium (Salt) Level (Hyponatremia) Multinodular Goiter Pheochromocytoma Pituitary Adenoma Prolactinoma SIADH (Syndrome of Inappropriate ADH Secretion)";
    var digestiveTractModalContent = "Digestive Tract and/or Liver Disease×For Example: Bile Duct Obstruction Chronic Pancreatitis Cirrhosis of the Liver Constipation Difficulty Swallowing Fatty Liver Disease Heartburn (Reflux) Hepatitis C Hepatocellular Carcinoma (Liver Cancer) Indigestion (Abdominal Pain/Gas/Belching) Liver Transplant Peptic Ulcer Disease (Stomach or Duodenum)";
    var heartModalContent = "Heart and/or Circulatory System×For Example: Atrial Fibrillation/Flutter Aortic Stenosis Cardiomyopathy Congenital Heart Defect Coronary Artery Disease Leg pain when walking (Intermittent Claudication) Mitral Valve Prolapse Pacemaker and/or Defibrillator Peripheral Vascular Disease (Peripheral Arterial Disease) Supraventricular Tachycardia (SVT)";
    var immuneMedModalContent = "Immune-Mediated Diseases×For Example: Ankylosing Spondylitis Juvenile Idiopathic Arthritis (Juvenile Rheumatoid Arthritis) Myasthenia Gravis Psoriasis Rheumatoid Arthritis Systemic Lupus Erythematosus (Lupus)";
    var infectionModalContent = "Infection×For Example: Bladder And/Or Urinary Tract Infection Bone Infection (Osteomyelitis) Gangrene (for example black toe) Infection of AV Fistula or AV Graft Infection of Peritoneal Dialysis Catheter (Peritonitis) Joint Infection (Septic Arthritis) Kidney Infection Severe Systemic Infection (Sepsis) Skin and/or Soft Tissue Infection";
    var kidneysModalContent = "Kidneys and/or Bladder×For Example: Bladder Spasms Elevated Uric Acid Level (Hyperuricemia) Kidney Disease or Failure  Kidney Stones  Overactive Bladder (Urinary Urgency Frequency and/or Incontinence)  Polycystic Kidney Disease  Urinary Retention (Difficulty Urinating)";
    var mentalWellModalContent = "Mental Well-Being×For Example: ADHD Depression Eating Disorders Insomnia Panic Attacks Post-Traumatic Stress Disorder (PTSD) Social Anxiety or Phobia";
    var musclesModalContent = "Muscles, Bones, and/or Joints×For Example: Carpal Tunnel Syndrome  Fibromyalgia  Gout  Herniated Disc (Cervical)  Infection Bone and/or Joint  Joint Pain/Arthritis  Low Back Pain  Lyme Disease  Scoliosis  Spinal Stenosis (Cervical)";
    var neuroDefModalContent = "Neurological Deficit (Brain and/or Spine)×For Example: Aneurysm (Brain) Multiple Sclerosis Parkinson's Disease Peripheral Neuropathy Sciatica Seizures Spinal Cord Injury Stroke or TIA";

    cy.visit("/shc-condition-category")    //1. navigate to the specified page
      .contains(medConditionsHeading)    //2. check the title of the current dialog
      .should("be.visible")
      .get(ohsuMedConditions.introStartSurBtn)    //3. click to start the survey
      .should("be.visible")
      .and("contain", "Start Survey")
      .click();

    cy.get(ohsuMedConditions.nextBtn)    //4. validation error message check
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedConditions.validationErrorMsg)
      .first()
      .should("be.visible")
      .and("have.text", "Required");

    cy.contains("Airway and/or Lungs")    //5. check the section description text
      .scrollIntoView();

    cy.get(ohsuMedConditions.yesAirwaysRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noAirwaysRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetAirways)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.airwaysModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", airwayModalContent);

    cy.get(ohsuMedConditions.airwaysModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Blood Disorder (Abnormal Bruising, Bleeding, or Clotting)");    //5. check the section description text
    cy.get(ohsuMedConditions.yesBloodDisRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noBloodDisRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetBloodDis)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.bloodDisModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", bloodDisModalContent);

    cy.get(ohsuMedConditions.bloodDisModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Cancer, Chemotherapy, and/or Radiation Therapy");    //5. check the section description text
    cy.get(ohsuMedConditions.yesCancerRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noCancerRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetCancer)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.cancerModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", cancerModalContent);

    cy.get(ohsuMedConditions.cancerModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Diabetes, Thyroid, Adrenal and/or other Endocrine Disorder");    //5. check the section description text
    cy.get(ohsuMedConditions.yesDiabetesRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noDiabetesRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetDiabetes)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.diabetesModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", diabetesModalContent);

    cy.get(ohsuMedConditions.diabetesModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Digestive Tract and/or Liver Disease");    //5. check the section description text
    cy.get(ohsuMedConditions.yesDigestiveTractRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noDigestiveTractRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetDigestiveTract)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.digestiveTractModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", digestiveTractModalContent);

    cy.get(ohsuMedConditions.digestiveTractModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Heart and/or Circulatory System");    //5. check the section description text
    cy.get(ohsuMedConditions.yesHeartRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noHeartRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetHeart)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.heartModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", heartModalContent);

    cy.get(ohsuMedConditions.heartModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Immune-Mediated Diseases");    //5. check the section description text
    cy.get(ohsuMedConditions.yesImmuneMedRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noImmuneMedRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetImmuneMed)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.immuneMedModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", immuneMedModalContent);

    cy.get(ohsuMedConditions.immuneMedModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Infection");    //5. check the section description text
    cy.get(ohsuMedConditions.yesInfectionRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noInfectionRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetInfection)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.infectionModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", infectionModalContent);

    cy.get(ohsuMedConditions.infectionModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Kidneys and/or Bladder");    //5. check the section description text
    cy.get(ohsuMedConditions.yesKidneysRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noKidneysRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetKidneys)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.kidneysModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", kidneysModalContent);

    cy.get(ohsuMedConditions.kidneysModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Mental Well-Being");    //5. check the section description text
    cy.get(ohsuMedConditions.yesMentalWellRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noMentalWellRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetMentalWell)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.mentalWellModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", mentalWellModalContent);

    cy.get(ohsuMedConditions.mentalWellModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Muscles, Bones, and/or Joints");    //5. check the section description text
    cy.get(ohsuMedConditions.yesMusclesRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noMusclesRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetMuscles)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.musclesModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", musclesModalContent);

    cy.get(ohsuMedConditions.musclesModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.contains("Neurological Deficit (Brain and/or Spine)");    //5. check the section description text
    cy.get(ohsuMedConditions.yesNeuroDefRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "Yes")
      .get(ohsuMedConditions.noNeuroDefRadioBtn)    //6. check the radio button visibility
      .should("be.visible")
      .and("contain", "No")
      .click();    //7. choose the necessary value

    cy.get(ohsuMedConditions.dataTargetNeuroDef)    //8. check the data target reference visibility
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "What does this mean?")    //9. check the data target reference title
      .click()    //10. open the examples modal
      .wait(200)
      .get(ohsuMedConditions.neuroDefModalDialog)    //11. check the modal's content
      .should("be.visible")
      .and("have.text", neuroDefModalContent);

    cy.get(ohsuMedConditions.neuroDefModalDialog)    //12. close the examples modal
      .click("topLeft");

    cy.get(ohsuMedConditions.nextBtn)    //13. navigate to the next page
      .click()
      .wait(200)
      .get(ohsuMedConditions.headerBar)
      .should("be.visible")
      .and("contain", "Do you have any ALLERGIES to medications?");    //14. check the title of the current dialog

  });

  it("Should check the shc-condition-category page elements -  Airway and/or Lungs conditions - Asthma follow-up scenario ", () => {

    /*
    1. navigate to the specified page
    2. click to start the survey
    3. choose the necessary value
    4. navigate to the next page
    5. check the section description text
    6. check the checkbox visibility
    7. validation error message check
    8. choose the necessary value
    9. navigate to the next page
    10. check the title of the current dialog
    11. check the section description text
    12. check the radio button visibility
    13. choose the necessary value
    14. navigate to the next page
    15. check the title of the current dialog
    */

    var airwaysConditionsListHeading = "A condition related to Airway and/or Lungs. Please check all that apply:";
    var asthmaCondText = "Asthma";
    var bronchiectasisCondText = "Bronchiectasis";
    var chronicBronchitisCondText = "COPD (Chronic Bronchitis and/or Emphysema)";
    var fluidAroundLungsCondText = "Fluid around my Lungs (Pleural Effusion)";
    var fluidInLungsCondText = "Fluid in my Lungs (Pulmonary Edema)";
    var ildCondText = "Interstitial Lung Disease (ILD)";
    var pneumoniaCondText = "Pneumonia";
    var pneumothoraxCondText = "Pneumothorax (Collapsed Lung)";
    var pulmonaryFibrosisCondText = "Pulmonary Fibrosis";
    var sleepApneaCondText = "Sleep Apnea";
    var influenzaCondText = "The Flu (Influenza)";
    var tuberculosisCondText = "Tuberculosis (TB)";
    var urtInfectionCondText = "Upper Respiratory Tract Infection (Cold/Flu/Acute Bronchitis)";

    var steroidsQueryHeading = "Have you ever taken steroids to manage your Asthma?";
    var hospitalizedQueryHeading = "Have you been hospitalized because of your Asthma?";
    var intubatedQueryHeading = "Have you ever been intubated (that is, had a breathing tube) because of your Asthma?";

    cy.visit("/shc-condition-category")    //1. navigate to the specified page
      .get(ohsuMedConditions.introStartSurBtn)    //2. click to start the survey
      .click();

    cy.get(ohsuMedConditions.yesAirwaysRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noBloodDisRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noCancerRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noDiabetesRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noDigestiveTractRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noHeartRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noImmuneMedRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noInfectionRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noKidneysRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noMentalWellRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noMusclesRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.noNeuroDefRadioBtn)    //3. choose the necessary value
      .scrollIntoView()
      .click();

    cy.get(ohsuMedConditions.nextBtn)    //4. navigate to the next page
      .click();

    cy.get(ohsuMedConditions.headerBar)    //5. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Specifically, which of the following conditions apply?");

    cy.contains(airwaysConditionsListHeading);    //5. check the section description text
    cy.get(ohsuMedConditions.asthmaCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", asthmaCondText);

    cy.get(ohsuMedConditions.bronchiectasisCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", bronchiectasisCondText);

    cy.get(ohsuMedConditions.chronicBronchitisCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", chronicBronchitisCondText);

    cy.get(ohsuMedConditions.fluidAroundLungsCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", fluidAroundLungsCondText);

    cy.get(ohsuMedConditions.fluidInLungsCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", fluidInLungsCondText);

    cy.get(ohsuMedConditions.ildCheckBox)    //6. check the checkbox visibility
      .should("be.visible")
      .and("have.text", ildCondText);

    cy.get(ohsuMedConditions.pneumoniaCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", pneumoniaCondText);

    cy.get(ohsuMedConditions.pneumothoraxCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", pneumothoraxCondText);

    cy.get(ohsuMedConditions.pulmonaryFibrosisCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", pulmonaryFibrosisCondText);

    cy.get(ohsuMedConditions.sleepApneaCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", sleepApneaCondText);

    cy.get(ohsuMedConditions.influenzaCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", influenzaCondText);

    cy.get(ohsuMedConditions.tuberculosisCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", tuberculosisCondText);

    cy.get(ohsuMedConditions.urtInfectionCheckBox)    //6. check the checkbox visibility
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", urtInfectionCondText);

    cy.get(ohsuMedConditions.nextBtn)    //7. validation error message check
      .should("be.visible")
      .and("have.text", "Next")
      .click()
      .get(ohsuMedConditions.validationErrorMsg)
      .should("be.visible")
      .and("have.text", "Required");

    cy.get(ohsuMedConditions.asthmaCheckBox)    //8. choose the necessary value
      .scrollIntoView()
      .click()
      .get(ohsuMedConditions.nextBtn)    //9. navigate to the next page
      .click()
      .get(ohsuMedConditions.headerBar)    //10. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "With regard to your Asthma?");

    cy.get(ohsuMedConditions.steroidsQuery)    //11. check the section description text
      .should("be.visible")
      .and("contain", steroidsQueryHeading);

    cy.get(ohsuMedConditions.yesSteroidsQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .get(ohsuMedConditions.noSteroidsQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click();    //13. choose the necessary value

    cy.get(ohsuMedConditions.hospitalizedQuery)    //11. check the section description text
      .should("be.visible")
      .and("contain", hospitalizedQueryHeading)
      .get(ohsuMedConditions.yesHospitalizedQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .get(ohsuMedConditions.noHospitalizedQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click();    //13. choose the necessary value

    cy.get(ohsuMedConditions.intubatedQuery)    //11. check the section description text
      .should("be.visible")
      .and("contain", intubatedQueryHeading)
      .get(ohsuMedConditions.yesIntubatedQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "Yes")
      .get(ohsuMedConditions.noIntubatedQuery)    //12. check the radio button visibility
      .should("be.visible")
      .and("have.text", "No")
      .click()    //13. choose the necessary value
      .get(ohsuMedConditions.nextBtn)    //14. navigate to the next page
      .click()
      .get(ohsuMedConditions.headerBar)    //15. check the title of the current dialog
      .should("be.visible")
      .and("have.text", "Do you have any ALLERGIES to medications?");

  });

})