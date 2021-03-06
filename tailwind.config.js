module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: "400px",

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      checkboxgrey: "#8A94A6",
      grey: "#4E5D78",
      lightgrey: "#D3D3D3",
      darkgrey: "#4E5D78",
      dirtywhite: "#f5f5f5",
      skyblue: "#377DFF",
    },
  },
  plugins: [],
};
