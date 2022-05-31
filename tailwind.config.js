module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sans'],
      },
      colors:{
        background: '#f8f8f8',
        orange: '#FF6F00',
        purpleText: '#644F9C'
      },
      fontWeight: {
        extrabold: 900,
      }
    },
  },
  plugins: [],
}