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
        nbaige: "#0E7499",
        nblue: "#144271",
        nbraun: "#dccdb9",
        nlila:  "#B3A9A6",
        ngreen: "#78C39F",
        nbluehome: "#012c53",
        braun: "#412717",
        beige: "#f4dcbc",
        turkis: "#0E7499",
        orange: "#f48716"
      },
    },
  },
  plugins: [],
}