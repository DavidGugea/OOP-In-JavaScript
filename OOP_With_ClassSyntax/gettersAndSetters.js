class Animal{
    constructor(name, color, age){
        this._name = name;
        this._color = color;
        this._age = age;
    }
    eat(food){
        console.log(`I'm eating ${food}`);
    }
    drink(drink){
        console.log(`I'm drinking ${drink}`);
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get color(){
        return this._color;
    }
    set color(color){
        this._color = color;
    }

    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
}

let snake = new Animal("Zischi", "Grün", 2);
console.log(snake.name); // Zischi
console.log(snake.color); // Grün
console.log(snake.age); // 2