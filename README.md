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
composer require augustash/magento2-sassy:~0.9.0
```

Next follow these initial configuration steps:

1. Change directories to your project's source root - `cd ~/Project/magento2/src`
2. Install dependencies - `yarn install`
3. Create initial Gulp task file - `cp Gulpfile.js.example Gulpfile.js`
4. Create initial Gulp configuration file - `cp gulp-config.json.example gulp-config.json`
5. Create local theme configuration file - `cp dev/gulp/configs/themes.js dev/gulp/configs/themes-local.js`
6. Create local BrowserSync configuration file - `cp dev/gulp/configs/browser-sync.js dev/gulp/configs/browser-sync-local.js`
7. Customize configuration as your project demands - `gulp-config.json`, `themes-local.js`, `browser-sync-local.js`

## Running Gulp

Running Gulp will build your project's assets and start a watcher by default. This will generate a `theme.css` and a `theme.js` file in each of your configured themes.

```bash
cd ~/Project/magento2/src
./node_modules/.bin/gulp
```

The following Gulp tasks are available:

* `build` - Runs CSS/JS linting and compiles your Sass and Javascript
* `css` - Runs CSS linting and compiles your Sass
* `javascript` - Runs JS linting and compiles your Javascript
* `lintCss` - Runs CSS linting process to validate Sass matches our custom lint rules
* `serve` - Runs the `build` process and starts BrowserSync with a watcher for changes
* `watcher` - Runs a watcher for Sass/JS changes

## Component Structure

This project installs files in a variety of places within the Magento 2 project structure. Below is a simple diagram that shows where the key files go:

```text
magento2-project-source
├── app
│   └── design
│       └── frontend
│           └── Augustash
│               └── Sassy
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
│           │   ├── browser-sync.js
│           │   ├── eslintrc.js
│           │   └── themes.js
│           ├── tools
│           │   └── config-loader.js
│           ├── .editorconfig
│           └── README.md
├── gulp-config.json.example
├── Gulpfile.js
├── package.json
└── stylelint.config.js
```
