console.log("Logical_operator");

//logical operator
// AND=>&&  both have to be same
console.log(true && true);

// AND=>&&  all have to be same
console.log(true && true && true);

// OR=> || any have to be true
console.log(false || true);

// NOT=> ! to not
console.log(!false);

//PART 2

const age = 19;
const isCool = true;

// how to check that the person is cool and above 18

if(isCool && age >18){
    console.log("you may enter");
} else {
    console.log("you cant enter");
}

//In AND && operator if every value is true than it display the last value
console.log('truthy'  && 1 && 'test' && 999);

//In AND && operator if any value is false than it display that value and then stop there
console.log('truthy'  && 0 && 'test' && 999);

//In OR || operator if every value is true than it display that value it will check further
console.log( ''  || 1 || 'test' || 999);

//In OR || operator if every value is False than it display last value 
console.log( ''  || 0 || '' || 999);

//In NOT ! operator if value is true than it reture false and viseversa
console.log(!0);

console.log("truthy and fasly check");

//you can also check that it the value is Falsy or Truthly

console.log(!!'');       //-->false
console.log(!!0);        //-->false
console.log(!!NaN);      //-->false
console.log(!!undefined);//-->false 

console.log(!!'hello');  //-->true
console.log(!!1);        //-->true
console.log(!!{});       //-->true 
console.log(!![]);       //-->true