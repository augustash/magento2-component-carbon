/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

import { themes } from './config'

/**
 * Recursive function used to process the theme hierarchy defined in `themes.js`
 * given a passed theme name.
 *
 * Depends on the `parent` key being set correctly for each theme.
 *
 * This method will ultimately return an array of themes in the hierarchy starting
 * with the top-most and working down until the last child.
 *
 * @param {String} themeName
 * @param {Boolean} tree
 * @param {Array} dependencyTree
 * @returns {Array}
 */
function themeDependencyTree(themeName, tree, dependencyTree) {
  dependencyTree = dependencyTree ? dependencyTree : [];
  dependencyTree.push(themeName);

  if (!tree) {
    return dependencyTree;
  }

  if (themes[themeName].parent) {
    return themeDependencyTree(
      themes[themeName].parent,
      tree,
      dependencyTree
    );
  } else {
    return dependencyTree.reverse();
  }
}

export default function(name, tree = true) {
  let dependencyTree = [];
  themeDependencyTree(name, tree).forEach(themeName => {
    dependencyTree.push(themeName);
  });
  return dependencyTree;
}
