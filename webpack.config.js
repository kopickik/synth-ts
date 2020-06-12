const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  entry: './synth.ts',
  mode: 'development',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
