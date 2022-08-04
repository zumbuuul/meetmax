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
      blue: {
        100: "#D7E5FF",
        200: "#AFCBFF",
        300: "#9FC1FF",
        400: "#5F97FF",
        500: "#377DFF",
        600: "#2350A3",
        700: "#214B99",
        800: "#163266",
        900: "#0B1933",
      },
      green: {
        100: "#D7F5E7",
        200: "#AFEAD0",
        300: "#88E0B8",
        400: "#60D5A1",
        500: "#38CB89",
        600: "#2DA26E",
        700: "#227A52",
        800: "#165137",
        900: "#0B291B",
      },
      yellow: {
        100: "#FFEECC",
        200: "#FFDD99",
        300: "#FFCD66",
        400: "#FFBC33",
        500: "#FFAB00",
        600: "#CC8900",
        700: "#996700",
        800: "#664400",
        900: "#332200",
      },
      red: {
        100: "#FFDDD6",
        200: "#FFBBAC",
        300: "#FF9A83",
        400: "#FF7859",
        500: "#FF5630",
        600: "#CC4526",
        700: "#99341D",
        800: "#662213",
        900: "#33110A",
      },
      grey: {
        100: "#FFFFFF",
        200: "#FAFAFB",
        300: "#F1F2F4",
        400: "#EDEFF2",
        500: "#DCDFE4",
        600: "#B8BEC9",
        700: "#959EAE",
        800: "#717D93",
        900: "#606D85",
        1000: "#57657F",
        1100: "#4E5D78",
      },
      black: { 100: "#191C21", 900: "#212833" },
    },
  },
  plugins: [],
};
