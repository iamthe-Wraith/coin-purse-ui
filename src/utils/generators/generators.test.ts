import { describe, it, expect } from 'vitest';
import { generateId } from '.';

const numberRegex = /\d/;
const alphaRegex = /[a-zA-Z]/;

describe('Generators', () => {
  describe('generateId', () => {
    describe('alphanumeric', () => {
      it('should return a 16 character, alphanumeric id when no arguments are passed', () => {
        const id = generateId();
        expect(id.length).to.equal(16);
        expect(numberRegex.test(id)).to.be.true;
        expect(alphaRegex.test(id)).to.be.true;
      });

      it('should return a 10 character, alphanumeric id when no count: 10 is passed with no other arguments', () => {
        const id = generateId({ count: 10 });
        expect(id.length).to.equal(10);
        expect(numberRegex.test(id)).to.be.true;
        expect(alphaRegex.test(id)).to.be.true;
      });
    });

    describe('alpha', () => {
      it('should return a 16 character, alpha-only id when alpha is passed as the alpahbet to use', () => {
        const id = generateId({ alphabet: 'alpha' });
        expect(id.length).to.equal(16);
        expect(numberRegex.test(id)).to.be.false;
        expect(alphaRegex.test(id)).to.be.true;
      });

      it('should return a 10 character, alpha-only id when alpha is passed as the alpahbet to use and count is set to 10', () => {
        const id = generateId({ alphabet: 'alpha', count: 10 });
        expect(id.length).to.equal(10);
        expect(numberRegex.test(id)).to.be.false;
        expect(alphaRegex.test(id)).to.be.true;
      });
    });

    describe('numeric', () => {
      it('should return a 16 character, numeric-only id when numeric is passed as the alpahbet to use', () => {
        const id = generateId({ alphabet: 'numeric' });
        expect(id.length).to.equal(16);
        expect(numberRegex.test(id)).to.be.true;
        expect(alphaRegex.test(id)).to.be.false;
      });

      it('should return a 10 character, numeric-only id when numeric is passed as the alpahbet to use and count is set to 10', () => {
        const id = generateId({ alphabet: 'numeric', count: 10 });
        expect(id.length).to.equal(10);
        expect(numberRegex.test(id)).to.be.true;
        expect(alphaRegex.test(id)).to.be.false;
      });
    });
  });
});