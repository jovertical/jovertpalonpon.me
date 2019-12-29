module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'css'],
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/components/$1',
    '@constants/(.*)$': '<rootDir>/constants/$1',
    '@helpers/(.*)$': '<rootDir>/helpers/$1',
    '@pages/(.*)$': '<rootDir>/pages/$1',
    '@styles/(.*)$': '<rootDir>/styles/$1',
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