module.exports = {
  introStartSurBtn: 'button[aria-describedby="dialog_prolog"]',
  nextBtn: 'button[aria-describedby="dialog_prolog entry_prolog"]',
  headerBar: 'div[id="dialog_prolog"]',

  dialogText: 'p[class="dialog_prolog__node"]',
  yourFirstNameField: 'input[id="txtFirstName"]',
  yourLastNameField: 'input[id="txtLastName"]',
  monthField: 'input[id="monthInput"]',
  dayField: 'input[id="dayInput"]',
  yearField: 'input[id="yearInput"]',
  maleRadioBtn: 'label[for="sexMale"]',
  yourHeightFeetFiled: 'input[id="heightFt"]',
  yourHeightInchesFiled: 'input[id="heightInches"]',
  yourWeightFiled: 'input[id="weight"]',
  primaryPhoneFiled: 'input[id="phone-number"]',
  yourPhoneNumberTypeSelect: 'select[id="selectID"]',
  yourEmailAddressFiled: 'input[id="txtEmail"]',
  iKnowRecipientRadioBtn: 'label[for="donortype.namedrecip"]',
  recipientFirstNameInput: 'input[id="txtRecipientName"]',
  recipientLastNameInput: 'input[id="txtRecipientLastName"]',
  immediateRadioBtn: 'label[for="donor.relationship.type.immediatefamily"]',
  fullSiblingRadioBtn: 'label[for="donor.relationship.fullsibling"]',

  transplantCandidateRadioBtn: 'label[for="item.referral.query.0.0.0"]',

  arabianCheckBox: 'label[for="patsubj.race.arabian"]',
  hispanicNoRadioBtn: 'label[for="ethnicity.no"]',
  languageSelector: 'select[name="entry_patsubj_primary_language"]',
  yesTranslatorRadioBtn: 'label[for="patsubj.needs.translator.yes"]',

  noBloodRadioBtn: 'label[for="screening.htn.0.item.no"]',
  noDiabetesRadioBtn: 'label[for="screening.diabetesrx.item.no"]',
  noKidneyStonesRadioBtn: 'label[for="screening.kidneystones.item.no"]',
  noTobaccoRadioBtn: 'label[for="screening.tobacco.item.no"]',
  noIlDrugsRadioBtn: 'label[for="screening.ildrs.item.no"]',

  continueToCheck: 'label[for="item.instructions.04.4"]',

  enterMedicationsRadioBtn: 'label[for="item.instructions.04.1"]',
  medsInputField: 'input[class="react-autosuggest__input"]',
  suggestedItem: 'li[id="react-autowhatever-autocomplete_input--item-1"]',

  yesAirwaysCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.70.temp"]',
  noBloodDisCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.77.temp:No"]',
  noCancerCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.78.temp:No"]',
  noDiabetesCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.74.temp:No"]',
  noDigestiveTractCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.72.temp:No"]',
  noHeartCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.71.temp:No"]',
  noImmuneMedCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.96.temp:No"]',
  noInfectionCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.99.temp:No"]',
  noKidneysCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.73.temp:No"]',
  noMensHealthCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.98.temp:No"]',
  noMentalWellCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.79.temp:No"]',
  noMusclesCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.75.temp:No"]',
  noNeuroDefCondRadioBtn: 'label[for="cdss.category.kidney.waitlist.default.76.temp:No"]',
  asthmaCheckBox: 'label[for="condition.467.temp.kidney.waitlist.default.70"]',
  noSteroidsQuery: 'label[for="item.asthma.query.0.0.no"]',
  noHospitalizedQuery: 'label[for="item.asthma.query.0.1.no"]',
  noIntubatedQuery: 'label[for="item.asthma.query.0.2.no"]',

  yesMedAllergies: 'label[for="choice-meds-allergies-yes"]',
  medsInputField: 'input[id="autocomplete_input"]',
  firstSuggestedItem: 'li[id="react-autowhatever-autocomplete_input--item-1"]',
  anxietyReactionCheckBox: 'label[for="choice.anxiety.3776"]',

  betadineMaterialAllergyCheckBox: 'label[for="allergy_matl_13"]',
  breathIssuesReactionCheckBox: 'label[for="material.allergy.choice.respiratory.13"]',

  yesDoYouSmokeRadioBtn: 'label[for="doyousmoke.query.0.entry.0.item.yes"]',
  yearsSmokingSelector: 'select[name="doyousmoke_query_1_entry_2"]',
  packsSmokingSelector: 'select[name="doyousmoke_query_0_entry_0_item_yes_entry_1"]',

  neverRadioBtn: 'label[for="query.alcohol.entry.1.item.0"]',
  yesAbuseRadioBtn: 'label[for="alcohol.query.0.entry.0.item.yes"]',

  yesDrugsRadioBtn: 'label[for="illicitdrugs.query.0.entry.0.item.yes"]',
  marijuanaDrugsCheckBox: 'label[for="query.illicitdrugs.entry.1.item.0"]',
  cocaineDrugsCheckBox: 'label[for="query.illicitdrugs.entry.1.item.1"]',

  strenuousActivityRadioBtn: 'label[for="query.activity.entry.1.item.0"]',
  moreThreeFrequencyRadioBtn: 'label[for="activity.query.1.0.entry.1.item.4"]',
  noPainRestRadioBtn: 'label[for="PainatRestNo"]',
  noPainActivityRadioBtn: 'label[for="PainwAcitivtyNo"]',
  yesStressTestRadioBtn: 'label[for="StressTestYes"]',
  yesCatheterizationRadioBtn: 'label[for="CardiCathYes"]',
  stressTestsQtySelect: 'select[name="Stress_Test_0"]',
  stressTestsDateInput: 'input[id="STdate_choice"]',
  yesNormalTest: 'label[for="RcntSTNormal"]',
  catheterizationQtySelect: 'select[name="Cardiac_Cath_0"]',
  catheterizationDateInput: 'input[id="CardiCathdate"]',
  angioplastyStentCathRadioBtn: 'label[for="BA_withstent"]',

  yesSurgeryRadioBtn: 'label[for="SurgeryYes"]',
  chestFrontRegion: 'path[name="Chest"]',
  breastChestCheckBox: 'label[for="choice.bodypart.id.entry.bodyparts.front.3.22"]',
  augumentationBrestSurgery: 'label[for="choice.surgery.id.143"]',







}