"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1.toString() + ' ' + num2.toString();
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
// tsc app.ts without any config
// tsc with tsconfig.json
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1.toString(), num2.toString());
    // console.log(result);
    // console.log(stringResult);
    numResults.push(result);
    stringResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
});
