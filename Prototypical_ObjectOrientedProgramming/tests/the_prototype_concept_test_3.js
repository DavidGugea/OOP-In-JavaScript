function spaceUp(){
    for(let i = 0 ; i < 3 ; i++){
        console.log(" ");
    }

    console.log("---------------------------------------------------------------------------");

    for(let i = 0 ; i < 3 ; i++){
        console.log(" ");
    }
}

let Animal = {
    name : '',
    color : "Brown",
    age : 0,
    eat : function(food){
        console.log(`I've eaten ${food}`);
    },
    drink: function(drink){
        console.log(`I've drunk ${drink}`);
    }
}

console.dir(Animal);

// Animal doesn't have a prototype so that's why the object itself goes as the __proto__ of the 'dog' object 
/*
This will result into an error since Animal doesn't have a prototype property: 

Animal.prototype.saySomething = function(what_to_say){
    console.log("Hello World");
}
*/

let dog = Object.create(Animal);
console.dir(dog);