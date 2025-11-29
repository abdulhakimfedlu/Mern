<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    brown: '#2C1810',
                    dark: '#1A0F08',
                    red: '#8B0000',
                    gold: '#D4AF37'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 0.8s ease-in-out',
            }
        },
    },
    plugins: [],
}
=======
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brown: '#2C1810',
          dark: '#1A0F08',
          red: '#8B0000',
          gold: '#D4AF37'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
      }
    },
  },
  plugins: [],
}
>>>>>>> a891032ef8186442230062a313fc06b16f614fae
