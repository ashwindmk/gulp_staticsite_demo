
# Gulp Demo

This project shows how to minify your files using Gulp.

### Steps

##### 1. Install Gulp
```shell
npm install gulp -g

npm install gulp --save-dev
```

##### 2. NPM Install
```shell
npm install
```

##### 3. Run Gulp Task
```shell
gulp message
```

##### 4. Gulp optimize images

**Install Imagemin**
```
npm install gulp-imagemin --save-dev
```

**Add Gulp Task for Imagemin**
```javascript
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imageMin', function(done) {
    gulp.src('src/assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets'))
    done();
});
```

**Execute Imagemin Gulp Task**
```shell
gulp imageMin
```

##### 5. Gulp Minify JS

**Install Uglify**
```shell
npm install gulp-uglify --save-dev
```

**Add Gulp Task for Uglify**
```javascript
const uglify = require('gulp-uglify');

gulp.task('minifyJs', function(done) {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    done();
});
```

**Execute Uglify Gulp Task**
```shell
gulp minifyJs
```

##### 6. Gulp Minify CSS

**Install Gulp Clean CSS**
```shell
npm install gulp-clean-css --save-dev
```

**Add Gulp Task for Clean CSS**
```javascript
var cleanCSS = require('gulp-clean-css');

gulp.task('minifyCss', function(done) {
    gulp.src('src/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
    done();
});
```

**Execute Clean CSS Gulp Task**
```shell
gulp minifyCss
```

##### 7. Execute all Gulp Tasks

**Add Gulp Series of Tasks**
```javascript
gulp.task('default', gulp.series('copyHtml', 'minifyImg', 'minifyJs', 'minifyCss'));
```

**Execute All Tasks**
```shell
gulp
```
