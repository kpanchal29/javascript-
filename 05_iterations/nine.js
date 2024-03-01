const myNums = [1, 2, 3]

const newNums = myNums.reduce((p, c) => {
    console.log(`acc: ${p} anf curval: ${c}`);
  return p + c;
},0);

console.log(newNums);


const shoppingCart = [
    {
        itemName: "JS",
        price: 3999
    },
    {
        itemName: "dataScience",
        price: 12999
    },
    {
        itemName: "Mobile Development",
        price: 2999
    },
    {
        itemName: "Cpp",
        price: 1999
    },
]

const myTotal = shoppingCart.reduce((p, c) => {
    return p + c.price
},0);

console.log(myTotal);