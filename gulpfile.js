var gulp = require('gulp');
var server = require('gulp-webserver');
var sequence = require('gulp-sequence');
// 编译时scss
var less = require('gulp-less');
// 压缩css
var mincss = require('gulp-clean-css');
// 编译js
var babel = require('gulp-babel');
// 压缩js
var minjs = require('gulp-uglify');
// 压缩html
var minhtml = require('gulp-htmlmin');
// 调用方法
var mock = require('./src/data/mock');
var url = require('url');
var querystring = require('querystring');
var user = {
    name: 'zs',
    pwd: "123"
};
var isL = false;
gulp.task('mincss', function() {
    gulp.src('./src/css/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('./dist/css'))
});
gulp.task('minjs', function() {
    gulp.src(['./src/js/{common,lib,page}/*.js', './src/js/main.js'])
        .pipe(babel({
            presets: 'es2015'
        }))
        .pipe(minjs())
        .pipe(gulp.dest('./dist/js'))
});
gulp.task('minhtml', function() {
    gulp.src(['./src/{page,tpl}/*.html', './src/index.html'])
        .pipe(minhtml())
        .pipe(gulp.dest('./dist'))
});
// 起服务
gulp.task('server', function() {
    gulp.src('dist')
        .pipe(server({
            host: "localhost",
            port: 8000,
            livereload: true,
            middleware: function(req, res, next) {
                var obj = url.parse(req.url, true);
                if (req.url === '/loginPage') {
                    var arr = [];
                    req.on('data', function(chunk) {
                        arr.push(chunk)
                    });
                    req.on('end', function() {
                        var data = querystring.parse(Buffer.concat(arr).toString());
                        if (data.user === user.name && data.pwd === user.pwd) {
                            var info = { code: 0, msg: "success" }
                            isL = true;
                            res.end(JSON.stringify(info));
                        } else {
                            var info = { code: 1, msg: "error" }
                            res.end(JSON.stringify(info));
                        }
                        next();
                    })
                    return false;
                };
                if (req.url === '/isLogin') {
                    var data = { msg: isL };
                    res.end(JSON.stringify(data));
                };
                // 判断接口返回数据
                if (/\/book/g.test(obj.pathname)) {
                    res.end(JSON.stringify(mock(req.url)))
                };
                next();
            }
        }))
});
gulp.task('default', function(cb) {
    sequence(['mincss', 'minjs', 'minhtml'], 'server', cb);
});