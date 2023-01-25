import { customAlphabet } from 'nanoid';

type Alphabet = 'alpha' | 'numeric' | 'alphanumeric';

const alphaChars = 'abcdefghijklmnopqrstuvwxyz';
const numericChars = '1234567890';

export const generateId = ({ alphabet, count }: { alphabet?: Alphabet, count?: number }) => {
  const _count = count || 16;
  let _alphabet: string;

  switch (alphabet) {
    case 'alpha':
      _alphabet = alphaChars;
      break;
    case 'numeric':
      _alphabet = numericChars;
      break;
    default:
      _alphabet = `${alphaChars}${numericChars}`;
      break;
  }

  const nanoid = customAlphabet(_alphabet);
  return nanoid(_count);
};