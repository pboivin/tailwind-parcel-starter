const env = process.env.PARCEL_BUILD_ENV;
const purgeFiles = ['src/*.html', 'src/**/*.js'];

module.exports = {
  purge: env === 'production' ? purgeFiles : false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
