import Config from '../../config';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src([join(Config.APP_SRC, '**', 'app.scss')])
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(gulp.dest(Config.APP_DEST));
};
