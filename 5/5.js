//1 рівень
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(2, 6));
//==============
function multBy5(num){
    let mult = num * 5;
    console.log(`5 * ${num} = ${mult}`)
}
multBy5(7);
//==============
function max(num1, num2){
    let message = (num1 > num2) ?  num1 : num2;
    return message;
    
}
console.log(max(1,6));
//це з тернарним оператором, вони ще ж можуть дорывнювати один одному тому зроблю ще з if
function maxWithIf(num1, num2){
    if(num1 > num2){
        return num1;
    }else if(num1 < num2){
        return num2;
    }else{
        return "Числа дорівнюють між собою";
    }
}
console.log(maxWithIf(2,2));
//2 рівень
function pow(x , n){
    if(n == 0){
        return 1;
    }else if(x == null){
        return 9;
    }
    let powNumber = x;
    for (let i = 1; i < n; ++i){
        x = x * powNumber;
    }
    return x;
}
console.log(pow());
//2 задача
function sumOrConcatination(value1 = 15, value2 = 15){
    if(typeof value1 == "string" || typeof value2 == "string"){
        console.log("Результат конкатенації: " + value1 + value2);
    }else if(typeof value1 === "number" && typeof value2 === "number"){
        console.log("Результат суми: " + (value1 + value2));
    }else{
        console.log("Некоректні аргументи")
    }
}
sumOrConcatination();
//3 рівень 
function fib(n){
    let a = 1;
    let b = 1;
    let result = 0;
    if (n == 1){
        return 1;
    }else if(n == 2){
        return 3;
    }else if(n == 0 || typeof n == "string"){
        return "Ви ввели неправильне число ";
    }else if (n == null){
        return "Ви нічого не ввели";
    }else{
    for(let i = 3; i <= n; i++){
        result = a + b;
        a = b;
        b = result;
        }
    return result
}
}
console.log(fib(9))


