/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nblue: "#144271",
        nbraun: "#5C462A",
        ndarkbraun: "#332008",
        nlila:  "#B3A9A6",
        ngreen: "#78C39F",
        nbluehome: "#012c53",
        nbeige: "#dccdb9",
        nturkis: "#0E7499",
        norange: "#f48716",
        nlightyellow: "#CBE11E"
      },
      screens: {
        'xs': "320px",
        'sm': "576px",
        'md': "768px",
        'lg': "992px",
        'xl': "1200px",
      },
    },
  },
  plugins: [],
}