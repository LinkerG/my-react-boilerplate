module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./src/app/test.ts'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleDirectories: ['node_modules', 'src'],
  };
  