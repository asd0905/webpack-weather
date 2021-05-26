// postcss.config.js
// module.exports = {
//     plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//     },
// }

// // postcss.config.js
const isProduction = process.env.NODE_ENV === 'production';
const purgecss = require('@fullhuman/postcss-purgecss');  // 추가

module.exports = {
    plugins: [
        require('postcss-import'), // postcss에서 사양할수 있는 기능중 하나 @import 사용가능
        isProduction ? require('tailwindcss') : false, // tailwind 추가
        isProduction ? purgecss({
            content: ['./src/**/*.{js,jsx,ts,tsx,html}', './src_dist/index.html', './src1/!**/!*.{js,jsx,ts,tsx,html}', './src1_dist/index.html'],
            extractors: [
                {
                    extractor: content => content.match(/[A-z0-9-.:\/]+/g),
                    extensions: ["html", "js", "jsx", "ts", "tsx"]
                }
            ]
        }) : false,
        require('autoprefixer')({ grid : false }), // postcss에서 사양할수 있는 기능중 하나 다양한 브라우저 위함
        // 특히 ie에서는 grid가 완벽히 재현되지 않기때문에 사용하기 위해선 polyfill 사용해야하는데
        // 그냥 grid제거해주는 쪽이 옳바르다고 한다.
        isProduction ? require('cssnano')({ preset: 'default' }) : false, // postcss에서 사양할수 있는 기능중 하나 css 빈칸 없애줌
    ]
}
