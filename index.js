/*
//javascript 
console.log('hello world')
alert('welcome to my website')

// writing a code that prompts the user to enter their age . if the age is greater than or equal to 18, display an alert 
 // saying you are an adult otherwise display an alert saying you are a minor 
//using prompt and alert 
let age = prompt('please enter your age')
 if (age < 18){
 alert('you are a minor')
 }else if(age >= 18){
 alert('you are an adult');
 }
  // console.log write javascript code that calculate the sum of two numbers (eg 5 , 10) and log the result in console 
 let num1 = 5;
 let num2 = 10;
 let sum = num1 + num2;
 console.log(sum);

 // basic data types : write javascript code to declare variable of each basic data types (string , number , boolean , null undefined)
 let str = 'ola';
 let num = 10;
 let boo = true;
 let nul = null ;
 let und = undefined;

 console.log(typeof str);
 console.log(typeof num);
 console.log(typeof boo);
 console.log(typeof nul);
 console.log(typeof und);

 // arithmetic operators : write javascript code to calculate the area of a rectangle given its lenth and width
 let length = 10;
 let width = 5;
 let area = length * width;
 console.log(area);

 // assignment operators : write javascript code to increment a variable by 5 using both the = and += operator
 let x = 10;
 x += 5;
 console.log(x);

 //Comparison Operators: Write JavaScript code to compare two numbers and log whether they are equal or not to the console
 let firstnum = 5;
 let secondnum = 2;
 if(firstnum === secondnum){
    console.log('they are equal');
 }else {
    console.log('they are not equal');
 }
 //Logical or Boolean Operators: Write JavaScript code to check if a number is both greater than 10 and less than 20
 let enterNum = prompt('enter number')
 let firstNum = 10;
 let secondNum = 20;
 if(enterNum > firstNum && enterNum < secondNum){
    console.log(true)
    }else {
        console.log(false)
    }

    //String Operators: Write JavaScript code to concatenate two strings together
    let str1 = 'ola';
    let str2 = 'ayo';
    console.log(`${str1} is older than ${str2}`);

    //Program Flow: Functions: Write a JavaScript function that takes two parameters and returns their sum.
    function adding2num(a,b){
        return (a + b);
        }
        console.log(`the adding of two parameters ${adding2num(2,5)}`); */
/*
const lighting = true
const  israining = false
 function bringumberella (israining , lighting){
     if (israining  === true && lighting === true){
      return `${israining} its raining and lighting stay at home`
     } else if ( israining === true && lighting === false){
      return `its raining come with your umberella`
     } else if (israining !== true && lighting === true){
       return ` its not raining but its lighting stay at home `
     }     else {
       return `${israining}  its not raining dont bring umberella`
     }
 }
 console.log(bringumberella(israining, lighting));

 //if rain and lighting are happening together stay home , ir only rain is falling, bring your umberella . */

 /*//switch case
 function checkColor(hexCode){
   switch(hexCode){
      case '#fff':
         return 'white';
      case '#000':
         return 'black';
      default:
         return 'unknown'
   }
 }
 console.log(checkColor('#fff')) */

 //check if the value pass is an even number return value is an even number
 //check if value is old number , return value is an old number
