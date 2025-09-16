import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Silver and black theme
        brand: {
          50:  '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd', // silver
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529' // near black
        },
        nz: '#0ea5e9'
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        aurora: 'aurora 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;
