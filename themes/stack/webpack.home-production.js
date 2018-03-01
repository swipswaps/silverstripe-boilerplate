// Webpack - Configurazione Home (Sviluppo)
'use strict';

// Dichiarazione Costanti
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: 'css/dist/home.css',
});
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Esportazione modulo
module.exports = {
  // Sorgenti
  entry: [
    './js/index.js',
    './js/home.js',
  ],
  output: {
    filename: 'home.js',
    path: path.resolve(__dirname, './'),
  },
  plugins: [
    // SASS - CSS
    extractSass,
    // Pulizia
    new CleanWebpackPlugin([
      './css/dist/home.css',
      './home.js',
    ]),
  ],
};
