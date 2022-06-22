interface Person {  
    firstName: string;  
    lastName: string;  
    age: number;  
    FullName();  
    GetAge();  
}    
class Employee implements Person {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  
class Employee2 implements Employee {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}
class Employee3 implements Employee2 {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  
class Employee4 implements Employee3 {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  
class Employee5 implements Employee4 {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  
class Employee6 implements Employee5 {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  
class Employee7 implements Employee7 {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  

let myEmployee = new Employee('Budi', 'Tembung', 29);
let fullName = myEmployee.FullName();  
let Age = myEmployee.GetAge(); 

let myEmployee2 = new Employee2('Farhan', 'Amin', 25);
let fullName2 = myEmployee2.FullName();  
let Age2 = myEmployee2.GetAge(); 

let myEmployee3 = new Employee3('Samuel', 'Anak butet', 27);
let fullName3 = myEmployee3.FullName();  
let Age3 = myEmployee3.GetAge(); 


let myEmployee4 = new Employee4('Ilham', 'Anak Bu ijah',27);
let fullName4 = myEmployee4.FullName();  
let Age4 = myEmployee4.GetAge(); 


let myEmployee5 = new Employee5('indah', 'Anak Bu butet',27);
let fullName5 = myEmployee5.FullName();  
let Age5 = myEmployee5.GetAge(); 


let myEmployee6 = new Employee6('Slank', 'Vokalis',30);
let fullName6 = myEmployee6.FullName();  
let Age6 = myEmployee6.GetAge(); 

let myEmployee7 = new Employee7('Nadia', 'Mantan yang hilang',37);
let fullName7 = myEmployee7.FullName();  
let Age7 = myEmployee7.GetAge(); 


console.log("Nama Lengkap: " + fullName + '\numur: ' + Age);
console.log("Nama Lengkap: " + fullName2 + '\numur: ' + Age2);
console.log("Nama Lengkap: " + fullName3 + '\numur: ' + Age3);
console.log("Nama Lengkap: " + fullName4 + '\numur: ' + Age4);
console.log("Nama Lengkap: " + fullName5 + '\numur: ' + Age5);
console.log("Nama Lengkap: " + fullName6 + '\numur: ' + Age6);
console.log("Nama Lengkap: " +fullName7 +'\numur: ' + Age7);