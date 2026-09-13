# DevStack - Interactive Tech Stack Explorer

**DevStack** is a modern, responsive web application designed for developers to explore, compare, and build their ideal technology stack for web development projects.

---

##  Live Demo & Repository
- **GitHub Repository**: [https://github.com/ProgrammingHero1/B14-A05-DevStack](https://github.com/ProgrammingHero1/B14-A05-DevStack)
- **Live Site**: *(Add your deployment link here — Vercel / Netlify / Surge)*

---

##  Project Overview
DevStack helps developers make informed architectural decisions by categorizing popular frontend, backend, database, language, styling, and DevOps tools. Users can inspect ratings, difficulty levels, and key features, adding their preferred technologies into an interactive "Your Stack" builder.

---

##  Technologies Used
- **React.js (v18)** - Component-driven declarative UI library
- **Vite** - High-performance next-generation frontend build tooling
- **Tailwind CSS** - Modern utility-first styling with custom design tokens
- **React-Toastify** - Interactive, customizable feedback notifications
- **Lucide React** - Clean and lightweight modern icon library
- **JSON** - Dynamic local dataset for technology specifications

---

##  Key Features

1. **Interactive Stack Builder with Duplicate Prevention**:
   - Easily add any technology to your personal stack sidebar with a single click.
   - Real-time duplicate checking prevents adding the same technology twice and alerts the user with dynamic toasts.
   - Dynamic button states indicate whether an item is already added (`✓ Added to Stack`).

2. **Full Stack Management & Clear Actions**:
   - Delete individual technologies with the `✕` action button or clear the entire stack at once with the "Remove All" button.
   - Automatic counter updates dynamically (`X Technology Selected`) with an empty state placeholder when no items are selected.

3. **Responsive Grid & Dynamic JSON Loading**:
   - Fetches 12+ curated technologies dynamically via `useEffect` with a custom dual-tone loading spinner.
   - Clean, mobile-friendly responsive layout (3 columns on desktop, 2 on tablet, 1 on mobile) alongside a sticky navigation header and sidebar.

4. **Unified Brand Aesthetic & Theming**:
   - Reusable gradient system (Orange → Pink → Violet) applied consistently across headings, buttons, and badges.

---

##  Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ProgrammingHero1/B14-A05-DevStack.git
   cd B14-A05-DevStack
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📝 React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside React components. It is used because it combines the visual structure of UI with JavaScript logic in a single file, making code more readable, maintainable, and less error-prone.

### 2. What is the difference between props and state?
**Answer:**
- **Props (Properties):** Read-only data passed from a parent component down to a child component (unidirectional flow). A child component cannot modify the props it receives.
- **State:** Internal, mutable data managed directly within a component. When state changes (via updater functions like `setStack`), React automatically re-renders the component to reflect the update in the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` is a React Hook that lets functional components track and update internal state. In this project, `useState` is used in:
- `App.jsx` to store fetched technology data (`technologies`), track loading state (`isLoading`), and manage selected technologies (`stack`).
- `Navbar.jsx` to manage the mobile hamburger menu open/close toggle state (`mobileMenuOpen`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` lets functional components handle side effects, such as fetching data from an API, setting up timers, or directly modifying the DOM. In this project, `useEffect` was used with an empty dependency array (`[]`) to fetch the `technologies.json` dataset asynchronously once when the application first mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the `key` prop to identify which items in a list have been added, removed, or modified during its Virtual DOM reconciliation process. Giving every list item a unique `key` (such as `tech.id`) allows React to efficiently update only the specific elements that changed rather than re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering is the display of different UI elements or components based on whether a condition is true or false. In `YourStack.jsx`, conditional rendering is used to show either the empty placeholder or the list of selected items:
```jsx
{count === 0 ? (
  <div className="border border-dashed border-slate-200 ...">
    <p>Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-4">
    {stack.map((item) => <StackItem key={item.id} ... />)}
    <button onClick={onRemoveAll}>Remove All</button>
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child:** The parent passes data downwards through **props** (e.g., `<TechGrid stack={stack} />`).
- **Child to Parent:** The parent passes a callback function as a prop (e.g., `<TechCard onAddToStack={handleAddToStack} />`). When an event occurs in the child (e.g., button click), the child invokes that callback function, passing data back up to the parent as arguments (e.g., `onAddToStack(tech)`).
