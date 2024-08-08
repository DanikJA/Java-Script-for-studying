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
