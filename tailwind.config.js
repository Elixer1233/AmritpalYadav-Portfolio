/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: {
          950: '#030208',
          900: '#0a0710',
          800: '#13111c',
          700: '#1d1a2f',
        },
        accent: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          violet: '#8a2be2',
          fuchsia: '#f02fc2'
        }
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
        'aurora': 'aurora 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.02)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      }
    },
  },
  plugins: [],
}
