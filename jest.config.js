/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  // Тестовые файлы
  testMatch: ['**/__tests__/**/*.test.js'],
  // Генерация покрытия кода
  collectCoverage: false,
  coverageDirectory: 'coverage', // папка для отчётов
  coverageReporters: ['json', 'lcov', 'text', 'clover'],

  // Какие файлы включать в покрытие
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  transform: {},
}
