const merge = require('webpack-merge');
const baseConfig = require('./webpack.confg.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
  },
});
