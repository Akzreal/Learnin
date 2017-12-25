var gulptest = require('gulp');
var gulpwatch = require('gulp-watch');



gulptest.task( 'default' , function(){
  console.log('Hello Moaoa');
});

gulptest.task( 'hoho' , function(){
  console.log('hehe');
});

gulptest.task( 'styl' , function(){
  console.log('hehes');
});


gulptest.task( 'watch', function(){
  gulpwatch('./app/index.html' , function(){
    gulptest.start('hoho');


  });

  gulpwatch('./app/assets/styles/**/*.css' , function(){
    gulptest.start('styl');
  });
});
