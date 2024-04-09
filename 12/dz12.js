class Animal{
    constructor(word){
        this.word = word;
    }
    say(){
        console.log(this.word);
    }
}
const dog = new Animal("Гав!");
dog.say();
const cat = new Animal("Мяу!");
cat.say();
const pig = new Animal("Хрю!");
pig.say();
//2
class Car{
    constructor(name,speed){
        this.model = name;
        this.speed = speed;
    }
    ride(){
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this.model} зупинилась. Швидкість ${this.speed} км/год`);
    }
    gase(){
        this.speed = this.speed + 10;
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    }
    break(){
        this.speed = this.speed - 10;
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`)
    }
}
const bmw = new Car("BMW", 50);
 
bmw.ride() //"BMW їде зі швидкістю 50 км/год"
bmw.gase() //"BMW їде зі швидкістю 60 км/год"
bmw.gase() //"BMW їде зі швидкістю 70 км/год"
bmw.break() //"BMW їде зі швидкістю 60 км/год"
bmw.stop() //"BMW зупинилась. Швидкість 0 км/год"
//3
class TodoList{
    constructor(){
        this.todos = [];
    }
    #show(){
        this.todos.forEach((value, index) => {
            console.log((index + 1) +  ". " + value + "\n")
        });
    }
    addTask(todoTask){
        this.todos.push(todoTask);
        this.#show();
    }
    removeTask(removedTask){
        this.todos = this.todos.filter(item => item !== removedTask);
        this.#show();
    }

};
const todoList = new TodoList(); 
todoList.addTask("Погуляти з собакою");
// 1. Погуляти з собакою

todoList.addTask("Зробити ДЗ по JavaScript");
// 1. Погуляти з собакою
// 2. Зробити ДЗ по JavaScript

todoList.addTask("Подивитись серіал");
// 1. Погуляти з собакою
// 2. Зробити ДЗ по JavaScript
// 3. Подивитись серіал

todoList.removeTask("Погуляти з собакою");
// 1. Зробити ДЗ по JavaScript
// 2. Подивитись серіал
//4
class Viacle{
    constructor(name = "", speed){
        this.name = name;
        this.speed = speed;
    }
    ride(){
        console.log(`${this.name} їде зі швидкістю ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        console.log(`Стоїть. Швидкість ${this.speed}`);
    }
}
class Bicycle extends Viacle{
    ride(){
        super.ride()
        console.log("Крутить педалі")
    }
}
class FireEngine extends Viacle{
    ride(){
        super.ride()
        console.log("Ввімкнув мігалки")
    }
    stew(){
        this.stop();
        console.log("Гасить пожар");
    }
}

const bicycle = new Bicycle("Ровер", 20);
bicycle.ride();
bicycle.stop();

const fireEngine = new FireEngine("Пожарна машина", 90);
fireEngine.ride(); 
fireEngine.stew(); 
//5
class Customer {
    constructor(name){
        this.name = name;
        this.shoppingCart = [];
        this.sum = 0;
        
    }
    addProduct(product){
        if(product instanceof DiscountProduct){
            this.shoppingCart.push(product);
            this.sum += product.calculateDiscountPrice();
        }else{
            this.shoppingCart.push(product);
            this.sum += product.price;
        }
    }
    removeProduct(product){
        if(product instanceof DiscountProduct){
            this.shoppingCart = this.shoppingCart.filter(item => item !== product);
            this.sum -= product.calculateDiscountPrice();
        }else{
            this.shoppingCart = this.shoppingCart.filter(item => item !== product);
            this.sum -= product.price;
        }
    }
    buy(){
        console.log(`${this.name} купив товари ${this.shoppingCart.map(item => item.title).join(", ")} на суму ${this.sum} грн`)
        this.sum = 0;
        this.shoppingCart = [];
    }
}

 class Product{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
 }
 class DiscountProduct extends Product{
    constructor(title, price, percent){
        super(title, price);
        this.discountProduct = percent;
    }
    calculateDiscountPrice(){
        return this.price = this.price - (this.price * this.discountProduct / 100)
    }
 }
 const eggs = new Product("Яйця", 50);
 const porridge = new Product("Гречка", 40);
 const sausage = new DiscountProduct("Ковбаса", 120, 5); 
 const dumplings = new DiscountProduct("Пельмені", 90, 10); 
 
 const customer = new Customer("Василь");
 customer.addProduct(eggs);
 customer.addProduct(porridge);
 customer.addProduct(sausage);
 customer.addProduct(dumplings);
 customer.removeProduct(porridge);
 customer.buy();


