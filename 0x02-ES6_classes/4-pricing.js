import Currency from './3-currency.*s';

export default class Pricing {
  constructor(amount, currency) {
    // Validate types before assigning
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) throw new TypeError('Currency must be an instance of Currency');

    this._amount = amount;
    this._currency = currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(newAmount) {
    if (typeof newAmount !== 'number') throw new TypeError('Amount must be a number');
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) throw new TypeError('Currency must be an instance of Currency');
    this._currency = newCurrency;
  }

  // Method to display the full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert the price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
