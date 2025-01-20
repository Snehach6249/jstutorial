
const car = {
  brand: "BYD",
  model: "Dolphin",


  getDetails() {
      return `This car is a ${this.brand} ${this.model}`;
  }
};


console.log(car.getDetails()); 
