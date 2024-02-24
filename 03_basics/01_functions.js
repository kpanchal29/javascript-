

function sayMyName(){
    console.log("K");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("t");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log(result);


function loginUserMessage(username = "sam") {
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage());

function calculateCartPrise(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrise(200, 400, 500, 2000));

const user = {
    username: "krishit",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArr = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));

