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




console.log("---> Length and Basic Operation <---"); //Length and Basic Operation



//String Starts with 0


const name4 = 'vedu is a smart boy';

console.log(`Length of the String ${name4.length}`);//------> length of the String.

console.log(`At 2 Position is ${name4[2]}`);//----------> To get Character of that position ot the String.

const firstLetter = name4[0];
const secondLetter = name4[name4.length - 1];//--->to make string dynamically assign to last position.

console.log(firstLetter, secondLetter);



console.log("---> Changing of Case <---"); // UPPERCASE and lowercase Letters



const mixedCaseString = 'Hello ! How are You ?';//-----> mixed case String

const lowerCaseString = 'hello ! how are you ?';//-----> lowercase String

const LowerCase = mixedCaseString.toLocaleLowerCase();//---> To Lowercase
const UpperCase = lowerCaseString.toLocaleUpperCase();//---> To UPPERCASE

console.log(LowerCase);//lower
console.log(UpperCase);//UPPER 



console.log("-----Searching of SubString-----"); // Searching of SubString


const hobbies = 'I love JavaScript , JavaScript love HTML and CSS ';

// index of ()------->gives index number of the SubString
const firstIndex = hobbies.indexOf('JavaScript');
console.log(`firstIndex ${firstIndex}`);


// lastIndexof ()-->gives last number of the SunString
const lastIndex = hobbies.lastIndexOf('JavaScript');
console.log(`last Index ${lastIndex}`);

// include()------->checks weather that it matches to any SubString in the String
const includesJavaScript = hobbies.includes('react');
console.log(`Is it includes - ${includesJavaScript}`);

// startsWith()---->checks weather that it matches to any Start of the SubString in the String
console.log(`it has anything starts with 'I love' - ${hobbies.startsWith('I love')}`);





console.log('---> Getting for a SubString <---');

//getting a SubString

const expString = 'Vadapav';

//slice();------------->method use to get SubString

const pav = expString.slice(4);

console.log(pav);



//Split a String 
console.log("---> Split a String <---");

//method name -> split()
const expString1 = 'The Quick brown fox jumps over the lazy dog';
const expString2 = expString1.split(' ');


//split()

console.log(expString2);



//revers,repeat and trim a String--------------------------------------


console.log("---> Revers,Repeat and Trim a String <---")


//revers
console.log("Revers-");

const expString3 ='test';
const reversString = expString3.split("").reverse().join("");

console.log(reversString);

//repeat
console.log("Repeat-");

const dogSay = 'woof ';

console.log(dogSay.repeat(4));

//trim
console.log("Trim-");

const expStringtrim = 'Hello , World!    ';
console.log(expStringtrim.trim());
