module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  overrides: [
    {
      files: ['*.json'],
      options: {
        parser: 'json',
      },
    },
    {
      files: ['*.ts', '*.js', '*.tsx'],
      excludeFiles: ['*.d.ts'],
      options: {
        parser: 'typescript',
      },
    },
  ],
};
