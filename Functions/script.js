console.log("function");

//a block of code that perform a task

// Function Declartion ==> Defining a function
function square(number) {
    return number * number;
}


// Function Call ==> invoking/executing of a function
const result = square(5);

console.log(result);

//Function declaration 
function funname(params){
    //statements
    //has access to 'this' keyword
}

//Function Expression
const name1 = function(prams){
    //statements
}

//An Arrow Function 
const name = (prams)  => {
    console.log(`Hi, ${prams}!`);
    //statements
}
name('vedu');


//example

function sayHi(name){
    console.log(`Hi, ${name}!`);
}

sayHi('vedant');

//Function return undefined
//Function return also end the function

function add(a,b){
    return a+b;
}

const sum = add(10,15);
console.log(sum);

//Arrow Function

const sqr = (number) => number*number;

const result1 = sqr(10);
console.log(result1);

console.log("Parameters and Arguments");

// Parameters - used when defining a function
// Arguments - passed when making a function

const sayHII = (namee ='No_Name', age = 0) => {
    console.log(`${namee} age is ${age}`);
}

sayHII();

//default parameters are fail safe system

// Array Find 
// the Find method for arrays returns the first value that statisfies the condition 

console.log("Array Live");

const number1 = [1,2,3,4,5,6,7,8,9];

const numb2 = number1.find((number) => number > 5);

console.log(numb2);

//example2 
const states = ['Rajkot','California','Gondal','Jetpur'];

const state = states.find((state) => state.startsWith('C'));

console.log(state);

//example3
const names = ['Vedant', 'Aaksh', 'Mori','Nishit'];

const name5 = names.find((name) => name.startsWith('M'));

console.log(name5);