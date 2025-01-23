module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-red-500", // Add any class you want to ensure Tailwind includes
    "text-white",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
