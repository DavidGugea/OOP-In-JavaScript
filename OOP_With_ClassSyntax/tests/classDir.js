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
    toString(){
        return `${this.name} ${this.color} ${this.age}`;
    }
}

console.dir(Animal);

/*
The methods are all put automatically in Animal.prototype
Animal.prototype.__proto__ is Object.getPrototypeOf(Object.getPrototypeOf(Object)) 
&&
Animal.__proto__ is Object.getPrototypeOf(Object)
*/

console.log(Object.getPrototypeOf(Animal.prototype) === Object.getPrototypeOf(Object.getPrototypeOf(Object))); // true
console.log(Object.getPrototypeOf(Animal) === Object.getPrototypeOf(Object)); // true