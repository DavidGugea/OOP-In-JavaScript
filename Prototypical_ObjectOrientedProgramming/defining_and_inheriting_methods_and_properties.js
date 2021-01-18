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
cat.meow = function(){
    console.log("Meow.");
}

/* Using the methods & properties that have been inherited from Animal */
cat.eat("Katzenfutter");
cat.drink("Milch");
console.log(cat.color);

/* Using a defined method that can only be used by the object cat and other child objects made from 'cat' that have 'cat' as __proto__ */
cat.meow();

let dog = Object.create(animal);
dog.bark = function(){
    console.log("Bark.");
}

/* Using the methods & properties that have been inherited from Animal */
dog.eat("Fleisch");
dog.drink("Wasser");
console.log(dog.color);

/* Using a defined method that can only be used by the object dog and other child objects made from 'dog' that have 'dog' as __proto__ */
dog.bark();