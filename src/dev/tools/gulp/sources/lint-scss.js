/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright 2020 August Ash, Inc. (https://www.augustash.com)
 */

import { src } from 'gulp';
import { stylelintConfig, themes } from '../tools/config';
import stylelint from 'gulp-stylelint';

export default (name, themeSrcPaths) => {
  const theme = themes[name];

  return src(themeSrcPaths, { sourcemaps: theme.sourceMaps || false })
    .pipe(stylelint(stylelintConfig));
};
