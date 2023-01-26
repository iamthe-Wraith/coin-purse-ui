import validator from 'validator';

export const isValidUsername = (username: string) => {
  return username.length >= 3 && username.length <= 20;
};

export const isValidEmail = (email: string) => {
  return validator.isEmail(email);
};

export const isValidPassword = (password: string) => {
  if (password.length < 8) return false;
  if (!password.match(/\d/)) return false;
  if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) return false;
  if (!password.match(/[A-Z]/)) return false;
  if (!password.match(/[a-z]/)) return false;

  return true;
};