// let username:string = "Ashwani";
// console.log(username)

// let age: number = 20;

function checkAge(userAge: number) {
  if (userAge >= 18) {
    console.log("You are eligible");
  } else {
    console.log("You are not eligible");
  }
}

console.log(checkAge(34));

let name: string = "Ashwani";
function greet(user: string) {
  return "Hello " + user;
}
console.log(greet(name));

// object

let userData :{
  name:string,
  age:number
} = {
  name:"ashwani",
  age:20
}
console.log(userData)
console.log(userData.name)

function add(a: number, b: number): number {
  return a + b;
}

function createUser(name:string, age:number){
  return{
    name:name,
    age:age
  }
}

const createdUser = createUser("Ishan", 24)
console.log(createdUser)

function printId(id: number | string){
  console.log("Your id is", id)
}

printId(10)

function printId1(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase())
  } else {
    console.log(id.toFixed(2))
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Alice", 25);
console.log(person1.introduce());

class Person3 {
    constructor(public name: string, public age: number) {
        // Initialize properties
    }
}

const john = new Person('Uday', 20);
console.log(`Name: ${john.name}, Age: ${john.age}`);

class Person4 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person = new Person('Rahul', 22);
console.log(person.name); // Accessing attribute
// person.greet();           // Accessing function

class BankAccount {
  accountHolder: string;
  balance: number;

  constructor(accountHolder: string, initialBalance: number) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): string {
    return `The balance for ${this.accountHolder} is $${this.balance}`;
  }
}

const account = new BankAccount("John Doe", 500);
account.deposit(200);
console.log(account.getBalance());

let username: string = "Ashwani";
let age: number = 22;
let isDeveloper: boolean = true;

console.log(username, age, isDeveloper);

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

let user: User = {
  name: "Ashwani",
  age: 22,
  isActive: true
};

console.log(user.name);

function login(email: string, password: string): boolean {
  if (email === "admin@gmail.com" && password === "1234") {
    return true;
  }
  return false;
}

console.log(login("admin@gmail.com", "1234")); // true

interface Product {
  id: number;
  name: string;
  price: number;
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 55000
};

type Props = {
  title: string;
};

// function add(a: number, b: number): number {
//   return a + b;
// }

console.log(add(10, 20)); // ✅ 30
// console.log(add("10", 20)); ❌ Error

class Person5 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person5 = new Person5("Alice", 25);
console.log(person5.introduce());

let day: number = 0;
if (day <= 0 || day > 7) {
    day = Number.NaN;
    console.log("Day is " + day);
} else {
    console.log("Value Accepted..");
}

// The toExponential() 
let num1: number = 2525.30;
let val: string = num1.toExponential();
console.log(val);

// The toFixed()
let num3: number = 237.134;
console.log("num3.toFixed() is " + num3.toFixed());
console.log("num3.toFixed(2) is " + num3.toFixed(2));
console.log("num3.toFixed(6) is " + num3.toFixed(6));

// The toPrecision()
let num: Number = new Number(5.7645326);
console.log(num.toPrecision());
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
// The toString()
// let num1: Number = new Number(10);
console.log(num1.toString());
console.log(num1.toString(2));
console.log(num1.toString(8));

// 1. Primitive Types
// let age: number = 25;
// let name: string = "Alice";
let isActive: boolean = true;
let emptyValue: null = null;
let unassignedValue: undefined = undefined;

// 2. Special Types
let dynamicValue: any = 10;
dynamicValue = "Hello";

let unknownValue: unknown = "Hello";

function logMessage(): void {
    console.log("This is a log message.");
}

function throwError(message: string): never {
    throw new Error(message);
}

let obj = { name: "Sourav", age: 23 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
let obj = { name: "Sourav" };
console.log(typeof obj === "object" && obj !== null);

// Object literal
const obj1 = { key: "value" };

// Object constructor
const obj2 = new Object();
obj2.key = "value";

console.log(obj1);
console.log(obj2);
let obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);

class Car { 
   //field 
   engine:string; 
 
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  

   //function 
   disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } 
}





