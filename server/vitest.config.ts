import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['server/tests/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
