# Vite React Node TypeScript Starter

A full-stack starter template using **Vite** (React + TypeScript) for the frontend and **Node.js** (Express + TypeScript) for the backend.

---

## Features

- ⚡️ Vite for fast React development
- 🟦 TypeScript on both client and server
- 🔗 Simple Express API backend
- 🛠️ Easy local development with proxy setup

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation


1. **Install dependencies for both client and server**
   ```sh
   npm install
   ```

---

## Development

### 1. **Start the client and server**
```sh
npm run dev
```
- The backend will run on [http://localhost:3000](http://localhost:3000) by default.

### 2. **Start the frontend (Vite) dev server**
```sh
npm run client
```
- The frontend will run on [http://localhost:5173](http://localhost:5173) by default.
- API requests to `/api` are proxied to the backend.

---

## Build for Production

```sh
npm run build
```

---

## Project Structure

```
vite-react-node-ts/
├── client/   # React + Vite  (frontend)
└── server/   # Node.js + Express (backend)
```

---

## License

MIT