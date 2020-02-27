/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

import { browserSyncConfig, projectRoot } from '../tools/config'
import browserSyncLib from 'browser-sync';
import path from 'path'

export const browserSyncTask = async() => {
  const browserSync = browserSyncLib.create();

  browserSyncConfig.files = [
    path.join(projectRoot, 'app/design/frontend/**/*.css'),
    path.join(projectRoot, 'app/design/frontend/**/*.js'),
  ];

  browserSync.init(browserSyncConfig);
}
