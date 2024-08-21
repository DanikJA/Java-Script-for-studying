        //    Creating variables

document.write("Hello");
 document.write("!!!");
 console.error('hello java script');
console.warn('!!!');
 
// let num = 5;
// console.log(num);

// num = 7;
// console.log(num);

let num = 6;
console.log("Result:" + num + '!');

const number = 10;

let isJohnHasCar = false;


let numb = 20;

if (numb == 30) {
  console.log('yes')  
}
else 
  console.log('else')
    

const blackListedWord1 = "спам"


                                //  if
const salary = 530;

if (salary <= 500) {
  console.log('level one')
}
else if (salary > 500) {
  console.log('level two')
}







// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!

// const username1 = "Mango";
// console.log("Username is:", username); // Username is Mango

// const username2 = "hgg";
// console.log('User name is:', username2);



// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;




// let result;
        
// function getAge() {
//   let currentYear = 2024;
//   let birthdayYear = 2001;
//   result = currentYear - birthdayYear;
// }

// getAge()
//   console.log(result);



function getAge(year = 0) {
  let currentYear = 2024;
  return currentYear - year;
}

console.log(getAge(2001));





// Оголошена функція makeMessage(name, price)
// Виклик makeMessage('Radar', 6150) повертає "You picked Radar, price per item is 6150 credits"
// Виклик makeMessage('Scanner', 3500) повертає "You picked Scanner, price per item is 3500 credits"
// Виклик makeMessage('Reactor', 8000) повертає "You picked Reactor, price per item is 8000 credits"
// Виклик makeMessage('Engine', 4070) повертає "You picked Engine, price per item is 4070 credits"


function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};


console.log(makeMessage('Radar', 6150));

console.log(makeMessage('Scaner', 3500));

console.log(makeMessage('Engine', 4070));



// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

// Оголошена функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."


function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  
  const totalPrice =  orderedQuantity * pricePerDroid + deliveryFee;
  
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
};

console.log(makeOrderMessage(2,100,50));
console.log(makeOrderMessage(4,300,100));
console.log(makeOrderMessage(10, 70, 20));




function checkAge(age) {
  let message;
  
if (age >= 18){
  message = 'You are an adult';
}else {
  message = 'you are a minor';
}
 
  return message;
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));



                                         // Цикли

const stars = 1;
let price;

// if (stars === 1 || stars === 2) {
//   price = 3;
// } else if (stars === 3) {
//   price = 5;
// } else if(stars === 4){
//   price = 10
// }

// console.log(price);

switch(stars){
  case 1:
    price = 3;
    break;
  
  case 2:
    price = 4;
    break;

  case 3:
    price = 5;
    break;
}

console.log(price)


                                    //  for

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }


// for (let i = 10; i >= 0; i -= 2){
//   console.log(i);
// }

for (let i = 1000; i >= 950; i -= 2){
  console.log(i);
}





// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".


function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  if(available >= ordered){
    message = 'Order is processed, our manager will contact you.'
  }else if (available < ordered){
    message = 'Not enough goods in stock!'
  }

  // Change code above this line
  return message;
}

console.log(checkStorage(100,50));
console.log(checkStorage(100,130));
console.log(checkStorage(200,20));
console.log(checkStorage(200,150));
console.log(checkStorage(150, 180));




// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням.

// Значення змінної a дорівнює 7
// Використаний оператор +=
// Значення змінної b дорівнює 6
// Використаний оператор -=
// Значення змінної c дорівнює 45
// Використаний оператор *=
// Значення змінної d дорівнює 2
// Використаний оператор /=


let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;



// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".


function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered === 0){
  message = 'There are no products in the order!'
} else if (available < ordered){
  message = 'Your order is too large, there are not enough items in stock!'
} else {
  message = 'The order is accepted, our manager will contact you'
}


  // Change code above this line
  return message;
}


console.log((100,50));
console.log((100, 130));
console.log((70, 0));
console.log((200, 20));
console.log((200, 250));
console.log((150, 0));



// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

