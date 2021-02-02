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

function Dog(name, color, age, type){
    Animal.call(this, name, color, age);
    this.type = type;
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

console.dir(Animal);
console.dir(Dog);

console.log("----------------------------------------------------");

let test = new Animal("testName", "testColor", 1);
console.dir(test);
let Max = new Dog("Max", "brown", 1, "GR");
console.dir(Max);

console.log(Object.getPrototypeOf(Max) === Dog.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Max)) === Animal.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Max))) === Object.getPrototypeOf(Object.getPrototypeOf(Object)));