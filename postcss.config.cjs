module.exports = {
  plugins: [
    require('postcss-nesting'), // 1. handles official CSS nesting
    require('postcss-nested'),  // 2. handles Sass-style nesting
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};



