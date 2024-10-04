/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(255,0,150,1), rgba(0,204,255,1))",
      },
    },
  },
  plugins: [],
};
