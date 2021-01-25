function spaceUp(){
	for(let i = 0 ; i < 3 ; i++){
		console.log(" ");
	}

	console.log("-----------------------------------------------------------------------------------------------");

	for(let i = 0 ; i < 3 ; i++){
		console.log(" ");
	}
}
function Animal(name, color, age){
	this.name = name;
	this.color = color;
    this.age = age;

    this.eat = function(food){
    	console.log(`I'm eating ${food}`);
    }

    this.drink = function(drink){
    	console.log(`I'm drinking ${drink}`);
    }
}

/*
Object.defineProperties(Animal.prototype, {
	eat : {
		value : function(food){
			console.log(`I'm eating ${food}`);
		},
		writable : false,
		enumerable : true,
		configurable : false
	},
	drink : {
		value : function(drink){
			console.log(`I'm drinking ${drink}`);
		},
		writable : false,
		enumerable : true,
		configurable : false
	}
});
*/

/*
Animal.prototype.eat = function(food){
	console.log(`I'm eating ${food}`);
}

Animal.prototype.drink = function(drink){
	console.log(`I'm drinking ${drink}`);
}
*/

let Dog = new Animal("Max", "brown", 2);
let Cat = new Animal("Charlie", "White", 1);

console.log("Object: ");
console.dir(Object);
spaceUp();
console.log("Animal: ");
console.dir(Animal);
spaceUp();
console.log("Dog: ");
console.dir(Dog);
spaceUp();
console.log("Cat: ");
console.dir(Cat);
spaceUp();

console.log(Object.getPrototypeOf(Animal) === Object.getPrototypeOf(Object)); // true
console.log(Object.getPrototypeOf(Dog) === Animal.prototype); // true

spaceUp();