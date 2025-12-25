// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// JavaScript treats the cardNumber variable as a number primitive. The .slice() method, which is used to extract a section of a sequence, is exclusively available on string and array objects.
// The console output here´s TypeError: cardNumber.slice is not a function
// Yes, the prediction was essentially correct. The core problem is that .slice(). 
// The Number object does not have a method named slice. JavaScript reserves this method for sequences like strings and arrays.

// Fix
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4)

console.log(last4Digits)