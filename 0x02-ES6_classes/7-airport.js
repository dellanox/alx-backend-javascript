export default class Airport {
  constructor(name, code) {
    // Store attributes as private variables
    this._name = name;
    this._code = code;
  }

  // Override toString method to return the airport code
  toString() {
    return this._code;
  }
}
