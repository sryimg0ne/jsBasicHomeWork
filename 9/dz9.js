let mapWihEverything = new Map();
mapWihEverything.set("name", "Ivan");
mapWihEverything.set("film", "Fight Club");
mapWihEverything.set("book", "1984");
mapWihEverything.set("sport", "volleyball");
mapWihEverything.set("animation", "Shrek");
mapWihEverything.set("number", 123);
mapWihEverything.set("game", "DOTA 2");
mapWihEverything.set("phone", "IPhone");
console.log(mapWihEverything);
mapWihEverything.forEach((key, value) => {
    console.log(key, value);
});
mapWihEverything = Object.fromEntries(mapWihEverything);
console.log(mapWihEverything);
let map2 = Object.entries(mapWihEverything);
console.log(map2);
//2 частина
function mergeArrays(...arr){
    let mergeArray = [];
    for(let i = 0; i < arr.length; i++){
    mergeArray.push(...arr[i]);
}
    let set1 = new Set(mergeArray);
    return set1;
}
console.log(mergeArrays([1, 2, 3, 4, 5], [5, 6]));
//3 завдання 
function aclean(arr){
let map = new Map();
for(const value of arr){
    let sortedArr = value.toLowerCase().split("").sort().join("");
    map.set(sortedArr, value);
}

let uniqueWords = Array.from(map.values())
return uniqueWords;
}
let array = ["материк", "мошкара", "апельсин", "спанієль", "мінотавр", "ромашка", "норматив", "метрика"];
console.log(aclean(array));
//4 завдання

const books = {
    fantastic: {
     "Френк Герберт": [
      {
       title: "Дюна",
       year: 1965,
      },
      {
       title: "Дюна. Месія месіїв",
       year: 1969,
      },
      {
       title: "Діти Дюни",
       year: 1976,
      },
     ],
     "Станіслав Лем": [
      {
       title: "Соляріс",
       year: 1961,
      },
      {
       title: "Соляріс. Зіркові щоденники Ійона Тихого",
       year: 1971,
      },
     ],
    },
    novel: {
     Ремарк: [
      {
       title: "Три товарища",
       year: 1936,
      },
      {
       title: "Триумфальна арка",
       year: 1942,
      },
     ],
     "Джордж Оруелл": [
      {
       title: "1984",
       year: 1949,
      },
      {
       title: "Ферма Господаря Вилки",
       year: 1945,
      },
     ],
    },
    fantasy: {
     "Володар перснів": [
      {
       title: "Братство Кільця",
       year: 1954,
      },
      {
       title: "Дві вежі",
       year: 1954,
      },
      {
       title: "Повернення короля",
       year: 1955,
      },
     ],
     "Гаррі Поттер": [
      {
       title: "Гаррі Поттер і Філософський камінь",
       year: 1997,
      },
      {
       title: "Гаррі Поттер і тайна кімната",
       year: 1998,
      },
     ],
    },
   };
   books[Symbol.iterator] = function(){
    let filmNames = [];
    let i = 0;
    for (const key in this) {
        const authors = this[key];
        for (const author in authors) {
            authors[author].forEach((item) => {
                filmNames.push(item.title);
            });
    }
    return {
        next(){
            if(i < filmNames.length){
                return{value: filmNames[i++], done: false}
            }

            return{done: true}
            
        }
    }
   }
   }
   for (const iterator of books) {
    console.log(iterator);
}