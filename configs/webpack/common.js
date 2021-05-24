// shared config (dev and prod)
const {resolve} = require("path");

module.exports = {
    // __dirnamee은 NodeJS에서 현재 프로젝트 디렉터리를 의미
    // resolve할 파일들의 절대경로
    // context: resolve(__dirname, "../../src"),
    module: {
        rules: [
            {
                // 바벨 사용
                test: [/\.ts|js|jsx|tsx/],
                use: ["babel-loader"],
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        //  파일 확장자
        extensions: ['.ts', '.js', '.jsx', '.tsx']
    },
    target: ["web", "es5"],
}