function isNumberInRange(start, end, number) {
  const isInRange = (number >= start && number <= end); // Change this line
  
  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));







function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  
  if (totalSpent >= 50000){
    discount = GOLD_DISCOUNT;
  } else if(totalSpent >= 20000 && totalSpent < 50000){
    discount = SILVER_DISCOUNT;
  } else if(totalSpent >= 5000 && totalSpent < 20000){
    discount = BRONZE_DISCOUNT;
  }else if (totalSpent < 5000){
   discount = BASE_DISCOUNT;
  }
  
  // Change code above this line
  return discount;
  discount = Number(discount);
}

console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));






// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

// Оголошена функція checkStorage(available, ordered).
// Використаний тернарний оператор.
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 150) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"


function checkStorage(available, ordered) {
  let message;
  // Change code below this line

 message = ordered > available ? "Not enough goods in stock!" :  "The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));



// 2. 
// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".




function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

 message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
  
  // Change code above this line
  return message;
}

console.log(checkPassword('jqueryismyjam'));
console.log(checkPassword('angul4r1sl1f3'));
console.log(checkPassword('r3actsux'));







// 3.


function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter" :
      price = 0; // Change this line
      break;

    case "professional" : // Change this line
      price = 20; // Change this line
      break;

    case "organization" :// Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

console.log(getSubscriptionPrice('professional'));
console.log(getSubscriptionPrice('organization'));
console.log(getSubscriptionPrice('starter'));



// 4.

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password){
    case null:
      message = "Canceled by user!";
      break;

    case ADMIN_PASSWORD:
      message = "Welcome!"
      break;

    default: 
      message = "Access denied, wrong password!"
  }

  // Change code above this line
  return message;
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));


// 5.


function getShippingCost(country) {
  let message;
  let price;
  // Change code below this line

  switch(country){
    case 'China':
      message = "Shipping to China will cost 100 credits"
    break;

    case "Chile":
      message = "Shipping to Chile will cost 250 credits"
    break;

    case "Australia":
      message = "Shipping to Australia will cost 170 credits"
      break;

    case "Jamaica":
      message = "Shipping to Jamaica will cost 120 credits"
      break;

    default: 
      message = "Sorry, there is no delivery to your country"
  }
  
  // Change code above this line
  return message;
}



console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));



// // 6.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }


// console.log(("Poly".length));
// console.log(("Harambe".length));
// console.log(("Billy".length));
// console.log(("Joe".length));


// 7.




function getSubstring(string, length) {
  const substring = string.substring(0, length); // Change this line

  return substring;
}

console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 6));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));



// 8.



function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if(message.length <= maxLength){
    return message;
  } else if (message.length >= maxLength){
    return message.slice(0,maxLength) + "...";
  }
  /// Change code above this line
  return result;
}


console.log(formatMessage("Curabitur ligula sapien",16));
console.log(formatMessage("Curabitur ligula sapien,23"));
console.log(formatMessage("Vestibulum facilisis purus nec",20));
console.log(formatMessage("Vestibulum facilisis purus nec",30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla",15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));




// 9.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase() ; // Change this line

  return normalizedInput;
}

console.log(normalizeInput('Hello world'));
console.log(normalizeInput("This ISN'T SpaM"));
console.log(normalizeInput("Big SALE"));


// 10.

function checkForName(fullName, name) {
  let result = fullName.includes(name);
  return result;
}

console.log(checkForName("Egor Kolbasov", "Egor")); // true
console.log(checkForName("Egor Kolbasov", "egor")); // false
console.log(checkForName("Egor Kolbasov", "egOr")); // false
console.log(checkForName("Egor Kolbasov", "Zhenya")); // false
console.log(checkForName("Vadim Nekrasov", "Vadim")); // true
console.log(checkForName("Vadim Nekrasov", "vadim")); // false
console.log(checkForName("Vadim Nekrasov", "Dima")); // false


// 11.

function checkForSpam(message) {
  let result;
  // Change code below this line
   result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
  // Change code above this line
  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));








                            // arrays and functions




      
// const job = function (item) {
//   for (const item of items) {
//     console.log(itme);
//   }
// }

