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

let dog = Object.create(animal);
dog.bark = function(){
    console.log("Bark.");
}

let vegeterianDog = Object.create(dog);
vegeterianDog.eat = function(food){
    if(food.indexOf("Fleisch") >= 0 || food.indexOf("fleisch") >= 0){
        throw new Error("I don't eat meat.");
    }else{
        /*
            You can get the prototype of object x, for example, by simply writing x.__proto__.
            Altough it is better in most cases to use the Object.getPrototypeOf(x).
        */
        // this.__proto__.eat.call(this, food); // it doesn't matter what you pass as the 'this'-argument in this specific call function since the eat method doesn't use 'this' anywhere, you just give it the argument 'food' that actually matters. Instead of 'this' you can write anything.
        // OR : 
        Object.getPrototypeOf(this).eat.call(this, food);
    }
}

vegeterianDog.eat("Käse");