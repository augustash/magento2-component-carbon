/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2022 August Ash (https://www.augustash.com)
 */

import configLoader from './config-loader'
import fs  from 'fs-extra';
import parseArgs  from 'minimist';
import path from 'path';

/**
 * Default configuration.
 */
export const browserListConfig = configLoader('browser-list.js', false);
export const browserSyncConfig = configLoader('browser-sync.js', false);
export const env = parseArgs(process.argv.slice(2));
export const eslintConfig = configLoader('eslintrc.js', false);
export const projectRoot = path.join(fs.realpathSync('.'), '/');
export const stylelintConfig = configLoader('stylelint.js', false);
export const themes = configLoader('themes.js', false);
