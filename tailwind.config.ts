import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rawr-purple": "#BC4AD8",
        "rawr-purple-lt": "#D6A6E2",
        "rawr-beige": "#EFCA9E",
        "rawr-brown": "#6A4125",
        "rawr-black": "#000000",
        "rawr-white": "#FFFFFF",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 8px 32px rgba(0,0,0,0.08)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.14)",
        glow: "0 8px 24px rgba(188,74,216,0.30)",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          from: {
            opacity: "0",
            transform: "translateY(24px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
