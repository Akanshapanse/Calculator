// Basic Calculator -
//an example to how we can link functions to HTML elements and get user input values

// sumUp will take 2 values and add them together
function sumUp(valueOne, valueTwo) {
  //convert strings to numbers and add together
  return Number(valueOne) + Number(valueTwo); // convert string value to a number value
}

// define some basic variables we need for the calculate function
//const operator = ? // operation
const numberOne = document.getElementById(`numberOne`); //INPUT 1
const numberTwo = document.getElementById(`numberTwo`); //INPUT 2
const result = document.getElementById(`result`); //Output

//Calculate - the fuction that brings it all together
function Add() {
  console.log(numberOne, numberTwo);
  //sum calls the sumUP function and valueOne and valueTwo are provided inside brackets
  let sum = sumUp(numberOne.value, numberTwo.value); //
  console.log(sum);
  console.log(result.value);
  // numberOne.value = will get the input from the user for that box (2, 67, 890)
  result.value = sum.toString();
  //result is converted to a string and applied to the value property of our result input
} /**/
// Substract function
function Subtract(valueOne, valueTwo) {
  return Number(valueOne) - Number(valueTwo);
}
function Substract() {
  console.log(numberOne, numberTwo);
  let Sub = Subtract(numberOne.value, numberTwo.value);
  result.value = Sub.toString();
}

// Multiication function
function Multipication(valueOne, valueTwo) {
  return Number(valueOne) * Number(valueTwo);
}
function Mul() {
  console.log(numberOne, numberTwo);
  let Mul = Multipication(numberOne.value, numberTwo.value);
  result.value = Mul.toString();
}
//division function
function Division(valueOne, valueTwo) {
  return Number(valueOne) / Number(valueTwo);
}
function Div() {
  console.log(numberOne, numberTwo);
  let Div = Division(numberOne.value, numberTwo.value);
  result.value = Div.toString();
}
