module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src//*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff7f6',
          100: '#ffeef0',
          200: '#ffd6d9',
          300: '#ffb1b7',
          400: '#ff7a84',
          500: '#ff4658',
          600: '#e63b4f',
          700: '#b12b3d',
          800: '#7e1e2b',
          900: '#4e1218',
        },
        blush: '#FFDDE6',
        papaya: '#FFEFD5',
        oceanic: '#2bb3b3',
        coolmint: '#9DF0E1',
        dprimary: '#6e8fc8',
        dsecondary: '#946ca8',
        ddeep: '#233760',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadein: 'fadein .6s ease-in-out',
      },
    },


    
    
  },
  plugins: [require('@tailwindcss/forms')]
};



