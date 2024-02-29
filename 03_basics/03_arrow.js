const user = {
    username: "krishit",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

const  chai = () => {
    let username = "krishit"
    console.log(this);
}

// chai()

const addTwo = (num1,num2) => (num1 + num2)


console.log(addTwo(3,4));

// const myArray = [2,3,5,6]

