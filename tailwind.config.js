/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu-bold": ["UbuntuBold", "sans-serif"],
        "ubuntu-regular": ["UbuntuRegular", "sans-serif"],
        "ubuntu-medium": ["UbuntuMedium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
