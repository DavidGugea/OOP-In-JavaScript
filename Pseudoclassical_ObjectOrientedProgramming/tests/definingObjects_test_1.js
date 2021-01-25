'use strict'
function Animal(name, color, age){
	this.name = name;
	this.color = color;
    this.age = age;
    
    this.eat = function(food){
        console.log(`I'm eating ${food}.`);
    }

    this.drink = function(drink){
        console.log(`I'm drinking ${drink}.`);
    }
}

/*
Animal.prototype.eat = function(food){
    console.log(`I'm eating ${food}.`);
}

Animal.prototype.drink = function(drink){
    console.log(`I'm drinking ${drink}.`);
}
*/

/*
Object.defineProperties(Animal.prototype, {
    eat : {
        value : function(food){
            console.log(`I'm eating ${food}.`);
        },
        writable: false,
        enumerable: true,
        configurable: false
    }, 
    drink : {
        value : function(drink){
            console.log(`I'm drinking ${drink}.`);
        },
        writable: false,
        enumerable: true,
        configurable: false
    }
});
*/

function spaceUp(){
    for(let i = 0 ; i < 3 ; i++){
        console.log(" ");
    }

    console.log("----------------------------------------------------------------------------------------------------");

    for(let i = 0 ; i < 3 ; i++){
        console.log(" ");
    }
}

let dog = new Animal("Max", "Brown", 2);
let cat = new Animal("Charlie", "White", 1);


console.log("Animal: ");
console.dir(Animal);
spaceUp();
console.log("Dog: ");
console.dir(dog);
spaceUp();
console.log("Cat: ");
console.dir(cat);
spaceUp();
console.log(Object.getPrototypeOf(dog) === Animal.prototype);
console.log(Object.getPrototypeOf(cat) === Animal.prototype);