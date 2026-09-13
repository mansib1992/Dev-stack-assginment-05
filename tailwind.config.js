/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5E62',
          pink: '#FF3B81',
          violet: '#9B51E0',
          dark: '#0F172A',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF5E62 0%, #FF3B81 50%, #9B51E0 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #FF4B50 0%, #E82A70 50%, #8A3ED0 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 1px 4px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 12px 24px -6px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}
