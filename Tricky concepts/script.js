console.log("Tricky Concepts");

//--------------------->global Scope
// const name = 'vedu';

// const logName = () => {
//     console.log(`name is ${name}`);
// }

// logName();

//--------------------->local/Function Scope
// const name='veduu'

// const somefunction = () => {
//     const name = 'jenny';
//     console.log(name);
// }

// console.log(name);

// somefunction();

//--------------------->Block Scope

if(1){
    const name='vedu';
    console.log(name);
}

console.log(name);

// hoisting in JavaScript --- leifted to the top of the code while it is local or global.
var age=20;

console.log(age);
    // |
    // |
    // |
    // V WHAT IT ACTUCALLY DOES
    /**
     * var age <---- this is hoisting
     * 
     * console.log(age);
     * 
     * var age=20;
     */