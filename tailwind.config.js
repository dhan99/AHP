/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007B87", // teal color from Figma
          dark: "#004248",
          light: "#00626B",
        },
        secondary: {
          DEFAULT: "#C60C30", // red color from Figma
        },
        gray: {
          DEFAULT: "#333333", // text color from Figma
          light: "#757575",
          lighter: "#F0F0F0",
        },
        green: {
          light: "#DCE8E4",
        },
        blue: {
          light: "#F2FBFC",
        },
      },
      backgroundImage: {
        'gradient-hero': "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
        'gradient-background': "linear-gradient(to bottom, #F5F8FA, #D3E3E5)",
      },
      fontFamily: {
        gibson: ["Gibson", "sans-serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
        slate: ["Slate Std", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        tab: "6px 10px 15px 0px rgba(29, 42, 60, 0.03), 2px 60px 49px -39px rgba(29, 42, 60, 0.08)",
      },
    },
  },
  plugins: [],
}; 