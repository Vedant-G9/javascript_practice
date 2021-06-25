console.log("Strings in Detail");

//same for both string
const name = 'my name is vedant';
console.log(name);               //single quote
const name1 = "my name is vedant";
console.log(name1);              //double quote   

//backticksks are special because it run everything inside ${-----code----} like a JavaScript logic.

const name2 = `my name isn't vedant it is "Vedu" `;

console.log(name2);


const name3 = `${name} but my friend call me "vedu !" `;

console.log(name3);




console.log("Length and Basic Operation"); //Length and Basic Operation



//String Starts with 0


const name4 = 'vedu is a smart boy';

console.log(`Length of the String ${name4.length}`);//------> length of the String.

console.log(`At 2 Position is ${name4[2]}`);//----------> To get Character of that position ot the String.

const firstLetter = name4[0];
const secondLetter = name4[name4.length - 1];//--->to make string dynamically assign to last position.

console.log(firstLetter, secondLetter);


