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