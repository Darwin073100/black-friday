module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outline-sm': '0 0 5px rgba(0, 0, 0, 0.1)', // Sin offset X ni Y
        'outline-md': '0 0 10px rgba(0, 0, 0, 0.15)',
        'outline-lg': '0 0 15px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}