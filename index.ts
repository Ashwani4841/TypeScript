let username:string = "Ashwani";
console.log(username)

let age: number = 20;

function checkAge(userAge: number) {
  if (userAge >= 18) {
    console.log("You are eligible");
  } else {
    console.log("You are not eligible");
  }
}

console.log(checkAge(age));

let name: string = "Ashwani";

function greet(user: string) {
  return "Hello " + user;
}

console.log(greet(name));