Nice 🚀 Migrating a React project from **Create React App (CRA / react-scripts)** to **Vite** is a smart move — faster builds, smaller bundles, and fewer dependency issues.
Here’s a step-by-step guide for you:

---

## ⚡ Step 1: Create a new Vite project

Run this in your project root (or a new folder):

```bash
npm create vite@latest my-app
```

Choose:

- Framework → `React`
- Variant → `JavaScript` (or `TypeScript` if your project uses TS).

Then install:

```bash
cd my-app
npm install
```

---

## ⚡ Step 2: Move your old `src` code

Copy your **old project’s `src/` folder** into the new Vite project, replacing its `src`.

Also move any **assets, components, utils**, etc.

---

## ⚡ Step 3: Update `index.html`

Unlike CRA, Vite keeps `index.html` in the **project root**, not in `public/`.

- Copy your CRA `public/index.html` contents.
- Move favicon, images, etc. from `public/` into `public/` of Vite (or `src/assets/`).
- In `index.html`, replace the CRA root div with Vite’s root:

  ```html
  <div id="root"></div>
  ```

- Add the script:

  ```html
  <script type="module" src="/src/main.jsx"></script>
  ```

---

## ⚡ Step 4: Update entry files

In CRA, you probably had `src/index.js`.
In Vite, the entry is `src/main.jsx`.

Update it like this:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## ⚡ Step 5: Fix environment variables

CRA uses `REACT_APP_` prefix.
Vite uses `VITE_` prefix.

So update `.env` files:

```
REACT_APP_API_URL=http://localhost:5000
```

becomes

```
VITE_API_URL=http://localhost:5000
```

Access in code:

```js
console.log(import.meta.env.VITE_API_URL);
```

---

## ⚡ Step 6: Update scripts in `package.json`

Delete CRA’s `"react-scripts"` commands and add Vite’s:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## ⚡ Step 7: Handle CSS / Assets

- CRA allowed importing assets from `public/`.
- In Vite, static assets go into `public/` or `src/assets/`.
  Example:

  ```jsx
  <img src="/logo.png" />   <!-- public/logo.png -->
  ```

---

## ⚡ Step 8: Test your app

Run:

```bash
npm run dev
```

Your app should now run on `http://localhost:5173/`.

---

✅ That’s it — you’ve migrated from CRA to Vite!

---
