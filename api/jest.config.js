module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/app/$1',
    'helpers/(.*)': '<rootDir>/src/helpers/$1'
  }
};