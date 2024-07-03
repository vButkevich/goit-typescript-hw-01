/*
Завдання 2
Виконуйте це завдання у файлі src/basic/2.ts.
У вас є наступний JavaScript масив:
let person = ['Max', 21];
Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/
console.log("basic:2.ts :>>---------------------------------------- ");

let person: [string, number];
person = ["Max", 21];
console.log("person :>> ", person);

person = ["Max1", 21];
console.log("person1 :>> ", person);

// person = [21, "Max2"];
console.log("person :>> ", person);

export {};
