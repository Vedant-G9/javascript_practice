console.log("Logical and Control flow"); 

const age = 18;

/**
         * if (condition){
         *      block of code
         * } else {
         *      block of code
         * }
 * 
 */
if(age > 18){
    console.log("welcome , you can enter !");
} else if (age === 18){
    console.log("you'er just truned 18 welcome !");
} else {
    console.log("Grow up child !");
}


// Falsy Values --> false
// false
// 0
// ''
// null
// undefined
// NaN


// Truthly Values --> true
// true
// 1
// 'something'
// any thing just not empty {}
// undefined []

if (1){
    console.log("In here");
} else {
    console.log('NO , in here');
}

//small example of truthly and falsy value
const dog = 1;

if (dog){
    console.log(`you have ${dog} dogs`);
} else {
    console.log("NO you don't have dogs");
}