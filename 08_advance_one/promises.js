const promisesOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promisesOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolve");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "kp", email: "kp@example.com"})    
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"krishit", password:"3029"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },2000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("the promise is either resolved or rejected");
});

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"js", password:"123"})
        }else{
            reject('ERROR: JS went Wrong')
        }
    },1000)
});

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()

// async function getAllUser(){
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);

//     } catch (error) {
//         console.log(error);    
//     }
// }    

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((erroe) => console.log(error))