//array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ironman","hulk"]

const myArr2 = new Array(1,2,3,4)


console.log(myArr[0]);

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(typeof newArr);
// console.log(myArr);

////////slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);
