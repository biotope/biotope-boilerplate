module.exports = {
	watch: false,
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true
				},
				exclude: ['/node_modules/']
			}
		]
	}
};
