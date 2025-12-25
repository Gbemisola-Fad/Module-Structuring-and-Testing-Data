let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);
console.log(carPrice)
console.log(priceAfterOneYear)
console.log(priceDifference)
console.log(percentageChange)

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* there are 5 functional call in this file, and they´re on the following line: Line 4: replaceAll, Line 5: replaceAll, Line 10: console.log
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
Number(...), carPrice.replaceAll(...)
Number(...), priceAfterOneYear.replaceAll(...)
console.log(\The percentage change is ${percentageChange}`);`*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*After running the code, the error is identified in line 5:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
The error is a SyntaxError because the arguments for the replaceAll() method are not correctly separated. It should be replaceAll(searchValue, replaceValue).
*/
//To fix insert the required comma separator: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
/* Variable reassignment statements change the value of an already declared variable.
This is possible because both variables were declared "let"
The lines that are variable reassignment statement are; 
line 4: carPrice = Number(carPrice.replaceAll(",", "")); 
line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); */

// d) Identify all the lines that are variable declarations
/* This is were new variables are introduce into the scope using "let" or "const".
the following lines are stated to be variable declared;
line 1: "let carPrice"
line 2: "let priceAfterOneYear"
line 7: "const priceDifference"
line 8: "const percentageChange" */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* This expression Number(carPrice.replaceAll(",", "")) is performing data cleaning and type conversion. 
carPrice.replaceAll(",", ""): this is the string method, that searches the string stored in carPrice(10,000) for all the occurrences of the comma character (,)
and then replace it with an empty string ("").
The second part is a builth-in function Number(...), that attempt to convert the resulting clean string ("10000") into numeric data type.
*/

/* The main purpose is to take a price string formatted for human reading and then convert it into valid number type (10000) so that mathematical calculation can be performed correctly.*/