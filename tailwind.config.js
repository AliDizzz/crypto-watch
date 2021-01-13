module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        
        'layoutBgPic': "url('/BG.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
