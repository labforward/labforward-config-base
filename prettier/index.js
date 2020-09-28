module.exports = {
  singleQuote: true,
  overrides: [
    {
      files: ['*.tsx'],
      options: {
        parser: 'babel-ts', // FIXME: somehow default detected "typescript" parser does not work with .tsx file
      },
    },
  ],
};
