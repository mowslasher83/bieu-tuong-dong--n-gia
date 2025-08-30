const path = require('path');

module.exports = {
  // Entry point of the application
  entry: './src/index.js',
  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Module rules for processing different file types
  module: {
    rules: [
      {
        // Transform JavaScript and JSX files
        test: /\.(jsx?)$/,  // Adjusted regex for clarity
        // Exclude node_modules from processing
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            // Babel presets for transforming ES6 and JSX
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  // Resolve file extensions
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Set mode for development
  mode: 'development'
};