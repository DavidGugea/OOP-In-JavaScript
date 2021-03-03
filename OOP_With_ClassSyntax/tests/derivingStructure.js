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

class Dog extends Animal{
    constructor(name, color, age, type){
        super(name, color, age);
        this._type = type;
    }

    get type(){
        return this._type;
    }
    set type(type){
        this._type = type;
    }

    bark(){
        console.log("Bark.");
    }
}

console.dir(Animal);
console.dir(Dog);

console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); // true