function Person(name, age){
    this.name = name;
    this.age = age;
}
Object.defineProperties(
    Person.prototype,
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
function Student(name, age, className, major){
    Person.apply(this, [name, age]);
    this.className = className;
    this.major = major;
}
Student.prototype = Object.create(Person.prototype);

console.dir(Person);
console.dir(Student);
let max = new Student("Max", 20, "14XA", "Psychology");
console.dir(max.constructor); // Person

console.log(max instanceof Person); // true
console.log(max instanceof Student); // true

Student.prototype.constructor = Student;

console.log("-----------------------------------------------------------------------------");

console.dir(Person);
console.dir(Student);

let david = new Student("Max", 20, "14XA", "Computer-Science");
console.dir(david.constructor); // Student 

console.log(david instanceof Person); // true
console.log(david instanceof Student); // true