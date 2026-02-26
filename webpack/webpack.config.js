const path = require('path'); //CommonJS


module.exports = {
    mode: 'development',//modo de desenvolvimento
    entry: './src/index.js', //ponto de entrada
    output:{
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,//extensão dos arquivos
            use: {
                loader: 'babel-loader',//loader para transpilar o código
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devtool: 'source-map',
};
    