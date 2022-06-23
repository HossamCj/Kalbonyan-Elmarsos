const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js',
        utilities: './src/utilities.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name].bundle.js',
        clean: true
    }
}