const user = {
    username: "kp",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);



// const promiseOne = new Promise()
// const date = new Date()

function User(username, logInCount, isLoggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const user1 = new User("kp", 12, true)
const user2 = new User("cac", 11, false)

console.log(user1.constructor());
// console.log(user2);