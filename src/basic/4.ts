/*
Завдання 4
У вас є такі функції JavaScript:
Як ви вкажете типи для аргументів і значень цих функцій, що повертаються ?
*/
console.log("basic:4.ts :>>---------------------------------------- ");

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

showMessage("1");
// showMessage(111);

console.log("calc :>> ", calc(1, 2));
// console.log("calc :>> ", calc(1, "2"));

customError();
