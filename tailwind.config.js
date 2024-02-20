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
      colors: {
        black: '#1A1A19',
        gray: '#333331',
        lightGray: '#8B8A89',
        white: '#FFFFFF',
        gmail: '#BB001B',
        github: '#6E40C9',
        linkedin: '#0077B5',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-edge-overlay':
          'linear-gradient(to right, #1A1A19 0%, transparent 5%, transparent 95%, #1A1A19 100%)',
      },
    },
  },
  plugins: [],
};
