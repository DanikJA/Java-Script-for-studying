
// // Change code below this line
// function add(...args) {
//   const values = Object.values(args);
//   let total = 0;
//  for(value of values){
//    total += value;
//  }
//   return total;
// }




// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// // 2

// Change code below this line
// function addOverNum(threshold, ...args) {
//   let total = 0;

//   for (const  num  of args) {
//     if(num > threshold){
//       total += num;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// // 3.

// function findMatches(mainArray, ...args) {
//   const matches = []; // Don't change this line
//  for(const num of args){
//    if(mainArray.includes(num)){
//      matches.push(num)
// }
//  }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// // 4

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName){
//    return `Updating book ${oldName} to ${newName}`
    
//   }
// };

// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");
// bookShelf.updateBook("Sands of dune", "Dune");

// // 5.

// // const bookShelf = {
// //   books: ["The last kingdom", "Haze", "The guardian of dreams"],
// //   updateBook(oldName, newName) {
// //     // Change code below this line
// //         const indexOfBook = this.books.indexOf(oldName);
// //  if(indexOfBook !== -1){
// //    this.books.splice(indexOfBook, 1, newName)
// //    return `Updating book ${oldName} to ${newName}`
// //  }   
// // }
// // }

// // 6.

// // const atTheOldToad = {
// //   // Change code below this line
// // potions: [ ] 
// // };





// // 6.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//  this.potions.push(potionName);

//     // Change code above this line
//   },
// };





// 7.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//  if(this.potions.includes(oldname)){
//    const index = this.potions.indexOf(oldname)
//    this.potion[index] = newName;
//  }

//     // Change code above this line
//   },
// };



// 8.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const exists = this.potions.some(potion => potion.name === newPotion.name);
    
//     if (exists) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const potionIndex = this.potions.findIndex(potion => potion.name === potionName);

//     if (potionIndex === -1) {
//       return `Error! Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.findIndex(potion => potion.name === oldName);

//     if (potionIndex === -1) {
//       return `Error! Potion ${oldName} is not in inventory!`;
//     }

//     this.potions[potionIndex].name = newName;
//   },
// };

// // Examples of usage:
// console.log(atTheOldToad.getPotions()); // Getting all potions

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions()); // Adding a new potion

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); // Error if already exists
// console.log(atTheOldToad.getPotions()); // Checking the potions array

// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.getPotions()); // Removing a potion

// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad.getPotions()); // Updating the potion name



// 9.

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;




const doMath = function (a, b, callback){
    const result = callback(a, b)
    return result;
}

const add = function (x, y) {
    return x + y;
}

const sum = doMath(44, 44, add);
console.log(sum);

// 10.///////////////////////////////////////////////////////////////////////////////////////////////////////////
  

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
}

makeMessage("Royal Grand", makePizza);
makeMessage("Chicken", deliverPizza);

console.log(deliverPizza("Royal Grand"));
console.log(makePizza("Chicken"));




// 11.

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function 
//  eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`) 
//  });

