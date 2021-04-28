const path = require('path');
const { NODE_ENV } = process.env;

const nodeExternals = require('webpack-node-externals');

const WebpackShellPlugin = require('webpack-shell-plugin');
const webpack = require("webpack");

module.exports = {
    entry: ["webpack/hot/poll?100", "./src/index.ts"],
    watch: true,
    target: "node",
    externals: [
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    mode: "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    }
};