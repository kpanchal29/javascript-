// let myName = "kp    "

// console.log(myName.truelength);



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.kp = function(){
    console.log(`kp is present in all objects`);
}

Array.prototype.heyKp = function(){
    console.log(`kp says hello`);
}

// heroPower.kp()
// myHeros.kp()
myHeros.heyKp()
// heroPower.heyKp()

// inheritance

const user = {
    name:"kp",
    email: "chai@google.com",
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,

    __proto__: TeachingSupport
}

Teacher.__proto__= user


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode    " 

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()