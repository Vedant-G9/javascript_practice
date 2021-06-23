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