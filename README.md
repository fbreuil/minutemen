<p align="center">
<img src ="https://raw.githubusercontent.com/fbreuil/minutemen/master/src/img/logo.png" />
</p>

> ITCSS based boilerplate that is fast and simple to any project

# Minutemen
This project uses [SASS](https://sass-lang.com/), [Gulp](https://gulpjs.com/), [Yarn](https://yarnpkg.com/lang/en/) and [Browsersync](https://www.browsersync.io/).

For grid system and other basic styles uses [Base](https://getbase.org/), [Eric Meyer](https://meyerweb.com/eric/tools/css/reset/) for reset and uses ITCSS to build the CSS Architecture.

# Getting Started
First step install the dependencies: [NodeJS](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) and [GulpJS](https://gulpjs.com/).

```
# Clone this repository
$ git clone git@github.com:fbreuil/minutemen.git

# Install prod dependencies
cd minutemen
yarn install --production

# Install dev dependencies
yarn install
```

# Tasks
- `gulp`: run sass task and initialize watch for changes;
- `gulp sass`: compile scss files;
- `gulp jsmin`: minify js files;
- `gulp html`: minify html files;
- `gulp imagemin`: compress image files;
- `gulp yarn`: deploy vendor files to dist;
- `gulp watch`: call for watch files and inicialize a server;
- `gulp clean`: delete dist folder;
- `gulp build`: run all tasks and deploy files to dist;

# Folders and Files
```
├── README.md
├── dist
│   ├── css
│   │   └── styles.css
│   │   └── styles.css.map
│   ├── img
│   │   └── logo.png
│   │   └── favicon.png
│   ├── index.html
│   ├── js
│   │    └── main.js
│   │    └── vendor
│   └── partials
├── gulpfile.js
├── package.json
└── src
    ├── img
    │   └── logo.png
    │   └── favicon.png
    ├── index.html
    ├── js
    │   └── main.js
    │   └── vendor
    ├── partials
    │   └── example.html
    └── scss
        ├── base
        |   └── _forms.scss
        |   └── _page.scss
        |   └── _tables.scss
        |   └── _typography.scss
        ├── components
        |   └── _components.scss
        ├── generic
        |   └── _box-sizing.scss
        |   └── _reset.scss
        ├── objects
        |   └── _buttons.scss
        |   └── _grids.scss
        ├── settings
        |   └── _core.scss
        ├── tools
        |   └── _breakpoint.scss
        |   └── _font-size.scss
        |   └── _line-height.scss
        ├── trumps
        |   └── _clearfix.scss
        |   └── _helpers.scss
        └── styles.scss
```
