/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

import { browserSyncConfig } from '../tools/config';
import browserSyncLib from 'browser-sync';

export const browserSyncTask = async() => {
  const browserSync = browserSyncLib.create();
  browserSync.init(browserSyncConfig);
}
