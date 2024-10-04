import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar method to return a Car instance instead of EVCar
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
