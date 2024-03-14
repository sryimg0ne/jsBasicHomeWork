let actor ={

}
actor.name = "Robert";
actor.surname = "Downey";
console.log(actor);
actor.name = "John";
console.log(actor);
delete actor.name;
console.log(actor);
//2 
let phone = +prompt("Введіть номер телефона:");
let contacts ={
    phoneNumber: phone,
    email: "vania2005@gmail.com", 
}
let person ={
    firstName: "Ivan",
    lastName: "Panashenko",
    contacts: contacts,
}
console.log(person);
//3
let topFilms = ["Fight Club", "Memento", "Seven"]
topFilms.unshift("Oppenheimer");
topFilms.push("Inception");
console.log(topFilms);
//рівень 2
    let employee = {
        salary: 2000,
        taxes: 200,
        position: "front-end developer",
        level: "middle",
        showInfo() {
            return this.level + " " + this.position + " " + "заробляє " + this.salary;
        }
            
}
for (let key in employee) { 
    if(typeof employee[key] === "number"){
        employee[key] *= 2;
    }
}
console.log(employee.showInfo());
let employee2 = {
	salary: 3000,
	taxes: 300,
	position: "back-end developer",
	level: "middle",
}
employee2.showInfo = employee.showInfo;
console.log(employee2.showInfo());
//задача 5 
function sumInput(){
    let array = [];
    let arraySum = 0;
    for(let i = 0; ; i++){
        let arrayNumber = prompt("Введіть число, якщо бажаєте закинчити натисніть cancel: ")
        if(arrayNumber === null || arrayNumber === ""){
            break;
        }else{
            array.push(+arrayNumber);
        }
    }
    for(let i = 0; i < array.length; i++){
        arraySum += array[i];
    }
return arraySum;
}
console.log(sumInput());
//6
const person1 = {
    name: "John",
    age: 30,
    job: 'software engineer',
    address: {
     city: "New York",
     country: "USA"
    }
   };
   let{name, age} = person1;
   console.log(name, age);
   let{job: currentJob} = person1;
   console.log(currentJob);
   let{address: {city}} = person1;
   console.log(city);
   let{address: {country: currentCountry}} = person1;
   console.log(currentCountry);
   //7
   let books = {
    countries: [
     {
      country: "Англія",
      authors: [
       {
        author: "Артур Конан Дойль",
        books: [
         {
          title: "Пригоди Шерлока Холмса",
          year: 1887,
          genre: "Роман"
         },
         {
          title: "Загадка Боскомського долу",
          year: 1912,
          genre: "Детектив"
         },
         {
          title: "Загадка Червоного Цирку",
          year: 1927,
          genre: "Детектив"
         }
        ]
       }
      ]
     },
     {
      country: "Україна",
      authors: [
       {
        author: "Макс Кідрук",
        books: [
         {
          title: "Твердиня",
          year: 2013,
          genre: "Роман"
         },
         {
          title: "Нові темні віки",
          year: 2023,
          genre: "Роман"
         }
        ]
       },
       {
        author: "Тарас Шевченко",
        books: [
         {
          title: "Кобзар",
          year: 1840,
          genre: "Роман"
         }
        ]
       }
      ]
     } 
    ]
   }
   let{countries: [{authors: [{books: [firstBook, , thirdBook]}]}]} = books;
   console.log(firstBook, thirdBook);
   let{countries: [, {authors: [{books: [, secondBook]}] }]} = books;
   console.log(secondBook);
   let{countries: [, {authors: [, {books: [{year: yearOfPublicationKobzar}]}]}]} = books;
   console.log(yearOfPublicationKobzar);
   
