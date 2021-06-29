console.log("---> Arrays in Detail <---");


//odderd collection of data---array

const months = ['january','february','march','Arpil'];

console.log(`type of array is ${typeof months}`);

console.log(months.length); //length

for(let i=0;i<months.length;i++){
    console.log(months[i]);
}

//Arrays function

//Array push

const names = ['vedu','nishit','akash','mori'];

console.log(names.push('vedant'));//------return value is the length of the array+1

console.log(names);

//Array pop

console.log(names.pop());//---------return the deleted value

console.log(names);


//Array shift

names.shift();//---------------delete the first value if the array

console.log(names);

//Array Unshift

names.unshift('vedu');//----------adds a new value to the start of an array

console.log(names);