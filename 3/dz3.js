let userNum = +prompt("Введіть число: ");
if (userNum >= 10){
    console.log("Ваше число більше aбо дорівнює 10");
}
// завдання 2 
let password = prompt("Введіть пароль:")
let rightPassword = "JavaScript1234"
if(password == rightPassword){
    console.log("Ласкаво просимо!"); 
} else{
    console.log("Пароль не вірний!!!");
}
// завдання 3
let message = prompt("Введіть повідомлення:")
if(message){
   console.log('message:', message)
} else if(message == null){
    console.log('Відміна вводу.');
}else if(message == ""){
    console.log('Ви нічого не написали');
}
// завдання 4
let num1 = +prompt("Введіть перше число: ");
let num2 = +prompt("Введіть друге число: ");
if(num1 > num2){
    console.log('перше число більше!');
} else if(num1 < num2){
    console.log('друге число більше!')
} else{
    console.log('числа дорівнюють між собою!')
}
// завдання 5
let isPairedNumber = +prompt("Введіть число для перевірки парності: ");
if(isPairedNumber % 2 === 0){
    console.log('Ваше число парне :)')
}else {
    console.log('Ваше число не парне :(') 
}
// завдання 6
let numOfMonth = +prompt("Введіть номер місяця: ");
let isSummer = numOfMonth == 6 || numOfMonth == 7 || numOfMonth == 8;
let isWinter = numOfMonth == 1 || numOfMonth == 2 || numOfMonth == 12;
let isAutumn = numOfMonth == 9 || numOfMonth == 10 || numOfMonth == 11;
let isSpring = numOfMonth == 3 || numOfMonth == 4 || numOfMonth == 5;
if(isSummer){
    console.log('Summer');
} else if(isWinter){
    console.log('Winter');
}else if(isSpring){
    console.log('Spring');
}else if (isAutumn){
    console.log('Autumn');
}else{
    console.log("Ви ввели неправильне число");
}
// завдання 7 
let diapasonNumber = +prompt("Введіть число: ");
if(diapasonNumber >= 20 && diapasonNumber <= 80){
    console.log('Число в діапазоні')
} else{
    console.log('Число не в діапазоні')
}
// завдання 8
let diapasonNumber2 = +prompt("Введіть число: ");
if( !(diapasonNumber2 < 20 || diapasonNumber2 > 80) )
{
    console.log('Число в діапазоні');
} else
{
    console.log('Число не в діапазоні');
}
// завдання 9 
let login = prompt ("Who`s there?");
 if(login == "Admin"){
    let password = prompt("Enter the password: ")
    if(password == null){
        console.log("Canceled");
    }else if(password == "TheMaster"){
        console.log("Welcome!");
    }else{
        console.log("Wrong password :(");
    }}
else if(login == null){
    console.log("Canceled");
}else{
    console.log('i don`t know you');
} 
