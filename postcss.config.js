const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      resolve(id, basedir) {
        if (id.startsWith('@css')) {
          return path.resolve('./src/assets/styles/css', id.slice(5));
        }
        return path.resolve(basedir, id);
      },
    }),
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
