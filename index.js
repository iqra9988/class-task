let number = prompt(" plz enter a number:");
let sum = 0;

for (let digit of number) {
  sum += parseInt(digit);
}
alert ("The sum of the digits  is: " + sum);