
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
// //     { name: "Stone skin", price: 520 },
// //   ],

// //   getPotions() {
// //     return this.potions;
// //   },

// //   addPotion(newPotion) {
// //     const exists = this.potions.some(potion => potion.name === newPotion.name);
    
// //     if (exists) {
// //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
// //     }

// //     this.potions.push(newPotion);
// //   },

// //   removePotion(potionName) {
// //     const potionIndex = this.potions.findIndex(potion => potion.name === potionName);

// //     if (potionIndex === -1) {
// //       return `Error! Potion ${potionName} is not in inventory!`;
// //     }

// //     this.potions.splice(potionIndex, 1);
// //   },

// //   updatePotionName(oldName, newName) {
// //     const potionIndex = this.potions.findIndex(potion => potion.name === oldName);

// //     if (potionIndex === -1) {
// //       return `Error! Potion ${oldName} is not in inventory!`;
// //     }

// //     this.potions[potionIndex].name = newName;
// //   },
// // };

// // // Examples of usage:
// // console.log(atTheOldToad.getPotions()); // Getting all potions

// // atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// // console.log(atTheOldToad.getPotions()); // Adding a new potion

// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); // Error if already exists
// // console.log(atTheOldToad.getPotions()); // Checking the potions array

// // atTheOldToad.removePotion("Dragon breath");
// // console.log(atTheOldToad.getPotions()); // Removing a potion

// // atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// // console.log(atTheOldToad.getPotions()); // Updating the potion name



// // 9.

// // function makePizza() {
// //   return "Your pizza is being prepared, please wait.";
// // }
// // // Change code below this line

// // const result = makePizza();
// // const pointer = makePizza;




// const doMath = function (a, b, callback){
//     const result = callback(a, b)
//     return result;
// }

// const add = function (x, y) {
//     return x + y;
// }

// const sum = doMath(44, 44, add);
// console.log(sum);

// // 10.///////////////////////////////////////////////////////////////////////////////////////////////////////////
  

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// makeMessage("Royal Grand", makePizza);
// makeMessage("Chicken", deliverPizza);

// console.log(deliverPizza("Royal Grand"));
// console.log(makePizza("Chicken"));




// // 11.

// // function makePizza(pizzaName, callback) {
// //   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// //   callback(pizzaName);
// // }

// // makePizza("Royal Grand", function deliverPizza(pizzaName) {
// //   console.log(`Delivering pizza ${pizzaName}.`);
// // });
// // // Change code below this line

// // makePizza("Ultracheese", function 
// //  eatPizza(pizzaName) {
// //   console.log(`Eating pizza ${pizzaName}`) 
// //  });

// let randomNumber = 20;

// console.log(Math.floor(Math.random() * randomNumber))


// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
// order(pizzaName, onSuccess, onError){
//     if(!this.pizzas.includes(pizzaName)){
//     return onOrderError(pizzaName);
//   }
//   makePizza(pizzaName);
// }
//   }
  
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `There is no pizza with a name ${pizzaName}. in the assortment.`
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);




12.

const pizzaPalace = {
     pizzas: ["Ultracheese", "Smoked", "Four meats"],
    
    order(pizzaName, onSuccess, onError) {
        if (this.pizzas.includes(pizzaName)) {
            return onSuccess(pizzaName);
        } else {
            return onError(`Error! There is no pizza with a name ${pizzaName} in the assortment.`);
        }
    }
};

function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
    return error;
}

console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));

console.log(pizzaPalace.order("Four meats", makePizza, onOrderError)); 

console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError)); 

console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));


13.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
 orderedItems.forEach(function(items){
   totalPrice += items;
 });
  
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// 14.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

 numbers.forEach(function(number){
   if (number > value) {
      filteredNumbers.push(number);
    }
 });
    return filteredNumbers;
  }


console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

15.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

 firstArray.forEach(function(firstArr){
   if(secondArray.includes(firstArr)){ 
  commonElements.push(firstArr);
   }
 });
   
 
  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

16.

const calculateTotal = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
}

17.

// Change code below this line
const calculating = (quantity, pricePerItem) => quantity * pricePerItem;{
};


18.

const calculate = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
