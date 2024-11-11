import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: '.',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // testEnvironment: 'jest-environment-jsdom',

  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/app/**/*.tsx',
    '!src/app/**/layout.tsx',
    'src/contexts/**/*.tsx',
    'src/hooks/**/*.tsx',
    'src/components/**/*.tsx',

    '!src/**/*.spec.tsx',
    '!src/__tests__e2e/**/.ts',
  ],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  // globals: {
  //   fetch,
  // },

  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },

  rootDir: '.',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  testEnvironment: 'jsdom',

  testPathIgnorePatterns: ['/node_modules/', '/.next/', 'src/__tests__/e2e/'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
