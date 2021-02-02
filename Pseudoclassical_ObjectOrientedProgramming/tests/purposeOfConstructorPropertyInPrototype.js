// define the Person Class
function Person(name){
    this.name = name;
}

Person.prototype.copy = function(){
    // return new Person(this.name) is bad
    return new this.constructor(this.name);
}

// deinfe the Student Class
function Student(name){
    Person.call(this, name);
}
Student.prototype = Object.create(Person.prototype);

console.dir(Person);
console.dir(Student);

let student = new Student("trinith");
console.log(student instanceof Student); // true
console.log(student.copy() instanceof Student); // false
console.log(student.copy() instanceof Person); // true [ polymorphism ]

// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;
console.log(student.copy() instanceof Student); // true
console.log(student.copy() instanceof Person); // true [ polymorphism ]