/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
   theme: {
      extend: {
         container: {
            center: true,
            padding: "1rem",
            screens: {
               md: "720px",
               lg: "1024px",
               xl: "1060px",
               1440: "1280px",
            },
         },
         backgroundImage: {
            header: "url('https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHByb2dyYW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
         },
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            outfit: ["Outfit", "sans-serif"],
         },
         typography: (theme) => ({
            default: {
               css: {
                  pre: {
                     color: theme("colors.grey.1000"),
                     backgroundColor: theme("colors.grey.100"),
                  },
                  "pre code::before": {
                     "padding-left": "unset",
                  },
                  "pre code::after": {
                     "padding-right": "unset",
                  },
                  code: {
                     backgroundColor: theme("colors.grey.100"),
                     color: "#DD1144",
                     fontWeight: "400",
                     "border-radius": "0.25rem",
                  },
                  "code::before": {
                     content: '""',
                     "padding-left": "0.25rem",
                  },
                  "code::after": {
                     content: '""',
                     "padding-right": "0.25rem",
                  },
               },
            },
         }),
      },
   },
   plugins: [require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
