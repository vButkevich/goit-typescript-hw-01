/**Створіть інтерфейс User для типізації об'єктів,
 *  які містять такі властивості.
 *  Зверніть увагу, що адреса
 * є необов'язковою властивістю. */
interface IAddress {
  city: string;
  country: string;
}
interface IUser {
  name: string;
  age: number;
  email: string;
  address?: IAddress;
}

const mango = {
  name: "Man:IUsergo",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: IUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

console.log("basic:6.ts :>>---------------------------------------- ");
console.log("mango :>> ", mango);
console.log("poly :>> ", poly);

export {};
