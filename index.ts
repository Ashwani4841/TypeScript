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