// development config
const {merge} = require("webpack-merge");
const commonConfig = require("./common");

module.exports = (() => {
    return merge(commonConfig, {
        mode: "development",
        entry: ['./index.js'],
        output: {
            path: __dirname,
            publicPath: '/',
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: './',
            port: 8100,
        },
        devtool: "cheap-module-source-map"
    })
});
