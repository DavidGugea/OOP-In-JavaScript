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
        console.log(`Eating : ${food}`);
    }
}

vegeterianDog.eat("Käse");