import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    // Тестовые файлы
    include: ['**/__tests__/**/*.test.js'],
    coverage: {
      provider: 'v8',
      // Папка для отчётов
      reportsDirectory: 'coverage',
      reporter: ['json', 'lcov', 'text', 'clover'],
      // Какие файлы включать в покрытие
      include: ['src/**/*.js'],
    },
  },
})
