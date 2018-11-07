/* ES5 */
const add = function(a, b) {
    return a + b;
}

add(1,2);

/* ES6 */
let multiply = function(a, b) {
    return a * b;
}

multiply = (a, b) => {
    return a * b;
}

multiply = (a, b) => a * b

let double = number => number * 2;

let print = () => 'Sang Hoon';

const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(function(number) {
    return 2 * number;
});

const doubledNumbers = numbers.map((number) => {
    return 2 * number;
});

doubledNumbers = numbers.map(number => 2 * number)