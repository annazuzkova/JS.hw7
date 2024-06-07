"use strict";
//1
let array = [1, 2, 3];
array[1] = 10;
console.log(array);
//2
// рядок в сенсі тип данних?
let array1 = ["ky-ky", "ky-ky-ky", "ky-ky-ky-ky"];
array1[3] = "ky";
console.log(array1);
//3
const numbers = [1, 2, 3];
let sum = 0;
for (let number of numbers) {
  //   sum += number;
  console.log(number);
  sum = sum + number;
}
console.log(sum);
//4
const fiveNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < fiveNumbers.length; i += 1) {
  console.log(fiveNumbers[i]);
}
//5
const array2 = ["**", "***", "****", "*****", "******"];
for (let streight of array2) {
  if (streight.length > 5) {
    console.log(streight);
  } else {
    continue;
  }
}
//6
const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let 
//здаюся, навіть з гуглом не змогла
//7
for (let num of someNumbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
