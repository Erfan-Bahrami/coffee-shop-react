/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        homemobile: "url(../images/headerBgMobile.webp)",
        homedekstop: "url(../images/headerBgDesktop.webp)",
        productbg: "url(../CoffeeShop-Files/body-bg.png)",
      },
      colors: {
        brown: {
          100: "",
          300: "",
          600: "",
          900: "",
        },
         'custom-gray': '#d1d5db',
         gray: {
          300: '#d1d5db',
          400: '#9ca3af',
        },
         Darkblue : " #1D2939",
        Darkfade : " #1D293980",
        fade: "#E5E5E5",
        // gray: "#A7A7A7"
      },
      boxShadow: {
        light: "",
        dark: "",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaBold: "Dana Bold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",

         "YekanBakhRegular" :"YekanBakh Regular",
        "YekanBakhMedium" : "YekanBakh Medium",
        "YekanBakhHeavy" : "YekanBakh Heavy",
        "YekanBakhBold" : "YekanBakh Bold" ,
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};