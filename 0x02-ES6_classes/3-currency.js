export default class Currency {
  constructor(code, name) {
    // Validate types before assigning
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    if (typeof name !== 'string') throw new TypeError('Name must be a string');

    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(newCode) {
    if (typeof newCode !== 'string') throw new TypeError('Code must be a string');
    this._code = newCode;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw new TypeError('Name must be a string');
    this._name = newName;
  }

  // Method to display the currency in "name (code)" format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
