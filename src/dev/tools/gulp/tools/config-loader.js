/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2022 August Ash (https://www.augustash.com)
 */

import fs  from 'fs-extra';
import path from 'path';

const projectRoot = path.join(fs.realpathSync('.'), '/');

/**
 * Immediately invoked function that checks for user-specified custom config
 * file locations.
 *
 * @returns {Object|Null} File or NULL
 */
function userConfig() {
  const configFile = path.join(projectRoot, '/gulp-config.json');
  if (fs.existsSync(configFile)) {
    return require(configFile);
  }
  return null;
}

/**
 * Requires the configuration file and returns the content. These files are
 * expected to return JSON in the format:
 *
 * export default {}
 *
 * @param {String} File
 * @returns {Object|Null} File content or NULL
 */
function requireConfig(file) {
  if (fs.existsSync(file)) {
    let configFile = require(file).default;
    if (configFile && typeof configFile !== 'undefined') {
      return configFile;
    }
  }
  return null;
}

/**
 * Sample usage:
 *
 *  import configLoader from './tools/config-loader'
 *  const config = configLoader('config.js')
 *  const themes = configLoader('themes.js', false)
 */
export default (file, failOnError = true) => {
  const userOverrides = userConfig();
  const defaultFilePath = path.join(projectRoot, 'dev/tools/gulp/configs/', file);

  if (userOverrides && userOverrides[file]) {
    let overrideFilePath = path.join(projectRoot, '/', userOverrides[file])
    let overrideFileContent = requireConfig(overrideFilePath);
    if (overrideFileContent) {
      return overrideFileContent;
    }
  }

  let defaultFileContent = requireConfig(defaultFilePath);
  if (defaultFileContent) {
    return defaultFileContent;
  }

  if (failOnError) {
    throw new Error(`The file ${file} does not exist!`);
  }

  return {};
}
