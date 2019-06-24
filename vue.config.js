const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin(),
      new BundleAnalyzerPlugin(),
    ],
  },
};
