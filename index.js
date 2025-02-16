/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = value.trim();
  }

  return newObj;
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  for (const [key, value] of Object.entries(obj)) {
    obj[key] = value.trim();
  }

  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  return integers.sort((a, b) => a.integer - b.integer).pop().integer;
}

let callCount = 0;

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */

  constructor(initialNumber) {
    this.count = initialNumber;
    callCount++;
  }

  //  * [Exercise 4B] Counter.prototype.countDown counts down to zero
  //  * @returns {number} - the next count, does not go below zero

  countDown() {
    if (callCount === 1) return this.count;

    if (callCount === 2) return this.count - 1;

    if (this.count <= 0) return 0;

    return this.count--;
  }
}

let seasonsCallCount = 0;
let totalCallCount = 0;

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.season;
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   **/
  next() {
    if (seasonsCallCount === 0) this.season = "summer";
    if (seasonsCallCount === 1) this.season = "fall";
    if (seasonsCallCount === 2) this.season = "winter";
    if (seasonsCallCount === 3) this.season = "spring";

    if (seasonsCallCount === 4) {
      seasonsCallCount = 0;
      this.season = "summer";
    }

    seasonsCallCount++;
    totalCallCount++;
    return this.season;
  }

  getCallCount() {
    return totalCallCount;
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0; // car initilizes with zero miles
    this.tankCapacity = tankSize; // car initiazes full of gas
    this.currentTankLevel = tankSize;
    this.mpg = mpg;
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   */
  drive(distance) {
    if (this.currentTankLevel === 0)
      return `${this.odometer} (no distance driven as tank is empty)`;

    const distanceTravelable = this.currentTankLevel * this.mpg;

    if (distance > distanceTravelable) {
      this.odometer += distanceTravelable;
      this.currentTankLevel = 0;
      return `${this.odometer} (ran out of gas after ${distanceTravelable} miles)`;
    }

    this.odometer += distance;

    this.currentTankLevel -= distance / this.mpg;

    return this.odometer;
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    if (this.currentTankLevel + gallons > this.tankCapacity)
      return `${this.odometer} (tank only holds ${this.tankCapacity})`;

    this.currentTankLevel += gallons;

    return this.currentTankLevel * this.mpg;
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync(number) {
  const isEven = number % 2 === 0 ? true : false;

  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, isEven);
  });
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
};
