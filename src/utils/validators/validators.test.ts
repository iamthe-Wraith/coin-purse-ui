import { describe, it, expect } from 'vitest';
import { validateEmail, validatePassword } from '.';

describe('Validators', () => {
  describe('validateEmail', () => {
    it('should return isValid === true when email is valid', () => {
      const res = validateEmail('test@test.com');
      expect(res.error).to.be.equal('');
      expect(res.isValid).to.be.true;
    });

    it('should return isValid === true if email is empty and not required', () => {
      const res = validateEmail('');
      expect(res.error).to.equal('');
      expect(res.isValid).to.be.true;
    });

    it('should return isValid === false if email is empty and required', () => {
      const res = validateEmail('', true);
      expect(res.error).to.equal('Email is required.');
      expect(res.isValid).to.be.false;
    });

    it('should return isValie === false if email is invalid', () => {
      const res = validateEmail('invalid');
      expect(res.error).to.equal('Invalid email format.');
      expect(res.isValid).to.be.false;
    });
  });

  describe('validatePassword', () => {
    const passwordErrorMessage = 'Passwords must be at least 8 characters long and container at least 1x capital letter, 1x lowercase letter, 1x number, and 1x of the following special characters: !@#$%^&*()-_';

    it('should return isValid === true when password is valid', () => {
      const res = validatePassword('abcABC123!');
      expect(res.error).to.equal('');
      expect(res.isValid).to.be.true;
    });

    it('should return isValid === false if password is empty', () => {
      const res = validatePassword('');
      expect(res.error).to.equal(passwordErrorMessage);
      expect(res.isValid).to.be.false;
    });

    it('should return isValid === false if password is less than 8 chars', () => {
      const res = validatePassword('invalid');
      expect(res.error).to.equal(passwordErrorMessage);
      expect(res.isValid).to.be.false;
    });

    it('should return isValid === false if password has no lowercase letters', () => {
      const res = validatePassword('ABCDEF123!');
      expect(res.error).to.equal(passwordErrorMessage);
      expect(res.isValid).to.be.false;
    });

    it('should return isValid === false if password has no uppercase letters', () => {
      const res = validatePassword('abcdef123!');
      expect(res.error).to.equal(passwordErrorMessage);
      expect(res.isValid).to.be.false;
    });

    it('should return isValid == false if password has no numbers', () => {
      const res = validatePassword('abcdefghi!');
      expect(res.error).to.equal(passwordErrorMessage);
      expect(res.isValid).to.be.false;
    });

    it('should return isValid === false if password has no special chars', () => {
      const res = validatePassword('abcdefghij');
      expect(res.error).to.equal(passwordErrorMessage);
      expect(res.isValid).to.be.false;
    });
  });
});