// objects-2

// const bumbleUser = new Object()
const bumbleUser = {}

bumbleUser.id = "123abc"
bumbleUser.name = "karan"
bumbleUser.isLoggedIn = false

// console.log(bumbleUser);

const regularUser = {
    email: "jdj@gmail.com",
    fullname: {
        userfullname:{
            firstname: "krishit",
            lastname: "panchal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {...obj1, ...obj2}

console.log(obj3);

