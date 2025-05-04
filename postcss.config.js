const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')(),
    purgecss.purgeCSSPlugin({
      content: ['./src/**/*.html', './src/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [/^modal/, /^fade/, /^show/, /^btn/, /^data-bs/],
      },
    }),
  ],
};
