const merge = require('webpack-merge');
const cssnano = require('cssnano');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = {
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetNameRegExo: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
          global: 'ReactDOM',
        },
      ],
    }),

  ],
  optimization: {
    splitChunks: {
      minSize: 40,
      cacheGroups: {
        commons: {
          // test: /(react|react-dom)/,
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
};


module.exports = merge(baseConfig, prodConfig);
