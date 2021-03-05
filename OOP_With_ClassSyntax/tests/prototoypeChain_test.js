class Animal{
    constructor(name, color, age){
        this.name = name;
        this.color = color;
        this.age = age;
    }

    eat(food){
        console.log(`I'm eating ${food}`);
    }
    drink(drink){
        console.log(`I'm drinking ${drink}`);
    }
}

class Dog extends Animal{
    constructor(name, color, age, type){
        super(name, color, age);
        this.type = type;
    }

    bark(){
        console.log("Bark.");
    }
}

// console.dir(Animal);
// console.dir(Dog);

let x = new Dog("Max", "black", 2, "GR");
console.dir(x);