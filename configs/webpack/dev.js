// development config
const {merge} = require("webpack-merge");
const commonConfig = require("./common");
const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ((env) => {
    console.log(env);
    return merge(commonConfig, {
        mode: "development",
        entry: ['./index.js'],
        context: resolve(__dirname, '../../' + env.resolveName),
        output: {
            path: __dirname,
            publicPath: '/',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.p?css$/,
                    use: [
                        {loader: "style-loader"},
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            }
                        },
                        {loader: "postcss-loader"},
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        devServer: {
            contentBase: './src',
            port: 8000,
            historyApiFallback: true,
        },
        devtool: "cheap-module-source-map",
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
        ],
    })
});
