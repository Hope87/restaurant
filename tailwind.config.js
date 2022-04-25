module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('../assets/bg.png')",
      }
    },
    colors: {
      'golden': '#DCCA87',
      'black': '#0C0C0C',
      'gray': '#545454',
      'crimson': '#F5EFDB',
      'white': '#FFFFFF',
      'grey': '#AAAAAA',
    },
    fontFamily: {
      base: ['Cormorant Upright', 'serif'],
      alt: ['Open Sans', 'san-serif'],
    },
  },
  plugins: [],
}
