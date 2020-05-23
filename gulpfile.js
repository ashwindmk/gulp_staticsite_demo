var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

// Log start message
gulp.task('start-message', function(done) {
    console.log('Gulp is running...');
    done();
});

// Copy all HTML files
gulp.task('copyHtml', function(done) {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
    done();
});

// Minify HTML
gulp.task('minifyHtml', function(done) {
    gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
    done();
});

// Minify images
gulp.task('minifyImg', function(done) {
    gulp.src('src/assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets'))
    done();
});

// Minify Js
gulp.task('minifyJs', function(done) {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    done();
});

// Minify CSS
gulp.task('minifyCss', function(done) {
    gulp.src('src/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
    done();
});

// Log end message
gulp.task('end-message', function(done) {
    console.log('Gulp has ended!');
    done();
});

gulp.task('default', gulp.series('start-message', 'minifyHtml', 'minifyImg', 'minifyJs', 'minifyCss', 'end-message'));
