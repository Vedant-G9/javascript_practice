//string practice
console.log("STRING PRACTICE");

//String
const singleQuotes = 'hello!';
const doubleQuotes = "hello!!";
const backticks = `after this , ${doubleQuotes} , hello!!!`;

//  use it when needed extented functionality
const backticks_2 = `${2+2}`;

console.log(singleQuotes);
// console.log(doubleQuotes);
console.log(backticks);
console.log(backticks_2);

//Numbers practices
console.log("NUMBER PRACTICE");

const wholeNumber = 77;
const decimalNumber = 0.77;

const firstNumber = 10;
const secondNumber = 5;
const result = firstNumber + secondNumber ;
const result2 = `${firstNumber + secondNumber}` ;

console.log(wholeNumber);
console.log(decimalNumber);

// first result output is number 
console.log(result);
console.log(typeof result);

// result2 output is string
console.log(result2);
console.log(typeof result2);

//Booleans practices

// true - yes , 1
// no - no , 0

const isCool = false;
console.log(isCool);

if(isCool){
    console.log("you are cool");
}else{
    console.log("hi");
}

const age = 20;

console.log(age > 20 );
// console.log(typeof age);