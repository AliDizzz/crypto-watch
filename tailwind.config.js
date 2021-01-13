module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        
        'layoutBgPic': "url('/BG.jpg')",
        'cryptoBgPic': "url('/BG2.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
