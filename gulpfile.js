var gulp = require('gulp'),
    rename = require('gulp-rename'),
    markdownpdf = require('gulp-markdown-pdf');

function defaultTask(){
    var options = {
        cssPath: '../../../main.css'
    };
    return gulp.src('README.md')
        .pipe(markdownpdf(options))
        .pipe(rename('CV.pdf'))
        .pipe(gulp.dest('out'));
}

exports.default = defaultTask
