function setLength(obj){
    let lengthCount = Object.keys(obj);
    return lengthCount.length;
}
let actor = {
    name: "Tom Hardy",
    age: 44,
    gender: "Male",
    nationality: "British",
    lastFilm: "Venom: Let There Be Carnage"
    };
    console.log(setLength(actor));
    //2
    function getEntries(obj){
        let entriesArray = []
        for(let key in obj){
        entriesArray.push([key, obj[key]]);
        }
        return entriesArray;
    }
    console.log(getEntries(actor));
//3
let actor1 ={};
Object.defineProperties(actor1, {
    name:{
        value: "Kanye West",
        writable: false,
        enumerable: true,
    },
    age:{
        value: 46,
        enumerable: false,
    },
    lastAlbum: {
        value: "Vultures 1",
        configurable: false,
    }
});
console.log(Object.values(actor1));
//4
function Animal(voice){
    this.voice = voice;
    this.say = function(){
        console.log(this.voice);
    }
}
const dog = new Animal("Гав")
dog.say();
Object.defineProperty(dog, "say", {
    enumerable: false,
})
for (let key in dog) {
    console.log(key); 
}
//5
let car1 = {
    model: "Mersedes",
    price: 50000,
    [Symbol.toPrimitive](hint){
        if(hint === "number"){
            return this.price;
        }
        if(hint === "string"){
            return this.model;
        }
        if(hint ==="default"){
            return this.price;
        }
        
    }
    };
    
let car2 = {
    model: "Audi",
    price: 40000,
    [Symbol.toPrimitive](hint){
        if(hint === "number"){
            return this.price;
        }
        if(hint === "string"){
            return this.model;
        }
        if(hint ==="default"){
            return this.price;
        }
        
    }
    };
console.log(car1 + car2) // 90 000
alert(car1) // Mersedes
alert(car2);
//6
function cloneObject(obj, key1, key2, ...keys){
let clonedObject = Object.assign({key1, key2, keys}, obj);
return clonedObject;
}
const clonedActor = cloneObject(actor, "nationality", "loop", "toop")
console.log(clonedActor);