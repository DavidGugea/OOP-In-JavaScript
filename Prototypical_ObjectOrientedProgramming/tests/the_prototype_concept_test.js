let animal = {
    name : "",
    color : "brown",
    age: 0,
    eat: function(food){
        console.log(`Eat : ${food}`);
    },
    drink: function(drink){
        console.log(`Drink : ${drink}`);
    }
}

let cat = Object.create(animal);
let dog = Object.create(animal);

console.log(dog.__proto__ === animal);
console.log(dog.__proto__);
console.log(animal);
console.log(animal.prototype);