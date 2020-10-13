/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright 2020 August Ash, Inc. (https://www.augustash.com)
 */

import { projectRoot, themes } from '../tools/config';
import del from 'del';
import path from 'path';
import themeLoader from '../tools/theme-loader';

export const cleanTask = () => {
  let cleanPaths = [];

  themeLoader().forEach(name => {
    const theme = themes[name];
    const outputName = theme.outputName || 'theme';
    cleanPaths.push(path.join(projectRoot, theme.dest, 'css/', outputName + '.*'));
    cleanPaths.push(path.join(projectRoot, theme.dest, 'js/', outputName + '.*'));
  });

  cleanPaths.push(path.join(projectRoot, 'pub/static/*'));
  cleanPaths.push(path.join('!', projectRoot, 'pub/static/.htaccess'));

  return del(cleanPaths);
}
