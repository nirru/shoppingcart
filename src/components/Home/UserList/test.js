'use strict';

function Animal(voice) {
  this.voice = voice || 'grunt';
}
Animal.prototype.speak = function () {
  console.log(this.voice);
};
function Cat(name, color) {
  Animal.call(this,'Meow');
  this.name = name;
  this.color = color;
}
Cat.prototype = Object.create(Animal.prototype);//Object.create is not going to call the Animal function
//it just simply call the animal prototype that has the big advantage over new Animal()

var fluffy = new Cat('Fluffy','White');
fluffy.speak();





