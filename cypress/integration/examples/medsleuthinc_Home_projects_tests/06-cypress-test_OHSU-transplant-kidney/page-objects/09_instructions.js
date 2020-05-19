module.exports = {
  introStartSurBtn: 'button[aria-describedby="dialog_prolog"]',
  nextBtn: 'button[id="next-button"]',
  validationErrorMsg: 'span[class="grommetux-form-field__error"]',
  headerBar: 'div[class="dialog_title"]',

  enterMedicationsRadioBtn: 'label[for="item.instructions.04.1"]',
  doNotTakeMedsRadioBtn: 'label[for="item.instructions.04.2"]',

  medsInputField: 'input[class="react-autosuggest__input"]',
  medsListWrapper: 'ul[class="react-autosuggest__suggestions-list"]',
  suggestedItem: 'li[id="react-autowhatever-autocomplete_input--item-1"]',

  medsDropdownExpandBtn: 'svg[aria-label="caret-next"]',
  medsDropdownCloseBtn: 'svg[aria-label="close"]',
  medsInfoBar: 'div[class="accordionDrawer"]',
  dosageSelector: 'select[name="medications[0].dose"]',
  frequencySelector: 'select[name="medications[0].frequency"]',
  dosageOtherInput: 'input[name="medications[0].doseOther"]',
  frequencyOtherInput: 'input[name="medications[0].freqOther"]',

  makeChangeBtn: 'a[class="btn-secondary btn-block makeChangesBtn mt-4 priCol-border btnFontSize"]',
  proctitisCheckBox: 'label[for="condition.1516.temp.318"]',
  colitisCheckBox: 'label[for="condition.248.temp.318"]',
  otherCheckBox: 'label[for="other.condition.318"]',
  otherInputField: 'div[class="text_field test"]',
  idkCheckBox: 'label[for="idontknow.condition.318"]'
}