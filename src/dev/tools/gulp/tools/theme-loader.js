/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright 2020 August Ash, Inc. (https://www.augustash.com)
 */

import { env, themes } from './config';

export default () => {
  const themeName = env.theme || false;
  const themeNames = Object.keys(themes);
  if (themeName && themeNames.indexOf(themeName) === -1) {
    throw new Error('The ' + themeName + ' theme is not defined in themes.js');
  }
  return themeName ? [themeName] : themeNames
}
