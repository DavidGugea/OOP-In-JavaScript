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

let dog = Object.create(animal);
let cat = Object.create(animal);

console.log(dog.name);
console.log(dog.color);
console.log(dog.age);
dog.eat("dog food");
dog.drink("water");

console.log("------------------------------------------");

dog.saySomething = function(something_to_say){
    console.log(something_to_say);
}

dog.saySomething("asdf");
// cat.saySomething("asdfasdf"); -> This will return an error since the method 'saySomething' has only been defined for the class dog and can only be used for dog or other classes that will inherit from dog.