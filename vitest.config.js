import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    // Тестовые файлы
    include: ["**/__tests__/**/*.test.js"],
    coverage: {
      provider: "v8",
      // Папка для отчётов
      reportsDirectory: "coverage",
      reporter: ["json", "lcov", "text", "clover"],
      // Какие файлы включать в покрытие
      include: ["src/**/*.js"],
      // Порог покрытия: ниже него `make test-coverage` падает,
      // и сборка в CI краснеет вместе с ним
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
