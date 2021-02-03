function Animal(name, color, age){
    this.name = name;
    this.color = color;
    this.age = age;
}

Object.defineProperties(
    Animal.prototype,
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
    Animal.apply(this, [name, color, age]);
    this.type = type;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Object.defineProperty(
    Dog.prototype,
    "bark",
    {
        value : function(){
            console.log("Bark.");
        },
        writable : false,
        enumerable : true,
        configurable : false
    }
);

function VegeterianDog(name, color, age, type){
    Dog.apply(this, [name, color, age, type]);
}

VegeterianDog.prototype = Object.create(Dog.prototype);
VegeterianDog.prototype.constructor = VegeterianDog;

/*
Object.defineProperty(
    VegeterianDog,
    "eat",
    {
        value : function(food){
            if(food.indexOf("Meat") >= 0 || food.indexOf("meat") >= 0){
                throw new Error("I'm not eating meat.");
            }else{
                console.log(`I'm eating ${food}`);
            }
        }
    }
);


OR we can just call the function from the upper 'class', from the upper constructor function: 
*/

Object.defineProperty(
    VegeterianDog.prototype,
    "eat",
    {
        value : function(food){
            if(food.indexOf("Meat") >= 0 || food.indexOf("meat") >= 0){
                throw new Error("I'm not eating meat.");
            }else{
                // Dog.prototype.eat.call(this, food); OR:
                Dog.prototype.eat.apply(this, [food]);
            }
        }
    }
);

let bella = new VegeterianDog("Bella", "white", 2, "Malteser");
bella.eat("bread");