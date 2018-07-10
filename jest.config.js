module.exports = {
  setupFiles: [],
  transform: {
    '^.+\\.(ts|tsx?)$': './node_modules/ts-jest/preprocessor.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};
