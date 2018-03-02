var gulptest = require('gulp');
var gulpwatch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulptest.task( 'watch', function(){

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });



  gulpwatch('./app/index.html' , function(){
    browserSync.reload();
  });

  gulpwatch('./app/assets/styles/**/*.css' , function(){
    gulptest.start('cssInject');
  });
});


gulptest.task('cssInject', ['styles'] ,function(){
  return gulptest.src('./app/temp/styles/files.css')
    .pipe(browserSync.stream());
});
