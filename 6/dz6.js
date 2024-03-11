function capitalize(str){
    let firstChar = str.at(0).toUpperCase();
    let restOfStr = str.slice(1).toLowerCase();
    return firstChar + restOfStr;
}
console.log(capitalize("ПрИвіт"));
//2
function reverseString(str){
    let reverseStr = "";
    let strLength = str.length;
for(let i = 1; i <= strLength; i++){
    reverseStr += str.at(strLength  - i);
}
return reverseStr;
}
console.log(reverseString("Привіт"));
//3
function convertToBinary(num){
    let num2Binary = num.toString(2);
    return num2Binary;
}
console.log(convertToBinary((15)));
//4
function generateRandomFloat(n){
    let randomNum = Math.random() * 100;
    let roundedRandomNum = randomNum.toFixed(n);
    return roundedRandomNum;
} 
console.log(generateRandomFloat(2));
//2 рівень 
function  isPalindrom(str){
    let trimmedStr = str.replaceAll(" ", "");
    let loweredCaseTrimmerStr = trimmedStr.toLowerCase();
    let reversedTreimmerStd = reverseString(loweredCaseTrimmerStr);
    return reversedTreimmerStd === loweredCaseTrimmerStr;
}
console.log(isPalindrom("І розморозь зором зорі"))
//2 
function sumOfNumbers(number){
    let parsedNumber = number.toString();
    let sumOfParsedNumbers = 0;
    let parsedNumberLength = parsedNumber.length;
    for(let i = 0; i < parsedNumberLength; i++){
        sumOfParsedNumbers += +parsedNumber.at(i);
    }
    return sumOfParsedNumbers;
}
console.log(sumOfNumbers(234));
//3 рівень 
function toCamelCase(str) {
    let snakeCaseStr = str.toLowerCase(); 
    let newStr = ""; 
    for (let i = 0; i < snakeCaseStr.length; i++) {
        if (snakeCaseStr.charAt(i) === "_") {
            newStr += snakeCaseStr.charAt(i + 1).toUpperCase();
            i++;  
        } else {
            newStr += snakeCaseStr.charAt(i);
        }
    }

    return newStr;
}

console.log(toCamelCase("user_first_name"));


