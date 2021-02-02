function spaceUp(){
	for(let i = 0 ; i < 3 ; i++){
		console.log(" ");
	}

	console.log("------------------------");

	for(let i = 0 ; i < 3 ; i++){
		console.log(" ");
	}
}
function Animal(name, color, age){
	this.name = name;
	this.color = color;
	this.age = age;
}

let cat = new Animal("asdf", "brown", 1);

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

function Dog(name, color, age, type){
	Animal.call(this, name, color, age);
	this.type = type;
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

console.dir(Animal);
console.dir(Dog);

/*
console.log("cat object dir : ");
console.dir(cat);
spaceUp();

console.log("Animal object dir : ");
console.dir(Animal);
spaceUp();

console.log("Dog object dir : ");
console.dir(Dog);
spaceUp();
*/