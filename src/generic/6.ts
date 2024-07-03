/*
У вас є тип Form,
 який містить інформацію про форму,
 включаючи поле errors.
 Ви хочете створити новий тип Params,
  який включає всі поля з Form, крім errors.

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, 
// щоб унеможливити поле 'errors' з типу Form
type Params = Form;
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

// Перевірка типів
const params: Params = {
  email: "email@email.com",
  firstName: "firstName",
  lastName: "lastName",
  phone: "phone-phone-phone",
  //   errors: { email: ["Invalid email format"] }, // Це поле не є частиною Params
};
console.log("generic:6.ts :>>---------------------------------------- ");
console.log("params Form without errors");
console.log("params :>> ", params);
