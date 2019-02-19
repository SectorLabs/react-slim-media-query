const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: `${__dirname}/lib/index.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: 'react-slim-media-query.js',
    },
    devtool: false,
    externals: [nodeExternals({
        whitelist: ['json2mq'],
    })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'minify',
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new TerserPlugin(),
    ],
};
