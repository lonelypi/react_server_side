const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
    //Telling for webpack the root file of my server app
    entry: './src/client/index.js',

    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') 
    }
}

module.exports = merge(baseConfig, config)