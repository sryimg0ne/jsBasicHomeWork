function showInfo(currency = ""){
    return this.fullName + " на позиції " + this.position + " заробляє " + this.salary + currency;
}
let employee1 = {
    fullName: "Ivan Panashenko", 
    position: "junior",
    salary: 1500,
}
let employee2 = {
    fullName: "Elon Musk", 
    position: "Tech Lead",
    salary: 150000,
    
}
console.log(showInfo.apply(employee1, ["$"]));
console.log(showInfo.apply(employee2, ["грн."]));
let showInfoOfEmployee1 = showInfo.bind(employee1);
let showInfoOfEmployee2 = showInfo.bind(employee2);
console.log(showInfoOfEmployee1("грн"));
console.log(showInfoOfEmployee2("$"));
//завдання 2
let calculator ={
    num1: 0,
    num2: 0,
    
    read(num1, num2){
        this.num1 = num1
        this.num2 = num2
    },
    sum(){
        console.log(this.num1 + this.num2)
    },
    mul(){
        console.log(this.num1 * this.num2)
    },
}
calculator.read(2, 3);
calculator.sum();
calculator.mul();
//завдання 3
let sumOfProducts = 0;
let cart = {
    items: [],
    addItem(title, price){
        this.items.push(title, price);
        return this;
    },
    removeItem(title){
        this.items.splice(this.items.indexOf(title) + 1, 1)
        this.items.splice(this.items.indexOf(title), 1)
        return this;
    },
    calculateTotalPrice(){
        this.items.forEach(function(item){
        if(typeof item === "number"){
            sumOfProducts += item
        }
    });
        console.log(sumOfProducts);

    }
   };
   cart.addItem("Iphone", 1500);
   cart.addItem("Книга", 30);
   cart.addItem("Чашка", 5);
   console.log(cart.items);
   cart.removeItem("Чашка");
   console.log(cart.items);
  cart.calculateTotalPrice();



