module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",  // index.html ko bhi include karein
  ],
  theme: {
    extend: {fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    animation: {
      'scroll-down': 'scrollDown 100s linear infinite',
    },
    keyframes: {
      scrollDown: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(100%)' },
      },
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      white2: "#ffffff"
    },},
  },
  plugins: [],
}