//check if value is not number, return the data of value that passed is not a number
/*
function checknum (value){
   if (typeof value !== 'number'){
      return 'not a number'
   }
   switch (value % 0){
    case  0:
      return 'its even number';
      case 1:
         return 'its old number';
      default:
         return `value is not a number`;
   }
}
console.log(checknum('tr'))
*/
/*
80-a+
70 -a
60 -b
50-c
40- d
30-e
20-f */
/*
const result = 89;
if (result >= 80 && result < 100 ){
   console.log(' a+')
}else if (result > 100){
   console.log('out of range')
}
 else if (result >= 70){
   console.log('a')
} else if (result >= 60){
   console.log('b')
} else if (result >= 50){
   console.log('c')
}else if (result >= 40){
   console.log('d')
} else if (result >= 30){
   console.log('e')
} else if (result >= 20){
   console.log('f')
} else{
   console.log('you are terrible')
}
console.log(result)  */     
/*
var a= 4

switch (a) {
	case 4:
		alert( 'Exactly!' );
		break;
	default:
		alert( "I don't know such values" );
		break;
	case 3:
		alert( 'Too small' );
		break;  
	case 5:
		alert( 'Too large' );
		break; 
}
console.log(a) */
// learning while loop
/*
let countnum = 1
while (countnum <= 10) {
   console.log('learning while loop')
   console.log(countnum)
   countnum++
}
*/
/*
const number = parseInt(prompt('enter number'))
let count = 1;

while (count <= 10){
   const product = number * count
   console.log(`${number} * ${count} = ${product}`)
  // console.log(product);
  // count = count + 1;
   count++;
} */
// do while loop
/*
let count = 2;
do{
   console.log(count);
   count++;
   //body of the loop
} while(count <= 6) */
/*
// while loop
var i = 0;
while (i < 5)  {
  console.log(i)
  i++;
} */
/*
// Let’s sum the values of a small array
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
var sum = 0;

// Using the for… in loop
for ( var i in numbers) {
    sum += numbers[i]; // is i a variable and what does it stays for
}
/*
console.log(sum)
// prints 115 */
// Let’s sum the values of a small array
//var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
//var sum = 0;

// Using the for… of loop
//for ( var value of numbers) {
//    sum += value;
// }
//console.log(sum)
// prints 115    

/*
// Let’s sum every second element of the numbers array:
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
var sum = 0;
for ( var i in numbers ) {
        if ( i % 2 == 0 ) continue;
        sum += numbers[i]
}

console.log(sum);
// prints 78
/* 
PS: Notice that we could've written i += 2 in a simple for loop to jump to every second value. 
We’re using continue here just for the sake of the example.
 Whenever i is even, continue moves execution back to the next iteration of i in numbers.
 */

/*
You already know what a break statement looks like, because we learned it when dealing with the switch statement. 
It is doing the same thing in loops. Suppose we want to break out from the loop whenever the sum exceeds 100:
*/
/*
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;

for ( var i in numbers) {
	sum += numbers[i];
	if ( sum >= 100 ) {
            break;
        }
    }
console.log(sum)
// prints 103
*/
// examples of for loop
/*
for (let i = 0 ; i < 10; i++){
   console.log('hello olamilekan', i);
} */

//const studentarr = ['akimu', 'motun', 'Azeez', 'precious']

// console.log(studentarr[2])
/*
// Initializing an object literal with curly brackets
const objectLiteral = {};

// Initializing an object constructor with new Object
const objectConstructor = new Object(); */
/*
// example of for loop
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2 ,1];
var sum = 0
for(let i = 0; i < numbers.length; i++){
   sum += numbers[i];
}
console.log(sum);*/
/*
//  Initializing a gimli object
var gimli = {
   name: "Gimli",
   race: "dwarf",
   weapon: "axe",
   greet: function() {
       return `Hi, my name is ${this.name}!`;
   },
};
// Retrieving the value of the weapon property using the dot notation
console.log(gimli.weapon); // prints “axe”
// Retrieving the value of the weapon property using the bracket notation
console.log(gimli["weapon"]); // prints “axe”  */
/*
//  Initializing a gimli object
var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

// Adding a new age property to gimli using the dot notation
gimli.age = 139;

// Adding new age property to gimli using the dot notation
gimli["age"] = 139;
// Adding a new fight method to gimli
gimli.fight = function() {
    return `Gimli attacks with an ${this.weapon}.`;
}

console.log(gimli)
// prints {name: "Gimli", race: "dwarf", weapon: "axe", age: 139, greet: ƒ, fight: ƒ}

// Calling the newly created method fight
console.log(gimli.fight());
// prints "Gimli attacks with an axe."
*/
/*
// Updating weapon from axe to battle axe
gimli.weapon = "epic battle axe";

// Calling the previously created method fight AGAIN
console.log(gimli.fight());
// prints "Gimli attacks with an epic battle axe." */
/*
//  Initializing a gimli object
const gimli = {
   name: "Gimli",
   race: "dwarf",
   weapon: "axe",
   greet: function() {
       return `Hi, my name is ${this.name}!`;
   },
};

// Removing weapon from gimli
delete gimli.weapon; // Output: true
// We can test the output of gimli to see if it succeeded.
console.log(gimli);
// prints {name: "Gimli", race: "dwarf", greet: ƒ }  
*/

