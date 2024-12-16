'use strict'
function isMultiple(num) { 
  return ((num % 3 === 0) && (num % 5 === 0)) ? `${num} FizzBuzz` : 
    (num % 3 === 0) ? `${num} Fizz \n` : 
    (num % 5 === 0) ? `${num} Buzz \n` : `${num} \n`;
}

function mainFizzFazz () {
  let num = 1;
  while(num <= 100) {
    console.log( isMultiple(num++));
  }
}

mainFizzFazz();