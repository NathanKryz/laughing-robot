const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');



module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // Set the name and the title of the index file for the PWA
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE'
      }),
      // Reference to the Manifest in the src-sw.js file
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      // Create the webpack manifest for downloads. Its purple because I said so.
      new WebpackPwaManifest ({
        fingerprints: false,
        inject: true,
        name: 'JATE',
        description: 'Just another text editor.',
        background_color: '#9222C3',
        theme_color: '#9222C3',
        start_url: './',
        publicPath: './',
        icons: [
          {
          src: path.resolve('src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
          },
          {
          src: path.resolve('./favicon.ico'),
          sizes: [48],
          destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        // Regex for checking for a .css stylesheet
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          // regex to check for the babel-loader
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
