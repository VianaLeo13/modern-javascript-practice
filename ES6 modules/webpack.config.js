const path = require('path'); //CommonJS


module.exports = {
    mode: 'development',//modo de desenvolvimento
    entry: './src/main.js', //ponto de entrada
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
                
                },

               test: /\.css$/i,
               use: ['style-loader', 'css-loader'],


            
        }]
    },
    devtool: 'source-map',
};
    