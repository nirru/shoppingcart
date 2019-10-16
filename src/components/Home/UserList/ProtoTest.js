function Calculator() {

}

Calculator.prototype.addMe = function (a,b) {
  console.log(this);
  return  a + b;
};

Calculator.prototype.subtract = function (a,b) {
  return  a - b;
};

var calculator = new Calculator();
// console.log(calculator.addMe(20,10));
// console.log(calculator.subtract(20,10));

var scienceCalci = Object.create(Calculator.prototype);

scienceCalci.__proto__.multiply = function(a,b){
  return a * b;
};
console.log(scienceCalci.addMe(60,10));
console.log(scienceCalci.multiply(3,4));

var cal3 = new Calculator();
console.log(cal3.multiply(6,5));

const proxy = new Proxy({}, {
  set: (obj, prop, value) => {
    // Don't allow age > 100
    if (prop === 'age' && value > 100) {
      // Set to max age
      value = 100;
      alert('hee');
    }
    obj[prop] = value;
  }
});

// proxy.age = 200;
proxy.age; // 100