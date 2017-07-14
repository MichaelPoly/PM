var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifyJs = require('gulp-uglifyjs'),
    BS = require('browser-sync'),
    concatJS = require('gulp-concat'),
    concatCss = require('gulp-concat-css');

var config = {
    app: './app',
    dest: './dist'
};


gulp.task('test', function () {
    console.log('test');
});

gulp.task('sass', function () {
    //** - работать с вложенными дирректориями (поддиректориями)
    gulp.src(config.app + '/sass/**/*.sass') //Выборка
        .pipe(sass()) //Применяем плагин gulp-sass к выбранным файлам
        .pipe(gulp.dest(config.dest + '/css')) //Сохранение итоговых файлов
        .pipe(BS.reload({stream: true}));
});


gulp.task('sass2', function () {
    //** - работать с вложенными дирректориями (поддиректориями)
    gulp.src([
        config.app + '/sass/main.sass',
        config.app + '/sass/main2.sass',
    ]) //Выборка
        .pipe(sass()) //Применяем плагин gulp-sass к выбранным файлам
        .pipe(concatCss('all.css'))
        .pipe(gulp.dest(config.dest + '/css2')) //Сохранение итоговых файлов
        .pipe(BS.reload({stream: true}));
});


gulp.task('js', function () {
    gulp.src(config.app + '/js/**/*.js')
        .pipe(uglifyJs())
        .pipe(gulp.dest(config.dest + '/js'))
        .pipe(BS.reload({stream: true}));

});

gulp.task('default', ['test', 'sass', 'js', 'server', 'watch'], function () {
    console.log('Проект успешно собран!');
});

gulp.task('server', function () {
    BS({
        server: {
            baseDir: config.dest
        }
    });
});


gulp.task('js2', function () {
    gulp.src(config.app + '/js/**/*.js')
        .pipe(concatJS('all.js'))
        .pipe(gulp.dest(config.dest + '/js2'))
        .pipe(BS.reload({stream: true}));

});

gulp.task('watch', function () {
    gulp.watch(config.app + '/sass/**/*.sass', ['sass']);
    gulp.watch(config.app + '/js/**/*.js', ['js']);
});
