import { describe, it, expect } from 'vitest';
import { isValidEmail, isValidPassword, isValidUsername } from '.';

describe('Form Validators', () => {
  describe('isValidUsername', () => {
    it('should return true when username is valid', () => {
      expect(isValidUsername('validUsername')).to.be.true;
    });

    it('should return false if username is empty', () => {
      expect(isValidUsername('')).to.be.false;
    });

    it('should return false if username is less than 3 chars', () => {
      expect(isValidUsername('ab')).to.be.false;
    });
  });

  describe('isValidEmail', () => {
    it('should return true when email is valid', () => {
      expect(isValidEmail('test@test.com')).to.be.true;
    });

    it('should return false if email is empty', () => {
      expect(isValidEmail('')).to.be.false;
    });

    it('should return false if email is invalid', () => {
      expect(isValidEmail('invalid')).to.be.false;
    });
  });

  describe('isValidPassword', () => {
    it('should return true when password is valid', () => {
      expect(isValidPassword('abcABC123!')).to.be.true;
    });

    it('should return false if password is empty', () => {
      expect(isValidPassword('')).to.be.false;
    });

    it('should return false if password is less than 8 chars', () => {
      expect(isValidPassword('invalid')).to.be.false;
    });

    it('should return false if password has no lowercase letters', () => {
      expect(isValidPassword('ABCDEF123!')).to.be.false;
    });

    it('should return false if password has no uppercase letters', () => {
      expect(isValidPassword('abcdef123!')).to.be.false;
    });

    it('should return false if password has no numbers', () => {
      expect(isValidPassword('abcdefghi!')).to.be.false;
    });

    it('should return false if password has no special chars', () => {
      expect(isValidPassword('abcdefghij')).to.be.false;
    });
  });
});