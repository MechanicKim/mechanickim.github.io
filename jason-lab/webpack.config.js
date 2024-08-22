const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    ['bundle/home']: path.resolve(__dirname, 'src', 'home', 'index.tsx'),
    ['bundle/bookLog']: path.resolve(__dirname, 'src', 'bookLog', 'index.tsx'),
    // ['bundle/dailyLimit']: path.resolve(__dirname, 'src', 'dailyLimit', 'index.tsx'),
    // ['bundle/shop_masmarulez']: path.resolve(__dirname, 'src', 'shop', 'masmarulez', 'index.tsx'),
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
      filename: 'index.html',
      chunks: ['bundle/home'],
			template: path.resolve(__dirname, 'src', 'home', 'index.html'),
		}),
		new HtmlWebpackPlugin({
      filename: 'bookLog/index.html',
      chunks: ['bundle/bookLog'],
			template: path.resolve(__dirname, 'src', 'bookLog', 'index.html'),
		}),
    // new HtmlWebpackPlugin({
    //   filename: 'dailyLimit/index.html',
    //   chunks: ['bundle/dailyLimit'],
		// 	template: path.resolve(__dirname, 'src', 'dailyLimit', 'index.html'),
		// }),
    // new HtmlWebpackPlugin({
    //   filename: 'shop/masmarulez.html',
    //   chunks: ['bundle/shop_masmarulez'],
		// 	template: path.resolve(__dirname, 'src', 'shop', 'masmarulez', 'index.html'),
		// }),
	],
};
