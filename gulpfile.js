(function () {
    "use strict";

    let gulp = require("gulp");
    let sourcemaps = require("gulp-sourcemaps");
    let babel = require("gulp-babel");
    let concat = require("gulp-concat");
    let gulpWebpack = require('webpack-stream'),
        webpack = require('webpack');

    let UnminifiedWebpackPlugin = require('unminified-webpack-plugin');


    gulp.task("default", function () {
        return gulp.src("src/**/*.*")
            .pipe(gulpWebpack({
                module: {
                    loaders: [{
                        exclude: /node_modules/,
                        loader: 'babel'
                    }]
                },
                plugins: [new webpack.optimize.UglifyJsPlugin({
                    sourceMap : true
                }), new UnminifiedWebpackPlugin()],
                devtool: 'source-map',
                output: {
                    filename: "mimetype.min.js"
                }
            }))
            .pipe(gulp.dest("dist"));
    });

    gulp.task('babel', [], function () {
        return gulp.src("src/**/*.*")
            .pipe(babel())
            .pipe(gulp.dest("dist"));
    })

})();