//Write a function that converts hours into seconds.
/*
function howManySeconds(hours) {
	let aminute=60
	let ahour = aminute * 60
	return hours * ahour;
}
console.log(howManySeconds(2)) */

// WE can also use if statement in for loop . this is getting a odd number in a reverse way
/*
for (let i = 9; i >= 1; i--){
   if (i % 2 !== 0) console.log(i);
} */

// getting access to arrays in array 
/*
let ourArrays = [['tizzy', 18 , 'lagos' ], ['chase', 21, 'oyo'],['ola', 11, 'ikeja'], 'bisola' , ['ada', 16, 'mowe']];
let mydata = ourArrays[2][0][2];
console.log(mydata);

let bisData = ourArrays[3];
console.log(bisData);

let adaData = ourArrays[4][0][2];
console.log(adaData); */
// manipulating arrays with push and pop
/*
let ourArray = [['tizzy', 18 , 'lagos' ], ['chase', 21, 'oyo'],['ola', 11, 'ikeja'], 'bisola' , ['ada', 16, 'mowe']];
ourArray.push('precious',['sarah', 20 , 'lekki']);
console.log(ourArray);

let ourArrays = [['tizzy', 18 , 'lagos' ], ['chase', 21, 'oyo'],['ola', 11, 'ikeja'], 'bisola' , ['ada', 16, 'mowe']];
ourArrays.pop('precious',[1]);
console.log(ourArrays); */
// manipulating arrays with shift and unshift
/*
let ourArray = [['tizzy', 18 , 'lagos' ], ['chase', 21, 'oyo'],['ola', 11, 'ikeja'], 'bisola' , ['ada', 16, 'mowe']];
ourArray.shift();
console.log(ourArray);

let ourArrays = [['tizzy', 18 , 'lagos' ], ['chase', 21, 'oyo'],['ola', 11, 'ikeja'], 'bisola' , ['ada', 16, 'mowe']];
ourArrays.unshift('precious',['sarah', 20 , 'lekki']);
console.log(ourArrays); */

// writing functions with global variable and calling it in our function blocks
/*
var globalvar =  6;

function fun1 (params) {
    oopglobalvar = 8;
}

function fun2 (){
   var codeoutput = '';
   if (typeof globalvar !== undefined ){
      codeoutput += 'globalvar is defined: ' + globalvar; 
   
   }
   if (typeof oopglobalvar !== undefined){
      codeoutput += ' oopglobalvar is defined: ' + oopglobalvar;
      newValue = oopglobalvar + 2 + globalvar + 2;
   }
   console.log(codeoutput);
   console.log(newValue);
}
fun1();
fun2(); */

// global variable vs local variable 
/*
var KindOfCar = 'lexus';

function cars (params) {
   var KindOfCar = 'toyota';
   console.log(KindOfCar);
   KindOfCar = 'benz'
   console.log(KindOfCar);
}
cars();
console.log(KindOfCar) */

// function returning data to a new variable
/*
var newVar = 0;
 function funName (data) {
   return data * data / 2;
 }
 newVar = funName(10);
 console.log(newVar);
*/
// write function that pass in  array , item as an argument and add values to each of your argument and remove the first value off your array
/*
function funName (arr , item){

   arr.push(item);
   return arr.shift()

}
var arrayList = [1,6, 8, 9,7]
console.log('before 1 is remove: ' + JSON.stringify(arrayList))
console.log(funName(arrayList, 10));
console.log('after 1 has been remove: ' + JSON.stringify(arrayList)) */

//write a function that return  if a condition is true or false


