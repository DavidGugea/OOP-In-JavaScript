let animal = {
    name : '',
    color: "brown",
    age : 0,
    eat: function(food){
        console.log("Mmpf mmpf, " + food + "!");
    },
    drink: function(drink){
        console.log("Mmpf mmpf, " + drink + "!");
    }
}

let cat = Object.create(animal);
let dog = Object.create(animal);

function spaceUp(){
    for(let i = 0 ; i < 3 ; i++){
        console.log(" ");
    }
    
    console.log("<>");

    for(let i = 0 ; i < 3 ; i++){
        console.log(" ");
    }
}

console.log("dog");
console.dir(dog);
console.log("dog prototype");
console.log(dog.prototype); // undefined
console.log("Prototype of dog");
console.log(Object.getPrototypeOf(dog)); // The object "animal"
console.log(dog.__proto__);
spaceUp();
console.log("animal");
console.dir(animal);
console.log("animal prototype");
console.log(animal.prototype); // undefined
console.log("Prototype of animal");
console.log(Object.getPrototypeOf(animal));
console.log(animal.__proto__);

spaceUp();

console.log(animal.isPrototypeOf(dog)); // true

/* 
Beim Erstellen eines Objekts über die Objekt-Literal Schreibweise kann kein Prototyp angegeben werden.
*/