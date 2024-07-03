/*
У вас є перелік UserRole, 
який використовується для класифікації
 користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription,
   який зіставлятиме кожну роль користувача з її описом.

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
*/

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

console.log("generic:5.ts :>>---------------------------------------- ");
console.log("a :>>", RoleDescription.admin); // 'Admin User'
console.log("e :>>", RoleDescription.editor); // 'Editor User'
console.log("g :>>", RoleDescription.guest); // 'Guest User'
