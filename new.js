
// Change code below this line
function add(...args) {
  const values = Object.values(args);
  let total = 0;
 for(value of values){
   total += value;
 }
  return total;
}




console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));

// 2

// Change code below this line
function addOverNum(threshold, ...args) {
  let total = 0;

  for (const  num  of args) {
    if(num > threshold){
      total += num;
    }
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// 3.

function findMatches(mainArray, ...args) {
  const matches = []; // Don't change this line
 for(const num of args){
   if(mainArray.includes(num)){
     matches.push(num)
}
 }
  // Change code above this line
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// 4

const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName){
    return `Deleting book ${bookName}`
  },
  updateBook(oldName, newName){
   return `Updating book ${oldName} to ${newName}`
    
  }
};

bookShelf.addBook("Haze");
bookShelf.removeBook("Red sunset");
bookShelf.updateBook("Sands of dune", "Dune");

// 5.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//         const indexOfBook = this.books.indexOf(oldName);
//  if(indexOfBook !== -1){
//    this.books.splice(indexOfBook, 1, newName)
//    return `Updating book ${oldName} to ${newName}`
//  }   
// }
// }
