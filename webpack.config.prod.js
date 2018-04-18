import path  from 'path'
import webpack from 'webpack';

export default {
    // debug: true,
    devtool: 'source-map',
    
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        // Eliminate duplicate packages when generating bundle
        // new webpack.optimize.DedupePlugin(),

        // Minify JS
        // new webpack.optimize.UglifyJsPlugin()
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                // pass stuff to the loader
            }
        })
    ],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
}