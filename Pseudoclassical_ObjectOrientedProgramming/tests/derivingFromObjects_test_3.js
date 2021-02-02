function spaceUp(){
    for(let i = 0 ; i < 3 ; i++){
        console.log(" ");
    }

    console.log("--------------------------------------------------------");

    for(let i = 0 ; i < 3 ; i++){
        console.log(" ");
    }
}
function Employee(name, age){
    this.name = name;
    this.age = age;
    this.project_ids = new Array();
}
Object.defineProperties(
    Employee.prototype,
    {
        deploy : { 
            value : function(deployment_id){
                console.log(`Deploy : ${deployment_id}`);
            },
            writable : false,
            enumerable : true,
            configurable : false
        },
        sayHello : {
            value : function(){
                console.log("Hello.");
            },
            writable : false,
            enumerable : true,
            configurable : false
        }
    }
);
function Consultant(name, age, salary, department_id){
    Employee.call(this, name, age);
    this.salary = salary;
    this.department_id = department_id;
}

Consultant.prototype = Object.create(Employee.prototype);
Consultant.prototype.constructor = Consultant;

Object.defineProperty(
    Consultant.prototype,
    "paySalary",
    {
        value : function(){
            console.log(`Salary paid for consultant ${this.name} -- > ${this.salary}`);
        },
        writable : false,
        enumerable : true,
        configurable : false
    }
);

console.log("Employee constructor function: ");
console.dir(Employee);
console.log("Consultant constructor function: ");
console.dir(Consultant);

spaceUp();

let x = new Employee("employee_name", 22);
console.log("Employee object: ");
console.dir(x);

let y = new Consultant("employee_name", 25, 8000, 34);
console.log("Consultant object: ");
console.dir(y);
y.paySalary();