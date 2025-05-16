// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
// Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
// Замініть наступний код на версію за допомогою Record

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserRoleStatus = Record<UserRole, string>;

const RoleDescription: UserRoleStatus = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};
