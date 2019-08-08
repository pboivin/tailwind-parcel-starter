var rucksack = require('rucksack-css');
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    rucksack(),
    tailwindcss('tailwind.config.js'),
    autoprefixer
  ]
}
