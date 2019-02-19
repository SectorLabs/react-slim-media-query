const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: 'react-slim-media-query-demo.js',
    },
    resolve: {
        alias: {
            'react-slim-media-query': `${__dirname}/lib/index.js`,
        },
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'react-slim-media-query demo',
            template: 'src/index.html',
            filename: 'index.html',
            inject: true,
        }),
    ],
};
