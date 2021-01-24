function Animal(name, color, age){
	this.name = name;
	this.color = color;
    this.age = age;
    
    this.eat = function(food){
        console.log(`I'm eating ${food}`);
    }
}

/*
In this case, the prototype of Animal, is the prototype of the returned object Object in the console.

console.dir(Animal);
console.log(Object.getPrototypeOf(Animal) === Object.getPrototypeOf(Object)); // true
*/

let fish = new Animal("Fischi", "Grün", 2);

console.log("Object: ");
console.dir(Object);
console.log("Animal: ");
console.dir(Animal);
console.log("fish: ");
console.dir(fish);

console.log("------------------------------------------------------------------------------------------------------------------------");

console.log(Object.getPrototypeOf(fish) === Animal.prototype);
console.log(fish.eat.prototype === Animal.prototype);