/* function isTrueOrFalse (istrue){
   if (istrue === true){
      return `yes thats true`
   }
   return `No! thats a lie`
    // if (istrue !== true){
    //  return `no thats false`
   // } 
};
console.log(isTrueOrFalse(false)); 
*/
// write a function that check if the both parameters are  equals return true if they are. if not return false 
/*
 function checkIfEqual (param1, param2){
   if(param1 === param2){
      return `true ! they are equals`
 }
 return `false ! they are not equals`
}
console.log(checkIfEqual(1, '1'));

function checkIfEqual (param1, param2){
   if(param1 === param2){
      return `true ! they are equals`
 }
 return `false ! they are not equals`
}
console.log(checkIfEqual(1, 1)); */
//in the game of golf each hole has  a par which means the average number of strokes youre supposed to use to get the ball into the hole. so , depending on how far above or below 
//or below your par strokes are, theres a different nickname . where are going to write a function where you pass in the par and you also pass in the strokes
/*
var names = ['hole in one', 'eagles', 'birdle', 'par', 'bogey', 'double bogey', 'go home'];

function getGolfScore(par, strokes){
 if (strokes === 1){
   return names[0]
 }else if (strokes <= par - 2 ){
   return names[1]
 }else if (strokes === par - 2 ){
   return names[2]
 }else if (strokes === par - 1){
   return names[3]
 }else if (strokes === par){
   return names[4]
 }else if (strokes === par + 1){
   return names[5]
 }else{
   return names[6]
 }

}
console.log(getGolfScore(5,4)); */

//write a switch statement which tests val and sets answer for the following condition
//1 = 'alpha'
//2 = 'beta'
//3 = 'gamma'
//4 = 'delta'
/*
function caseInSwitch (val){
   let ans = '';
   switch (val) {
      case 1:
         ans = 'alpha';
         break;
         case 2:
            ans = 'beta';
         break;
         case 3:
            ans = 'gamma';
            break;
            case 4:
               ans = 'delta';
               break;
      default:
         ans = 'unknown'
         break;
   }
   return ans;
}
console.log(caseInSwitch(2)); */

 // switch statement with multply case before a return 
 /*
function switchWithMultCases (val) {
   //let answer = '';
   switch (val){
      case 1:
      case 2:
      case 3:
      return 'you are okay';
      break;
      case 4:
      case 5:
      case 6:
         return 'it alright';
         break;
         case 7:
         case 8:
         case 9:
         return 'get better' ;
         break;
         default:
            return 'this is getting worse';


   }
   
}
console.log(switchWithMultCases(100)); */
// switch case statement for a bet game with cards 
/*
var count = 0;

function cc (card){
   switch (card){
      case 1:
      case 2:
      case 3:
      case 4:
         count++;
         break;
      case 10:
      case 'j':
      case 'q':
      case 'k':
      case 'a':
         count--;
         break;
}
var holdbet = 'hold';
if (count > 0){
   holdbet = 'bet';
}
return count + '' + holdbet;
}
cc('q'); cc(3); cc(4); cc(2); cc(1);
console.log(cc(5))
*/
/*
//write a function  to check if an object has a property by using if statement
var myObj = {
   gift : 'cake',
   pet :'kitten',
   bed : 'sleigh',
}
function checkObj (checkProp){
   if (myObj.hasOwnProperty(checkProp)){
      return myObj[checkProp];
}else {
   return 'Not Found';
}
}
console.log(checkObj('tizzy'));
*/
//write a function  to check if an array has a property by using if statement
/*
function checkProperty (arr , property){
   if ( Array.isArray(arr)){
      if (property in arr){
         return true;
   }else{
      false
   }
} else{
   return 'Not an array';
}
}
let myArray = [1, 7, 8, 'ola'];
console.log(checkProperty(myArray,'length'));
console.log(checkProperty(myArray,'ola')); */

// getting access to object in a object and printing that out in  a console
/*
let myStorage = {
   mycar: {
      inside:{
         trunk: 'jeans',
         glovebox: 'map',
         passagerSit: 'crumbs'
      },
      outside:{
         carpet: 'rotten',
         tires: 'flat',
         fuelHole: 'fuel',
      }
   }
}
let outsidecaritem = myStorage.mycar.outside.fuelHole;
console.log(outsidecaritem); */
//gettting access to object property in an arrays
/*
 let myStorage = [
    {
      type: 'mycars',
      listCars: [
         'benz',
         'bmw',
         'toyota',
      ],
         },
         {
      typehouse: 'houses',
      listHouses: [
         'villa',
         'apartment',
         'mansion',
      ]
      },
 ]
 let myChoiceCar = myStorage[0].listCars[0];
 console.log(myChoiceCar);
 let myChoiceHouse = myStorage[1].typehouse;
 console.log(myChoiceHouse) */

 // function for record collections
 /*
 let collection = {
    '2548':{
      album: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']

    },
    '2468':{
      album: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    '1245':{
      album: 'For Your Entertainment',
      artist: 'Adam Lambert',
      tracks:[]
    },
    '5439':{
      album: 'Fear of a Black Planet',
   },
};

//keep a copy of the collection for test
var collectionCopy = JSON.parse(JSON.stringify(collection));

//only change code below this line
function updateRecords(id, prop, value) {
   if (value === ''){
      delete collection[id][prop];

   }else if (prop === 'tracks'){
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
   } else {
      collection[id][prop] = value; 
   }
   return collection;
}
//alter value below to test your code
updateRecords(2468, 'tracks', 'test');
console.log(updateRecords(5439,'artist', 'abba')); */

