class Vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  }

  displayInfo() {
    console.log(`Wheels: ${this.wheels}, Speed: ${this.speed}`);
  }
}

class Bike extends Vehicle {
  constructor(wheels = 2, speed = 'fast enough') {
    super(wheels, speed);
  }

  static callCount = 0;

  static countCalls() {
    this.callCount++;
    console.log(`Bike.countCalls has been called ${this.callCount} time(s).`);
  }
}

let myBike = new Bike();       
myBike.displayInfo();           

Bike.countCalls();               
Bike.countCalls();               
