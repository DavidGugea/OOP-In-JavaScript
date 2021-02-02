function Employee(){}

Employee.prototype.PayEmployee = function(){
    console.log("Employee paid");
}

function Consultant(){
    Employee.call(this); 
    /*
    Q: Why do we have to write Employee.call(this) ?
    A:
    We always have to write this part so we can let Employee do it's initialization job inside the constructor function that will 
    inherit from Employee.
    Let's say that you have the property Employee.payTimeline = "weekly", if you don't write Employee.call(this) then you won't be able to access the property payTimeline.
    In case that you have arguments in the constructor function then it would be easier and you wouldn't waste so much space.
    Example:

    function Employee(name, age){
        this.name = name;
        this.age = age;
    }
    function Consultant(name, age, salary){
        Employee.call(this, name, age);
        // OR : Employee.apply(this, [name, age]);
    }
    */
}

Consultant.prototype.PayEmployee = function(){
    console.log("Consultant paid");
}

let x = new Consultant();
x.PayEmployee();