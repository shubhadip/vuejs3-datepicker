const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('postcss-simple-vars')({}),
    require('postcss-nested')({}),
    require('autoprefixer')({
      overrideBrowserslist: '> 1%, IE 6, Explorer >= 10, Safari >= 7',
    }),
    require('cssnano')({
      zindex: false,
    }),
  ],
};
