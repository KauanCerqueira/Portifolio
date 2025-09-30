/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          darkest: "#0A0F1C", // fundo principal ainda mais escuro
          dark: "#0D1117",    // fundo secundário
          light: "#161B22",   // blocos/cards
        },
        text: {
          primary: "#F8FAFC",   // branco mais puro
          secondary: "#9CA3AF", // cinza neutro para descrições
        }, 
        animation: {
    "spin-slow": "spin 15s linear infinite",
},
        accent: {
          purple: "#7C3AED", // roxo mais elegante
          coral: "#F43F5E",  // rosa coral para CTAs/hovers
          blue: "#2563EB",   // azul como segunda cor criativa
        },
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(to bottom right, #0A0F1C, #161B22, #0D1117)",
        "gradient-accent":
          "linear-gradient(135deg, #7C3AED 0%, #F43F5E 100%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
