"use strict"; // строгий режим

// ТИП ДАННЫХ - ЧИСЛА
let number = 3.14;
console.log(4/0); // получим infiniti
console.log("string" * 9); // получим Nan - not a number  

// ТИП ДАННЫХ - СТРОКА
let persone = "Alex"; // строки всегда в кавычках

// ТИП ДАННЫХ - Boolean / булиновое значение
const bool = true; // да
const bool2 = false; // нет

// null / undefine
console.log(something); // null - этой переменной нету 
let und;
console.log(und); // undefined - пустая

// symbol BigInd - Не работал с этими типами данных

// Тип данных ОБЪЕКТ
const obj = {
  name: "John",
  age: 25,
  isMarried: false
};
// console.log(obj.name);
console.log(obj["name"]); // можно так ображаться к объекту

// МАССИВ - разновидность объекта. Тут хранятся данные по порядку
let arr = ["plump", "orange", "apple.bmp", 6, {}, []];
console.log(arr[2]);