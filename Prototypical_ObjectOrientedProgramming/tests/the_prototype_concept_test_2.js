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

let dog = Object.create(Animal);

console.log(dog.__proto__);
console.log(Animal);
console.log(dog.__proto__ == Animal);
console.log(Animal.prototype);

for(let i = 0 ; i < 3 ; i++){console.log(" ");}

dog.eat("asdf");
Object.defineProperty(dog, 'saySomething', {
    value : function(what_to_say){
        console.log(what_to_say);
    },
    configurable: false
});

dog.saySomething("asiodfjasodfj");