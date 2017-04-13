module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Matt Motherway / webxl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "The world-wide-web headquarters of Matt Motherway and webxl industries" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2b6f80' },
  css: [
    'milligram/dist/milligram.min.css'
  ],
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
    // postcss: [
    //   require('postcss-nested')(),
    //   require('postcss-responsive-type')(),
    //   require('postcss-hexrgba')(),
    //   require('autoprefixer')({
    //     browsers: ['last 3 versions']
    //   })
    // ]
  }
};
