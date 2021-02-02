function Animal(name, color, age){
    this.name = name;
    this.color = color;
    this.age = age;
}

Object.defineProperties(
    Animal,
    {
        eat : {
            value : function(food){
                console.log(`I'm eating ${food}`);
            },
            writable : false,
            enumerable : true,
            configurable : false
        },
        drink : {
            value : function(drink){
                console.log(`I'm drinking ${drink}`);
            },
            writable : false,
            enumerable : true,
            configurable : false
        }
    }
);

function Dog(name, color, age, type){
    Animal.call(this, name, color, age); // OR: Animal.apply(this, [name, color, age]);
    this.type = type;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.constructor = Dog;

Object.defineProperty(
    Dog,
    "bark",
    {
        value : function(){
            console.log("Bark");
        },
        writable : false,
        enumerable : true,
        configurable : false
    }
);