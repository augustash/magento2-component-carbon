/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright 2020 August Ash, Inc. (https://www.augustash.com)
 */

import { projectRoot, themes } from './config'
import inheritanceResolver from './inheritance-resolver';
import path from 'path'

export default function(themeName, sourceType = 'scss') {
  let sourceGlob = '';
  let sourcePaths = [];
  let themeTree = inheritanceResolver(themeName);

  themeTree.forEach(name => {
    if (sourceType == 'scss') {
      sourceGlob = themes[name].scssGlob || 'scss/**/*.scss';
    }

    if (sourceType == 'js') {
      sourceGlob = themes[name].jsGlob || 'js/**/*.js';
    }

    sourcePaths.push(path.join(projectRoot, themes[name].src, sourceGlob));
  });

  return sourcePaths;
}
