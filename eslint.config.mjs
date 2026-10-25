export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
];
