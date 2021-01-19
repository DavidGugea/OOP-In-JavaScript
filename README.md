# Object Oriented Programming in JavaScript ( Chapter 13 )
---

## Introduction

Before getting into the details of OOP in JavaScript let's talk about the 4 big concepts of OOP ( AEIP ) :

* ***Abstraction*** [ Abstract behaviour is summarized in different classes and prototypes ]
* ***Encapsulation*** [ Hiding properties and/or methods from the outside using special keywords and setters&getters]
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

JavaScript is an object based programming languages. There are no real classes. Instances of objects are made out of other objects and not out of classes like in other programming languagues like for example Java or C# or Python. If object 1 is made out of object 2, we call object 2 the prototype of object 1. Because of this principle of 'prototypes' we say that JavaScript is a prototype-based programming language. We'll get into the details of prototypes later on.

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