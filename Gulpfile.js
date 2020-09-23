var paths = {
    scripts: {
        src: "./src/js",
        dest: "./www/js",
        webpackconffile: "./webpack.config.js"
    }
};

var gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    webpack = require("webpack"),
    webpackconfig = require(paths.scripts.webpackconffile),
    webpackstream = require("webpack-stream"),
    named = require('vinyl-named'),
    replace = require('gulp-replace');


function scripts() {
    return gulp
        .src(paths.scripts.src+ '/*.js')
        .pipe(named()) 
        .pipe(webpackstream(webpackconfig), webpack).on('error', function() {
            console.error.bind(console);
            this.emit('end');
        })
        .pipe(gulp.dest(paths.scripts.dest))
} 


function watch() {
    browserSync.init({
        proxy: 'http://localhost:8088/index.html'
    });
    gulp.watch(paths.scripts.src + "/**/*.js", scripts);
    gulp.watch(paths.scripts.src + '/**/*.js', bustCache);
    gulp.watch("./www/").on('change', browserSync.reload);
}


function bustCache() {
    var timeInMs = Date.now();
    console.log("refreshing cacheBuster with timeStamp: " + timeInMs);
    return gulp 
        .src(['./www/index.html'])
        .pipe(replace(/cache_buster=\d*/g, 'cache_buster=' +  timeInMs))
        .pipe(gulp.dest('./www/'))
}


exports.bustCache = bustCache;
exports.watch = watch
exports.scripts = scripts;


var build = gulp.parallel(scripts, bustCache, watch);

gulp.task('default', build);

