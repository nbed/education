const path = require("path");
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: "./src/main-element.js",
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './',
 		hot: true
	  },
	output: {
		filename: "app.js",
		// chunkFilename: "[name].chunk.js",
		path: path.resolve(__dirname, 'dist'),
		publicPath: "./dist/"
	},
	stats: {
		modulesSort: "!size",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development'
		  }),
		new webpack.IgnorePlugin(/winston/),
		new webpack.IgnorePlugin(/node-fetch/),
	]
}
