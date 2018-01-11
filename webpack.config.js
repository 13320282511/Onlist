/**
 * Created by zj on 2018/1/10.
 */
// webpack.config.js
const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loader: [
            {
                test: /\.(scss|sass|css)$/,  // pack sass and css files
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!postcss-loader!sass-loader"
                })
            }]
    },
    plugins: [
        // new SpritesmithPlugin({
        //     // 目标小图标
        //     src: {
        //         cwd: path.resolve(__dirname, './src/assets/'),
        //         glob: '*.png'
        //     },
        //     // 输出雪碧图文件及样式文件
        //     target: {
        //         image: path.resolve(__dirname, './dist/img/sprite.png'),
        //         css: path.resolve(__dirname, './dist/img/sprite.css')
        //     },
        //     // 样式文件中调用雪碧图地址写法
        //     apiOptions: {
        //         cssImageRef: '../sprites/sprite.png'
        //     },
        //     spritesmithOptions: {
        //         algorithm: 'top-down'
        //     }
        // })
    ]
};
