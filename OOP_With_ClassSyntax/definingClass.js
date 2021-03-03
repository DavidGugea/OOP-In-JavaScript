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