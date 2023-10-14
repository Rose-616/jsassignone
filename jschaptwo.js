// Practice exercise 2.1
// What are the types of these variables listed below? Verify this with typeof and
// output the result to the console:
let str1 = 'Laurence';
//string
console.log(typeof(str1))
let str2 = "Svekis";
//string
console.log(typeof(str2))
let val1 = undefined;
//undefined
console.log(typeof(val1))
let val2 = null;
console.log(typeof(val2))
// In the output you can see that
// typeof null returns object, while in fact, null truly is a primitive and not an object.
// This is a bug that has been there since forever and now cannot be removed due to
// backward compatibility problems. Don't worry about this bug, as it won't affect our
// programs
let myNum = 1000;
//number
console.log(typeof(myNum))

// Practice exercise 2.2
// Create a variable for your name, another one for your age, and another one for
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are
// variables:
let myname="rozina";
let age=23;
let cancode=true;
console.log("Hello, my name is" ,myname, "i am",age, "years old and i can code javascript",cancode)

// Practice exercise 2.3
// Write some code to calculate the hypotenuse of a triangle using the Pythagorean
// theorem when given the values of the other two sides. The theorem specifies that the
// relation between the sides of a right-angled triangle is a2
// + b2
// = c2

let sideone = +prompt("Enter the length of the first side:");
let aside = sideone * sideone;

let sidetwo = +prompt("Enter the length of the second side:");
let bside = sidetwo * sidetwo;

let hyp = Math.sqrt(aside + bside);
console.log("The hypotenuse of a triangle using the Pythagorean theorem is", hyp);

// Practice exercise 2.4
// Create variables for three numbers: a, b, and c. Update these variables with the
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c

// JavaScript Essentials

// [ 40 ]

// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console
let numa=+prompt("enter any num");
let numb=+prompt("enter any num");
let numc=+prompt("enter any num");
let mod=numc % numb;
numa=numa+numb;
let div=numa/numc;
numc=mod
console.log(numa)
console.log(div)
console.log(numc)

// Chapter project
// Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the
// value in kilometers in the following format:
// The distance of 130 kms is equal to 209.2142 miles

// JavaScript Essentials

// [ 44 ]
// For reference, 1 mile equals 1.60934 kilometers.
let distmile=+prompt("enter miles");
let distinkm=distmile*1.609344;
console.log("the distance of" ,distinkm,"km is equal to" ,distmile, "miles");

// BMI calculator
// Set values for height in inches and weight in pounds, then convert the values to
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
// divided by squared height (in meters). Output the results to the console.
let height=+prompt("enter your height in inches");
let weight=+prompt("enter your weight in pounds");
let heightincent=height*2.54;
let weightinkilo=weight*0.45359237;
let heightinmeter=heightincent/100;
let bmi=weightinkilo/(heightinmeter*heightinmeter)
console.log("your BMI is", bmi);






