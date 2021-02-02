function Person(name, age){
    this.name = name;
    this.age = age;

    console.log("INSIDE PERSON");
}
Object.defineProperty(
    Person.prototype,
    "personTestFunction",
    {
        value : function(){
            console.log("person test function");
        },
        writable : false,
        enumerable : true,
        configurable : false
    }
);
function Student(name, age, className){
    Person.apply(this, [name, age]);
    this.className = className;

    console.log("INSIDE STUDENT");
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Object.defineProperty(
    Student.prototype,
    "studentTestFunction",
    {
        value : function(){
            console.log("student test function");
        },
        writable : false,
        enumerable : true,
        configurable : false
    }
);

let max = new Student("Max", 17, "11b");
console.log(max.name);
console.log(max.age);
console.log(max.className);

max.personTestFunction();
max.studentTestFunction();

function UniStudent(name, age, className, major){
    Student.apply(this, [name, age, className]);
    this.major = major;

    console.log("INSIDE UniStudent");
}
UniStudent.prototype = Object.create(Student.prototype);
UniStudent.prototype.constructor = UniStudent;
Object.defineProperty(
    UniStudent.prototype,
    "uniStudentTestFunction",
    {
        value : function(){
            console.log("uni student test function");
        },
        writable : false,
        enumerable : true,
        configurable : false
    }
);

console.log("-------------------------------------");
let david = new UniStudent("David", 25, "M101", "Math");
console.log(david.name);
console.log(david.age);
console.log(david.className);
console.log(david.major);

david.personTestFunction();
david.studentTestFunction();
david.uniStudentTestFunction();

console.log("-------------------------------------");
console.dir(max);
console.dir(david);