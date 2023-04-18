// Import the Fraction object from fraction.js
const Fraction = require('fraction.js');

// Define two fractions to subtract
const frac1 = new Fraction(3, 4);
const frac2 = new Fraction(1, 2);

// Perform subtraction
const result = frac1.sub(frac2);

// Display the result
console.log(`The result of subtracting ${frac2} from ${frac1} is: ${result}`);
