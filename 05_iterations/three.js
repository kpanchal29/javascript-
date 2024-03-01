// for of loop
const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(greet);
}

// Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('FR','France')

// for (const key in map) {
//    console.log(key);
// }
// console.log(map);

for (const [key, value] of map) {
    console.log(key, '=>', value);

}

// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'Gta5'
// }

// for (const [key, value] of myObj) {
//     console.log(key, '=>', value);
// }

