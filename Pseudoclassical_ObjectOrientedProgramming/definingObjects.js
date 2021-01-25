function Animal(name, color, age){
	this.name = name;
	this.color = color;
	this.age = age;
}

Animal.prototype.eat = function(food){
    console.log(`I'm eating ${food}`);
}

Animal.prototype.drink = function(drink){
    console.log(`I'm drinking ${drink}`);
}

// We have used animal here as a constructor function
let fish = new Animal("Fischi", "Grün", 2);

fish.eat("Algen");
fish.drink("Water");