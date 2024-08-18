import path from 'path';

export default {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.js', // Set the entry point to src/index.js
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
