const path = require("path");
const glob = require("glob");
const Htmlplugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimierPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, "src")
};

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js",
        explore: "./src/explore.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "asset/[hash][ext]",
        clean: true,
    },
    devtool: "source-map",
    optimization: {
        minimizer: [
            `...`,
            new CssMinimierPlugin()
        ],
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, {nodir: true}),
            only: ["explore"],
            safelist: ["unused-css"]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new Htmlplugin({
            template: "./src/index.html",
            chunks: ["index"],
            filename: "index.html"
        }),
        new Htmlplugin({
            template: "./src/explore.html",
            chunks: ["explore"],
            filename: "explore.html",
            inject: "body",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets/images"),
                    to: path.resolve(__dirname, "dist","assets/images"),
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /.(avif|webp|png|jpg|jpeg|svg)$/,
                type: "asset/resource"
            },
            {
                test: /\.(css)$/, 
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /.(ttf|woff|woff2|eot|otf)$/,
                type: "asset/resource"
            }
        ]
    }
}