"use strict";  //новый стандарт

alert(15);
var leftBorderWidht = 1;
let second = 2;
const pi = 3.14;

var number = 5;
var string = "hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4 / 0);
console.log("string" * 9);

let persone = {
    name: "Jon",
    age: 25,
    ismarried: false,
}
console.log(persone.name);
console.log(persone["name"]);

let arr = [
    "plum.png", "apple.bmp", "google.jpeg"
]

console.log(arr[0])

//alert("Helo World!");

let answer = confirm("Ты пользователь?");
console.log(answer);
let anser = prompt("Есть ли вам 18?", "Да");
console.log(anser);
console.log(typeof (anser));
console.log(4 + "- table");

let incr = 10,
    decr = 10;

//incr++;
//decr--;

//console.log(incr);
//console.log(decr);
console.log(incr++); //выводит а птом отнимает
console.log(decr--);

console.log(++incr); // сразу отнимает и выводит
console.log(--decr);
console.log(++incr);

console.log(5 % 2); //выводит остаток от деления двух сумм

console.log("5" == 5); //сравнивает по значению

console.log("5" === 5); // жеское сравнение по типам данных
//putin huilo


let inCeckIn = true,
    inCecOut = false;

console.log(inCeckIn && inCecOut);   //опереатор И
console.log(inCeckIn || inCecOut);   //оператор или
console.log(!inCeckIn || inCecOut); //!отрицание
