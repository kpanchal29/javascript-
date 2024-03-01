const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
   console.log(`${key} file name is for: ${myObj[key]}`);
}

const arr = [1, 2, 3, 4, 5, "krishit"]

for (const key in arr) {
   console.log(arr[key]);
}