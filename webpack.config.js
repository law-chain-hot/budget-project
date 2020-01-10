const path = require('path');

module.exports = {

    entry: path.resolve(__dirname + '/app.js'),
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./",
    }

}