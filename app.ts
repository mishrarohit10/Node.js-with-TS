const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button') as HTMLButtonElement;

//  generic is type that interacts with other types
const numResults: number[] = [];
const stringResults: string[] = [];

type NumOrString = number | string;
type Result = { val: number, timestamp: Date };

//  forces class to implement certain methods
interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1: number | string, num2: number | string) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1.toString() + ' ' + num2.toString();
    }
    else {
        return +num1 + +num2;
    }
}

function printResult(resultObj: { val: number, timestamp: Date }) {
    console.log(resultObj.val);
}

// tsc app.ts without any config
// tsc with tsconfig.json

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1.toString(), num2.toString())
    // console.log(result);
    // console.log(stringResult);
    numResults.push(result as number);
    stringResults.push(stringResult as string);
    console.log(numResults, stringResults);
    printResult({ val: result as number, timestamp: new Date() });
});

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});

myPromise.then(result => {
    console.log(result.split('w'));
});

