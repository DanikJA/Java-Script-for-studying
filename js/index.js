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
    discount =`знижка 10% ${GOLD_DISCOUNT}`
  } else if(totalSpent >= 20000 && totalSpent < 50000){
    discount =`знижка 5% ${SILVER_DISCOUNT}`
  } else if(totalSpent >= 5000 && totalSpent < 20000){
    discount =`знижка 2% ${BRONZE_DISCOUNT}`
  }else if (totalSpent < 5000){
   discount = `знижка 0% ${BASE_DISCOUNT}`
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

