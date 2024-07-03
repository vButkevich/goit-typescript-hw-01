/**
 * Ви маєте форму реєстрації користувачів.
 *  Іноді потрібно попередньо заповнити форму
 *  даними користувача для оновлення його профілю.
 *  Однак вам не завжди потрібно заповнити всі поля.
 *  Наприклад, користувач може хотіти оновити лише свій email та пароль,
 *  залишивши ім'я та прізвище без змін.

Використовуючи утиліту Partial та generics,
 виправте тип параметра функції так,
  щоб уникнути помилок типізації.

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: User) {
  // Оновлення користувача
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
 */

console.log("generic:4.ts :>>---------------------------------------- ");

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(user: Partial<User>) {
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  console.log("return :>> ", { ...defaultUser, ...user });
  return { ...defaultUser, ...user };
}

const user123 = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
console.log("user123 :>> ", user123);

const newUser = createOrUpdateUser({
  name: "Alice",
  email: "alice@example.com",
});
console.log("newUser :>> ", newUser);

export {};
