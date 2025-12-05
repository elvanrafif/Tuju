/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#213555',
          700: '#3E5879',
        },
        beige: {
          500: '#D8C4B6',
          100: '#F5EFE7',
        }
      },
      // 👇 IMPLEMENTASI FONT GLOBAL DISINI
      fontFamily: {
        // 'sans' adalah font default untuk semua teks body
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        
        // 'serif' khusus untuk Judul yang elegan
        serif: ['"Libre Baskerville"', 'ui-serif', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}