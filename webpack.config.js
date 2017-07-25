const webpack = require('webpack')

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.png', '.jpeg', '.jpg', '.svg', '.css'],
        modules: ['node_modules', 'src']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader!ts-loader?typescriptCompiler=jsx-typescript',
                exclude: [/node_modules/]
            }, {
                test: /\.css/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 3,
                        modules: true,
                        minimize: true,
                        localIdentName: '[name]--[local]--[hash:base64:5]'
                    }
                }, {
                    loader: 'autoprefixer-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('postcss-short'),
                                require('postcss-cssnext')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader'
                }]
            }, {
                test: /\.(png|jpg|svg|eot|woff|ttf|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[ext]'
                    }
                }
            }
        ]
    }
}