//write a function that pass in numbers into an empty array using while loop[]
/*
var myarry = [];
var i = 0;
while (i < 5) {
   myarry.push(i);
   i++;
   
}
console.log(myarry, i) */
/*
//write a function that pass in numbers into an empty array using for loop[]
 var myarry = [];
 //var i = 0;
 for(var i =0;i < 5; i++) {
   myarry.push(i);
 }
 console.log(myarry, i); */
 /*
 // write a function that push only even numbers into the array   
 var evenArray = [];
 for(var i = 0; i < 10; i+=2) {
      evenArray.push(i)
 }
 console.log(evenArray); */
/*
 //write a function that add the total of item in an array
 let myarray = [6 , 7, 8, 9];
 let total = 0;

 for (let i = 0 ; i < myarray.length; i++){
   total += myarray[i];
 }
 console.log(total); */
 // using nested for loops with the function to multiply every number in the nested arrays
 /*
 function multiplyAll(arr) {
   let product = 1;
   for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length; j++) {
         product *= arr[i][j];
   }
   
 }
return product;
 }
 let product = multiplyAll([[1,2],[3,4],[5, 6, 7]]);
 console.log(product); */

 // write a fuction that look up to object contact if the name pass in wasnt present in the contact object then our function should return no such contact
/*

let contacts = [
   {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
   },
   {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
   },
   {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
   },
   {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["Javascript", "Gaming", "Foxes"]
   }  
];
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
   if(contacts[i].firstName === name) {
      return contacts[i][prop] || 'no such property';
  }
}
return 'no such contact';
}
var data = lookUpProfile('Sherlock', 'number');
console.log(data); */
 //write a function that pass in a string and return interger
 /*
 function convertToInterger (str){
   return parseInt(str);
 }
 console.log(convertToInterger('bsb'));

 //write a function using the tenary operator
  function checkIfEqual (r , b){
   return r === b ? true : false;
  }
  console.log(checkIfEqual(5,7)); */
  /*
  // using tenary operator write a function that check sign return positive if the number is positive and return negative if thats negative
  function checkSign (num){
   return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';

  }
  console.log(checkSign(5));

  // concating arrays using arrow function
  const myConcat = (arr1, arr2) => arr1.concat(arr2);
  console.log(myConcat([1,2], [3, 4, 5])); */
// creating arr2 from arr1 using the spread operator
/*
  const arr1 = ['jan', 'feb', 'mar', 'apr', 'may'];
  let arr2;
  ( function (){
   arr2 = [...arr1];
   arr1[0] = 'potato'
  })();
  console.log(arr2);
  console.log(arr1);
  */
 //write a function that check for the average temperature of tomorrow by using destructuring and getting it from today temerature
 
 /* const AVG_TEMPERATURE = {
   today: 77.5,
   tomorrow: 79.5,
 };
 function getTempOfTmrw(avgTemperature) {
   const {tomorrow: tempOfTomorrow} = avgTemperature;
   return tempOfTomorrow;

   
 }
 console.log(getTempOfTmrw(AVG_TEMPERATURE)); */
//write a function using destructuring to focast the max of tomorrow from today forcast
 /*const LOCAL_FORECAST = {
   today: { min: 72, max: 83 },
   tomorrow: { min: 73, max: 84.6 },

 };
 function getMaxOfTemp(forecast) {
   const {tomorrow: {max: maxOfTomorrow}} = forecast;
   return maxOfTomorrow;
 }
 console.log(getMaxOfTemp(LOCAL_FORECAST)); */

 // use destructuring assignment to assign variables from arrays
