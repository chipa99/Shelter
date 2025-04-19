// import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      colors: {
        main: "#ffede1",
        light: "#afcbff",
        secondary: "#f9fbf2",
        thirdary: "#5c7ab3",
      },
      boxShadow: {
        beauty:
          "inset 8px 8px 12px 0px rgba(198, 186, 207, 0.9), inset -8px -8px 12px 0px rgba(242, 235, 252, 0.9)",
      },
    },
    container: {
      padding: {
        DEFAULT: "0rem",
        smm: "1rem",
        "2xl": "3.5rem",
      },
    },
    backgroundImage: {
      terry: "url(/terry.jpg)",
    },
    screens: {
      smm: "320px",
      // => @media (min-width: 320px) { ... }
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
