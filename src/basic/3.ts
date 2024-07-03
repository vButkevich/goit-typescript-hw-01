/**
 * Виконуйте це завдання у файлі src/basic/3.ts.
Створіть змінну, яка може містити або рядок,
 або число (union type)? 

 Також, оголосіть змінну, яка може містити лише 
 одне з двох можливих рядкових значень:
  'enable' або 'disable' (literal type).
 */
console.log("basic:3.ts :>>---------------------------------------- ");

let value: string | number;
value = "text";
console.log("value.s :>> ", value);
value = 777;
console.log("value.n :>> ", value);
// value = true;
// console.log("value.b :>> ", value);

let status: "enable" | "disable";
status = "enable";
console.log("value.e :>> ", status);
status = "disable";
console.log("value.e :>> ", status);

// status = "status";
// console.log("value.e :>> ", status);

export {};
