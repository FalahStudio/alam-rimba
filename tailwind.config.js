/** @type {import('tailwindcss').Config} */

const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        secondary: {
          50: "#F0FAFB",
          100: "#D8F0F5",
          200: "#B7E1EA",
          300: "#84CBDC",
          400: "#42A8C2",
          500: "#2F90AB",
          600: "#2A7590",
          700: "#285F76",
          800: "#285062",
          900: "#264453",
          950: "#142B38",
        },
        primary: {
          50: "#ECFAFF",
          100: "#D4F3FF",
          200: "#B3ECFF",
          300: "#7EE2FF",
          400: "#42CEFF",
          500: "#16AFFF",
          600: "#16AFFF",
          700: "#0078FD",
          800: "#0260CB",
          900: "#09539F",
          950: "#07203D",
        },
        alert: {
          success: {
            50: "#F6FEF9",
            100: "#ECFDF3",
            200: "#D1FADF",
            300: "#A6F4C5",
            400: "#6CE9A6",
            500: "#32D583",
            600: "#12B76A",
            700: "#039855",
            800: "#027A48",
            900: "#05603A",
            950: "#054F31",
          },
          warning: {
            50: "#FFFCF5",
            100: "#FFFAEB",
            200: "#FEF0C7",
            300: "#FEDF89",
            400: "#FEC84B",
            500: "#FDB022",
            600: "#F79009",
            700: "#DC6803",
            800: "#B54708",
            900: "#93370D",
            950: "#792E0D",
          },
          danger: {
            50: "#FFFBFA",
            100: "#FEF3F2",
            200: "#FEE4E2",
            300: "#FECDCA",
            400: "#FDA29B",
            500: "#F97066",
            600: "#F04438",
            700: "#D92D20",
            800: "#B42318",
            900: "#912018",
            950: "#7A271A",
          },
        },
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
      fontSize: {
        "display-2xl-bold": [
          "72px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "display-xl-bold": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "display-lg-bold": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "display-md-bold": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "display-sm-bold": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "0rem",
            fontWeight: "700",
          },
        ],
        "display-xs-bold": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0rem",
            fontWeight: "700",
          },
        ],
        "body-xl-bold": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "0rem",
            fontWeight: "700",
          },
        ],
        "body-lg-bold": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0rem",
            fontWeight: "700",
          },
        ],
        "body-md-bold": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0rem",
            fontWeight: "700",
          },
        ],
        "body-sm-bold": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0rem",
            fontWeight: "700",
          },
        ],
        "body-xs-bold": [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0rem",
            fontWeight: "700",
          },
        ],
        "display-2xl-semibold": [
          "72px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "display-xl-semibold": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "display-lg-semibold": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "display-md-semibold": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "display-sm-semibold": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "0rem",
            fontWeight: "600",
          },
        ],
        "display-xs-semibold": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0rem",
            fontWeight: "600",
          },
        ],
        "body-xl-semibold": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "0rem",
            fontWeight: "600",
          },
        ],
        "body-lg-semibold": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0rem",
            fontWeight: "600",
          },
        ],
        "body-md-semibold": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0rem",
            fontWeight: "600",
          },
        ],
        "body-sm-semibold": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0rem",
            fontWeight: "600",
          },
        ],
        "body-xs-semibold": [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0rem",
            fontWeight: "600",
          },
        ],
        "display-2xl-medium": [
          "72px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "display-xl-medium": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "display-lg-medium": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "display-md-medium": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "display-sm-medium": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "0rem",
            fontWeight: "500",
          },
        ],
        "display-xs-medium": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0rem",
            fontWeight: "500",
          },
        ],
        "body-xl-medium": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "0rem",
            fontWeight: "500",
          },
        ],
        "body-lg-medium": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0rem",
            fontWeight: "500",
          },
        ],
        "body-md-medium": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0rem",
            fontWeight: "500",
          },
        ],
        "body-sm-medium": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0rem",
            fontWeight: "500",
          },
        ],
        "body-xs-medium": [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0rem",
            fontWeight: "500",
          },
        ],
        "display-2xl-regular": [
          "72px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        "display-xl-regular": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        "display-lg-regular": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        "display-md-regular": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        "display-sm-regular": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
        "display-xs-regular": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
        "body-xl-regular": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
        "body-lg-regular": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
        "body-md-regular": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
        "body-sm-regular": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
        "body-xs-regular": [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
      },
      blur: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "48px",
        "2xl": "64px",
        "3xl": "80px",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 3px 0px rgba(16, 24, 40, 0.10),0px 1px 1px 0px rgba(16, 24, 40, 0.06)",
        md: "0px 4px 8px -2px rgba(16, 24, 40, 0.10),0px 2px 1px -2px rgba(16, 24, 40, 0.06)",
        lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.10),0px 4px 6px -2px rgba(16, 24, 40, 0.06)",
        xl: "0px 20px 24px -4px rgba(16, 24, 40, 0.10),0px 8px 8px -2px rgba(16, 24, 40, 0.04)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.25)",
        "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.20)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
