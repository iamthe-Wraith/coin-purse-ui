import isEmail from 'validator/lib/isEmail';

interface IValidationResponse {
  isValid: boolean;
  error?: string;
}

export const validateEmail = (email: string, required?: boolean): IValidationResponse => {
  let error = '';

  if (required && !email.trim()) error = 'Email is required.';
  if (!error && !isEmail(email)) error = 'Invalid email format.';

  return {
    isValid: !error,
    error,
  };
};

export const validatePassword = (password: string): IValidationResponse => {
  let error = '';

  // TODO: add check for uppercase letter
  // TODO: add check for lowercase letter
  // TODO: add check for number
  // TOOD: add check for special char
  if (password.length < 8) {
    error = 'Passwords must be at least 8 characters long and container at least 1x capital letter, 1x lowercase letter, 1x number, and 1x of the following special characters: !@#$%^&*()';
  }

  return {
    isValid: !error,
    error,
  };
};