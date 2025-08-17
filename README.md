# Task Management (React + Vite)

A simple, modern, and responsive task board built with React and Vite. Add tasks to Pending, advance them to In Progress, and complete them with a click. Clean UI, keyboard-friendly controls, and no CSS frameworks required.

## Features
- **Responsive board**: 1–3 columns depending on screen size
- **Modern styling**: Subtle shadows, rounded cards, and an Inter font
- **Keyboard-friendly**: Focus styles on inputs and clear button labels
- **Zero backend**: Local state only (no persistence)
- **Fast dev**: Vite for instant HMR and quick production builds

## Tech Stack
- **React 19**
- **Vite 7**
- **Vanilla CSS** (custom properties for theming)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm ci
# or
npm install
```

### Development
```bash
npm run dev
```
Open the app at `http://localhost:5173` (default Vite port).

### Production Build
```bash
npm run build
npm run preview
```
`preview` serves the production build locally at `http://localhost:4173`.

## Available Scripts
- `npm run dev`: Start the dev server with HMR
- `npm run build`: Build for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint

## Project Structure
```
src/
  index.css               # Global styles, theme variables, responsive layout
  main.jsx                # App entry
  App.jsx                 # Layout: toolbar + board grid
  Component/
    Context.jsx           # App state (pending, in-progress, completed)
    Input.jsx             # Task input and add button
    Card/
      Card.jsx            # Column component (Completed, Pending, In Progress)
      Card.css            # Column styles
    Task/
      Task.jsx            # Individual task item
      Task.css            # Task item styles
```

## Customize the Theme
Change colors, surfaces, and shadows via CSS variables in `src/index.css` under `:root`.
```css
:root {
  --primary: #6366f1;
  --primary-hover: #5457e4;
  --success: #10b981;
  --warning: #f59e0b;
  --info: #3b82f6;
  --text: #0f172a;
  --muted: #475569;
  --surface: #ffffff;
  --surface-2: #f1f5f9;
  --border: #e5e7eb;
  --shadow: 0 6px 18px rgba(2, 6, 23, 0.08);
}
```

## Notes
- Tasks are stored in React state only and will reset on reload.
- Buttons change label based on status (Start → Complete → Done). Completed tasks have a disabled action.

## License
This project is provided as-is. Add a license file if you plan to distribute.
