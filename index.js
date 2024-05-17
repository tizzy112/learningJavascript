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





