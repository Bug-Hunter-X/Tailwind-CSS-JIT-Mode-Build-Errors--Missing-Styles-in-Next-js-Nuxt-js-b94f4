The solution depends on the framework.  Here's a common approach for Next.js:

1. **Ensure Tailwind is configured correctly in `tailwind.config.js`:**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. **Import the generated CSS into your `globals.css` or a similar entry point:**

```javascript
// globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. **(If necessary) Purge unused classes:**  Ensure your content array in `tailwind.config.js` accurately reflects all files where you use Tailwind classes. This is less necessary with JIT mode, but can still be helpful for very large projects.

4. **Rebuild the application:** After making changes to your Tailwind configuration or your application code, ensure you fully rebuild the application using the appropriate framework command (e.g., `npm run build` or `next build` for Next.js).  This ensures that Tailwind generates updated CSS.

If the problem persists, examine your framework's documentation for additional Tailwind integration guides.