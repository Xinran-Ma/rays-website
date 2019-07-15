// Import gulp module
var gulp = require('gulp');
// Import dependencies
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// Compile scss files under scss/partials folder
function compileScss() {
  return gulp.src('./scss/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('./'));
}
// Run 'gulp default' then auto listening any changes on scss files
gulp.task('default', async() => {
    gulp.watch('./scss/partials/*.scss', compileScss);
});
