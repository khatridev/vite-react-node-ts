# 🚀 Vite React Node TypeScript Boilerplate

A full-stack boilerplate combining **Vite + React + TailwindCSS** for frontend and **Express + TypeScript** for backend. Built for developer productivity with ESLint, Prettier, Vitest, and hot reload powered by [`tsx`](https://github.com/esbuild-kit/tsx).

---

## ✨ Features

- ⚡️ **Vite + React** for blazing-fast frontend
- 🧰 **Express + TypeScript** backend
- 🎨 **TailwindCSS** for rapid UI styling
- ✅ **ESLint + Prettier** for code quality and consistency
- 🧪 **Vitest + React Testing Library** for frontend testing
- 🔁 **Hot reload** for both client and server using `vite` and `tsx`
- 📦 Organized as a monorepo with separate `client/` and `server/` folders

---

## 📁 Project Structure

```plaintext
vite-react-node-ts/
├── client/    # React + Tailwind frontend
│   ├── src/
│   └── index.html
├── server/    # Express API backend with TypeScript
│   └── src/
├── dist/      # Build output
├── package.json  # Root scripts for monorepo
└── README.md
```

---

## 🚀 Getting Started

### 1. Use this template
You can clone or use this boilerplate directly via degit:

```bash
npx degit khatridev/vite-react-node-ts my-app
cd my-app
npm install
```


### 2. Run Dev Servers (Frontend + Backend concurrently)

```sh
npm run dev
```

- Frontend → http://localhost:5173

- Backend (API) → http://localhost:3000

### 3. Build for Production

```sh
npm run build
```

- Frontend output → dist/client

- Backend output → dist/server

Start the production server:

```sh
npm run start:server
```

---

## 🧪 Testing

Run tests for client

```sh
npm run test:client
```

Run tests for server

```sh
npm run test:server
```

---

## 📜 Scripts Reference

| Command                	| Description                       |
| ---------------------- 	| --------------------------------- |
| `npm run dev`          	| Run client and server in dev mode |
| `npm run client`       	| Run frontend dev server (Vite)    |
| `npm run server`       	| Run backend with hot reload (tsx) |
| `npm run build`        	| Build both frontend and backend   |
| `npm run build:client` 	| Build frontend only               |
| `npm run build:server` 	| Compile backend with TypeScript   |
| `npm run start:server` 	| Run backend from built code       |
| `npm run format`       	| Prettier auto-format all files    |
| `npm run lint:client`     | Run ESLint for client             |
| `npm run lint:server`     | Run ESLint for server             |
| `npm run lint:fix`     	| Run ESLint with auto fix          |
| `npm run test:client`  	| Run tests for client              |
| `npm run test:server`  	| Run tests for server              |

---

## 📄 License

MIT — feel free to use, share, and improve. Contributions welcome!
