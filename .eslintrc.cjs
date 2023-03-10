module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports'
  ],
  root: true,
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    "semi": "off",
    "@typescript-eslint/semi": "warn",
    indent: 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'react/jsx-curly-spacing': [2, {
      when: 'always',
      allowMultiline: true,
      children: true,
      spacing: {objectLiterals: 'always'}
    }],
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'always'],
    'unused-imports/no-unused-imports': ['error'],
  },
};