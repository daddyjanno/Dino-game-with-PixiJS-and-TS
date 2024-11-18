const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // Fichiers TypeScript
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.json$/, // Fichiers JSON
                type: 'json', // Charge les fichiers JSON
            },
        ],
    },
    mode: 'development',
}
