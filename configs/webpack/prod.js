// development config
const {merge} = require("webpack-merge");
const commonConfig = require("./common");
const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // bundle한 css, js 파일들을 html 직접 추가해준다.
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css 파일들을 따로 빌드하기 위해서

module.exports = ((env) => {
    console.log(env);
    return merge(commonConfig, {
        mode: "production",
        entry: ['./index.js'],
        context: resolve(__dirname, '../../' + env.resolveName),
        output: {
            path: resolve(__dirname, '../../' + env.resolveName + '_dist'),
            publicPath: '/',
            filename: 'js/bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/i,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                        'postcss-loader'
                    ],
                },
            ],
        },
        devtool: "source-map",
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles/[name].[contenthash].css',
                chunkFilename: '[id].[contenthash].css',
            }),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
        ],
    })
});
