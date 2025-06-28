import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	root: 'client',
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path, // keep /api as-is
			},
		},
	},
	build: {
		outDir: path.resolve(__dirname, 'dist/client'),
		emptyOutDir: false,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'client/src'),
		},
	},
})
