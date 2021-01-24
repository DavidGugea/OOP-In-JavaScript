// This is a function that can be used as a constructor-function.
function Animal(name, color, age){
	this.name = name;
	this.color = color;
	this.age = age;
}

// We have used animal here as a constructor function
let fish = new Animal("Fischi", "Grün", 2);
console.log(fish.name);  // Output : "Fischi"
console.log(fish.color); // Output : "Grün"
console.log(fish.age);   // Output : 2