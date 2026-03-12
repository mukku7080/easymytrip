/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#1a7fc8",
          500: "#0071c2",
        },

        secondary: {
          500: "#e9f5ff",
        },

        footerdark: {
          500: "#00224f",
        },

        background: {
          500: "#f7fbff",
        },

        muted: {
          500: "#64748b",
        },

        border: {
          500: "#e4e4e7",
        }
      },

      fontFamily: {
        body: ["Inter", "sans-serif"],
      },

      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [],
}