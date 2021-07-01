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

//Array Splice

names.splice(2,0,'johnny','jenny');//-----------adds/removes values from any position of an array

console.log(names);

//Array Slice

const noOneLikesVedu=names.slice(1);//--------copies certain parts if an array into a newly created array

console.log(noOneLikesVedu);

//Array forEach

console.log('---> Array ForEach <---')

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);-------------------simple for loop
// }

//----------------------------------------------------forEach always return undefined values
names.forEach((name,i) => {
    console.log(name);
});

//use when
//use when you want to do with each element of the array

//dont use when
// you want to stop or break the loop when some condotion is true
// working with async code

// Array Map ----allocate memory 

console.log('---> Array Map <---')

const inventory = [
        { price: 5, item_name:'bread'},
        { price: 4, item_name:'butter'},
        { price: 3, item_name:'jam'},
        { price: 5, item_name:'juice'},

];

const prices = inventory.map((item)=> item.price);
console.log(prices);

const items = inventory.map((item)=> item.item_name);
console.log(items);

