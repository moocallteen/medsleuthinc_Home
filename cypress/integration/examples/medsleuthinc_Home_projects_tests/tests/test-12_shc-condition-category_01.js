import medConditionsSurvey from "../page objects/12_shc-condition-category_01";

describe("transplan kidney donor page test", () => {
    before(() => {
        Cypress.config(
          "baseUrl",
          "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
        );
        cy.viewport(1280, 800);
    });

    it("Should check the shc-condition-category page elements - No follow-ups scenario ", () => {
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
        cy.visit("/shc-condition-category")
          .contains("Do you have or have you had any of the following medical conditions?")
          .get(medConditionsSurvey.introStartSurBtn)
          .should("be.visible")
          .and("contain", "Start Survey")
          .click();

        cy.get(medConditionsSurvey.nextBtn)
          .scrollIntoView()
          .should("be.visible")
          .and("have.text", "Next")
          .click()
          .get(medConditionsSurvey.validationErrorMsg)
          .should("be.visible")
          .and("contain", "Required");

        cy.contains("Airway and/or Lungs")
          .scrollIntoView();
        cy.get(medConditionsSurvey.yesAirwaysRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noAirwaysRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetAirways)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.airwaysModalDialog)
          .should("be.visible")
          .and("have.text", airwayModalContent);
        cy.get(medConditionsSurvey.airwaysModalDialog)
          .click("topLeft");

        cy.contains("Blood Disorder (Abnormal Bruising, Bleeding, or Clotting)");
        cy.get(medConditionsSurvey.yesBloodDisRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noBloodDisRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetBloodDis)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.bloodDisModalDialog)
          .should("be.visible")
          .and("have.text", bloodDisModalContent);
        cy.get(medConditionsSurvey.bloodDisModalDialog)
          .click("topLeft");
 
        cy.contains("Cancer, Chemotherapy, and/or Radiation Therapy");
        cy.get(medConditionsSurvey.yesCancerRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noCancerRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetCancer)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.cancerModalDialog)
          .should("be.visible")
          .and("have.text", cancerModalContent);
        cy.get(medConditionsSurvey.cancerModalDialog)
          .click("topLeft");

        cy.contains("Diabetes, Thyroid, Adrenal and/or other Endocrine Disorder");
        cy.get(medConditionsSurvey.yesDiabetesRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noDiabetesRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetDiabetes)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.diabetesModalDialog)
          .should("be.visible")
          .and("have.text", diabetesModalContent);
        cy.get(medConditionsSurvey.diabetesModalDialog)
          .click("topLeft");

        cy.contains("Digestive Tract and/or Liver Disease");
        cy.get(medConditionsSurvey.yesDigestiveTractRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noDigestiveTractRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetDigestiveTract)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.digestiveTractModalDialog)
          .should("be.visible")
          .and("have.text", digestiveTractModalContent);
        cy.get(medConditionsSurvey.digestiveTractModalDialog)
          .click("topLeft");

        cy.contains("Heart and/or Circulatory System");
        cy.get(medConditionsSurvey.yesHeartRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noHeartRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetHeart)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.heartModalDialog)
          .should("be.visible")
          .and("have.text", heartModalContent);
        cy.get(medConditionsSurvey.heartModalDialog)
          .click("topLeft");

        cy.contains("Immune-Mediated Diseases");
        cy.get(medConditionsSurvey.yesImmuneMedRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noImmuneMedRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetImmuneMed)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.immuneMedModalDialog)
          .should("be.visible")
          .and("have.text", immuneMedModalContent);
        cy.get(medConditionsSurvey.immuneMedModalDialog)
          .click("topLeft");

        cy.contains("Infection");
        cy.get(medConditionsSurvey.yesInfectionRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noInfectionRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetInfection)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.infectionModalDialog)
          .should("be.visible")
          .and("have.text", infectionModalContent);
        cy.get(medConditionsSurvey.infectionModalDialog)
          .click("topLeft");

        cy.contains("Kidneys and/or Bladder");
        cy.get(medConditionsSurvey.yesKidneysRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noKidneysRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetKidneys)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.kidneysModalDialog)
          .should("be.visible")
          .and("have.text", kidneysModalContent);
        cy.get(medConditionsSurvey.kidneysModalDialog)
          .click("topLeft");

        cy.contains("Mental Well-Being");
        cy.get(medConditionsSurvey.yesMentalWellRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noMentalWellRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetMentalWell)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.mentalWellModalDialog)
          .should("be.visible")
          .and("have.text", mentalWellModalContent);
        cy.get(medConditionsSurvey.mentalWellModalDialog)
          .click("topLeft");

        cy.contains("Muscles, Bones, and/or Joints");
        cy.get(medConditionsSurvey.yesMusclesRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noMusclesRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetMuscles)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.musclesModalDialog)
          .should("be.visible")
          .and("have.text", musclesModalContent);
        cy.get(medConditionsSurvey.musclesModalDialog)
          .click("topLeft");

        cy.contains("Neurological Deficit (Brain and/or Spine)");
        cy.get(medConditionsSurvey.yesNeuroDefRadioBtn)
          .should("be.visible")
          .and("contain", "Yes")
          .get(medConditionsSurvey.noNeuroDefRadioBtn)
          .should("be.visible")
          .and("contain", "No")
          .click();
        cy.get(medConditionsSurvey.dataTargetNeuroDef)
          .scrollIntoView()
          .should("be.visible")
          .and("contain", "What does this mean?")
          .click()
          .wait(200)
          .get(medConditionsSurvey.neuroDefModalDialog)
          .should("be.visible")
          .and("have.text", neuroDefModalContent);
        cy.get(medConditionsSurvey.neuroDefModalDialog)
          .click("topLeft");

        cy.get(medConditionsSurvey.nextBtn)
          .click()
          .wait(200)
          .get(medConditionsSurvey.headerBar)
          .should("be.visible")
          .and("contain", "Do you have any ALLERGIES to medications?")

    });

    it.only("Should check the shc-condition-category page elements - Follow-up scenario ", () => {
        cy.visit("/shc-condition-category")
          .contains("Do you have or have you had any of the following medical conditions?")
          .get(medConditionsSurvey.introStartSurBtn)
          .click();
    
        cy.get(medConditionsSurvey.yesAirwaysRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noBloodDisRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noCancerRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noDiabetesRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noDigestiveTractRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noHeartRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noImmuneMedRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noInfectionRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noKidneysRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noMentalWellRadioBtn)
          .scrollIntoView()
          .click();
    
        cy.get(medConditionsSurvey.noMusclesRadioBtn)
          .scrollIntoView()
          .click();

        cy.get(medConditionsSurvey.noNeuroDefRadioBtn)
          .scrollIntoView()
          .click();

        cy.get(medConditionsSurvey.nextBtn)
          .click();

    });


})