class Animal{
    constructor(name, color, age){
        this._name = name;
        this._color = color;
        this._age = age;
    }
    static getAnimalColors(){
        return {
            WHITE : "Weiß",
            BLACK : "Schwarz",
            BROWN : "Braun",
            GREEN : "Grün",
            YELLOW: "Orange",
            ORANGE: "Orange"
        }
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

console.log(Animal.getAnimalColors());
let bird = new Animal("Birdie", Animal.getAnimalColors().BLACK, 5);
console.log(bird.name);
console.log(bird.color);
console.log(bird.age);