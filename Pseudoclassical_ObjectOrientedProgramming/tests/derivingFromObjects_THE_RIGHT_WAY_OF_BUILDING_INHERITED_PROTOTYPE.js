function Employee(){
    this.staff = new Array();
}

Employee.prototype.payEmployee = function(){
    console.log("Paying employee.");
}

function Consultant(name){
    Employee.call(this);
}
Consultant.prototype = new Employee();
console.dir(Consultant);

Consultant.prototype.payEmployee = function(){
    console.log(`Time to pay ${this.name} ( ${this.title} )`);
}

let jill = new Employee();
jill.staff.push("Bob");
jill.staff.push("Jane");

let john = new Employee();
john.staff.push("Russell");
john.staff.push("Mohammed");

console.log(`Jill's staff : ${jill.staff.join(', ')}`);
console.log(`John's staff : ${john.staff.join(', ')}`);

console.dir(Employee);
console.dir(Consultant);

/*
let max = new Consultant();
max.staff.push("Bob");
max.staff.push("Jane");

let brad = new Consultant();
brad.staff.push("Russell");
brad.staff.push("Mohammed");

console.log(`Max's staff : ${max.staff.join(', ')}`);
console.log(`Brad's staff : ${brad.staff.join(', ')}`);
*/

let x = new Consultant();
let y = new Consultant();
x.staff.push("a");
y.staff.push("b");
console.dir(x);
console.log(x.staff);
console.log(y.staff);