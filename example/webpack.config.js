module.exports = {
  entry: './index.jsx',

  mode: 'development',

  output: {
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.mjs', '.js', '.json', '.jsx'],
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx|mjs)$/,
            exclude: /node_modules\/(?!(shap))/,
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/react"
              ]
            },
          },
        ],
      },
    ],
  },
};
