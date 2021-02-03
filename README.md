# Object Oriented Programming in JavaScript ( Chapter 13 )
---

## Introduction

Before getting into the details of OOP in JavaScript let's talk about the 4 big concepts of OOP ( AEIP ) :

* ***Abstraction*** [ Abstract behaviour is summarized in different classes and prototypes ]
* ***Encapsulation*** [ Hiding properties and/or methods from the outside using special keywords and setters&getters ]
* ***Inheritance*** [ The child classes that inherit from other parent classes are can use all the methods & properties that are presented in the parent classes ( with exception of some keywords e.g private in C# ) ]
* ***Polymorphism*** [ Objects can be used as other types that they inherit from in different contexts ]  

Before getting into each of those terms we should understand what a class actually represents. 
A class is basically the structure for objects, there is no information in there other than how the methods work and how the properties look like ( in German : 'Bauplan' ). We can have for example the class "Animal" that has the structure of what properties an Animal has ( e.g. a name, age etc. ) and what the Animal is capable of doing ( e.g. eat, drink, etc. ). So this is a class but an object is made from a specific class. Let's say that you've made the class Animal and now you want to have the object Dog, that has specific properties & methods attributed to your dog, with a specific name, age and so on. I will give an example in code using Python since it's easier to see it.

```python
class Animal():
    def __init__(name, age):
        this.name = name
        this.age = age
    def eat(food):
        print(format("I'm eating {0}".format(food)))
    def drink(drink):
        print(format("I'm drinking {0}".format(drink)))
# Now this is the class, it's the structure of what the properties of our Animals look like and what the Animals are capable of doing.

my_dog_max = Animal("Max", 2)
my_dog_max.eat("dog food")
my_dog_max.drink("water")

# Now I have created a dog that has specific properties, like a specific name , 'Max' and a speicific age, 2 years old.
# Animal is the class, my_dog_max is an instance of that class, is an object of that specific type 

```

JavaScript is an object based programming languages. There are no real classes. Instances of objects are made out of other objects and not out of classes like in other programming languagues like for example Java or C# or Python. If object 1 is made out of object 2, we call object 2 the prototype of object 1. Because of this principle of 'prototypes' we say that JavaScript is a prototypical programming language or an object-based programming language. We'll get into the details of prototypes later on.

Now we can better understand the big 4 concepts of object oriented programming :

#### ***1. Abstraction***
As I've previously exaplained, **through abstraction we mean that classes & prototypes represent the structure while objects are more specific entities that are instances of this classes. Objects have speicific data filled in the properties that are structured in the class, while the class itself only shows the type of the properties and how they should look like and how they have to function**.

An example of this would be that we've previously made the class "Animal" that had the properties name & age. So the class animal is an abstract structure, nothing that we can actually use. Succeeding we have created the object my_dog_max that is made out of the class Animal, that is an instance of the class Animal. The object my_dog_max has filled in the 'name' & 'age' properties, so it's something more specific, it's not an abstract structure like the class Animal anymore.
Here is a drawing that summarises abstraction

![Abstraction Definition Image](ScreenshotsForNotes/AbstractionDefinition_SS.PNG)

#### ***2. Encapsulation***
**Through the notion of encapsulation or also called, information hiding is meant that we want to protect certain properties and/or methods from being used outside the object itself.**

Let's take an example. Let's say that you have the Animal class and you have the property age. Since you know that the age of the Animal can't be negative you want to protect that variable from being unintentionally set to a negative integer. In order to do that you use the concept of encapsulation. What this means is that, you set the main property that you want to protect to private so that it is only available inside the class and then make use of setters and getters outside of the class in order to control the input that comes into the property. 
If you set the property age on private and create a setter called set_age for example, that setter will control the input that comes into your private property age in such a way that it will be impossible for you to set the age to a negative integer. You can write the code in such a way that it returns an error when you try to put negative integers into your age property.
Although in JavaScript you don't have keywords like 'private' and 'public', like you have for example in Java or C# you can still use setters and getters.
You can have for example the property age and the setter called set_age and you can write:
```python
my_dog_max.set_age = -5
```
In this case if you've written your setter correctly, the age property will be protected and won't be set to a negative number. If your age property wouldn't have been encapsulated, then mistakes like the following one could have easily happened:
```python
my_dog_max.age = -5
```
In this case, since you directly use the property 'age' without any setter, it won't return any error and the age will be set to a negative integer.

#### ***3. Inheritance***
**Through inheritance all properties and methods will be passed down and usable in all the classes that are made from another class**. So let's say that you have class A with method x and property y. After creating class A you create class B that inherits from class A and has another property called z. In class B you can use all the properties and methods from class A & everything that you add to class B.

Inheritance represents an 'is-a'-connection. So let's say that the class dog inherits from the class Animal. You can also read that as : dog is - an Animal. 

Inheritance is especially useful when you don't want to repeat methods & properties and in order to structure your code in such a way that it makes sense, like in our previous case with the classes dog & animal.

#### ***4. Polymorphism***
**Polymorphism is the ability of classes to be passed down as different types in certain contexts**. Through that statement I mean that for example you have 2 classes :

- Animal
- Dog ( inherited from the upper-class Animal )
- Vegeterian_Dog ( inherited from the upper-class dog)

Let's say that we have a function called *pet(Animal animal_to_pet)*. So the function needs an object of type Animal. 

Through polymorphism we are allowed to pass in the function all objects that are of the specific type asked and all objects that are derived/inherited from that type.

In this case we are allowed to use objects that are of type Dog & Vegeterian_Dog as well even if the type asked is Animal, that is irrelevant.

**Polymorphism only goes down the inheritance-chain, but never up.**

What this means is that if you have the function *pet_dog(Dog dog_to_pet)*, you could pass objects that are of type Vegeterian_Dog since they are derived/inherited from the type Dog, but you can't add objects of type Animal even if the type Dog is inherited from Animal, you can't go up the chain, only down. 

In JavaScript, polymorphism is included by default since there are no 'types', you can put in the argument of a function whatever you want and there will be no errors.

*To be brief, you can't pass arguments whom types are upper-classes of the asked type, you can only pass arguments that have the exact type that is asked or objects that have types inherited from the type asked. *

#### **JavaScript and Object Orientation** 
In JavaScript, object orientation is not the same as in other languages, like in Java or C# for example. As I've previously said, JavaScript is a prototypical programming language. That means that Objects are build out of other objects, not out of classes. The objects that they are built from are also called their *"prototypes"*. 

In JavaScript there are three techniques of working with object orientation:

1. Prototypical Object Orientation [ This is the most pure way of working with oop in JavaScript since this is where you use objects. As previously said JavaScript doesn't know real classes, everything is an object and every object ]
2. Pseudoclassical Object Orientation [ By using this pattern you utilize JavaScript as if it would be a class-based programming language. Here is where you use constructors ]
3. Object Orientation with class syntax [ This pattern is a simple syntatical way of the pseudoclassical object orientation pattern ]

---

## 1. Prototypical Object Orientation
JavaScript doesn't have the so called 'classes' that you would see in a class-based programming language like Java. In JavaScript you only have objects and each object can be used as the parent-object for another object, so we will call the parent-object the prototype of the new inherited object. That is why we call JavaScript a prototoype-based programming language. Every object in JavaScript is made out of another object, except the biggest parent-object that all objects inherit from : the object ***Object***. 
We've previously learned that classes are used as structures for objects. In JavaScript we don't have classes, only objects.
Every object in JavaScript can be used as the structure for another object. So let's say that you have object A and you make object B that made out of object A. Object A will become the prototype of object B. We could translate that into a class-based programming language in creating the sub-class B for the super/parent-class A. 
In JavaScript in order to get the prototype for an object, you can write the name of the object and then use the prototype \_\_proto\_\_ example : object_B.\_\_proto\_\_ will return you object_A since object_B has been made from object_A.

Let's take the following code as an example:
```JavaScript
let Animal= {
    name : "",
    color : "Brown",
    age : 0,
    eat: function(food){
        console.log(`I'm eating ${food}`);
    },
    drink: function(drink){
        console.log(`I'm drinking ${drink}`);
    }
}

let Dog = Object.create(Animal);
Dog.bark = function(){
    console.log("Bark !");
}

let Cat = Object.create(Animal);
Cat.Meow = function(){
    console.log("Meow !");
}

let VegeterianDog = Object.create(Dog);
VegeterianDog.eat = function(food){
    if(food === "meat"){
        console.log("I don't eat meat.");
    }else{
        Object.getPrototypeOf(VegeterianDog).call(this, food);
    }
}
```

I will draw a short diagram so we can understand the code better:

![Classes Sketch](ScreenshotsForNotes/Classes_Sketch.PNG)

**Important note for the sketch**: As I've already drew in the sketch, Animal inherits from the object Object, the object in JavaScript that has no prototype ( no \_\_proto\_\_ property ), it doesn't inherit from anything. If you write in the console Animal.\_\_proto\_\_ === Object, you will get 'False', since it returns another object with the name Object that still has a prototype. In order to get the parent object Object that has no prototype and that is the prototype of every made object, you have to get the prototype of the given object Object 2 times. So you need to write Object.getPrototypeOf(Object), which will give you another object Object that still has a prototype, and then you have to write Object.getPrototypeOf() again, so Object.getPrototypeOf(Object.getPrototypeOf(Object)).

This is how the object Object works and looks like. As previously mentioned, every object made in JavaScript has a prototype, that being the object Object, the object Object that has no prototype ( no \_\_proto\_\_ property).

![objectObject](ScreenshotsForNotes/ObjectObjectObject.PNG)

After you inherit the object Dog from the object Animal, you can add other properties & methods to your object Dog. In the object VegeterianDog we see that it is even possible to override methods & properties, so we are completly free and flexible when it comes to inheritance. 
Now, **besides the properties & methods that we add to an object, there is always one property that is automatically added, that is the property \_\_proto\_\_ that defines the property of the specific object**. 
This is how \_\_proto\_\_ works:

```JavaScript
console.log(Object.getPrototypeOf(Animal) === Object.getPrototypeOf(Object.getPrototypeOf(Object))); // True
console.log(Object.getPrototypeOf(Dog) === Animal); // True
console.log(Object.getPrototypeOf(Cat) === Animal); // True
console.log(Object.getPrototypeOf(VegeterianDog) === Dog); // True

console.log(Object.getPrototypeOf(Dog) === Cat); // False
```

We can see from the code that for example the object VegeterianDog is made from Dog, so Dog is the prototype of VegeterianDog. Dog is made from Animal, so Animal is the prototype of Dog. In JavaScript each object is the prototype of other object, and the prototype of that object has another prototype from another object and so on, until we reach the object Object that has no prototype. This is what we call the **prototype chain**. The objects that are up on the prototype chain are more abstract, the ones that are down are more special.

***This is why the prototype chain is so useful:***
Let's say that you want to use the method "drink" in VegeterianDog so you write 

```JavaScript 
VegeterianDog.drink()
```

JavaScript will now go in the object VegeterianDog and will see that you don't have any method called 'drink', so it will go in the prototype of the object VegeterianDog, which is Dog. JavaScript will see that there is such method called 'drink' in Dog either, so it will go in the prototype of Dog, that is Animal. In Animal, JavaScript will see the method "drink" and will execute it. This is how the prototype chain is used in JavaScript. Let's say that you would want to use a method called 'isPrototypeOf', JavaScript will go from Dog Ap to Animal and won't find that method. Afterwards, it will go as usual in the prototype of Animal, which is the object Object that has no prototype and will find that method. If you execute a method that doesn't exist in any of the prototypes JavaScript will return an error ( TypeError ) since it will go from the object that you've called the method from up until the object Object and won't find it, so it will return an error.

***Summarized***
In JavaScript we don't have classes, we only have objects that can be used as structures for other classes and that's why we call JavaScript a prototypical-based programming language. Because we can use objects as structures for other objects that would translate in a class-based programming language like Java into creating a sub-class from a parent-class. 
Let's say that we have object A and object B and object B has been made from object A. Object A will become the prototype of object B. Every object in JavaScript has a prototype, except for example the object Object that has no prototype and all objects are made out of this parent-object, the object Object. In our example, object A will be the prototype of object B and the ***object Object*** will be the prototype of object A. 
Just because you have created an object B out of object A that doesn't mean that you can't add anything to object B that differs from object A. You are allowed to add new properties, methods and even override existing methods.
Every object has a prototype and the prototype of every object has another prototype until it reaches the object Object. This is also called the prototype chain.
The prototype chain is useful for JavaScript since it bounces from the object where a method or property is called from its prototype to the prototypes of previous prototypes until it reaches to object Object in order to find the specific method or property. So if you execute a method in object B, JavaScript goes to search for that method in object B, if it doesn't find the method it jumps in the prototype of object B, object A. If it doesn't find the object A, it jumps into the object Object. If it doesn't find that method in the object Object either, it will just raise a TypeError.
Note: if you write 'console.dir(Object)' in the console you won't get the parent object Object that has no prototype, you will get an object Object that has another prototype. The prototype of the given object Object has another prototype the original parent object Object without any prototype. So in order to get the object Object you have to get the prototype 2 times -> Object.getPrototypeOf(Object.getPrototypeOf(Object)).