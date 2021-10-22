"use strict"

// 1
let count
if (count === 100 > 90 ) {
    console.log("отлично");
} else if (count === 89  > 60) {
    console.log("хорошо");
} else if (count === 59 > 40) {
    console.log("удовлетворительно");
} else if (count === 39 > 0) {
    console.log("попробуйте еще раз");
}


// 2
let operand1 = parseInt(prompt("Введите первый операнд"));
let operand2 = parseInt(prompt("Введите второй операнд"));
let operator = prompt("Введите оператор");

switch (operator) {
    case "+":
        console.log(operand1 + operand2);
        break;
    case "-":
        console.log(operand1 + operand2);
        break;
    case "*":
        console.log(operand1 * operand2);
        break;
    case "/":
        console.log(operand1 / operand2);
        break;
    default:
        console.log("Попробуйте ещё раз");
}

// 3
let dishes = parseInt(prompt("Введите количество тарелок"));
let cleanser = parseInt(prompt("Введите количество моющего средства"));
while (dishes >= 1 && cleanser >= 0.5) {
    dishes--;
    cleanser -= 0.5;
    console.log("Очередная тарелка помыта. Осталось моющего средства:", cleanser);
}
if (dishes > 0) {
    console.log("Моющее средство закончилось. Невымытых тарелок осталось:", dishes);
} else {
    console.log("Все тарелки помыты. Моющего средства осталось:", cleanser);
}


// 4
let number = Math.floor(Math.random() * 9) + 1;
let input = 10;
while (input !== number) {
    input = parseInt(prompt("Введите число"));
    if (input === 0) break;
    if (input === number) console.log("Вы угадали");
    else if (input > number) console.log("Загаданное число меньше");
    else console.log("Загаданное число больше");
}
console.log("Работа программы завершена");
