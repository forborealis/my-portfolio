module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'display': ['Epilogue', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'], 
      },
      colors: {
        ink: '#2d2929',
        muted: '#655b5d',
        canvas: '#fff8f0',
        pink: '#f8bbd0',
        'pink-hover': '#efa9c2',
        'milky-white': '#fff8f0',
        'image-surface': '#e7e4e2',
        'soft-border': 'rgba(45, 41, 41, 0.25)',
        primary: {
          50: '#fff8f0',
          100: '#fce6ee',
          200: '#f8bbd0',
          300: '#efa9c2',
          400: '#df8eae',
          500: '#d8759d',
          600: '#c86289',
          700: '#ac4d71',
          800: '#8d3d5d',
          900: '#71334c',
        }
      }
    },
  },
  plugins: [],
}