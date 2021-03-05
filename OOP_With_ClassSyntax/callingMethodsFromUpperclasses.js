class Food{
    constructor(description){
        this._description = description;
    }

    get description(){
        return this._description;
    }
    set description(description){
        this._description = description;
    }

    toString(){
        return this._description;
    }
}

class Meat extends Food{
    constructor(description){
        super(description);
    }
}
class Bread extends Food{
    constructor(description){
        super(description);
    }
}

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


class VegeterianDog extends Dog{
    constructor(name, color, age, type){
        super(name, color, age, type);
    }
    eat(food){
        if(food instanceof Meat){
            console.log("I don't eat meat.");
        }else{
            super.eat(food);
        }
    }
}

let dog = new VegeterianDog("Bello", "Weiß", 2, "Malteser");
dog.eat(new Bread("Weizenbrot"));
dog.eat(new Meat("Steak"));