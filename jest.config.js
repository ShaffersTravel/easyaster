/**
 * Jest configuration for the EasyASTA project.
 *
 * Uses ts-jest to compile TypeScript for tests and jsdom as the test environment
 * so components that rely on the DOM can be rendered.  Maps the @/ alias to
 * the app directory so imports work consistently in tests.
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};