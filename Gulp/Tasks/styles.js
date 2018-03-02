var gulptest = require('gulp');
var postcss = require('gulp-postcss');
var autoprefix = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixin = require('postcss-mixins');




gulptest.task( 'styles' , function(){
  return gulptest.src('./app/assets/styles/files.css')
    .pipe(postcss([cssimport, mixin ,cssvars, nested,autoprefix]))
      .on('error' ,function(errorinfo) {
        console.log(errorinfo.toString());
        this.emit('end');
      })
      .pipe(gulptest.dest('./app/temp/styles'));

});
