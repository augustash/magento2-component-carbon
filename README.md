# Gulp Theme Workflow for Magento 2

![https://www.augustash.com](http://augustash.s3.amazonaws.com/logos/ash-inline-color-500.png)

**This is a private module and is not currently aimed at public consumption.**

A set of opinionated front-end tools and configuration for theming Magento 2, based on [Gulp.js](https://gulpjs.com/).

## Requirements

* A Unix-based OS (no official Windows support).
* A modern Node.js LTS version.
* (optional) Gulp.js CLI package installed globally
    * `yarn global add gulp-cli`
    * `npm install -g gulp-cli`

## Installation

Install the components using Composer from our development package repository:

```bash
composer config repositories.augustash composer https://packages.augustash.com/repo/private
composer require augustash/carbon:~0.9.8
```

Next follow these initial configuration steps:

1. Change directories to your project's source root - `cd ~/Project/magento2/src`
2. Install dependencies - `yarn install`
3. Create initial Gulp task file - `cp package.json.example package.json`
4. Create initial Gulp task file - `cp Gulpfile.esm.js.example Gulpfile.esm.js`
5. Create initial Gulp configuration file - `cp gulp-config.json.example gulp-config.json`
6. Create local configuration files - `cp dev/tools/gulp/configs/themes.js dev/tools/gulp/configs/themes.local.js`
7. Customize configuration as your project demands - `gulp-config.json`, `themes.local.js`, `browser-sync.local.js`
8. Set your project `.gitignore` to ignore the generated CSS files

## Running Gulp

Running Gulp will build your project's assets and start a watcher by default. This will generate a `theme.css` and a `theme.js` file in each of your configured themes.

```bash
cd ~/Project/magento2/src
./node_modules/.bin/gulp -T
```

The following Gulp tasks are available:

* `build` - Runs CSS/JS linting and compiles your Sass and Javascript
    * `--theme name` - Processes a single theme
* `clean` - Removes static assets from public directory
    * `--theme name` - Processes a single theme
* `css` - Runs CSS linting and compiles your Sass
    * `--theme name` - Processes a single theme
* `js` - Runs JS linting and compiles your Javascript
    * `--theme name` - Processes a single theme
* `lintScss` - Runs CSS linting process to validate Sass matches our custom lint rules
    * `--theme name` - Processes a single theme
* `serve` - Runs the `build` process and starts BrowserSync with a watcher for changes
    * `--theme name` - Processes a single theme
* `watch` - Runs a watcher for Sass/JS changes
    * `--theme name` - Processes a single theme

## Component Structure

This project installs files in a variety of places within the Magento 2 project structure. Below is a simple diagram that shows where the key files go:

```text
magento2-project-source
├── app
│   └── design
│       └── frontend
│           └── Augustash
│               └── carbon
│                   ├── etc
│                   ├── i18n
│                   ├── Magento_Theme
│                   │   └── layout
│                   │       └── default_head_blocks.xml
│                   ├── scss
│                   │   └── theme.scss
│                   ├── web
│                   │   ├── css
│                   │   └── js
│                   ├── registration.php
│                   └── theme.xml
├── dev
│   └── tools
│       └── gulp
│           ├── configs
│           │   ├── ...
│           │   └── themes.js
│           ├── sources
│           │   ├── ...
│           │   └── stylesheets.js
│           ├── tasks
│           │   ├── ...
│           │   └── watch.js
│           ├── tools
│           │   └── theme-loader.js
│           └── .editorconfig
├── gulp-config.json.example
├── Gulpfile.esm.js
├── package.json
└── stylelint.config.js
```

## Thanks

Much of the inspiration and code has been gleaned and tweaked from the team at [SnowdogApps](https://github.com/SnowdogApps/magento2-frontools).
