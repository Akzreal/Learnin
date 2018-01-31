var gulptest = require('gulp');
var gulpwatch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefix = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');

gulptest.task( 'default' , function(){
  console.log('Hello Moaoa');
});

gulptest.task( 'hoho' , function(){
  console.log('hehe');
});

gulptest.task( 'styl' , function(){
  return gulptest.src('./app/assets/styles/files.css')
    .pipe(postcss([cssimport,cssvars, nested,autoprefix]))
      .pipe(gulptest.dest('./app/temp/styles'));

});


gulptest.task( 'watch', function(){
  gulpwatch('./app/index.html' , function(){
    gulptest.start('hoho');


  });

  gulpwatch('./app/assets/styles/**/*.css' , function(){
    gulptest.start('styl');
  });
});