// 1.

function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

// 2.

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return  "Welcome!";
  } 
    return  "Access denied, wrong password!";
}

console.log(checkPassword('mangohackzor'));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));


// 3.

function checkStorage(available, ordered) {
  // Change code below this line
  
  if (ordered === 0) {
    return "Your order is empty!";
  } if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
  return "The order is accepted, our manager will contact you";
  
}


console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

// 4.

// const fruits = ["apple", "plum", "pear", "orange"];

// 5.

// const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length -1];



// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// 6.

// const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line

// fruits [1] = 'peach';
// fruits[3] = 'banana';


7.
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);



8.
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

const lastElementIndex = fruits.length -1;
const lastElement = fruits[lastElementIndex];


// 9.

// function getExtremeElements(array) {
//   // Change code below this line
// return  [array[0], array[array.length -1]];

//   // Change code above this line
// }



// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


function getExtremeElements(array) {
  // Change code below this line
return [array[0], array[array.length -1]];

  // Change code above this line
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// 10.


function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
   words = message.split(delimiter)
  // Change code above this line
  return words;
}

console.log(splitMessage("Mango hurries to the train"));
console.log(splitMessage("Mango"));
console.log(splitMessage("best_for_week"));


11.
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80


function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line

 const totalPrice = pricePerWord * message.split(' ').length;

return totalPrice;
   // Change code above this line
}



console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));


// 12.

function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line

  string = array.join(delimiter);

  // Change code above this line
  return string;
}

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


// 13.


function slugify(title) {
  // Change code below this line
const lowerCaseTitle = title.toLowerCase();

 const slug = lowerCaseTitle.split(' ')   .join("-");
  
return slug;
  // Change code above this line
}




console.log(slugify("Arrays for begginers",  "_"));
console.log(slugify("English for developer",  "_"));
console.log(slugify("Ten secrets of JavaScript",  "_"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS", "_" ));


// 14.

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2) ;
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3) ;

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// 15.                                      method 'concat'


const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line


// 16.                         worked with concat() and slice()


function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
const allTogetherArrays = firstArray.concat(secondArray).slice(0, maxLength);



return allTogetherArrays;
    // Change code above this line
  }

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));

console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));



// 17.


const start = 3;
const end = 7;

for (let i = start; i <= end; i +=1 ) { // Change this line
  console.log(i);
}


// 18.

function calculateTotal(number) {
 // Change code below this line
let sum = 0;
for(let i = 0; i <= number; i +=1){
}
 sum += i;

  return sum;
}

console.log(calculateTotal(1));
console.log(calculateTotal(6));
console.log(calculateTotal(28));
console.log(calculateTotal(171));
console.log(calculateTotal(300));


// 19.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for(i = 0; i < order.length; i += 1){
  total += order[i];
}
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));



// 21.

function findLongestWord(string) {
  // Change code below this line
let longestWord = '';
  
  const divideString = string.split(' ');
  
  for(let i = 0; i < divideString.length; i += 1){
    if(divideString[i].length > longestWord.length){
      longestWord = divideString[i];
    }
  }
  

return longestWord;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));


// 22.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for(let i = min; i <= max; i += 1){
  numbers.push(i);
}
  // Change code above this line
  return numbers;
}


console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));



// 23

function filterArray(numbers, value) {
   // Change code below this line

const newArray = [];

  for(let i = 0; i < numbers.length; i += 1){
    if (numbers[i] > value){
      newArray.push(numbers[i]);
    }
  }

  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));




// 24.

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
 const checkArrayForAvailability = fruits.includes(fruit);
  
  return checkArrayForAvailability; // Change this line
}

console.log(checkFruit('plum'));
console.log(checkFruit('mandarin'));
console.log(checkFruit('pear'));
console.log(checkFruit('apple'));


// 26.

function getCommonElements(array1, array2) {
  // Change code below this line
const newArray = [];

  for(let i = 0; i < array1.length; i += 1){
    if(array2.includes(array1[i]))
      newArray.push(array1[i])
    
  }

return newArray;

}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));




// 27.

