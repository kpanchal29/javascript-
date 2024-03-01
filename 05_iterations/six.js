// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
    // return num > 4;
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publish: "April 10, 1925",
      edition: "First Edition",
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publish: "July 11, 1960",
      edition: "First Edition",
    },
    {
      title: "1984",
      genre: "Dystopian Fiction",
      publish: "June 8, 1949",
      edition: "First Edition",
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publish: "July 16, 1951",
      edition: "First Edition",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      genre: "Fantasy",
      publish: "June 26, 1997",
      edition: "First Edition",
    },
  ];

//   const userBooks = books.filter((item) => item.publish === "July 16, 1951")

  const userBooks = books.filter((item) => item.publish >= "July 16, 1951")
  console.log(userBooks);