// src读取文件对象相当于entry
// dest构建目标对象相当于output
// series用于编排任务队列


const {src,dest,series} = require("gulp")
// 但如gulp的sass对象
var sass = require("gulp-sass")(require("sass"))

// 导入sassgulp对象
var sassGlob = require("gulp-sass-glob")

// 导入postcss对象
var postcss = require("gulp-postcss")

//导入代码兼容性前缀对象
var autoprefixer = require("autoprefixer")


// 导入代码压缩对象

var cssnano = require("cssnano")

function scss(){
    var plugins = [
        autoprefixer(),
        cssnano()
    ]
    return src("src/styles/*.scss")
            .pipe(sassGlob())
            .pipe(sass())
            .pipe(postcss(plugins))
            .pipe(dest('lib/styles'))
}

exports.default = series(scss)

