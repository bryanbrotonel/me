/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      animation: {
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'rotate(0.5deg)',
          },
          '20%, 80%': {
            transform: 'rotate(-0.5deg)',
          },
          '30%, 50%, 70%': {
            transform: 'rotate(0.5deg)',
          },
          '40%, 60%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
