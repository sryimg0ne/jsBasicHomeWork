let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
array.forEach(function(item, index){
    console.log(`Елемент під індексом ${index}, поевертає значення ${item}`);
});
let mulOnFive = array.map((item) => {
    return item * 5;
});
console.log(mulOnFive);
let compareNumbers = (a, b) => {
    return a - b;
}
console.log(array.sort(compareNumbers));
let reversedCompareNumbers = (a, b) => {
    return a > b ? -1 : 1;
}
console.log(array.sort(reversedCompareNumbers));
let reducedArray = array.reduce((acc, item) => {
    acc += item
    return acc;
}, 0);
console.log(reducedArray);
//рівень 2 
let carNames = ["Mersedes", "Audi", "BMW", "VolksWagen"];
let compareCarNames = (a, b) => {
    return a.length - b.length;
}
console.log(carNames.sort(compareCarNames));
//2 завдання 
let strings = ["Привіт", "Світ", "Привіт", "Світ",
 "Привіт", "Привіт", "Світ", "Світ", ":-O"
];

function unique(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(unique(strings));
//3 рівень 
function unUnique(arr) {
    let duplicate = arr.filter((item, index) => arr.indexOf(item) !== index);
    let numCount = {};
    let maxCount = 0;
    let mostDuplicated = 0;

    for (let num of duplicate) {
        if (numCount[num]) {
            numCount[num]++;
        } else {
            numCount[num] = 1;
        }

        if (numCount[num] > maxCount || (numCount[num] === maxCount && num > mostDuplicated)) {
            maxCount = numCount[num];
            mostFrequentDuplicated = num;
        }
    }

    return mostDuplicated;
}

let numbers = [10, 12, 3, 12, 3, 6, 3, 10, 12];
let result = unUnique(numbers);
console.log(result);


