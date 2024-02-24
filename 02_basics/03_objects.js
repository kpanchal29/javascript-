//Objects

//singleton

//object literals

// Object.create{}
const mySyn = Symbol("key1")

const JsUser = {
    name:"Krishit",
    [mySyn]: "abc",
    age: 21,
    location: "idar",
    email:"kp@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Sat"]
} 

console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(JsUser[mySyn]);

JsUser.email = "kp@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
