const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    ['dailyLog/bundle']: path.resolve(__dirname, 'src', 'dailyLog', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../'),
  },
  resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx'],
	},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "image/[name].[ext]"
            },
          }
        ],
      }
    ],
  },
  plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'dailyLog', 'index.html'),
		}),
	],
};
