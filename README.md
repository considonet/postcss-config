# @considonet/postcss-config

> Default opinionated PostCSS preset for ConsidoNet projects

## What is this?

This config was created to provide a common PostCSS setup for ConsidoNet projects.
Included plugins:

- [postcss-normalize](https://github.com/csstools/postcss-normalize) - this forcibly includes `normalize.css` resetting styles. You can use `@import-normalize` and `@import-sanitize` for more styles. [Read more here](https://github.com/csstools/postcss-normalize#postcss-import-usage)
- [postcss-easings](https://github.com/postcss/postcss-easings)
- [postcss-preset-env](https://github.com/csstools/postcss-preset-env) with `stage: 0` setting
- [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes) with default setup

## Options

- `normalize` (boolean, defaults to `true`)

  If `true`, `postcss-normalize` will prepend `normalize.css` stylesheet to your styles. If `false` the plugin will still be available, but without explicitly included `normalize.css` styles (using `@import` or `@import-normalize` at-rules) won't do anything.

## Install

Using npm:

```sh
npm install --save-dev @considonet/postcss-config
```

or using yarn:

```sh
yarn add @considonet/postcss-config --dev
```

## Usage

In your postcss.config.js file add the plugin, for example:

```javascript
module.exports = {
  plugins: [ require("@considonet/postcss-config")({ normalize: false }) ]
}
```

## License

[MIT](http://opensource.org/licenses/MIT)
