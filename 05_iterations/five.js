const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
//  })

// coding.forEach (val) => console.log(val);

// function printMe(item){
    // console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "JS",
        fileName: "js"
    },
    {
        languageName: "python",
        fileName: "py"
    },
    {
        languageName: "cpp",
        fileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})