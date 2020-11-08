// rollup.config.js
import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import PostCSS from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import simplevars from 'postcss-simple-vars';
import typescript from 'rollup-plugin-typescript2';
import minimist from 'minimist';
import nested from 'postcss-nested';
import image from '@rollup/plugin-image';
import postcssImport from 'postcss-import';

import { terser } from 'rollup-plugin-terser';

const postcssPluginList = [
  postcssImport,
  simplevars,
  nested,
  autoprefixer({
    overrideBrowserslist: '> 1%, IE 6, Explorer >= 10, Safari >= 7',
  })
];

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');

const baseConfig = {
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: '@',
            replacement: `${path.resolve(projectRoot, 'src')}`,
          },
        ],
        customResolver: resolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        }),
      }),
    ],
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    },
    vue: {
      target: 'browser',
      preprocessStyles: true,
      postcssPlugins: [...postcssPluginList],
    },
    postVue: [
      PostCSS({
        modules: {
          generateScopedName: '[local]___[hash:base64:5]',
        },
        include: /&module=.*\.css$/,
      }),
      PostCSS({ include: /(?<!&module=.*)\.css$/, plugins: [...postcssPluginList] }),
      image({
        extensions: /\.(png|jpg|jpeg|gif|svg)$/,
        limit: 10000,
      }),
    ],
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      babelHelpers: 'bundled',
    },
  },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
  'vue-slider-component'
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
  'vue-slider-component': 'VueSlider'
};

const baseFolder = './src/';
const componentsFolder = 'components/';

const components = fs
  .readdirSync(baseFolder + componentsFolder)
  .filter((f) => fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory());


const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// Customize configs for individual targets
let buildFormats = [];

if (!argv.format) {
  const esConfig = {
    ...baseConfig,
    input: './src/components/datepicker/Datepicker.vue',
    external,
    output: {
      // format: 'esm',
      // dir: 'dist/esm',
      // exports: 'named',
      format: 'esm',
      file: 'dist/datepicker.esm.js',
    },
    plugins: [
      typescript(),
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [['@babel/preset-env', { modules: false }]],
      }),
    ],
  };
  const cjsBuild = {
    input: './src/components/datepicker/Datepicker.vue',
    external,
    output: {
      // format: 'cjs',
      // dir: 'dist/cjs',
      // exports: 'named',
      format: 'esm',
      file: 'dist/datepicker.cjs.js',
      globals
    },
    plugins: [
      typescript(),
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [['@babel/preset-env', { modules: false }]],
      }),
    ],
  };
  const umdBuild = {
    input: './src/components/datepicker/Datepicker.vue',
    external,
    output: {
      format: 'umd',
      name: capitalize('datepicker'),
      // dir: 'dist/umd',
      // exports: 'named',
      file: 'dist/datepicker.min.js',
      globals
      // globals,
    },
    plugins: [
      typescript(),
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [['@babel/preset-env', { modules: false }]],
      }),
      terser({
        output: {
          comments: '/^!/',
        },
      })
    ],
  };
  buildFormats.push(esConfig);
  buildFormats.push(cjsBuild);
  buildFormats.push(umdBuild);
  buildFormats

}

// Export config
export default buildFormats;
