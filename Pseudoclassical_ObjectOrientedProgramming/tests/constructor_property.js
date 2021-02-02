function Employee(){
    this.staff = new Array();
}

Employee.prototype.payEmployee = function(){
    console.log("Paying employee");
}

function Consultant(name){
}
Consultant.prototype = new Employee();
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

max = new Consultant();
max.staff.push("Bob");
max.staff.push("Jane");

ahmed = new Consultant();
ahmed.staff.push("Russell");
ahmed.staff.push("Mohammed");

console.log(`Max's staff : ${max.staff.join(', ')}`);
console.log(`Ahmed's staff : ${ahmed.staff.join(', ')}`);