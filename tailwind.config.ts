import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gold-centric brand palette for dark theme
        brand: {
          50:  '#fff9e6',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#facc15',
          400: '#eab308',
          500: '#d4af37', // metallic gold
          600: '#b78e2a',
          700: '#8f6e20',
          800: '#6b5218',
          900: '#4a3a11'
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
