// Step 1
function Animal(name, color, age){
	this.name = name;
	this.color = color;
	this.age = age;
}

// Step 2
Animal.prototype.eat = function(food){
	console.log(`I'm eating ${food}`);
}

Animal.prototype.drink = function(drink){
	console.log(`I'm drinking ${drink}`);
}

// Step 3
function Dog(name, color, age, type){
	Animal.call(this, name, color, age);
	this.type = type;
}

// Step 4
Dog.prototype = new Animal();

// Step 5
Dog.prototype.constructor = Dog;

// Step 6
Dog.prototype.bark = function(){
	console.log("Bark");
}

let bello = new Dog("Bello", "Weiß", 2, "Malteser");
bello.bark();