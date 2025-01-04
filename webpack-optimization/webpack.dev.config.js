const path = require("path");
const Htmlplugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        explore: "./src/explore.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "asset/[hash][ext]",
        clean: true,
    },
    devServer: {
        port: 3000,
    },
    devtool: false,
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
       // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin(),
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
        }),
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
