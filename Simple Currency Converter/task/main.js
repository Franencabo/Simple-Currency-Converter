console.log("Welcome to Currency Converter!");
console.log("1 USD equals  1 USD");
console.log("1 USD equals  113.5 JPY");
console.log("1 USD equals  0.89 EUR");
console.log("1 USD equals  74.36 RUB");
console.log("1 USD equals  0.75 GBP");


input = require('sync-input');

const currency = {
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "USD": 1,
    "GBP": 0.75
}


const currencyNames = ["JPY", "EUR", "RUB", "USD", "GBP"];

console.log("What do you want to do?")
console.log("1-Convert currencies 2-Exit program")
let value = Number(input());
console.log("What do you want to convert?")
let from = input("From: ").toUpperCase();
let to = input("To: ").toUpperCase();
let amount = input("Amount: ");
let result = amount * currency[to] / currency[from];



    if(currencyNames.includes(from) === false) {
        return "Unknown currency";
        if (currencyNames.includes(to) === false) {
            return "Unknown currency";
        }
        if (isNaN(amount)) {
            return "The amount has to be a number";
        }
        if (amount >= 1) {
            result = result.toFixed(4);
            console.log( `Result: ${amount} ${from} equals ${result} ${to}`);
        } else {
            return "The amount can not be less than 1.";
        }
    }




