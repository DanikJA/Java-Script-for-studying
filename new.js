
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

