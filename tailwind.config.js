/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        josefinsans: ['Josefin Sans'],
      },
      colors: {
        DesaturatedRed: 'hsl(0, 36%, 70%)',
        SoftRed: 'hsl(0, 93%, 68%)',
        DarkGrayishRed: ' hsl(0, 6%, 24%)',
      },
    },
  },
  plugins: [],
};
