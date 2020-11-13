const path = require('path');

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\ts$': 'ts-jest',
  },
  setupFiles: ['<rootDir>/tests/unit/setup'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: ['src/components/datepicker/**/*.{ts,js,vue}', '!src/locale/translations/**/*.ts','!src/components/iconview/**/*.vue'],
};