/*
 const [z, x,  ,y] = [1, 2, 3, 4, 5, 6];
 console.log(z, x, y); //ans is gonna be 1, 2, 4, because we already but the space of 3 between [x,  ,y]
 
 let a = 8, b = 6;
 (() => {
   [a, b] = [b, a]
 })();
 console.log(a);
 console.log(b);
 */

 // use the destructuring assignment with the rest operator to write a function that remove the first two element from the array and return the rest
 /*const source = [1,2,3,4,5,6,7,8,9,10];
 function removeFirstTwo(list){
   const [ , , ...arr] = list;
   return arr;
 }
 const arr = removeFirstTwo(source);
 console.log(arr);
 console.log(source); */

 //write a function that return an object  using arrow function 
 /*const createPerson = (name, age, gender) => ({name, age, gender});
 console.log(createPerson('ola ayo', 11, 'male')); */

 //another way to write a function in an object
 /*
 const bicycle = {
   gear: 2,
   setGear(newGear){
      this.gear = newGear;
   }
 };
 bicycle.setGear(3);
 console.log(bicycle.gear); */
 //using getters and setters to get control access to an object

 //User-Defined Functions: Write a JavaScript function to calculate the factorial of a given number.
 /*
 
 */ 

//Function Parameters: Write a JavaScript function that takes a radius as a parameter and calculates the area of a circle.
/*
function calculateArea(radius) {
 return Math.PI * radius * radius;
      
}
let radius = 6;
console.log(calculateArea(radius)); 

//Calling Functions & The Return Statement: Write JavaScript code to call the function you created in the question above and log the result to the console.
function returnStatement (){
   let myfun = calculateArea(radius);
   return myfun;
}
console.log(returnStatement); */

//Program Flow: Conditional Statement: Write JavaScript code to check if a number is positive, negative, or zero.
/*
function checknum(num) {
   if (num > 0){
      return `positive`;
   }
   if (num < 0){
      return `negative`
   } 
   if (num === 0){
      return `number is zero`
   }
   
}
let num = 0;
console.log (checknum(num)); */

//The if Statement: Write JavaScript code that uses an if statement to check if a user's age is greater than or equal to 18
/*
function checkAge (userage){
   if (userage >= 18){
      return `user age is found has an adult`;
      //The else Statement: Write JavaScript code that uses an else statement to display a message if a user's age is less than 18.
   }else{
      return `user age is not upto 18`
   }
}
let userage = 19;
console.log(checkAge(userage)); */

//The else if Statement: Write JavaScript code that uses else if statements to categorize a user's age into different age groups
/*
function checkAges (differentAge){
   if (differentAge <= 4){
      return `user still a baby`;
   }else if (differentAge <= 15){
      return `user still a teen and should be in school or a learning class`;
   } else if (differentAge > 15 && differentAge <= 18){
      return `user is getting mature and might have been having sex`
   }else if (differentAge > 18 && differentAge <= 40){
       return `user is agbalagba and might now have kids`
   } else{
      return `user na arugbo`
   }
} 
const differentAge = 30;
console.log(checkAges(differentAge)); */

//The switch Statement: Write JavaScript code that uses a switch statement to determine the day of the week based on a given number
/*
function daysOfTheWeek (day) {
   switch (day) {
      case 1:
      return `its sunday`;
      break;
      case 2:
      return `its monday`;
      break;
      case 3:
      return `its tueday`;
      break;
      case 4:
      return `its wednesday`;
      break;
      case 5:
      return `its thrusday`;
      break;
      case 6:
      return `its friday`;
      break;
      case 7:
      return`its saturday`;
      break;
      default:
         return `not a day of the week`
         break;
   }
   
}
let day = 9;
console.log(daysOfTheWeek(day)) */

//Program Flow: Loops: Write JavaScript code that uses a for loop to display numbers from 1 to 10 on the console.
/*
let num = 11;
function displaynum (num) {
   for (let i = 1 ; i < num ; i++){
      console.log(i);
   }
   
}
console.log(displaynum(num)) */
