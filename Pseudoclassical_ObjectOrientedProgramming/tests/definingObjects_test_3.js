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

    // this.test_property = "This is a test property of the constructor function Animal";
}

/*
Object.defineProperty(Animal.prototype, 'test_property' ,
	{
		value : "This is a test property of the constructor function Animal",
		writable : false,
		enumerable : true,
		configurable : false
	}
);
*/

// Animal.prototype.test_property = "This is a test property of the constructor function Animal";

let Dog = new Animal("Max", "brown", 1);

console.log("Object: ");
console.dir(Object);
spaceUp();
console.log("Animal: ");
console.dir(Animal);
spaceUp();
console.log("Dog: ");
console.dir(Dog);
spaceUp();

console.log(Object.getPrototypeOf(Animal) === Object.getPrototypeOf(Object));
console.log(Object.getPrototypeOf(Dog) === Animal.prototype);