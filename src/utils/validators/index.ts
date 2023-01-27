import isEmail from 'validator/lib/isEmail';

interface IValidationResponse {
  isValid: boolean;
  error?: string;
}

export const validateEmail = (email: string, required?: boolean): IValidationResponse => {
  let error = '';

  if (required && !email?.trim()) error = 'Email is required.';
  if (!error && !!email?.trim() && !isEmail(email)) error = 'Invalid email format.';

  return {
    isValid: !error,
    error,
  };
};

export const validatePassword = (password: string): IValidationResponse => {
  let error = '';

  if (password.length < 8 ||
    !password.match(/\d/) ||
    !password.match(/[!@#$%^&*()-_]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[a-z]/)) {
    error = 'Passwords must be at least 8 characters long and container at least 1x capital letter, 1x lowercase letter, 1x number, and 1x of the following special characters: !@#$%^&*()-_';
  }

  return {
    isValid: !error,
    error,
  };
};