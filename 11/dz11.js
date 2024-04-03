let Guest ={
    name: "John",
    isRegistered: false,
}
let User ={
    __proto__: Guest,
    isRegistered: true,
    isAdmin: false,
    email: "email@mail.com",
}
let Admin={
    __proto__: User,
    isAdmin: true,
    addProduct(product){
        console.log(`Я адмін, додаю новий продукт - ${product}`)
    },
}
for(const key in Admin){
    console.log(key + ": ", Admin[key]);
}
//2
//я не зовсім розумію що таке Viacle, але якщо це vehicle то Vehicle це прототип, а від нього наслідується bycicle, а від bycicle наслідується Car
let vehicle = {
    ride(){
        console.log(`Їду на ${this.name} зі швидкістю ${this.speed}`)
    },
}
let bycicle = {
    __proto__: vehicle,
    name: "bycicle",
    speed: "25 km/h",
}
let car = {
    __proto__: vehicle,
    name: "car",
    speed: "80 km/h",
}
bycicle.ride();
car.ride();
//3
let animal = {
    sleep(){
        console.log("Я сплю")
    },
}
let dog = {
    __proto__: animal,
    showVoice(){
        console.log("Гав!")
    },
}
let Pug = {
    __proto__: dog,
    name: "Bob",
    sayHi(){
        console.log(`Доброго вечора! Мене звати ${this.name}`)
    },
    sleep(){
        console.log("Я сплю і храплю");
    }
}
Pug.sleep();
Pug.showVoice();
Pug.sayHi();
//2
let user = {
    _name: "",
    _age: 0,
get name(){
    return this._name;
},
set name(value){
    if(value.length > 2){
        this._name = value
    }else{
        console.log("Неправильне значення ")
    }

},
get age(){
    return this._age;
},
set age(value){
    if(value > 0 ){
        this._age = value;
    }else{
        console.log("Неправильне значення ")
    }
}
}
user.name = "Ів"
user.age = 0;
//3 
function Triangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype.getSquare= function(){
        let p = (this.a + this.b + this.c) / 2
        const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        console.log(square.toFixed(2));

}
const triangle1 = new Triangle(5, 4, 3);
const triangle2 = new Triangle(5, 5, 2);
const triangle3 = new Triangle(4, 4, 4);
triangle1.getSquare(); 
triangle2.getSquare();
triangle3.getSquare();