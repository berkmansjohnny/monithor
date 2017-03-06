var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var config = {
    src: './src/warpaint-sass',
    dest: './assets/css/'
};

gulp.task('sass', function() {
    return gulp.src(config.src + '/warpaint.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefix({cascade:false, browsers: ['> 1%']}))
        .pipe(sourcemaps.write('.'))
        .pipe(rename('warpaint.css'))
        .pipe(gulp.dest(config.dest))
        .pipe(reload({ stream:true }));
});

gulp.task('default', ['sass']);