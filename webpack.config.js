const webpack = require('webpack')
const {
	resolve
} = require('path')
const srcDir = resolve(__dirname, 'src')

module.exports = {
	entry: `${srcDir}/index.js`,
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			Components: resolve(__dirname, 'src/components/')
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}]
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}