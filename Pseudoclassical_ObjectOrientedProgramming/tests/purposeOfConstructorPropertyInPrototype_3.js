function Employee(name, title){
    this.name = name;
    this.title = title;
}

Employee.prototype.payEmployee = function(){
    console.log(`Time to play ${this.name} ( ${this.title} )`);
}

function Consultant(name){
    Employee.call(this, name, "Consultant");
}
Consultant.prototype = Object.create(Employee.prototype);
Consultant.prototype.constructor = Consultant;

Consultant.prototype.payEmployee = function(){
    console.log(`Time to pay ${this.name} ( ${this.title} )`);
}

let e = new Employee("Joe Bloggs", "Engineer");
e.payEmployee();

let c = new Consultant("John Smith");
c.payEmployee();