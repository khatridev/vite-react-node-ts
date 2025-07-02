import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: 'client/src/setupTests.ts',
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
