module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'css'],
  moduleNameMapper: {
    '@frontend/(.*)$': '<rootDir>/frontend/$1',
    '@backend/(.*)$': '<rootDir>/backend/$1',
    '@pages/(.*)$': '<rootDir>/pages/$1',
  },
  transform: {
    '.+\\.(css|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
    }
  },
}